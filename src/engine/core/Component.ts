import { SceneElement } from "./SceneElement";

export abstract class Component{
    protected priority : number = 1;
    PriorityChanged? : () => void;

    get Priority(){
        return this.priority;
    }

    set Priority(v: number){
        if(this.Priority == v)
            return;
        this.Priority = v;
        if(this.PriorityChanged)
            this.PriorityChanged();
    }

    Started : boolean = false;

    OnStart() : void{}

    abstract OnUpdate() : void;
}