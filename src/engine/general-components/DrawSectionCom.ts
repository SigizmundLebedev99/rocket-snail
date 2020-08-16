import { Component } from "../core/Component";
import { SceneElement } from "../core/SceneElement";
import { Section } from "../primitives/Section";

export class DrawSectionCom extends Component{
    node : SceneElement;
    map: () => Section;

    constructor(node : SceneElement, map: () => Section){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let context = this.node.Scene?.Canvas;
        if(!context)
            return;
        let section = this.map();
        context.beginPath();
        context.moveTo(section.Point1.x, section.Point1.y);
        context.lineTo(section.Point2.x, section.Point2.y);
        context.stroke();
    }
}