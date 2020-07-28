import { Vector } from "../primitives/Vector";
import { Point } from "../primitives/Point";
import { SCREEN_WIDTH, SCREEN_HEIGTH, PIXELS_METER } from "../Consts";
import { BaseState } from "../BaseState";

export class Camera extends BaseState{

    constructor(){
        super();
    }

    static FromState(state: BaseState){
        let camera = new Camera();
        camera.Copy(state);
        return camera;
    }

    MoveBy(vector: Vector){
        this.transition = this.transition.Add(vector);
    }

    Reset(){
        this.transition = new Vector(0,0);
        this.SetRotation(0);
        this.scale=new Vector(1,1);
    }

    ConvertToCamera(screen : Point){
        let movedPoint = new Point(screen.x - SCREEN_WIDTH/2, -(screen.y - SCREEN_HEIGTH/2));
        movedPoint = movedPoint.GetMoved(this.transition.Product(-1));
        let inMeters = new Vector(movedPoint.x / this.scale.x, movedPoint.y / this.scale.y);
        
        if(this.rotation != 0){
            inMeters = inMeters.Rotate(this.rotation);
        }
        
        return Point.From(inMeters);
    }

    Convert(point: {x:number, y:number}){
        let p = Vector.FromPoint(point);
        if(this._base != null){
            p = p.Add(this.SelfTransition);
            p = p.Rotate(-this.SelfRotation);
            p = p.Add(this._base.transition);
            p = p.Rotate(-this._base.rotation);
        }
        else if(this.rotation != 0 && p.Length != 0){
            p = p.Add(this.transition); 
            p = p.Rotate(-this.rotation);  
        }
        else{
            p = p.Add(this.transition);
        }
        
        let scaled = new Vector(p.x * this.scale.x, p.y * this.scale.y);
        scaled = new Vector(scaled.x * PIXELS_METER, scaled.y * PIXELS_METER)
        return new Point(scaled.x + SCREEN_WIDTH/2, -(scaled.y - SCREEN_HEIGTH/2));
    }
}