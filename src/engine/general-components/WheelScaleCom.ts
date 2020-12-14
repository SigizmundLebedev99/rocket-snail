import { Component, IState } from "../core/Component";

export class WheelScaleCom extends Component{    
    constructor(){
        super();
    }
    
    OnUpdate(state: IState): void {
        let {mouseState, node} = state;
        if(!mouseState.IsIn || mouseState.LastEvent.key != 'wheel')
            return;
            
        var delta = 1 + mouseState.LastEvent.Delta / 2000;
        node.Scale.Multiply(delta);
    }
}