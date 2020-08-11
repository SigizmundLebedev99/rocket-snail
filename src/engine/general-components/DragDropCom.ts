import { Component } from '../core/Component'
import { Node } from "../core/Node";
import { StateMachine, State } from "../state-machine/StateMachine";
import { IPointIn } from "../primitives/IPointIn";
import { Vector } from '../primitives/Vector';
import { KeyEvent } from '../core/MouseContext';

type dragState = "drag"|"none"

export class DragDropCom extends Component{
    map: (() => KeyEvent | undefined);
    node: Node;
    sm: StateMachine<dragState>;
    constructor(node: Node, map: (n:Node) => IPointIn){
        super();
        this.map = node.CaptureMouse(map);
        this.node = node;

        this.sm = new StateMachine<dragState>("none");
        this.sm.AddState('none')
        .AddCondition((state)=>{
            let mouseState = <KeyEvent>state;
            return mouseState.key == "down";
        }, 'drag')

        this.sm.AddState('drag')
        .AddCondition((state)=>{
            let mouseState = <KeyEvent>state;
            return mouseState.key == "up";
        }, "none")
        .OnCheck(state=>{
            let mouseState = <KeyEvent>state;
            if(mouseState.key == "move"){
                let vector = this.node.Camera.ConvertScreenVector(mouseState.Movement);
                this.node.Transition = this.node.Transition.Add(vector);
            }
        })
    }

    OnUpdate(): void {
        let state = this.map();
        if(!state)
            return;
        
        this.sm.CheckState(state);
    }
}