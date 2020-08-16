import { Component } from "./Component";
import { Style } from "./Style";
import { Camera } from "./Camera";
import { BaseState } from "./BaseState";
import { SceneContext } from "./SceneContext";

export type NodePosition = "relative" | "absolute"

export class SceneElement extends BaseState {

    private _view : SceneContext;

    private isOnScene : boolean = false;

    get Scene(){
        return this._view;
    }

    get IsOnScene(){
        return this.isOnScene
    }

    set IsOnScene(val: boolean){
        if(this._view.ElementsOnScene.some(e=>e == this)){
            if(!val)
                throw "You can't set <IsOnScene> property to false, when element is on scene";
            this.isOnScene = true;
        }
        else{
            if(val)
                throw "You can't set <IsOnScene> property to true, when element isn't on scene";
            this.isOnScene = false;
        }
    }

    IsActive : boolean = true;
    Position : NodePosition = "relative";

    private priority : number = 1;
    
    get Priority(){
        return this.priority;
    }
    set Priority(v : number){
        this.priority = v;
        this.Scene.PriorityChanged();
    }

    private parent : SceneElement | null = null;
    get Parent(){
        return this.parent;
    }

    private children : SceneElement[] = [];
    get Children(){
        return [...this.children];
    }

    private components : Component[] = [];
    get Components(){
        return [...this.components];
    }

    readonly Style : Style = new Style();

    constructor(view: SceneContext){
        super();
        this._view = view;
    }

    get Camera(){
        return new Camera(this,this.Scene);
    }

    AddChild(element: SceneElement){
        if(element.Parent != null)
            element.Parent.RemoveChild(element, false);

        element.BaseState = this;
        element.Style.Copy(this.Style);
        element.parent = this;

        if(this.isOnScene && !element.isOnScene)
            this._view.AddElement(element);
        this.children.push(element);
        return this;
    }

    RemoveChild(element: SceneElement, removeFromScene? : boolean){
        if(!this.children.some(e=>e==element))
            throw "Unable to remove. Element is not child element";

        this.children = this.children.filter(e=>e!= element);
        if(removeFromScene)
            this._view.RemoveElement(element);
    }

    AddComponent(component : Component){
        this.components.push(component);
        return this;
    }

    OnUpdate(){
        this.Components.forEach(c=>{
            if(!c.Started){
                c.OnStart();
                c.Started = true;
            }
                
            c.OnUpdate();
        });
    }
}