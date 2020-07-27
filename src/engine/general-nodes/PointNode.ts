import { Node } from "../map/Node";
import { Point } from "../primitives/Point";
import { DrawPointCom } from "../general-components/DrawPointCom";

export class PointNode extends Node<Point>{
    constructor(x: number, y:number){
        super();
        this.Content = new Point(x,y);
        this.AddComponent(new DrawPointCom(this, o => o.Content));
    }
}