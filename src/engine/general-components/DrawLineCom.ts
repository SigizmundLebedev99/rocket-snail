import { Component } from "../map/Component";
import { StraightLine } from "../primitives/Straight-Line";
import { Node } from "../map/Node";
import { Point } from "../primitives/Point";

export class DrawLineCom<TNode extends Node> extends Component{
    node: TNode;
    map: (n:TNode) => StraightLine;

    constructor(node: TNode, map: (n:TNode) => StraightLine){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let camera = this.node.Camera;
        let line = this.map(this.node);
        let view = this.node.View;
        if(!view)
            return;

        let screenLineP = camera.Convert(line.Point);
        if(!screenLineP)
            return;
        let screenLineV = line.DirectionVector.GetRotatedUnit(this.node.Rotation);
        let screenLine = StraightLine.FromPointAndVector(screenLineP, screenLineV);

        let hpg = (p: Point) => screenLine.HalfPlane(p) == 1;
        let hpl = (p: Point) => screenLine.HalfPlane(p) == -1;

        if((hpg(view.LeftTop) && hpg(view.LeftBottom) && hpg(view.RightTop) && hpg(view.RightBottom)) 
        || (hpl(view.LeftTop) && hpl(view.LeftBottom) && hpl(view.RightTop) && hpl(view.RightBottom)))
            return;
        view.Context.beginPath();
        if(screenLine.DirectionVector.x == 0){
            view.Context.moveTo(Math.abs(screenLine.C), 0);
            view.Context.lineTo(Math.abs(screenLine.C), view.Height);
            view.Context.stroke();
        }
   
        let startX = 0,
            startY = screenLine.DefineY(startX);
        let endX = view.Width,
            endY = screenLine.DefineY(endX);
        view.Context.moveTo(startX, startY);
        view.Context.lineTo(endX, endY);
        view.Context.stroke();
    }
}