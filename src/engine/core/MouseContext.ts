import { Vector } from "../primitives/Vector";
import { Point } from "../primitives/Point";
import { IPointIn } from "../primitives/IPointIn";
import { Node } from "./Node";

export type KeyEvent = 
| {key:"down", Which:number, Position: Point}
| {key:"up", Position: Point}
| {key:"wheel", Delta:number, Position: Point}
| {key:"move", Movement: Vector, Position: Point}

class Binding{
    node:Node;
    handle:(n:Node) => IPointIn;
    isCapture: boolean;
    lastState?: KeyEvent;

    constructor(node:Node, handle:(n:Node) => IPointIn, isCapture: boolean, lastState?: KeyEvent){
        this.node = node;
        this.handle = handle;
        this.isCapture = isCapture;
        this.lastState = lastState;
    }
}

export class MouseContext{
    private _captureStack : Binding[] = [];
    private _lastCaptured? : Binding;

    HandleState(state: KeyEvent){
        for(let i = this._captureStack.length - 1; i>=0; i--){
            let capture = this._captureStack[i];
            let primitive = capture.handle(capture.node);
            let point = capture.node.Position == 'absolute' ? state.Position : capture.node.Camera.ConvertFromScreen(state.Position);
            if(primitive.IsPointIn(point)){
                if(this._lastCaptured)
                    this._lastCaptured.isCapture = false;
                capture.isCapture = true;
                capture.lastState = state;
                this._lastCaptured = capture;
                return;
            }    
        }
        if(this._lastCaptured)
            this._lastCaptured.isCapture = false;
    }

    CaptureMouse(node:Node, handle: (n:Node) => IPointIn){
        let bind = new Binding(node, handle, false);
        this._captureStack.push(bind);

        return function(){
            if(bind.isCapture)
                return bind.lastState;
        }
    }
}