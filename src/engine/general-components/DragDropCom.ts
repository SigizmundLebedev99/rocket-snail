import { Component, MouseComponent } from '../core/Component'
import { SceneElement } from "../core/SceneElement";
import { StateMachine } from "../state-machine/StateMachine";
import { MouseState } from '../core/MouseContext';

type dragState = "drag"|"none"

export class DragDropCom extends MouseComponent{
    sm: StateMachine<dragState>;
    node?: SceneElement;

    constructor(){
        super();
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
            if(!this.node)
                return;
            let vector = this.node.CoordinateGrid.ConvertFromScreen(mouseState.Movement);
            this.node.Transition.AddV(vector);
        })
    }

    OnStart(node: SceneElement){
        this.node = node;
    }

    OnUpdate(node: SceneElement, mouseState: MouseState): void {
        this.sm.CheckState(mouseState);
    }
}