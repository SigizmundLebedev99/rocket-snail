import { Component } from "../map/Component";
import { Node } from "../map/Node";
import { Ellips } from "../primitives/Ellips";
import { CONTEXT } from "../Consts";

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
        let converted = camera.Convert(e);
        CONTEXT.beginPath();
        CONTEXT.save();
        CONTEXT.translate(converted.x, converted.y);
        CONTEXT.rotate(this.node.rotation);
        CONTEXT.scale(1, e.height/e.width);
        CONTEXT.arc(0, 0, e.width * camera.scale.x, 0, Math.PI*2);
        CONTEXT.restore();
        CONTEXT.stroke();
        CONTEXT.closePath();
    }
}