import {Point} from './Point'

export class Vector{
    readonly x:number;
    readonly y:number;

    get Length(){
        let length = Math.sqrt(this.x * this.x + this.y * this.y)
        return length;
    }

    get Angle(){
        return Math.acos(this.x / this.Length);
    }

    constructor(x:number, y: number){
        this.x = x;
        this.y = y;
    }
    
    Add(anower : Vector){
        return new Vector(this.x + anower.x, this.y + anower.y);
    }

    Subtract(anower: Vector){
        return new Vector(this.x - anower.x, this.y - anower.y);
    }

    Product(num : number){
        return new Vector(this.x * num, this.y * num);
    }

    Scalar(anower:Vector){
        return this.x * anower.x + this.y * anower.y;
    }

    Pseudo(anower:Vector){
        return this.x * anower.y - this.y * anower.x;
    }

    Unit(){
        let length = this.Length;
        return new Vector(this.x/length, this.y/this.Length);
    }

    Rotate(angle){
        angle -= this.Angle;
        let unit = new Vector(Math.cos(angle), Math.sin(angle));
        return unit.Product(this.Length);
    }

    static FromPoints(begin:{x:number, y:number}, end:{x:number, y:number}){
        return new Vector(end.x - begin.x, end.y - begin.y);
    }

    static FromPoint(end: {x:number, y:number}){
        return new Vector(end.x, end.y);
    }
}