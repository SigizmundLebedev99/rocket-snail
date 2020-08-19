import { SceneElement } from "../../engine/core/SceneElement";
import { Point } from "../../engine/primitives/Point";
import { StraightLine } from "../../engine/primitives/Straight-Line";
import { DrawLineCom } from "../../engine/general-components/DrawLineCom";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";
import { Scene } from "../../engine/core/Scene";
import { SceneContext } from "../../engine/core/SceneContext";

export class Grid extends SceneElement{
    constructor(view : SceneContext){
        super(view);
        this.Priority = -10000;
        this.Position = "absolute";
        this.Style.lineWidth = 0.5;
        this.AddChild(new XAxis(view));
        this.AddChild(new YAxis(view));
        for(let i = 1; i < view.Width/view.PIXELS_METER; i ++){
            this.AddComponent(new DrawLineCom(this, () => new StraightLine(new Point(i,0), new Point(i,1))));
            this.AddComponent(new DrawLineCom(this, () => new StraightLine(new Point(-i,0), new Point(-i,1))));
            this.AddComponent(new DrawLineCom(this, () => new StraightLine(new Point(0,i), new Point(1,i))));
            this.AddComponent(new DrawLineCom(this, () => new StraightLine(new Point(0,-i), new Point(1,-i))));
        }
    }
}