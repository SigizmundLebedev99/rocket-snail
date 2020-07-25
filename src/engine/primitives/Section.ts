import { Point } from "./Point";
import { StraightLine } from "./Straight-Line";
import {Fns as Mt} from '../../helpers/math'

export class Section{
    private _p1 : Point;
    private _p2 : Point;

    get Point1(){
        return this._p1;
    }

    get Point2(){
        return this._p2;
    }

    get Length(){
        return Math.sqrt((this._p2.x - this._p1.x)^2 + (this._p2.y - this._p1.y));
    }

    constructor(p1 : Point, p2: Point){
        this._p1 = p1;
        this._p2 = p2;
    }

    Intersection(anower : Section){
        let a = this._p1,
            b = this._p2,
            c = anower._p1,
            d = anower._p2;

        let line1 = new StraightLine(a, b);
        let line2 = new StraightLine(c, d);
        let point = line1.Intersection(line2);
        if(point == null)
            return null;
        let isBelong =
            Mt.Between (a.x, b.x, point.x) && Mt.Between (a.y, b.y, point.y)
            && Mt.Between (c.x, d.x, point.x) && Mt.Between (c.y, d.y, point.y);
        if(isBelong)
            return point;
        else
            return null;
    }
}