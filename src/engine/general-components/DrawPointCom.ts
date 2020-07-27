import { Component } from "../map/Component";
import { Node } from "../map/Node";
import { Point } from "../primitives/Point";
import { CONTEXT } from "../Consts";

export class DrawPointCom<TNode extends Node<unknown>> extends Component{

    node : TNode;
    map: (o: TNode) => Point | null;

    constructor(node : TNode, map: (o: TNode) => Point | null){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let camera = this.node.Camera;
        let pointLike;
        if(camera == null || (pointLike = this.map(this.node)) == null)
            return;

        let style = this.node.Style;
        
        let p = Point.From(pointLike);
        p = camera.Convert(p);
        
        let radius = 
            style.position == "relative"? style.pointRadius * camera.RelationX : style.pointRadius;
            
        CONTEXT.beginPath();
        CONTEXT.arc(p.x, p.y, radius, 0, 2*Math.PI,true);
        CONTEXT.stroke();
    }
}