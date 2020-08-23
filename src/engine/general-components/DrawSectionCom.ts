import { Component, DrawComponent } from "../core/Component";
import { Section } from "../primitives/Section";
import { SceneElement } from "../core/SceneElement";

export class DrawSectionCom extends DrawComponent{
    map: () => Section;

    constructor(map: () => Section){
        super();
        this.map = map;
        this.Priority = -10000;
    }

    OnUpdate(node:SceneElement, context: CanvasRenderingContext2D): void {
        let section = this.map();
        context.beginPath();
        context.moveTo(section.Point1.x, section.Point1.y);
        context.lineTo(section.Point2.x, section.Point2.y);
        context.stroke();
    }
}