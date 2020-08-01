import { Vector } from "./primitives/Vector";

export abstract class BaseState{
    Transition : Vector = new Vector(0,0);
    Rotation : number = 0;
    Scale : Vector = new Vector(1,1);
    BaseState : BaseState | null = null;

    Copy(state: BaseState){
        this.BaseState = state.BaseState;
        this.Rotation = state.Rotation;
        this.Scale = state.Scale;
        this.Transition = state.Transition;
    }
}