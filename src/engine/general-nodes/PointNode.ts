import { Node } from "../map/Node";
import { Point } from "../primitives/Point";
import { DrawPointCom } from "../general-components/DrawPointCom";
import { Vector } from "../primitives/Vector";

export class PointNode extends Node{
    constructor(x: number, y:number){
        super();
        this.transition.Add(new Vector(x,y));
        this.AddComponent(new DrawPointCom(this, o => Point.From(this.transition)));
    }
}