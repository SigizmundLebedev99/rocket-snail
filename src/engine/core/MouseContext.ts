import { Vector } from "../primitives/Vector";
import { Point } from "../primitives/Point";
import { IPointIn } from "../interfaces/IPointIn";
import { SceneElement } from "./SceneElement";

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

class Binding{
    node:SceneElement;
    handle:() => IPointIn;

    isCaptured: boolean = false;
    isIn: boolean = false;
    scene: SceneBinding;
    constructor(node:SceneElement, scene:SceneBinding, handle:() => IPointIn){
        this.node = node;
        this.handle = handle;
        this.scene = scene;
    }
}

class SceneBinding{
    movement: Vector = new Vector(0,0);
    lastState: KeyState = {key:"none"};

    Reset(){
        this.movement = new Vector(0,0);
        this.lastState = {key:"none"};
    }
}

export class MouseContext{
    private captureStack : Binding[] = [];
    private scenes : { [id: number]: SceneBinding; } = {};

    private isIn : Binding | null = null;
    private isCaptured: Binding | null = null;

    Position : Point = new Point(0,0);

    private setState(ks: KeyState){
        for(let s in this.scenes)
            this.scenes[s].lastState = ks;
    }
    
    HandleState(state: MouseEvent){
        this.Position = state.Position;

        for(let b in this.captureStack){
            let binding = this.captureStack[b];
            let primitive = binding.handle();
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
                for(let s in this.scenes)
                    this.scenes[s].movement = state.Movement;
                break;
            }
            case 'down':{
                this.setState(state);
                this.isCaptured = this.isIn;
                if(this.isIn != null)
                    this.isIn.isCaptured = true;
                break;
            }   
            case 'up':{
                this.setState(state);
                if(this.isCaptured){
                    this.isCaptured.isCaptured = false;
                    this.isCaptured = null;
                }
                break;
            }
            case 'wheel':{
                this.setState(state);
            }       
        }
    }
    
    Resort(){
        let sortF = (a: Binding, b: Binding) => {
            let scenePr = b.node.Scene.Priority - a.node.Scene.Priority;
            if(scenePr != 0)
                return scenePr;
            return b.node.Priority - a.node.Priority;
        }
        this.captureStack = [...this.captureStack].sort(sortF);
    }

    CaptureMouse(node:SceneElement, handle: () => IPointIn) : () => MouseState{
        var scene = this.scenes[node.Scene.Priority];
        let bind = new Binding(node, scene, handle);
        this.captureStack.push(bind);
        this.Resort();
        
        return () => {
            return new MouseState(bind.scene.lastState, this.Position, bind.scene.movement, bind.isCaptured, bind.isIn);
        }
    }

    HandleMouseByScene(id: number){
        let scene = new SceneBinding();
        this.scenes[id] = scene;
        return () => {
            scene.Reset();
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