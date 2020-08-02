import { Node } from "./Node";
import { Point } from "../primitives/Point";
import { MouseState } from "./MouseState";
import { Vector } from "../primitives/Vector";

export class View{
    get Width(){
        return this.Context.canvas.width;
    }

    get Height(){
        return this.Context.canvas.height;
    }

    get LeftTop(){
        return new Point(0,0);
    }

    get LeftBottom(){
        return new Point(0, this.Height);
    }

    get RightTop(){
        return new Point(this.Width, 0);
    }

    get RightBottom(){
        return new Point(this.Width, this.Height);
    }
    
    private intervalId;

    readonly PIXELS_METER = 45;
    readonly Mouse : MouseState;
    Context : CanvasRenderingContext2D;
    DependentNodes : Node[] = [];

    constructor(context : CanvasRenderingContext2D){
        this.Context = context;
        this.Mouse = new MouseState();

        context.canvas.addEventListener("mousedown", (e) => {
            this.Mouse.State = 
            {
                key:"pressed", 
                CapturePosition:new Point(e.x, e.y),
                Which : e.which
            }
        });
        context.canvas.addEventListener("mouseup", (e) => {
            this.Mouse.State = 
            {
                key:"none",
                ReleasePosition: new Point(e.x, e.y)
            }
        });
        context.canvas.addEventListener("wheel", (e) =>{
            this.Mouse.Wheel = {
                key:"changed",
                Delta: e.deltaY
            }
        });

        context.canvas.addEventListener("mousemove", (e) => {
            this.Mouse.Movement = new Vector(e.movementX, e.movementY);
            this.Mouse.Position = new Point(e.x, e.y);
        });
    }

    AddChild(element: Node){
        this.DependentNodes.push(element);
        element.View = this;
        this.Resort();
        return element;
    }

    Resort(){
        let nodes = [...this.DependentNodes];
        nodes.sort((a,b) => a.Priority - b.Priority);
        this.DependentNodes = nodes;
    }

    Clear(){
        this.Context.clearRect(0,0,this.Context.canvas.width, this.Context.canvas.height);        
    }

    Run(){
        this.intervalId = setInterval(() => {
            this.Clear();
            this.DependentNodes.forEach(node => {
                this.Context.save();
                node.Style.Apply(this.Context);

                if(node.Position == 'relative')
                    node.Camera.PrepareAxis();

                node.OnUpdate()
                this.Context.restore();
            });
            this.Mouse.Reset();
        }, 8);
    }
}