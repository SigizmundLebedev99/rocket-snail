import { SceneElement } from "../../engine/core/SceneElement";
import { DrawLineCom } from "../../engine/general-components/DrawLineCom";
import { StraightLine } from "../../engine/primitives/Straight-Line";
import { Point } from "../../engine/primitives/Point";
import { SceneContext } from "../../engine/core/SceneContext";

export class XAxis extends SceneElement{
    constructor(view: SceneContext){
        super(view);
        this.Priority = -10000;
        this.Position = 'absolute';
        this.Style.strokeStyle = "red";
        this.Style.pointRadius = 5;
        this.Style.lineWidth = 1;
        let map = () =>{
            return new StraightLine(new Point(0,0), new Point(1,0))
        }
        this.AddComponent(new DrawLineCom(this, map));
    }
}