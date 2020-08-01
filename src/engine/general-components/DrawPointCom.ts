import { Component } from "../map/Component";
import { Node } from "../map/Node";
import { Point } from "../primitives/Point";

export class DrawPointCom<TNode extends Node> extends Component{

    node : TNode;
    map: (o: TNode) => Point;

    constructor(node : TNode, map: (o: TNode) => Point){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let point = this.map(this.node);
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
        let context = this.node.View?.Context;
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