import { Camera } from "./Camera";
import { IUnit } from "../IUnit";
import { Point } from "../primitives/Point";
import { StraightLine } from "../primitives/Straight-Line";
import { Section } from "../primitives/Section";
import { Vector } from "../primitives/Vector";
import { SCREEN_WIDTH, SCREEN_HEIGTH } from "../Consts";

export class Artist{
    context: CanvasRenderingContext2D;
    private camera: Camera;

    constructor(context: CanvasRenderingContext2D, camera: Camera){
        this.camera = camera;
        this.context = context;
    }

    Clear(){
    }

    Draw(unit: IUnit){
        unit.children.forEach(child => {
            if(child.key = "point")
                this.DrawPoint(<Point>child.value);
            if(child.key = "line")
                this.DrawLine(<StraightLine>child.value);
            if(child.key = "section")
                this.DrawSection(<Section> child.value);
            if(child.key = "unit")
                this.Draw(<IUnit>child.value);
        });
    }

    DrawPoint(point: Point){

    }

    DrawLine(line: StraightLine){
        let screenLineP = line.Point;
        let screenLineV = line.DirectionVector.Rotate(this.camera.rotation);
        let screenLine = StraightLine.FromPointAndVector(screenLineP, screenLineV);
        if(screenLine.DirectionVector.x == 0){
            this.context.moveTo(-screenLine.C, 0);
            this.context.lineTo(-screenLine.C, SCREEN_HEIGTH);
            this.context.stroke();
            return;
        }
        let startX = 0,
            startY = screenLine.DefineY(startX);
        let endX = SCREEN_WIDTH,
            endY = screenLine.DefineY(endX);
        this.context.moveTo(startX, startY);
        this.context.lineTo(endX, endY);
        this.context.stroke();
    }

    DrawSection(section : Section){

    }
}