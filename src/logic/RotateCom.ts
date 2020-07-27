import { Component } from "../engine/map/Component";
import { Node } from "../engine/map/Node";

export class RotateCom extends Component{
    node : Node;
    OnUpdate(): void {
        this.node.rotation += 0.001;
    }

    constructor(node : Node){
        super();
        this.node = node;
    }
}