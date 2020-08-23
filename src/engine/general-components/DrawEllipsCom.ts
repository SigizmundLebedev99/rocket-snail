import { Component, DrawComponent } from "../core/Component";
import { SceneElement } from "../core/SceneElement";
import { Ellips } from "../primitives/Ellips";

export class DrawEllipsCom extends DrawComponent{
    map : () => Ellips;
    
    constructor(map : () => Ellips){
        super();
        this.map = map;
        this.Priority = -10000;
    }

    OnUpdate(node: SceneElement, context: CanvasRenderingContext2D): void {
        let e = this.map();
        context.beginPath();
        context.save();
        context.translate(e.x, e.y);
        context.scale(1, e.b/e.a);
        context.arc(0, 0, e.a, 0, Math.PI*2);
        context.restore();
        context.fill();
        context.stroke();
        context.closePath();
    }
}