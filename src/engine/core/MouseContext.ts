import { Vector } from "../primitives/Vector";
import { Point } from "../primitives/Point";
import { IPointIn } from "../primitives/IPointIn";
import { Node } from "./Node";

export type MouseEvent = 
| {key:"down",      Which:number,       Position: Point}
| {key:"up",                            Position: Point}
| {key:"wheel",     Delta:number,       Position: Point}
| {key:"move",      Movement: Vector,   Position: Point}
| {key:"none",                          Position: Point}

export type KeyState = 
| {key:"down",      Which:number}
| {key:"up"}
| {key:"wheel",     Delta:number}
| {key:"none"}

let _defaultKeyEvent : MouseEvent = {key:"none", Position:new Point(0,0)};

class Binding{
    node:Node;
    handle:(n:Node) => IPointIn;

    isCaptured: boolean = false;
    isIn: boolean = false;

    constructor(node:Node, handle:(n:Node) => IPointIn){
        this.node = node;
        this.handle = handle;
    }
}

export class MouseContext{
    private captureStack : Binding[] = [];
    private isIn : Binding | null = null;
    private isCaptured: Binding | null = null;

    Position : Point = new Point(0,0);
    LastState : KeyState = {key:'none'};
    Movement : Vector = new Vector(0,0);

    HandleState(state: MouseEvent){
        this.Position = state.Position;

        for(let b in this.captureStack){
            let binding = this.captureStack[b];
            let primitive = binding.handle(binding.node);
            let point = binding.node.Position == 'absolute' ? state.Position : binding.node.Camera.ConvertFromScreen(state.Position);

            if(primitive.IsPointIn(point)){
                binding.isIn = true;
                if(this.isIn != null){
                    this.isIn.isIn = false;
                    this.isIn = null;
                }   
                this.isIn = binding;
                this.isIn.isIn = true;
                break;
            }
        }

        switch(state.key){
            case 'move':{
                this.Movement = state.Movement;
                break;
            }
            case 'down':{
                this.LastState = state;
                this.isCaptured = this.isIn;
                if(this.isIn != null)
                    this.isIn.isCaptured = true;
                break;
            }   
            case 'up':{
                this.LastState = state;
                if(this.isCaptured){
                    this.isCaptured.isCaptured = false;
                    this.isCaptured = null;
                }
                break;
            }  
            case 'wheel':{
                this.LastState = state;
            }       
        }
        
    }
    
    private Resort(){
        this.captureStack = [...this.captureStack].sort((a,b) => b.node.Priority - a.node.Priority);
    }

    Reset(){
        this.LastState = {key:"none"};
        this.Movement = new Vector(0,0);
    }

    CaptureMouse(node:Node, handle: (n:Node) => IPointIn) : () => MouseState{
        let bind = new Binding(node, handle);
        this.captureStack.push(bind);
        this.Resort();
        
        return () => {
            return new MouseState(this.LastState, this.Position, this.Movement, bind.isCaptured, bind.isIn)
        }
    }
}

export class MouseState{
    IsCaptured : boolean = false;
    IsIn : boolean = false;
    KeyState : KeyState;
    Position : Point;
    Movement : Vector;

    constructor(keyState : KeyState, position : Point, movement : Vector, isC, isI){
        this.KeyState = keyState;
        this.Position = position;
        this.Movement = movement;
        this.IsCaptured = isC;
        this.IsIn = isI;
    }
}