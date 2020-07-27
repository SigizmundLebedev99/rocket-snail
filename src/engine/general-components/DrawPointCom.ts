import { Component } from "../map/Component";
import { Node } from "../map/Node";
import { Point } from "../primitives/Point";
import { CONTEXT } from "../Consts";

export class DrawPointCom<TNode extends Node> extends Component{

    node : TNode;
    map: (o: TNode) => Point;

    constructor(node : TNode, map: (o: TNode) => Point){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let camera = this.node.Camera;
        let pointLike = this.map(this.node);
        if(camera == null)
            return;

        let style = this.node.Style;
        
        let p = Point.From(pointLike);
        p = camera.Convert(p);
        
        let radius = style.pointRadius;
            
        CONTEXT.beginPath();
        CONTEXT.arc(p.x, p.y, radius, 0, 2*Math.PI,true);
        CONTEXT.stroke();
    }
}