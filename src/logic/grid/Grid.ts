import { Node } from "../../engine/core/Node";
import { Point } from "../../engine/primitives/Point";
import { StraightLine } from "../../engine/primitives/Straight-Line";
import { DrawLineCom } from "../../engine/general-components/DrawLineCom";
import { DrawPointCom } from "../../engine/general-components/DrawPointCom";
import { Vector } from "../../engine/primitives/Vector";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";
import { View } from "../../engine/core/View";

export class Grid extends Node{
    constructor(view : View){
        super(view);
        this.Priority = -10000;
        this.Position = "absolute";
        this.Style.lineWidth = 0.1;
        this.AddChild(new XAxis(view));
        this.AddChild(new YAxis(view));
        for(let i = 1; i < view.Width/view.PIXELS_METER; i ++){
            this.AddComponent(new DrawLineCom(this, o => new StraightLine(new Point(i,0), new Point(i,1))));
            this.AddComponent(new DrawLineCom(this, o => new StraightLine(new Point(-i,0), new Point(-i,1))));
            this.AddComponent(new DrawLineCom(this, o => new StraightLine(new Point(0,i), new Point(1,i))));
            this.AddComponent(new DrawLineCom(this, o => new StraightLine(new Point(0,-i), new Point(1,-i))));
        }
    }
}