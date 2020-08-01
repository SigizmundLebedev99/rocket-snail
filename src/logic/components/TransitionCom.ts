import { Component } from "../../engine/map/Component";
import { Node } from "../../engine/map/Node";
import { Vector } from "../../engine/primitives/Vector";

export class TransitionCom extends Component{

    node : Node;
    transition : number = 0;
    num : number;
    amplitudeX : number = 5;
    amplitudeY : number = 1;
    constructor(node : Node, speed : number, amplitudeX? : number, amplitudeY? :number){
        super();
        this.node = node;
        this.num = speed;
        if(amplitudeX)
            this.amplitudeX = amplitudeX;
        if(amplitudeY)
            this.amplitudeY = amplitudeY;
    }

    OnUpdate(): void {
        this.transition += this.num;
        this.node.Transition = new Vector(this.amplitudeX*Math.cos(this.transition), this.amplitudeY*Math.sin(this.transition));
    }
}