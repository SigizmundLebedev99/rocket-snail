import { Component } from "../core/Component";
import { SceneElement } from "../core/SceneElement";
import { Ellips } from "../primitives/Ellips";

export class DrawEllipsCom extends Component{
    node : SceneElement;
    map : () => Ellips;
    
    constructor(node : SceneElement, map : () => Ellips){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let camera = this.node.Camera;
        let e = this.map();
        let context = this.node.Scene?.Canvas;
        if(!context)
            return;
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