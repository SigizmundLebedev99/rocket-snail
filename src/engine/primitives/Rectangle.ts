import { IPointIn } from "../interfaces/IPointIn";
import { Fns } from "../../helpers/math";
import { Vector } from "./Vector";

export class Rectangle implements IPointIn{
    x:number;
    y:number;
    width:number;
    height:number;

    constructor(x:number, y:number, width:number, height:number){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    IsPointIn(point: Vector): boolean {
        let xIn = Fns.Between(this.x, this.x + this.width, point.x);
        let yIn = Fns.Between(this.y, this.y + this.height, point.y);
        return xIn && yIn;
    }
}