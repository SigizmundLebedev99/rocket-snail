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

    constructor(state: any, state2: number = 0){
        if(state.x !== null && state.y != null && !isNaN(state.x) && !isNaN(state.y)){
            this.x = state.x;
            this.y = state.y;
            return;
        }
        if(Array.isArray(state) && state.length == 2 && !isNaN(state[0]) && !isNaN(state[1])){
            this.x = state[0];
            this.y = state[1];
            return;
        }
        if(state != null && state2 != null && !isNaN(state) && !isNaN(state2)){
            this.x = state;
            this.y = state2;
            return;
        }
        
        throw "Invalid input";
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
        return new Vector(this.x/length, this.y/length);
    }

    GetRotatedUnit(angle){
        angle += this.Angle;
        return new Vector(Math.cos(angle), Math.sin(angle));
    }

    Rotate(angle){
        let {x,y} = this;
        this.x=x*Math.cos(angle)-y*Math.sin(angle);
        this.y=y*Math.cos(angle)+x*Math.sin(angle);
        return this;
    }

    Copy(){
        return new Vector(this.x, this.y);
    }
}