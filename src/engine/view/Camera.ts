import { IUnit } from "../IUnit";
import { Vector } from "../primitives/Vector";
import { Point } from "../primitives/Point";
import { Matrix } from "../../helpers/math";
import { SCREEN_WIDTH, SCREEN_HEIGTH } from "../Consts";

export class Camera{
    transition : Vector = new Vector(0,0);
    rotation : number = 0;
    fov : number = 100;

    private relation = SCREEN_WIDTH / this.fov;

    MoveBy(vector: Vector){
        this.transition = this.transition.Add(vector);
    }

    Reset(){
        this.transition = new Vector(0,0);
        this.rotation = 0;
        this.fov = 100;
    }

    ConvertToCamera(screen : Point){
        let movedPoint = new Point(screen.x - SCREEN_WIDTH/2, -(screen.y - SCREEN_HEIGTH/2));
        movedPoint = movedPoint.GetMoved(this.transition.Product(-1));
        let inMeters = new Vector(movedPoint.x / this.relation, movedPoint.y / this.relation);
        
        if(this.rotation != 0){
            let angle = Math.acos(inMeters.x / inMeters.Length);
            angle += this.rotation;
            let angleVector = new Vector(Math.cos(angle), Math.sin(angle));
            inMeters = angleVector.Product(inMeters.Length);
        }
        
        return Point.From(inMeters);
    }

    Convert(point: {x:number, y:number}){
        let scaled = new Vector(point.x * this.relation, point.y * this.relation);
        let moved = scaled.Add(this.transition);
        if(this.rotation != 0 && moved.Length != 0){
            let angle = Math.acos(moved.x / moved.Length);
            angle -= this.rotation;
            let angleVector = new Vector(Math.cos(angle), Math.sin(angle));
            moved = angleVector.Product(moved.Length);
        }
        
        return new Point(moved.x + SCREEN_WIDTH/2, -(moved.y - SCREEN_HEIGTH/2));
    }
}