import { Point } from "../primitives/Point";
import { MouseContext } from "./MouseContext";
import { Scene } from "./Scene";
import { SceneElement } from "./SceneElement";
import { IPointIn } from "../interfaces/IPointIn";

export class SceneContext{
    readonly Canvas : CanvasRenderingContext2D;

    private _mouse : MouseContext;
    private _scene : Scene;
    
    private elementsOnScene : SceneElement[] = [];

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

    get Priority(){
        return this._scene.Priority;
    }
    
    PIXELS_METER = 45;

    constructor(scene : Scene, mouseContext: MouseContext){
        this._scene = scene;
        this.Canvas = scene.Canvas;
        this._mouse = mouseContext;
    }

    PriorityChanged(){
        this._mouse.Resort();
        this.Resort();
    }

    private Resort(){
        let elements = this.ElementsOnScene
        elements.sort((a,b) => a.Priority - b.Priority);
        this.elementsOnScene = elements;
    }

    AddElement(element: SceneElement){
        let elementsToAdd = [element];
        let i = 0;
        do{
            let current = elementsToAdd[i];
            current.Children.forEach(e=>elementsToAdd.push(e));
            i++;
        }while(i <= elementsToAdd.length - 1);

        elementsToAdd.forEach(e=>{
            this.elementsOnScene.push(e);
            e.IsOnScene = true;
        })
    }

    RemoveElement(element: SceneElement){
        let elementsToRemove = [element];
        let i = 0;
        do{
            let current = elementsToRemove[i];
            current.Children.forEach(e=>elementsToRemove.push(e));
            i++;
        }while(i <= elementsToRemove.length - 1);

        this.elementsOnScene = 
            this.elementsOnScene
            .filter(e=>!(elementsToRemove.some(remove=>remove == e)));

        elementsToRemove.forEach(e=>e.IsOnScene = false);
    }

    CaptureMouse(node: SceneElement, map:()=>IPointIn){
        return this._mouse.CaptureMouse(node, map);
    }

    Redraw(){
        this._scene.Redraw();
    }

    Run(){
        this._scene.Run();
    }

    Stop(){
        this._scene.Stop();
    }
}