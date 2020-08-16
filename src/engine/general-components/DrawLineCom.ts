import { Component } from "../core/Component";
import { StraightLine } from "../primitives/Straight-Line";
import { SceneElement } from "../core/SceneElement";
import { Point } from "../primitives/Point";

export class DrawLineCom<TNode extends SceneElement> extends Component{
    node: TNode;
    map: () => StraightLine;

    constructor(node: TNode, map: () => StraightLine){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let camera = this.node.Camera;
        let line = this.map();
        let view = this.node.Scene;
        if(!view)
            return;

        let screenLineP = camera.Convert(line.Point);
        if(!screenLineP)
            return;
        let screenLineV = line.DirectionVector.GetRotatedUnit(this.node.TotalRotation);
        let screenLine = StraightLine.FromPointAndVector(screenLineP, screenLineV);

        let hpg = (p: Point) => screenLine.HalfPlane(p) == 1;
        let hpl = (p: Point) => screenLine.HalfPlane(p) == -1;

        if((hpg(view.LeftTop) && hpg(view.LeftBottom) && hpg(view.RightTop) && hpg(view.RightBottom)) 
        || (hpl(view.LeftTop) && hpl(view.LeftBottom) && hpl(view.RightTop) && hpl(view.RightBottom)))
            return;
        view.Canvas.beginPath();
        if(screenLine.DirectionVector.x == 0){
            view.Canvas.moveTo(Math.abs(screenLine.C), 0);
            view.Canvas.lineTo(Math.abs(screenLine.C), view.Height);
            view.Canvas.stroke();
        }
   
        let startX = 0,
            startY = screenLine.DefineY(startX);
        let endX = view.Width,
            endY = screenLine.DefineY(endX);
        view.Canvas.moveTo(startX, startY);
        view.Canvas.lineTo(endX, endY);
        view.Canvas.stroke();
    }
}