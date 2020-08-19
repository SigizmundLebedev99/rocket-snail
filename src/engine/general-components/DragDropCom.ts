import { Component } from '../core/Component'
import { SceneElement } from "../core/SceneElement";
import { StateMachine } from "../state-machine/StateMachine";
import { MouseState } from '../core/MouseContext';

type dragState = "drag"|"none"

export class DragDropCom extends Component{
    map: (() => MouseState);
    node: SceneElement;
    sm: StateMachine<dragState>;
    
    constructor(node: SceneElement, map: () => MouseState){
        super();
        this.map = map;
        this.node = node;

        this.sm = new StateMachine<dragState>("none");
        this.sm.AddState('none')
        .AddCondition((state)=>{
            let mouseState = <MouseState>state;
            return mouseState.IsCaptured
        }, 'drag')

        this.sm.AddState('drag')
        .AddCondition((state)=>{
            let mouseState = <MouseState>state;
            return !mouseState.IsCaptured
        }, "none")
        .OnCheck(state=>{
            let mouseState = <MouseState>state;
            
            let vector = this.node.Camera.ConvertScreenVector(mouseState.Movement);
            this.node.Transition = this.node.Transition.Add(vector);
        })
    }

    OnUpdate(): void {
        let state = this.map();
        this.sm.CheckState(state);
    }
}