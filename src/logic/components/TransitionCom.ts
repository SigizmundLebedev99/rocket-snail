import { Component } from "../../engine/map/Component";
import { Node } from "../../engine/map/Node";
import { Vector } from "../../engine/primitives/Vector";

export class TransitionCom extends Component{
    node : Node;
    transition : number = 0;
    num : number;
    constructor(node : Node, num : number){
        super();
        this.node = node;
        this.num = num;
    }

    OnUpdate(): void {
        this.transition += this.num;
        this.node.transition = new Vector(200*Math.cos(this.transition), 100*Math.sin(this.transition));
    }

}