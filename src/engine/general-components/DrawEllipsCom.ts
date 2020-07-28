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
         
        let firstTime=true;
        let dt = 2*Math.PI/30;
        let x : number;
        let y : number;
        for(let t = 0; t < 2*Math.PI; t += dt) {
            x = converted.x + e.width*Math.cos(t);
            y = converted.y + e.height*Math.sin(t);
            if(firstTime) {
                firstTime = false;
                CONTEXT.moveTo(x, y);
            } else {
                CONTEXT.lineTo(x, y);
            }
        }
        CONTEXT.closePath();
        CONTEXT.stroke();
        CONTEXT.restore();
        
    }
}