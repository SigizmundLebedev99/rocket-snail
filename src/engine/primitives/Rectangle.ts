import { IPointIn } from "./IPointIn";
import { Point } from "./Point";
import { Fns } from "../../helpers/math";

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

    IsPointIn(point: Point): boolean {
        let xIn = Fns.Between(this.x, this.x + this.width, point.x);
        let yIn = Fns.Between(this.y, this.y + this.height, point.y);
        return xIn && yIn;
    }
}