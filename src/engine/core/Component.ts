import { SceneElement } from "./SceneElement";
import { MouseState } from "./MouseContext";

export abstract class BaseComponent{
    protected priority : number = 1;
    PriorityChanged? : () => void;

    get Priority(){
        return this.priority;
    }

    set Priority(v: number){
        if(this.priority == v)
            return;
        this.priority = v;
        if(this.PriorityChanged)
            this.PriorityChanged();
    }

    Started : boolean = false;

    OnStart(node: SceneElement) : void{}
}

export abstract class Component extends BaseComponent{
    abstract OnUpdate(node: SceneElement) : void;
}

export abstract class DrawComponent extends BaseComponent{
    abstract OnUpdate(node: SceneElement, context: CanvasRenderingContext2D) : void;
}

export abstract class MouseComponent extends BaseComponent{
    abstract OnUpdate(node: SceneElement, mouseState: MouseState) : void;
}