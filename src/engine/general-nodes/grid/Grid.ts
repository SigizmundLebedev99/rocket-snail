import { Node } from "../../map/Node";
import { Point } from "../../primitives/Point";
import { StraightLine } from "../../primitives/Straight-Line";
import { DrawLineCom } from "../../general-components/DrawLineCom";
import { DrawPointCom } from "../../general-components/DrawPointCom";
import { SCREEN_WIDTH } from "../../Consts";
import { Vector } from "../../primitives/Vector";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";

export class Grid extends Node{
    constructor(){
        super();
        this.Priority = -1
        this.AddChild(new XAxis());
        this.AddChild(new YAxis());
        this.scale = new Vector(45,45);

        for(let i = 1; i < SCREEN_WIDTH/this.scale.x; i ++){
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