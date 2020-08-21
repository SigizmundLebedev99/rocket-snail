import { Point } from "../primitives/Point";
import { MouseContext } from "./MouseContext";
import { Scene } from "./Scene";
import { SceneElement } from "./SceneElement";
import { IPointIn } from "../interfaces/IPointIn";

export class SceneContext{
    readonly Canvas : CanvasRenderingContext2D;

    private _mouse : MouseContext;
    private _scene : Scene;

    get ElementsOnScene(){
        return [...this._scene.ElementsOnScene];
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
    private _root : SceneElement;
    get Root(){
        return this._root;
    }

    constructor(scene : Scene, mouseContext: MouseContext){
        this._scene = scene;
        this.Canvas = scene.Canvas;
        this._mouse = mouseContext;
        let root = new SceneElement(this);
        root.Position = 'absolute';
        root.Priority = -10000;
        this.AddElement(root);
        this._root = root;
    }

    PriorityChanged(){
        this._scene.ShouldResort = true;
    }

    AddElement(element: SceneElement){
        this._scene.ElementsOnScene.push(element);       
    }

    RemoveElement(element: SceneElement){

        this._scene.ElementsOnScene = 
            this._scene.ElementsOnScene
            .filter(e=> e != element);
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