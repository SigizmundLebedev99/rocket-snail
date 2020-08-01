import { Component } from "../map/Component";
import { Node } from "../map/Node";
import { Section } from "../primitives/Section";

export class DrawSectionCom extends Component{
    node : Node;
    map: (o: Node) => Section;

    constructor(node : Node, map: (o: Node) => Section){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let context = this.node.View?.Context;
        if(!context)
            return;
        let section = this.map(this.node);
        context.beginPath();
        context.moveTo(section.Point1.x, section.Point1.y);
        context.lineTo(section.Point2.x, section.Point2.y);
        context.stroke();
    }
}