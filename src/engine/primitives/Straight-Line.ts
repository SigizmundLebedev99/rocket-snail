import {Point} from './Point';
import {Vector} from './Vector';

export class StraightLine{
    get NormalVector(){
        return new Vector(this._A, this._B);
    }

    get DirectionVector(){
        return new Vector(-this._B, this._A);
    }

    get Point(){
        return this._p;
    }

    get A(){
        return this._A;
    }
    get B(){
        return this._B;
    }
    get C(){
        return this._C;
    }
    
    private _A : number;
    private _B : number;
    private _C : number;
    private _p : Point;

    constructor(p1 : Point, p2: Point){
        let A = p1.y-p2.y,  B = p2.x-p1.x,  C = -A*p1.x - B*p1.y;
        this._A = A;
        this._B = B;
        this._C = C;
        this._p = Vector.FromPoint(p1).Length == 0 ? p2 : p1;
    }

    IsBelongs(p: Point){
        return this._A*p.x + this._B*p.y + this._C == 0;
    }

    Intersection(anower: StraightLine){
        let A1 = this._A,
            A2 = anower._A,
            B1 = this._B,
            B2 = anower._B,
            C1 = - this._C,
            C2 = - anower._C;

        let d = A1 * B2 - A2 * B1;
        if(d == 0)
            return null;
        else{
            let detX = C1 * B2 - C2 * B1;
            let detY = A1 * C2 - A2 * C1
            return new Point(detX/d,detY/d);
        }
    }

    DefineY(x:number){
        //Ax + By + C = 0
        return ((-this._A * x) - this._C) / this._B;
    }

    static FromPointAndVector(p: Point, v:Vector){
        return new StraightLine(p, p.GetMoved(v));
    }
}