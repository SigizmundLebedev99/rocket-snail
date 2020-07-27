import { Camera } from "../map/Camera";
import { Point } from "../primitives/Point";
import { StraightLine } from "../primitives/Straight-Line";
import { Section } from "../primitives/Section";
import { Vector } from "../primitives/Vector";
import { SCREEN_WIDTH, SCREEN_HEIGTH, LEFT_TOP, LEFT_BOTTOM, RIGH_TOP, RIGHT_BOTTOM } from "../Consts";
import { Label } from "../primitives/Label";

export class Artist{
    context: CanvasRenderingContext2D;
    private camera: Camera;

    constructor(context: CanvasRenderingContext2D, camera: Camera){
        this.camera = camera;
        this.context = context;
    }

    Clear(){
        this.context.clearRect(0,0,SCREEN_WIDTH, SCREEN_HEIGTH);        
    }

    DrawPoint(point: Point){
        let p = this.camera.Convert(point);
        this.context.beginPath();
        this.context.arc(p.x, p.y, 5, 0, 2*Math.PI,true);
        this.context.stroke();
    }

    DrawLine(line: StraightLine){
        let screenLineP = this.camera.Convert(line.Point);
        let screenLineV = line.DirectionVector.GetRotatedUnit(this.camera.rotation);
        let screenLine = StraightLine.FromPointAndVector(screenLineP, screenLineV);

        let hpg = (p: Point) => screenLine.HalfPlane(p) == 1;
        let hpl = (p: Point) => screenLine.HalfPlane(p) == -1;

        if((hpg(LEFT_TOP) && hpg(LEFT_BOTTOM) && hpg(RIGH_TOP) && hpg(RIGHT_BOTTOM)) 
        || (hpl(LEFT_TOP) && hpl(LEFT_BOTTOM) && hpl(RIGH_TOP) && hpl(RIGHT_BOTTOM)))
            return;
        this.context.beginPath();
        if(screenLine.DirectionVector.x == 0){
            this.context.moveTo(Math.abs(screenLine.C), 0);
            this.context.lineTo(Math.abs(screenLine.C), SCREEN_HEIGTH);
            this.context.stroke();
            return screenLine;
        }
        if(screenLine.DirectionVector.y == 0){
            this.context.moveTo(0, Math.abs(screenLine.C));
            this.context.lineTo(SCREEN_WIDTH, Math.abs(screenLine.C));
            this.context.stroke();
            return screenLine;
        }
        let startX = 0,
            startY = screenLine.DefineY(startX);
        let endX = SCREEN_WIDTH,
            endY = screenLine.DefineY(endX);
        this.context.moveTo(startX, startY);
        this.context.lineTo(endX, endY);
        this.context.stroke();
        return screenLine;
    }

    DrawSection(section : Section){
        let p1 = this.camera.Convert(section.Point1);
        let p2 = this.camera.Convert(section.Point2);
        this.context.beginPath();
        this.context.moveTo(p1.x, p1.y);
        this.context.lineTo(p2.x, p2.y);
        this.context.stroke();
    }

    DrawLabel(str : Label){
        let p = str.absolute?str.position:this.camera.Convert(str.position);
        this.context.strokeText(str.text,p.x, p.y);
    }
}