import { Vector } from "../primitives/Vector";
import { IPointIn } from "../interfaces/IPointIn";
import { Item } from "./Item";

export type MouseEvent = 
| {key:"down",      Which:number,       Position: Vector}
| {key:"up",                            Position: Vector}
| {key:"wheel",     Delta:number,       Position: Vector}
| {key:"move",      Movement: Vector,   Position: Vector}
| {key:"none",                          Position: Vector}

export type KeyState = 
| {key:"down",      Which:number}
| {key:"up"}
| {key:"wheel",     Delta:number}
| {key:"none"}

class Binding{
    node:Item;
    handlers:(() => IPointIn)[] = [];

    isCaptured: boolean = false;
    isIn: boolean = false;

    constructor(node:Item){
        this.node = node;
    }
}

export class MouseContext{
    private captureStack : Binding[] = [];
    private isIn : Binding | null = null;
    private isCaptured: Binding | null = null;

    get In(){
        return this.isIn;
    }

    get Captured(){
        return this.isCaptured;
    }

    Position : Vector = new Vector(0,0);
    LastEvent : KeyState = {key:'none'};
    Movement : Vector | null = null;

    HandleState(state: MouseEvent){
        this.Position = state.Position;

        if(this.isIn != null){
            this.isIn.isIn = false;
            this.isIn = null;
        }

        for(let b in this.captureStack){
            let binding = this.captureStack[b];
            for(let p in binding.handlers){
                let primitive = binding.handlers[p]();
                let point = binding.node.Position == 'absolute' ? state.Position : binding.node.ToLocal(state.Position.Copy());
                if(primitive.IsPointIn(point)){
                    binding.isIn = true;
                    this.isIn = binding;
                    break;
                }
            }
            if(binding.isIn)
                break;
        }

        switch(state.key){
            case 'move':{
                this.Movement = state.Movement;
                break;
            }
            case 'down':{
                this.LastEvent = state;
                this.isCaptured = this.isIn;
                if(this.isIn != null)
                    this.isIn.isCaptured = true;
                break;
            }   
            case 'up':{
                this.LastEvent = state;
                if(this.isCaptured){
                    this.isCaptured.isCaptured = false;
                    this.isCaptured = null;
                }
                break;
            }  
            case 'wheel':{
                this.LastEvent = state;
            }       
        } 
    }

    ListenEvents(htmlElement : HTMLElement){
        htmlElement.addEventListener("mousedown", (e) => {
            this.HandleState({
                key:"down",
                Position: new Vector(e.x, e.y),
                Which : e.which
            })
        });
        htmlElement.addEventListener("mouseup", (e) => {
            this.HandleState(
            {
                key:"up",
                Position: new Vector(e.x, e.y)
            });
        });
        htmlElement.addEventListener("wheel", (e) =>{
            this.HandleState({
                key:"wheel",
                Delta: e.deltaY,
                Position: new Vector(e.x, e.y)
            })
        });
        htmlElement.addEventListener("mousemove", (e) => {
            this.HandleState({
                key:"move",
                Movement: new Vector(e.movementX, e.movementY),
                Position: new Vector(e.x, e.y)
            })
        });
    }
    
    Resort(){
        this.captureStack = [...this.captureStack].sort((a,b) => b.node.Priority - a.node.Priority);
    }

    Reset(){
        this.LastEvent = {key:"none"};
        this.Movement = null;
    }

    CaptureMouse(node:Item, handle: () => IPointIn) : () => MouseState{
        let binding = this.captureStack.find(e=>e.node == node);
        if(binding){
            binding.handlers.push(handle);
        }
        else{
            binding = new Binding(node);
            binding.handlers.push(handle);
            this.captureStack.push(binding);
            this.Resort();
        }
        let bind = binding;
        return () =>  new MouseState(this, bind);
    }

    GetState() : MouseState{
        return new MouseState(this, {isIn:false, isCaptured:false});
    }
}

export class MouseState{
    IsCaptured : boolean = false;
    IsIn : boolean = false;
    LastEvent : KeyState;
    Position : Vector;
    Movement : Vector | null;
    In : Binding | null = null;
    Captured : Binding | null = null;

    constructor(context: MouseContext, bind:{isIn:boolean, isCaptured:boolean}){
        this.LastEvent = context.LastEvent;
        this.Position = context.Position.Copy();
        this.Movement = context.Movement == null?null:context.Movement.Copy();
        this.IsCaptured = bind.isCaptured;
        this.IsIn = bind.isIn;
        this.In = context.In;
        this.Captured = context.Captured;
    }
}