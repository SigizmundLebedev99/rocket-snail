import { Component } from '../core/Component'
import { Node } from "../core/Node";
import { StateMachine, State } from "../state-machine/StateMachine";
import { IPointIn } from "../primitives/IPointIn";
import { Vector } from '../primitives/Vector';

type mouseState = "drag" | "none";

export class DragDropCom extends Component{
    node : Node;
    map:(n:Node) => IPointIn;
    sm:StateMachine<mouseState>;
    constructor(node : Node, map:(n:Node) => IPointIn){
        super();
        this.node = node;
        this.map = map;
        this.sm = new StateMachine<mouseState>('none');
    }

    OnStart(){
        if(this.node.View == null)
            return;
        let _view = this.node.View;
        let sm = this.sm;

        sm.AddState("none")
        .AddCondition(()=>{
            let state = _view.Mouse;
            if(state.State.key == "none")
                return false;
            let primitive = this.map(this.node);
            let point = this.node.Camera.ConvertFromScreen(state.State.CapturePosition);
            return primitive.IsPointIn(point);
        }, "drag");
        
        sm.AddState("drag")
        .AddCondition(()=>{
            let state = _view.Mouse;
            return state.State.key == "none";
        }, "none")
        .OnCheck(()=>{
            let state = _view.Mouse;
            let vector = this.node.Camera.ConvertScreenVector(state.Movement);
            this.node.Transition = this.node.Transition.Add(vector);
        })
    }

    OnUpdate(): void {
        this.sm.CheckState();
    }
}