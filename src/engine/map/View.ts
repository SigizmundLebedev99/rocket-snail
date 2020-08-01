import { Node } from "./Node";
import { Point } from "../primitives/Point";

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
    Context : CanvasRenderingContext2D;
    DependentNodes : Node[] = [];

    constructor(context : CanvasRenderingContext2D){
        this.Context = context;

        context.canvas.addEventListener("mousedown", (e) => {

        });
        context.canvas.addEventListener("mouseup", (e) => {

        });
        context.canvas.addEventListener("mousemove", (e) => {

        });
        context.canvas.addEventListener("wheel", (e) =>{
        
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
        }, 8);
    }
}