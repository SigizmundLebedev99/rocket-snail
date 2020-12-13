import { Component, IState } from "../core/Component";
import { Item } from "../core/Item";
import { Ellips } from "../primitives/Ellips";

export class DrawEllipsCom extends Component{
    map : () => Ellips;
    
    constructor(map : () => Ellips){
        super();
        this.map = map;
    }

    OnUpdate({context}): void {
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