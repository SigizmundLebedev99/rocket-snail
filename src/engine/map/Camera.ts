import { Vector } from "../primitives/Vector";
import { Point } from "../primitives/Point";
import { Matrix } from "../../helpers/math";
import { SCREEN_WIDTH, SCREEN_HEIGTH } from "../Consts";
import { BaseState } from "../BaseState";

export class Camera extends BaseState{

    constructor(){
        super();
        this.RelationX = 100;
        this.RelationY = 100;
    }

    static FromState(state: BaseState){
        let camera = new Camera();
        camera.transition = state.transition;
        camera.rotation = state.rotation;
        camera.scale = state.scale;
        return camera;
    }

    get RelationX(){
        return SCREEN_WIDTH / this.scale.x;
    }

    get RelationY(){
        return SCREEN_HEIGTH / this.scale.y;
    }

    set RelationX(v:number){
        this.scale = new Vector(SCREEN_WIDTH/v, this.scale.y);
    }

    set RelationY(v:number){
        this.scale = new Vector(this.scale.x, SCREEN_HEIGTH/v);
    }

    MoveBy(vector: Vector){
        this.transition = this.transition.Add(vector);
    }

    Reset(){
        this.transition = new Vector(0,0);
        this.rotation = 0;
        this.scale=new Vector(100,100);
        this.RelationY = this.RelationX;
    }

    ConvertToCamera(screen : Point){
        let movedPoint = new Point(screen.x - SCREEN_WIDTH/2, -(screen.y - SCREEN_HEIGTH/2));
        movedPoint = movedPoint.GetMoved(this.transition.Product(-1));
        let inMeters = new Vector(movedPoint.x / this.RelationX, movedPoint.y / this.RelationY);
        
        if(this.rotation != 0){
            inMeters = inMeters.Rotate(this.rotation);
        }
        
        return Point.From(inMeters);
    }

    Convert(point: {x:number, y:number}){
        let scaled = new Vector(point.x * this.RelationX, point.y * this.RelationY);
        
        if(this.rotation != 0 && scaled.Length != 0){
            scaled = scaled.Rotate(-this.rotation);
        }
        let moved = scaled.Add(this.transition);
        return new Point(moved.x + SCREEN_WIDTH/2, -(moved.y - SCREEN_HEIGTH/2));
    }
}