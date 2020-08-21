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
    passEventDown: boolean;
    constructor(node:SceneElement, handle:() => IPointIn, passEventDown: boolean){
        this.node = node;
        this.handle = handle;
        this.passEventDown = passEventDown;
    }
}

class SceneBinding{
    movement: Vector = new Vector(0,0);
    lastState: KeyState = {key:"none"};
    elements:Binding[] = [];
    Reset(){
        this.movement = new Vector(0,0);
        this.lastState = {key:"none"};
    }

    Resort(){
        this.elements = [...this.elements].sort((a,b) => b.node.Priority - a.node.Priority);
    }
}

export class MouseContext{
    private scenesStack : SceneBinding[] = [];
    private scenes : { [id: number]: SceneBinding; } = {};

    private isIn : Binding | null = null;
    private isCaptured: Binding | null = null;

    Position : Point = new Point(0,0);

    private setState(ks: KeyState){
        for(let s in this.scenes)
            this.scenes[s].lastState = ks;
    }

    ListenEvents(htmlElement : HTMLElement){
        htmlElement.addEventListener("mousedown", (e) => {
            this.HandleState({
                key:"down",
                Position: new Point(e.x, e.y),
                Which : e.which
            })
        });
        htmlElement.addEventListener("mouseup", (e) => {
            this.HandleState(
            {
                key:"up",
                Position: new Point(e.x, e.y)
            });
        });
        htmlElement.addEventListener("wheel", (e) =>{
            this.HandleState({
                key:"wheel",
                Delta: e.deltaY,
                Position: new Point(e.x, e.y)
            })
        });
        htmlElement.addEventListener("mousemove", (e) => {
            this.HandleState({
                key:"move",
                Movement: new Vector(e.movementX, e.movementY),
                Position: new Point(e.x, e.y)
            })
        });
    }
    
    HandleState(state: MouseEvent){
        this.Position = state.Position;

        for(let s in this.scenesStack){
            let scene = this.scenesStack[s];
            let next = true;
            for(let b in scene.elements){
                let binding = scene.elements[b];
                let primitive = binding.handle();
                let point = binding.node.Position == 'absolute' ? state.Position : binding.node.Camera.ConvertFromScreen(state.Position);

                if(primitive.IsPointIn(point)){
                    if(this.isIn != null)
                        this.isIn.isIn = false;
                    this.isIn = binding;
                    this.isIn.isIn = true;
                    if(!binding.passEventDown){
                        next = false;
                        break;
                    }
                }
            } 
            if(!next)
                break;
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
    
    Resort(sceneId:number){
        this.scenes[sceneId].Resort();
    }

    CaptureMouse(node:SceneElement, handle: () => IPointIn, passEventDown : boolean = false) : () => MouseState{
        var scene = this.scenes[node.Scene.Priority];
        let bind = new Binding(node, handle, passEventDown);
        scene.elements.push(bind);
        scene.Resort();
        
        return () => {
            return new MouseState(scene.lastState, this.Position, scene.movement, bind.isCaptured, bind.isIn);
        }
    }

    HandleMouseByScene(id: number){
        let scene = new SceneBinding();
        this.scenes[id] = scene;
        this.scenesStack.unshift(scene);
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