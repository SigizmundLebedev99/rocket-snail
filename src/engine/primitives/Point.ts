import {Vector} from './Vector'

export class Point{
    x:number;
    y:number;

    constructor(x:number, y: number){
        this.x = x;
        this.y = y;
    }

    IsEqual(anower: Point){
        return this.x == anower.x && this.y == anower.y;
    }

    GetMoved(vector: Vector){
        let x =this.x + vector.x; 
        let y = this.y + vector.y;
        return new Point(x,y);
    }

    static From(pointLikeobj: {x:number, y:number}){
        return new Point(pointLikeobj.x, pointLikeobj.y)
    }
}