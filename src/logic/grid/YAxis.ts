import { Node } from "../../engine/core/Node";
import { DrawLineCom } from "../../engine/general-components/DrawLineCom";
import { StraightLine } from "../../engine/primitives/Straight-Line";
import { Point } from "../../engine/primitives/Point";
import { View } from "../../engine/core/View";

export class YAxis extends Node{
    constructor(view: View){
        super(view);
        this.Priority = -10000;
        this.Position = "absolute";
        this.Style.lineWidth = 1;
        this.Style.strokeStyle = "blue";
        this.AddComponent(new DrawLineCom(this, o => 
            new StraightLine(new Point(0,0), new Point(0,1))));
    }
}