import { Vector } from "../primitives/Vector";
import { Item } from "./Item";

type captureMode = "inPath" | "onStroke";

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
    getPath:() => Path2D;

    captureMode : captureMode = 'inPath';

    isCaptured: boolean = false;
    isIn: boolean = false;

    constructor(node:Item, getPath: () => Path2D){
        this.node = node;
        this.getPath = getPath;
    }
}

export class MouseContext{
    private context : CanvasRenderingContext2D;
    private captureStack : Binding[] = [];
    private isIn : Binding | null = null;
    private isCaptured: Binding | null = null;

    get In(){
        return this.isIn;
    }

    get Captured(){
        return this.isCaptured;
    }

    constructor(context: CanvasRenderingContext2D){
        this.context = context;
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
            let point = state.Position;
            let path = binding.getPath();
            if(binding.node.ApplyTransform)
                point = binding.node.ToLocal(point.Copy());
            
            let isIn : boolean;
            
            if(binding.captureMode == 'inPath')
                isIn = this.context.isPointInPath(path, point.x, point.y)
            else{
                let l_width = this.context.lineWidth;
                let item_l_width = binding.node.Style.lineWidth || binding.node.Style.GetProperty('lineWidth', binding.node);
                if(item_l_width)
                    this.context.lineWidth = item_l_width;
                isIn = this.context.isPointInStroke(path, point.x, point.y);
                this.context.lineWidth = l_width;
            }
            
            if(isIn){
                binding.isIn = true;
                this.isIn = binding;
                break;
            }
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

    CaptureMouseInPath(node:Item, path: Path2D | (() => Path2D)) : () => MouseState{
        return this.CaptureMouse(node, path, 'inPath');
    }

    CaptureMouseOnStroke(node: Item, path: Path2D | (() => Path2D)) : () => MouseState{
        return this.CaptureMouse(node, path, 'onStroke');
    }

    private CaptureMouse(node: Item, path: Path2D | (() => Path2D), captureMode : captureMode) : () => MouseState{
        let handle : () => Path2D
        if(path instanceof Path2D)
            handle = () => path;
        else
            handle = path;

        let binding = this.captureStack.find(e=>e.node == node);
        if(binding){
            binding.getPath = handle;
            binding.captureMode = captureMode;
        }
        else{
            binding = new Binding(node, handle);
            binding.captureMode = captureMode;
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