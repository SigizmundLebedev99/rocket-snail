import { Component, DrawComponent } from "../core/Component";
import { StraightLine } from "../primitives/Straight-Line";
import { SceneElement } from "../core/SceneElement";
import { Point } from "../primitives/Point";

export class DrawLineCom extends DrawComponent{
    map: () => StraightLine;
    constructor(map: () => StraightLine){
        super();
        this.map = map;
    }

    OnUpdate(node: SceneElement, context:CanvasRenderingContext2D): void {
        let camera = node.CoordinateGrid;
        let line = this.map();

        let screenLineP = camera.Convert(line.Point);
        if(!screenLineP)
            return;
        let screenLineV = line.DirectionVector.GetRotatedUnit(node.TotalRotation);
        let screenLine = StraightLine.FromPointAndVector(screenLineP, screenLineV);

        let hpg = (p: Point) => screenLine.HalfPlane(p) == 1;
        let hpl = (p: Point) => screenLine.HalfPlane(p) == -1;

        if((hpg(node.Scene.LeftTop) && hpg(node.Scene.LeftBottom) && hpg(node.Scene.RightTop) && hpg(node.Scene.RightBottom)) 
        || (hpl(node.Scene.LeftTop) && hpl(node.Scene.LeftBottom) && hpl(node.Scene.RightTop) && hpl(node.Scene.RightBottom)))
            return;
        context.beginPath();
        if(screenLine.DirectionVector.x == 0){
            context.moveTo(Math.abs(screenLine.C), 0);
            context.lineTo(Math.abs(screenLine.C), node.Scene.Height);
            context.stroke();
        }
   
        let startX = 0,
            startY = screenLine.DefineY(startX);
        let endX = node.Scene.Width,
            endY = screenLine.DefineY(endX);
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
    }
}