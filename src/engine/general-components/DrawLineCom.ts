import { Component, DrawComponent } from "../core/Component";
import { Line } from "../primitives/Line";
import { SceneElement } from "../core/SceneElement";
import { Style } from "../core/Style";

export class DrawLineCom extends DrawComponent{
    map: () => Line | Line;
    style? : Style;

    constructor(map: () => Line | Line, style? : Style){
        super();
        this.map = map;
        this.style = style;
    }

    OnUpdate(node: SceneElement, context:CanvasRenderingContext2D): void {
        let line : Line;
        if(this.map instanceof Line)
            line = this.map;
        else 
            line = this.map()
        if(this.style){
            context.save()
            Style.Apply(context, this.style);
        }
        context.beginPath();
        context.moveTo(line.p1.x, line.p1.y);
        context.lineTo(line.p2.x, line.p2.y);
        context.closePath();
        context.stroke();

        if(this.style)
            context.restore();
    }
}