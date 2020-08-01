import { Node } from "../../engine/map/Node";
import { Point } from "../../engine/primitives/Point";
import { StraightLine } from "../../engine/primitives/Straight-Line";
import { DrawLineCom } from "../../engine/general-components/DrawLineCom";
import { DrawPointCom } from "../../engine/general-components/DrawPointCom";
import { Vector } from "../../engine/primitives/Vector";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";
import { View } from "../../engine/map/View";

export class Grid extends Node{
    constructor(view : View){
        super();
        this.Priority = -1;
        this.Position = "absolute";
        this.AddChild(new XAxis());
        this.AddChild(new YAxis());
        for(let i = 1; i < view.Width/view.PIXELS_METER; i ++){
            this.AddComponent(new DrawLineCom(this, o => new StraightLine(new Point(i,0), new Point(i,1))));
            this.AddComponent(new DrawLineCom(this, o => new StraightLine(new Point(-i,0), new Point(-i,1))));
            this.AddComponent(new DrawLineCom(this, o => new StraightLine(new Point(0,i), new Point(1,i))));
            this.AddComponent(new DrawLineCom(this, o => new StraightLine(new Point(0,-i), new Point(1,-i))));

            //this.AddComponent(new DrawPointCom(this, o => new Point(i,i)));
            //this.AddComponent(new DrawPointCom(this, o => new Point(-i,i)));
            //this.AddComponent(new DrawPointCom(this, o => new Point(i,-i)));
            //this.AddComponent(new DrawPointCom(this, o => new Point(-i,-i)));
        }
    }
}