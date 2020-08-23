import { SceneElement } from "../../engine/core/SceneElement";
import { DrawLineCom } from "../../engine/general-components/DrawLineCom";
import { StraightLine } from "../../engine/primitives/Straight-Line";
import { Point } from "../../engine/primitives/Point";
import { SceneContext } from "../../engine/core/SceneContext";

export class YAxis extends SceneElement{
    constructor(view: SceneContext){
        super(view);
        this.Priority = -10000;
        this.Position = "absolute";
        this.Style.lineWidth = 1;
        this.Style.strokeStyle = "blue";
        this.AddComponent(new DrawLineCom(() => 
            new StraightLine(new Point(0,0), new Point(0,1))));
    }
}