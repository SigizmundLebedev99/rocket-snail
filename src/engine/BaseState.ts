import { Vector } from "./primitives/Vector";

export abstract class BaseState{
    Transition : Vector = new Vector(0,0);
    Rotation : number = 0;
    Scale : Vector = new Vector(1,1);
    BaseState : BaseState | null = null;

    get TotalTransition(){
        if(this.BaseState != null)
            return this.Transition.Add(this.BaseState.TotalTransition);
        return this.Transition;
    }

    get TotalRotation(){
        if(this.BaseState != null)
            return this.Rotation + this.BaseState.TotalRotation;
        return this.Rotation;
    }

    get TotalScale(){
        if(this.BaseState != null){
            let baseScale = this.BaseState.TotalScale;
            return new Vector(this.Scale.x * baseScale.x, this.Scale.y * baseScale.y);
        }
        return this.Scale;
    }

    Copy(state: BaseState){
        this.BaseState = state.BaseState;
        this.Rotation = state.Rotation;
        this.Scale = state.Scale;
        this.Transition = state.Transition;
    }
}