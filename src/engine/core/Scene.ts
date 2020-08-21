import { SceneContext } from "./SceneContext";
import { MouseContext } from "./MouseContext";
import { Point } from "../primitives/Point";
import { Vector } from "../primitives/Vector";
import { SceneElement } from "./SceneElement";

export class Scene{
    private intervalId;

    private sceneId :number = 0;
    get Priority(){
        return this.sceneId;
    }

    ElementsOnScene : SceneElement[] = [];
    readonly Canvas : CanvasRenderingContext2D;
    readonly Context : SceneContext;

    private setMouseHandled : () => void;
    private _mouseContext : MouseContext;

    ShouldResort : boolean = false;

    constructor(context : CanvasRenderingContext2D, mouseContext?:MouseContext, id? : number){
        this.Canvas = context;
        if(id)
            this.sceneId = id;

        if(mouseContext){
            this._mouseContext = mouseContext;
            this.Context = new SceneContext(this, mouseContext);
            this.setMouseHandled = mouseContext.HandleMouseByScene(this.sceneId);
            return;
        }

        let _mouseContext = new MouseContext();

        context.canvas.addEventListener("mousedown", (e) => {
            _mouseContext.HandleState({
                key:"down",
                Position: new Point(e.x, e.y),
                Which : e.which
            })
        });

        context.canvas.addEventListener("mouseup", (e) => {
            _mouseContext.HandleState(
            {
                key:"up",
                Position: new Point(e.x, e.y)
            });
        });

        context.canvas.addEventListener("wheel", (e) =>{
            _mouseContext.HandleState({
                key:"wheel",
                Delta: e.deltaY,
                Position: new Point(e.x, e.y)
            })
        });

        context.canvas.addEventListener("mousemove", (e) => {
            _mouseContext.HandleState({
                key:"move",
                Movement: new Vector(e.movementX, e.movementY),
                Position: new Point(e.x, e.y)
            })
        });
        this._mouseContext = _mouseContext;
        this.setMouseHandled = _mouseContext.HandleMouseByScene(this.sceneId);
        this.Context = new SceneContext(this, _mouseContext);
    }

    Clear(){
        this.Canvas.clearRect(0,0,this.Canvas.canvas.width, this.Canvas.canvas.height);        
    }

    Redraw(){
        if(this.ShouldResort){
            this._mouseContext.Resort();
            this.Resort();
            this.ShouldResort = false;
        }
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
        
        this.setMouseHandled();
    }

    Run(){
        this.intervalId = setInterval(() => {
            this.Redraw();
        }, 8);
    }

    Stop(){
        clearInterval(this.intervalId);
    }

    private Resort(){
        let elements = [...this.ElementsOnScene];
        elements.sort((a,b) => a.Priority - b.Priority);
        this.ElementsOnScene = elements;
    }
}