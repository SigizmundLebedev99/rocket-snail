import { Component, IState } from '../core/Component'
import { Item } from "../core/Item";
import { StateMachine } from "../state-machine/StateMachine";
import { MouseState } from '../core/MouseContext';
import { Vector } from '../primitives/Vector';

type dragState = "drag"|"none"

export class DragDropCom extends Component{
    sm: StateMachine<dragState>;
    node?: Item;

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

    OnStart(state: IState){
        this.node = state.node;
    }

    OnUpdate(state: IState): void {
        this.sm.CheckState(state.mouseState);
    }
}