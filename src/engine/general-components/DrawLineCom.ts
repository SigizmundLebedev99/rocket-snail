import { Component } from "../map/Component";
import { StraightLine } from "../primitives/Straight-Line";
import { Node } from "../map/Node";
import { Point } from "../primitives/Point";
import { LEFT_TOP, LEFT_BOTTOM, RIGH_TOP, RIGHT_BOTTOM, CONTEXT, SCREEN_HEIGTH, SCREEN_WIDTH } from "../Consts";

export class DrawLineCom<TNode extends Node<unknown>> extends Component{
    node: TNode;
    map: (n:TNode) => StraightLine | null;

    constructor(node: TNode, map: (n:TNode) => StraightLine | null){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let camera = this.node.Camera;
        let line;
        if((line = this.map(this.node)) == null || camera == null)
            return;

        let screenLineP = camera.Convert(line.Point);
        let screenLineV = line.DirectionVector.GetRotatedUnit(camera.rotation);
        let screenLine = StraightLine.FromPointAndVector(screenLineP, screenLineV);

        let hpg = (p: Point) => screenLine.HalfPlane(p) == 1;
        let hpl = (p: Point) => screenLine.HalfPlane(p) == -1;

        if((hpg(LEFT_TOP) && hpg(LEFT_BOTTOM) && hpg(RIGH_TOP) && hpg(RIGHT_BOTTOM)) 
        || (hpl(LEFT_TOP) && hpl(LEFT_BOTTOM) && hpl(RIGH_TOP) && hpl(RIGHT_BOTTOM)))
            return;
        CONTEXT.beginPath();
        if(screenLine.DirectionVector.x == 0){
            CONTEXT.moveTo(Math.abs(screenLine.C), 0);
            CONTEXT.lineTo(Math.abs(screenLine.C), SCREEN_HEIGTH);
            CONTEXT.stroke();
        }
        if(screenLine.DirectionVector.y == 0){
            CONTEXT.moveTo(0, Math.abs(screenLine.C));
            CONTEXT.lineTo(SCREEN_WIDTH, Math.abs(screenLine.C));
            CONTEXT.stroke();
        }
        let startX = 0,
            startY = screenLine.DefineY(startX);
        let endX = SCREEN_WIDTH,
            endY = screenLine.DefineY(endX);
            CONTEXT.moveTo(startX, startY);
        CONTEXT.lineTo(endX, endY);
        CONTEXT.stroke();
    }
}