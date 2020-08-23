import { Vector } from "../primitives/Vector";
import { Point } from "../primitives/Point";
import { BaseState } from "./BaseState";
import { SceneElement } from "./SceneElement";
import { SceneContext } from "./SceneContext";

export class CoordinateGrid{
    Node : SceneElement;
    private _view : SceneContext;
    
    constructor(node : SceneElement){
        this.Node = node;
        this._view = node.Scene;
    }

    private actualTransition : Vector = new Vector(0,0);
    get ActualTransition(){
        return this.actualTransition;
    }

    ConvertFromScreen(point: {x:number, y:number}){
        let view = this._view;
        let vector = Vector.FromPoint(point);
        vector.Add(-view.Width/2, -view.Height/2);
        vector.Multiply(1 / view.PIXELS_METER, 1 / (- view.PIXELS_METER));

        function transformVector(state : BaseState){
            if(state.BaseState == null){
                vector.Multiply(1 / state.Scale.x, 1 / state.Scale.y);
                vector.Add(-state.Transition.x, -state.Transition.y);
                vector.Rotate(-state.Rotation);
                return;
            }
            
            transformVector(state.BaseState);
            vector.Add(-state.Transition.x, -state.Transition.y);
            vector.Rotate(-state.Rotation);
            vector.Multiply(1 / state.Scale.x, 1 / state.Scale.y);
        }
        transformVector(this.Node);
        return Point.From(vector);
    }

    Convert(point: {x:number, y:number}){
        let p = Vector.FromPoint(point);
        let view = this._view;

        function transformCamera(state:BaseState){
            if(state.BaseState == null){
                p.Rotate(-state.Rotation);
                p.Add(state.Transition.x, state.Transition.y);
                p.Multiply(state.Scale.x, state.Scale.y);
                return;
            }
            
            transformCamera(state.BaseState);
            p.Multiply(state.Scale.x, p.y * state.Scale.y);
            p.Rotate(-state.Rotation);
            p.Add(state.Transition.x, state.Transition.y);       
        }

        transformCamera(this.Node);
        
        p.Multiply(view.PIXELS_METER, view.PIXELS_METER);
        return new Point(p.x + view.Width/2, -(p.y - view.Height/2));
    }

    PrepareAxis(context:CanvasRenderingContext2D){
        let view = this._view;
        
        context.translate(view.Width/2, view.Height/2);
        context.scale(view.PIXELS_METER, - view.PIXELS_METER);

        function transformContext(state : BaseState){
            if(state.BaseState == null){
                context.scale(state.Scale.x, state.Scale.y);
                context.translate(state.Transition.x, state.Transition.y);
                context.rotate(state.Rotation);
                return;
            }
            
            transformContext(state.BaseState);
            context.translate(state.Transition.x, state.Transition.y);
            context.rotate(state.Rotation);
            context.scale(state.Scale.x, state.Scale.y);
        }
        transformContext(this.Node); 
    }

    ConvertScreenVector(movement:Vector){
        let view = this._view;
        let node = this. Node;
        let scale : Vector;
        if(node.BaseState)
            scale = node.BaseState.TotalScale;
        else
            scale = node.TotalScale;
        movement.Multiply(1 / view.PIXELS_METER, - 1 / view.PIXELS_METER);
        movement.Multiply(1 / scale.x,  1 / scale.y);
        movement.Rotate(-node.TotalRotation);
        return movement;
    }
}