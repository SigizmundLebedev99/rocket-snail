import { Vector } from "./primitives/Vector";
import { SCALE } from "./Consts";

export abstract class BaseState{
    protected _transition : Vector = new Vector(0,0);
    protected _rotation : number = 0;
    protected _scale : Vector = new Vector(SCALE,SCALE);
    protected _base : BaseState | null = null;

    get transition(){
        if(this._base == null)
            return this._transition;
        else
            return this._transition.Add(this._base.transition);
    }

    get rotation(){
        if(this._base == null)
            return this._rotation;
        else
            return this._rotation + this._base.rotation;
    }

    get scale(){
        let obj = {
            acc : this._scale, count : 1
        };
        this.RecAvg(obj);
        return obj.acc.Product(1/obj.count);
    }

    set transition(v:Vector){
        this._transition = v;
    }

    set scale(v:Vector){
        this._scale = v;
    }

    Reset(){
        this._transition = new Vector(0,0);
        this._rotation = 0;
        this._scale = new Vector(SCALE,SCALE);
        this._base = null;
    }

    From(state: BaseState){
        this._base = state;
    }

    Copy(state: BaseState){
        this._base = state._base;
        this._rotation = state._rotation;
        this._scale = state._scale;
        this._transition = state._transition;
    }

    private RecAvg(obj:{acc:Vector, count:number}){
        if(this._base == null)
            return;
        
        obj.acc = obj.acc.Add(this._base.scale);
        obj.count += 1;
        this._base.RecAvg(obj);
    }

    SetRotation(angle: number){
        this._rotation = angle;
    }

    Rotate(angle : number){
        this._rotation += angle;
    }
}