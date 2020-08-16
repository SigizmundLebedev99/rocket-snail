import { SceneElement } from "./SceneElement";
import { Point } from "../primitives/Point";
import { Vector } from "../primitives/Vector";
import { SceneContext } from "./SceneContext";

export class Scene{
    private intervalId;
    
    readonly Canvas : CanvasRenderingContext2D;
    readonly Context : SceneContext;

    constructor(context : CanvasRenderingContext2D){
        this.Canvas = context;
        this.Context = new SceneContext(this);

        context.canvas.addEventListener("mousedown", (e) => {
            this.Context.Mouse.HandleState({
                key:"down",
                Position: new Point(e.x, e.y),
                Which : e.which
            })
        });
        context.canvas.addEventListener("mouseup", (e) => {
            this.Context.Mouse.HandleState(
            {
                key:"up",
                Position: new Point(e.x, e.y)
            });
        });
        context.canvas.addEventListener("wheel", (e) =>{
            this.Context.Mouse.HandleState({
                key:"wheel",
                Delta: e.deltaY,
                Position: new Point(e.x, e.y)
            })
        });
        context.canvas.addEventListener("mousemove", (e) => {
            this.Context.Mouse.HandleState({
                key:"move",
                Movement: new Vector(e.movementX, e.movementY),
                Position: new Point(e.x, e.y)
            })
        });
    }

    Clear(){
        this.Canvas.clearRect(0,0,this.Canvas.canvas.width, this.Canvas.canvas.height);        
    }

    Run(){
        this.intervalId = setInterval(() => {
            this.Clear();
            this.Context.ElementsOnScene.forEach(node => {

                if(!node.IsActive)
                    return;

                this.Canvas.save();
                node.Style.Apply(this.Canvas);

                if(node.Position == 'relative')
                    node.Camera.PrepareAxis();

                node.OnUpdate()
                this.Canvas.restore();

            });
            this.Context.Mouse.Reset();
        }, 8);
    }

    Stop(){
        clearInterval(this.intervalId);
    }
}