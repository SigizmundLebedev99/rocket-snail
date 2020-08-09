import { Component } from "../core/Component";
import { Node } from "../core/Node";
import { Ellips } from "../primitives/Ellips";

export class DrawEllipsCom extends Component{
    node : Node;
    map : (n:Node) => Ellips;
    
    constructor(node : Node, map : (n: Node) => Ellips){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let camera = this.node.Camera;
        let e = this.map(this.node);
        let context = this.node.View?.Context;
        if(!context)
            return;
        context.beginPath();
        context.save();
        context.translate(e.x, e.y);
        context.scale(1, e.a/e.b);
        context.arc(0, 0, e.a, 0, Math.PI*2);
        context.restore();
        context.fill();
        context.stroke();
        context.closePath();
    }
}