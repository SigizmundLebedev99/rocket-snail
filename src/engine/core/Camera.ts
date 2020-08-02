import { Vector } from "../primitives/Vector";
import { Point } from "../primitives/Point";
import { BaseState } from "../BaseState";
import { Node } from "./Node";

export class Camera{
    Node : Node;
    constructor(node : Node){
        this.Node = node;
    }

    Convert(point: {x:number, y:number}){
        let p = Vector.FromPoint(point);
        let view = this.Node.View;
        if(!view)
            return;

        function transformCamera(state:BaseState){
            if(state.BaseState == null){
                p = p.Rotate(-state.Rotation);
                p = p.Add(state.Transition);
                p = new Vector(p.x / state.Scale.x, p.y / state.Scale.y)
                return;
            }
            
            transformCamera(state.BaseState);
            p = new Vector(p.x / state.Scale.x, p.y / state.Scale.y)
            p = p.Rotate(-state.Rotation);
            p = p.Add(state.Transition);
                
        }

        transformCamera(this.Node);
        
        p = new Vector(p.x * view.PIXELS_METER, p.y * view.PIXELS_METER);
        return new Point(p.x + view.Width/2, -(p.y - view.Height/2));
    }

    PrepareAxis(){
        let view = this.Node.View;
        if(!view)
            return;
        let context = view.Context;

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
}