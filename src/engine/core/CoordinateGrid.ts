import { Vector } from "../primitives/Vector";

import { SceneElement } from "./SceneElement";

export class CoordinateGrid{
    Node : SceneElement;

    constructor(node : SceneElement){
        this.Node = node;
    }

    ConvertFromScreen(point: Vector){
        function transformVector(state : SceneElement){
            if(state.Parent == null){
                point
                .Add(-state.Transition.x, -state.Transition.y)
                .Multiply(1/state.Scale.x, 1/state.Scale.y)
                .Rotate(-state.Rotation);
                return;
            }
            
            transformVector(state.Parent);
            point
            .Add(-state.Transition.x, -state.Transition.y)
            .Multiply(1 / state.Scale.x, 1 / state.Scale.y)
            .Rotate(-state.Rotation);
        }
        
        transformVector(this.Node);

        return point;
    }

    Convert(point: Vector){
        function transformVector(state:SceneElement){ 
            point
            .Rotate(state.Rotation)
            .MultiplyV(state.Scale)
            .AddV(state.Transition);
            
            if(state.Parent == null)
                return;

            transformVector(state.Parent);
        }

        transformVector(this.Node);
        
        return point;
    }

    PrepareAxis(context:CanvasRenderingContext2D){
        function transformContext(state : SceneElement){
            if(state.Parent == null){
                context.translate(state.Transition.x, state.Transition.y);
                context.scale(state.Scale.x, state.Scale.y);
                context.rotate(state.Rotation);
                return;
            }
            
            transformContext(state.Parent);
            context.translate(state.Transition.x, state.Transition.y);
            context.scale(state.Scale.x, state.Scale.y);
            context.rotate(state.Rotation);
        }
        transformContext(this.Node);
    }
}