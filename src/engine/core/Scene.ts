import { SceneContext } from "./SceneContext";
import { MouseContext } from "./MouseContext";
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

    private _mouseContext : MouseContext;

    ShouldResort : boolean = false;

    constructor(context : CanvasRenderingContext2D, mouseContext?:MouseContext, id? : number){
        this.Canvas = context;
        if(id)
            this.sceneId = id;

        if(mouseContext){
            this._mouseContext = mouseContext;
            this.Context = new SceneContext(this, mouseContext);
            return;
        }

        this._mouseContext = new MouseContext();
        this._mouseContext.ListenEvents(context.canvas);
        this.Context = new SceneContext(this, this._mouseContext);
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
        this.ElementsOnScene.forEach(node => {
            if(!node.IsActive)
                return;

            this.Canvas.save();
            node.Style.Apply(this.Canvas);

            if(node.Position == 'relative')
                node.Camera.PrepareAxis();

            node.OnUpdate()
            this.Canvas.restore();
        });
        
        this._mouseContext.Reset();
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