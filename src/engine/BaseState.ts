import { Vector } from "./primitives/Vector";

export abstract class BaseState{
    SelfTransition : Vector = new Vector(0,0);
    SelfRotation : number = 0;
    SelfScale : Vector = new Vector(1,1);
    protected _base : BaseState | null = null;

    get transition(){
        if(this._base == null)
            return this.SelfTransition;
        else
            return this.SelfTransition.Add(this._base.transition);
    }

    get rotation(){
        if(this._base == null)
            return this.SelfRotation;
        else
            return this.SelfRotation + this._base.rotation;
    }

    get scale(){
        let obj = {
            acc : this.SelfScale, count : 1
        };
        this.RecAvg(obj);
        return obj.acc.Product(1/obj.count);
    }

    set transition(v:Vector){
        this.SelfTransition = v;
    }

    set scale(v:Vector){
        this.SelfScale = v;
    }

    Reset(){
        this.SelfTransition = new Vector(0,0);
        this.SelfRotation = 0;
        this.SelfScale = new Vector(1,1);
        this._base = null;
    }

    From(state: BaseState){
        this._base = state;
    }

    Copy(state: BaseState){
        this._base = state._base;
        this.SelfRotation = state.SelfRotation;
        this.SelfScale = state.SelfScale;
        this.SelfTransition = state.SelfTransition;
    }

    private RecAvg(obj:{acc:Vector, count:number}){
        if(this._base == null)
            return;
        
        obj.acc = obj.acc.Add(this._base.scale);
        obj.count += 1;
        this._base.RecAvg(obj);
    }

    SetRotation(angle: number){
        this.SelfRotation = angle;
    }

    Rotate(angle : number){
        this.SelfRotation += angle;
    }
}