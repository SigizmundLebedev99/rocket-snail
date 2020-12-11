import { Component, MouseComponent } from '../core/Component'
import { SceneElement } from "../core/SceneElement";
import { StateMachine } from "../state-machine/StateMachine";
import { MouseState } from '../core/MouseContext';
import { Vector } from '../primitives/Vector';

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
            let d = mouseState.Movement;
            if(!d.x && !d.y)
                return;
            if(this.node.Position == 'relative' && this.node.Parent != null){
                let scale = this.node.Parent.TotalScale;
                var v = new Vector(d.x / scale.x, d.y / scale.y);
                v.Rotate(-this.node.TotalRotation);
                this.node.Transition.AddV(v);
            }
            else
            this.node.Transition.Add(d.x / 2, d.y / 2);
        })
    }

    OnStart(node: SceneElement){
        this.node = node;
    }

    OnUpdate(node: SceneElement, mouseState: MouseState): void {
        this.sm.CheckState(mouseState);
    }
}