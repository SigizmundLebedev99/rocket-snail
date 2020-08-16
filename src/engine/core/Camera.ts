import { Vector } from "../primitives/Vector";
import { Point } from "../primitives/Point";
import { BaseState } from "./BaseState";
import { SceneElement } from "./SceneElement";
import { Scene } from "./Scene";
import { SceneContext } from "./SceneContext";

export class Camera{
    Node : SceneElement;
    private _view : SceneContext;
    constructor(node : SceneElement, view: SceneContext){
        this.Node = node;
        this._view = view;
    }

    ConvertFromScreen(point: {x:number, y:number}){
        let view = this._view;
        let vector = Vector.FromPoint(point);
        vector = vector.Add(new Vector(-view.Width/2, -view.Height/2));
        vector = new Vector(vector.x / view.PIXELS_METER, vector.y / (- view.PIXELS_METER));

        function transformVector(state : BaseState){
            if(state.BaseState == null){
                vector = new Vector(vector.x / state.Scale.x, vector.y / state.Scale.y);
                vector = vector.Add(new Vector(-state.Transition.x, -state.Transition.y));
                vector = vector.Rotate(-state.Rotation);
                return;
            }
            
            transformVector(state.BaseState);
            vector = vector.Add(new Vector(-state.Transition.x, -state.Transition.y));
            vector = vector.Rotate(-state.Rotation);
            vector = new Vector(vector.x / state.Scale.x, vector.y / state.Scale.y);
        }
        transformVector(this.Node); 
        return Point.From(vector);
    }

    Convert(point: {x:number, y:number}){
        let p = Vector.FromPoint(point);
        let view = this._view;

        function transformCamera(state:BaseState){
            if(state.BaseState == null){
                p = p.Rotate(-state.Rotation);
                p = p.Add(state.Transition);
                p = new Vector(p.x * state.Scale.x, p.y * state.Scale.y)
                return;
            }
            
            transformCamera(state.BaseState);
            p = new Vector(p.x * state.Scale.x, p.y * state.Scale.y)
            p = p.Rotate(-state.Rotation);
            p = p.Add(state.Transition);
                
        }

        transformCamera(this.Node);
        
        p = new Vector(p.x * view.PIXELS_METER, p.y * view.PIXELS_METER);
        return new Point(p.x + view.Width/2, -(p.y - view.Height/2));
    }

    PrepareAxis(){
        let view = this._view;
        let context = view.Canvas;

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
        let scale = node.TotalScale;
        movement = new Vector(movement.x / view.PIXELS_METER, - movement.y / view.PIXELS_METER);
        movement = new Vector(movement.x / scale.x,  movement.y / scale.y);
        movement = movement.Rotate(-node.TotalRotation);
        return movement;
    }
}