import { Vector } from "../primitives/Vector";

import { SceneElement } from "./SceneElement";
import { SceneContext } from "./SceneContext";

export class CoordinateGrid{
    Node : SceneElement;

    constructor(node : SceneElement){
        this.Node = node;
    }

    ConvertFromScreen(point: Vector){
        function transformVector(state : SceneElement){
            if(state.Parent == null){
                point.Multiply(1 / state.Scale.x, 1 / state.Scale.y)
                .Add(-state.Transition.x, -state.Transition.y)
                .Rotate(-state.Rotation);
                return;
            }
            
            transformVector(state.Parent);
            point.Add(-state.Transition.x, -state.Transition.y)
            .Rotate(-state.Rotation)
            .Multiply(1 / state.Scale.x, 1 / state.Scale.y);
        }
        
        transformVector(this.Node);

        return point;
    }

    Convert(point: Vector){
        function transformCamera(state:SceneElement){
            if(state.Parent == null){
                point.Rotate(-state.Rotation)
                .AddV(state.Transition)
                .MultiplyV(state.Scale);
                return;
            }
            
            transformCamera(state.Parent);
            point.MultiplyV(state.Scale)
            .Rotate(-state.Rotation)
            .AddV(state.Transition);
        }

        transformCamera(this.Node);
        
        return point;
    }

    PrepareAxis(context:CanvasRenderingContext2D){
        function transformContext(state : SceneElement){
            if(state.Parent == null){
                context.scale(state.Scale.x, state.Scale.y);
                context.translate(state.Transition.x, state.Transition.y);
                context.rotate(state.Rotation);
                return;
            }
            
            transformContext(state.Parent);
            context.translate(state.Transition.x, state.Transition.y);
            context.rotate(state.Rotation);
            context.scale(state.Scale.x, state.Scale.y);
        }
        transformContext(this.Node);
    }
}