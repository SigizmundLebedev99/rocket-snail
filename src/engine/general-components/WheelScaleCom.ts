import { Component } from "../core/Component";
import { MouseState } from "../core/MouseContext";
import { Item } from "../core/Item";

export class WheelScaleCom extends Component{    
    constructor(){
        super();
    }
    
    OnUpdate({node, mouseState}): void {
        if(!mouseState.IsIn || mouseState.KeyState.key != 'wheel')
            return;
            
        var delta = 1 + mouseState.KeyState.Delta / 2000;
        node.Scale.Multiply(delta);
    }
}