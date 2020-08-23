import { Component, DrawComponent } from "../core/Component";
import { SceneElement } from "../core/SceneElement";
import { Point } from "../primitives/Point";

export class DrawPointCom extends DrawComponent{
    map: () => Point;

    constructor(map: () => Point){
        super();
        this.map = map;
        this.Priority = -10000;
    }

    OnUpdate(node: SceneElement, context: CanvasRenderingContext2D): void {
        let point = this.map();
        if(node.Position == "absolute"){
            let camera = node.CoordinateGrid;
            let p = camera.Convert(point)
            if(p)
                this.DrawPoint(p, node, context);
        }
        else{
            this.DrawPoint(point, node, context);
        }    
    }

    DrawPoint(p:Point, node:SceneElement, context: CanvasRenderingContext2D){
        let style = node.Style;
        let radius = style.pointRadius??0.3;
        context.beginPath();
        context.arc(p.x, p.y, radius, 0, 2*Math.PI,true);
        context.stroke();
        context.fill();
    }
}