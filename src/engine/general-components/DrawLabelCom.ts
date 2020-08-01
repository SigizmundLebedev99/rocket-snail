import { Component } from "../map/Component";
import { Node } from "../map/Node";
import { Label } from "../primitives/Label";

export class DrawLabelCom extends Component{
    node : Node;
    map : (n:Node) => Label;
    constructor(node:Node, map:(n:Node) => Label){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let str = this.map(this.node);
        this.node.Camera.PrepareAxis();
        this.node.View?.Context.strokeText(str.text,str.position.x, str.position.y);
    }
}