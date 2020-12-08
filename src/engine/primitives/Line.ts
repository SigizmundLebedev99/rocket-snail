import {Vector} from './Vector';

export class Line{
    private _A : number;
    private _B : number;
    private _C : number;
    public p1 : Vector;
    public p2 : Vector;

    constructor(p1 : Vector, p2: Vector){
        let A = p1.y-p2.y, B = p2.x-p1.x, C = -A*p1.x - B*p1.y;
        this._A = A;
        this._B = B;
        this._C = C;

        this.p1 = p1;
        this.p2 = p2;
    }

    Proection(p: Vector){
        return this._A*p.x + this._B*p.y + this._C;
    }
}