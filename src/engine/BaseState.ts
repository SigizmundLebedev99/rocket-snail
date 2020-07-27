import { Vector } from "./primitives/Vector";

export abstract class BaseState{
    transition : Vector = new Vector(0,0);
    rotation : number = 0;
    scale : Vector = new Vector(1,1);

    CopyTo(state: BaseState){
        state.rotation = this.rotation;
        state.transition = this.transition;
        state.scale = this.scale;
    }

    Add(state: BaseState){
        this.rotation += state.rotation;
        this.transition = this.transition.Add(state.transition);
    }
}