import { Component } from "../../engine/map/Component";
import { Node } from "../../engine/map/Node";
import { Vector } from "../../engine/primitives/Vector";

export class PerspectiveCom extends Component{

    node : Node;
    nearest : number;
    originalScale : Vector;
    constructor(node:Node, nearest:number){
        super();
        this.node = node;
        this.originalScale = node.SelfScale;
        this.nearest = nearest;
    }


    OnUpdate(): void {
        let relation = 1/this.node.transition.x;
        this.node.SelfScale = this.originalScale.Product(relation);
    }
}