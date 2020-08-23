import {Point} from './Point'
import {Complex} from '../../helpers/Complex'

export class Vector{
    x:number;
    y:number;

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
    
    Add(x:number, y:number){
        this.x += x;
        this.y += y;
        return this;
    }

    AddV(vector: Vector){
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    Subtract(x:number, y:number){
        this.x -= x;
        this.y -= y;
        return this;
    }

    SubstractV(vector: Vector){
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    Multiply(x:number, y?:number){
        if(!y){
            this.x *= x; 
            this.y *= x;
        }
        else{
            this.x *= x; 
            this.y *= y;
        }
        return this;
    }

    MultiplyV(vector: Vector){
        this.x *= vector.x; 
        this.y *= vector.y;
        return this;
    }

    Scalar(vector: Vector){
        return this.x * vector.x + this.y * vector.y;
    }

    Pseudo(anower:Vector){
        return this.x * anower.y - this.y * anower.x;
    }

    GetUnit(){
        let length = this.Length;
        return new Vector(this.x/length, this.y/this.Length);
    }

    GetRotatedUnit(angle){
        angle += this.Angle;
        return new Vector(Math.cos(angle), Math.sin(angle));
    }

    Rotate(angle){
        let v = new Vector(Math.cos(angle), Math.sin(angle));
        let complex = new Complex(this.x, this.y);
        let result = complex.Mul(new Complex(v.x, v.y));
        this.x = result.x;
        this.y = result.y;
    }

    Copy(){
        return new Vector(this.x, this.y);
    }

    static FromPoints(begin:{x:number, y:number}, end:{x:number, y:number}){
        return new Vector(end.x - begin.x, end.y - begin.y);
    }

    static FromPoint(end: {x:number, y:number}){
        return new Vector(end.x, end.y);
    }
}