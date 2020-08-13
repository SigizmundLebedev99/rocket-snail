import { Node } from "./Node";
import { Point } from "../primitives/Point";
import { MouseContext } from "./MouseContext";
import { Vector } from "../primitives/Vector";
import { Grid } from "../../logic/grid/Grid";

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
    readonly Mouse : MouseContext;
    Context : CanvasRenderingContext2D;
    DependentNodes : Node[] = [];

    constructor(context : CanvasRenderingContext2D){
        this.Context = context;
        this.Mouse = new MouseContext();

        context.canvas.addEventListener("mousedown", (e) => {
            this.Mouse.HandleState({
                key:"down",
                Position: new Point(e.x, e.y),
                Which : e.which
            })
        });
        context.canvas.addEventListener("mouseup", (e) => {
            this.Mouse.HandleState(
            {
                key:"up",
                Position: new Point(e.x, e.y)
            });
        });
        context.canvas.addEventListener("wheel", (e) =>{
            this.Mouse.HandleState({
                key:"wheel",
                Delta: e.deltaY,
                Position: new Point(e.x, e.y)
            })
        });

        context.canvas.addEventListener("mousemove", (e) => {
            this.Mouse.HandleState({
                key:"move",
                Movement: new Vector(e.movementX, e.movementY),
                Position: new Point(e.x, e.y)
            })
        });
    }

    AddChild(element: Node){
        this.DependentNodes.push(element);
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

    Stop(){
        clearInterval(this.intervalId);
    }
}