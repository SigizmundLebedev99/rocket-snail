import { Node } from "../map/Node";
import { StraightLine } from "../primitives/Straight-Line";
import { Point } from "../primitives/Point";
import { Vector } from "../primitives/Vector";
import { DrawLineCom } from "../general-components/DrawLineCom";

export class LineNode extends Node<StraightLine>{
    constructor(p1: Point, p2: Point){
        super();
        let line = new StraightLine(p1, p2);
        this.Content = line;
        this.AddComponent(new DrawLineCom(this, o => o.Content));
    }
}