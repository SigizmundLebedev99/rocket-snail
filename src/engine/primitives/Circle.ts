import { IPath } from "../interfaces/IPath";
import { Vector } from "./Vector";

export class Circle implements IPath{
    x:number;
    y:number;
    rad:number;

    constructor(x:number, y:number, rad){
        this.x = x;
        this.y = y;
        this.rad = rad;
    }

    GetPath(): Path2D {
        var path = new Path2D();
        path.arc(this.x,this.y,this.rad,0,Math.PI * 2);
        return path;
    }
}