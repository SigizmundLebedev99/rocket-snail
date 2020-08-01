import { Component } from "../../engine/map/Component";
import { Node } from "../../engine/map/Node";

export class RotateCom extends Component{
    
    node : Node;
    num : number;

    OnUpdate(): void {
        this.node.Rotation += this.num;
    }

    constructor(node : Node, num : number){
        super();
        this.node = node;
        this.num = num;
    }
}