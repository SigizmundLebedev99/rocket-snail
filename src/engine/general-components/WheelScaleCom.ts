import { Component, MouseComponent } from "../core/Component";
import { MouseState } from "../core/MouseContext";
import { SceneElement } from "../core/SceneElement";

export class WheelScaleCom extends MouseComponent{    
    constructor(){
        super();
    }
    
    OnUpdate(node: SceneElement, mouseState: MouseState): void {
        if(!mouseState.IsIn || mouseState.KeyState.key != 'wheel')
            return;
        let delta = mouseState.KeyState.Delta;

        if(delta > 0)
            node.Scale.Multiply(1.1);
        else if(delta < 0)
            node.Scale.Multiply(0.9);
    }
}