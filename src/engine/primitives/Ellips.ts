import { IPointIn } from "../interfaces/IPointIn";
import { Vector } from "./Vector";

export class Ellips implements IPointIn{
    x:number;
    y:number;
    a:number;
    b:number;

    constructor(x:number, y:number, a?:number, b?:number){
        this.x = x;
        this.y = y;
        this.a = a ? a : 1;
        this.b = b ? b : 1;
    }

    IsPointIn(point: Vector): boolean {
        let {x,y, a,b} = this;
        let forX = Math.pow(point.x - x, 2) / (a*a);
        let forY = Math.pow(point.y - y, 2) / (b*b);
        return  forX + forY <= 1;
    }
}