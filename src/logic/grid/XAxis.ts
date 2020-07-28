import { Node } from "../../engine/map/Node";
import { DrawLineCom } from "../../engine/general-components/DrawLineCom";
import { StraightLine } from "../../engine/primitives/Straight-Line";
import { Point } from "../../engine/primitives/Point";

export class XAxis extends Node{
    constructor(){
        super();
        this.Priority = -9999;
        this.Style.strokeStyle = "red";
        this.AddComponent(new DrawLineCom(this, o => new StraightLine(new Point(0,0), new Point(1,0))));
    }
}