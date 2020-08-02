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
        camera.PrepareAxis();
        context.beginPath();
        context.save();
        context.translate(e.x, e.y);
        context.scale(1, e.height/e.width);
        context.arc(0, 0, e.width, 0, Math.PI*2);
        context.restore();
        context.stroke();
        context.closePath();
    }
}