import { Node } from "../../engine/core/Node";
import { DrawLineCom } from "../../engine/general-components/DrawLineCom";
import { StraightLine } from "../../engine/primitives/Straight-Line";
import { Point } from "../../engine/primitives/Point";
import { DrawPointCom } from "../../engine/general-components/DrawPointCom";

export class XAxis extends Node{
    constructor(){
        super();
        this.Priority = -1;
        this.Position = 'absolute';
        this.Style.strokeStyle = "red";
        this.Style.pointRadius = 5;
        this.Style.lineWidth = 1;
        let map = (n : Node) =>{
            return new StraightLine(new Point(0,0), new Point(1,0))
        }
        this.AddComponent(new DrawLineCom(this, map));
    }
}