import { Component, DrawComponent } from "../core/Component";
import { Line } from "../primitives/Line";
import { SceneElement } from "../core/SceneElement";

export class DrawLineCom extends DrawComponent{
    map: () => Line;
    constructor(map: () => Line){
        super();
        this.map = map;
    }

    OnUpdate(node: SceneElement, context:CanvasRenderingContext2D): void {
        let line = this.map();

        context.beginPath();
        context.moveTo(line.p1.x, line.p1.y);
        context.lineTo(line.p2.x, line.p2.y);
        context.closePath();
        context.stroke();
    }
}