import { Component } from "../map/Component";
import { Node } from "../map/Node";
import { CONTEXT } from "../Consts";
import { Section } from "../primitives/Section";

export class DrawPointCom<TNode extends Node> extends Component{

    node : TNode;
    map: (o: TNode) => Section;

    constructor(node : TNode, map: (o: TNode) => Section){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let camera = this.node.Camera;
        let context = CONTEXT;
        let section = this.map(this.node);
        let p1 = camera.Convert(section.Point1);
        let p2 = camera.Convert(section.Point2);
        context.beginPath();
        context.moveTo(p1.x, p1.y);
        context.lineTo(p2.x, p2.y);
        context.stroke();
    }
}