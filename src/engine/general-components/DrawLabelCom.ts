import { Component } from "../map/Component";
import { Node } from "../map/Node";
import { Label } from "../primitives/Label";
import { CONTEXT } from "../Consts";

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
        let camera = this.node.Camera;
        let p = camera.Convert(str.position);
        CONTEXT.strokeText(str.text,p.x, p.y);
    }
}