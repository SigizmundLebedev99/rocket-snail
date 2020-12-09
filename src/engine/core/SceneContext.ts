import { MouseContext } from "./MouseContext";
import { Scene } from "./Scene";
import { SceneElement } from "./SceneElement";
import { Vector } from "../primitives/Vector";

export class SceneContext{
    readonly Canvas : CanvasRenderingContext2D;

    private _mouse : MouseContext;
    private _scene : Scene;

    get Mouse(){
        return this._mouse;
    }

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
        this._scene.ShouldResort = true;     
        if(this._root)
            this._root.AddChild(element);
    }

    RemoveElement(element: SceneElement){
        this._scene.ElementsOnScene = 
            this._scene.ElementsOnScene
            .filter(e=> e != element);
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