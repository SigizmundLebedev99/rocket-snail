import { MouseContext } from "./MouseContext";
import { Item } from "./Item";
import { Vector } from "../primitives/Vector";

export class Scene{
   
    public static ActiveScene : Scene;

    elementsOnScene : Item[] = [];
   
    readonly Canvas : CanvasRenderingContext2D;

    private _mouseContext : MouseContext;

    get Mouse(){
        return this._mouseContext;
    }

    get ElementsOnScene(){
        return [...this.elementsOnScene];
    }

    get Width(){
        return this.Canvas.canvas.width;
    }

    get Height(){
        return this.Canvas.canvas.height;
    }

    get LeftTop(){
        return new Vector(0,0);
    }

    get LeftBottom(){
        return new Vector(0, this.Height);
    }

    get RightTop(){
        return new Vector(this.Width, 0);
    }

    get RightBottom(){
        return new Vector(this.Width, this.Height);
    }

    get Center(){
        return new Vector(this.Width / 2, this.Height / 2);
    }

    private shouldResort : boolean = false;

    PriorityChanged(){
        this.shouldResort = true;
    }

    AddElement(element: Item){
        element.Scene
        this.elementsOnScene.push(element);  
        this.shouldResort = true;
    }

    RemoveElement(element: Item){
        this.elementsOnScene = 
            this.elementsOnScene
            .filter(e=> e != element);
    }

    constructor(context : CanvasRenderingContext2D, container? : HTMLDivElement){
        this.Canvas = context;

        this._mouseContext = new MouseContext(context);
        
        if(container)
            this._mouseContext.ListenEvents(container);
        else
            this._mouseContext.ListenEvents(context.canvas);

        Scene.ActiveScene = this;
    }

    Clear(){
        this.Canvas.clearRect(0,0,this.Canvas.canvas.width, this.Canvas.canvas.height);        
    }

    Redraw(){
        if(this.shouldResort){
            this._mouseContext.Resort();
            this.Resort();
            this.shouldResort = false;
        }
        this.Clear();
        
        this.ElementsOnScene.forEach(node =>{
            if(!node.IsActive)
                return;
            this.Canvas.save();
            node.OnUpdate();
            this.Canvas.restore();
        });
        
        this._mouseContext.Reset();
    }

    private intervalId;

    Run(){
        this.intervalId = setInterval(() => {
            this.Redraw();
        }, 8);
    }

    Stop(){
        clearInterval(this.intervalId);
    }

    private Resort(){
        let elements = [...this.elementsOnScene];
        elements.sort((a,b) => a.Priority - b.Priority);
        this.elementsOnScene = elements;
    }
}