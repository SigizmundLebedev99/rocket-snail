import { MouseComponent } from "../core/Component";
import { MouseState } from "../core/MouseContext";
import { SceneElement } from "../core/SceneElement";

export class WheelScaleCom extends MouseComponent{    
    constructor(){
        super();
    }
    
    OnUpdate(node: SceneElement, mouseState: MouseState): void {
        if(!mouseState.IsIn || mouseState.KeyState.key != 'wheel')
            return;
            
        var delta = 1 + mouseState.KeyState.Delta / 2000;
        node.Scale.Multiply(delta);
    }
}