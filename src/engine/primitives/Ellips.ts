import { IPointIn } from "../interfaces/IPointIn";
import { Point } from "./Point";

export class Ellips implements IPointIn{
    x:number;
    y:number;
    a:number;
    b:number;

    constructor(x:number, y:number, a:number, b:number){
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
    }

    IsPointIn(point: Point): boolean {
        let {x,y, a,b} = this;
        let forX = Math.pow(point.x - x, 2) / (a*a);
        let forY = Math.pow(point.y - y, 2) / (b*b);
        return  forX + forY <= 1;
    }
}