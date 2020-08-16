import { Component } from "../core/Component";
import { SceneElement } from "../core/SceneElement";
import { Point } from "../primitives/Point";

export class DrawPointCom extends Component{

    node : SceneElement;
    map: () => Point;

    constructor(node : SceneElement, map: () => Point){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let point = this.map();
        if(this.node.Position == "absolute"){
            let camera = this.node.Camera;
            let p = camera.Convert(point)
            if(p)
                this.DrawPoint(p);
        }
        else{
            this.DrawPoint(point);
        }    
    }

    DrawPoint(p:Point){
        let context = this.node.Scene?.Canvas;
        if(!context)
            return;
        let style = this.node.Style;
        let radius = style.pointRadius??0.3;
        context.beginPath();
        context.arc(p.x, p.y, radius, 0, 2*Math.PI,true);
        context.stroke();
        context.fill();
    }
}