import { Vector } from "../primitives/Vector";
import { Point } from "../primitives/Point";
import { Matrix } from "../../helpers/math";
import { SCREEN_WIDTH, SCREEN_HEIGTH } from "../Consts";
import { BaseState } from "../BaseState";

export class Camera extends BaseState{

    constructor(){
        super();
    }

    static FromState(state: BaseState){
        let camera = new Camera();
        camera.transition = state.transition;
        camera.rotation = state.rotation;
        camera.scale = state.scale;
        return camera;
    }

    MoveBy(vector: Vector){
        this.transition = this.transition.Add(vector);
    }

    Reset(){
        this.transition = new Vector(0,0);
        this.rotation = 0;
        this.scale=new Vector(45,45);
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
        let scaled = new Vector(point.x * this.scale.x, point.y * this.scale.y);
        
        if(this.rotation != 0 && scaled.Length != 0){
            scaled = scaled.Rotate(-this.rotation);
        }
        let moved = scaled.Add(this.transition);
        return new Point(moved.x + SCREEN_WIDTH/2, -(moved.y - SCREEN_HEIGTH/2));
    }
}