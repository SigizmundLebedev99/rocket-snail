import { Component } from "../core/Component";
import { MouseState } from "../core/MouseContext";
import { SceneElement } from "../core/SceneElement";

export class WheelScaleCom extends Component{
    map: (() => MouseState);
    node: SceneElement;
    
    constructor(node: SceneElement, map: () => MouseState){
        super();
        this.map = map;
        this.node = node;
    }
    
    OnUpdate(): void {
        let state = this.map();
        if(!state.IsIn || state.KeyState.key != 'wheel')
            return;
        let delta = state.KeyState.Delta;
        let s = this.node.Scale;
        if(delta > 0)
            this.node.Scale = s.Product(1.1);
        else if(delta < 0)
            this.node.Scale = s.Product(0.9);
    }
}