import { Vector } from "../primitives/Vector";
import { Point } from "../primitives/Point";

type KeyState = 
| {key:"pressed", CapturePosition : Point, Which:number}
| {key:"none", ReleasePosition?:Point}

type WheelState = 
| {key:"changed", Delta:number}
| {key:"none"}

export class MouseState{
    Position : Point = new Point(0,0);
    Movement : Vector = new Vector(0,0);
    State : KeyState = {key:'none'};
    Wheel: WheelState = {key:'none'};

    Reset(){
        this.Wheel = {key:'none'};
    }
}