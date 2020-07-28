import { Node } from "../../map/Node";
import { DrawLineCom } from "../../general-components/DrawLineCom";
import { StraightLine } from "../../primitives/Straight-Line";
import { Point } from "../../primitives/Point";

export class XAxis extends Node{
    constructor(){
        super();
        this.Style.strokeStyle = "red";
        this.AddComponent(new DrawLineCom(this, o => new StraightLine(new Point(0,0), new Point(1,0))));
    }
}