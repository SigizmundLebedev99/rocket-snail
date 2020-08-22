import { Component } from "./Component";
import { Style } from "./Style";
import { Camera } from "./Camera";
import { BaseState } from "./BaseState";
import { SceneContext } from "./SceneContext";

export type NodePosition = "relative" | "absolute"

export class SceneElement extends BaseState {

    private _view : SceneContext;

    get Scene(){
        return this._view;
    }

    private isActive : boolean = true;
    get IsActive(){
        return this.isActive;
    }

    Position : NodePosition = "relative";

    private priority : number = 1;
    
    get Priority(){
        return this.priority;
    }
    set Priority(v : number){
        if(v == this.priority)
            return;
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
        view.AddElement(this);
    }

    get Camera(){
        return new Camera(this,this.Scene);
    }

    private setActive(val: boolean){
        this.isActive = val;
        this.children.forEach(e=>e.setActive(val));
    }

    ActivateTree(){
        this.setActive(true);
    }

    DeactivateTree(){
        this.setActive(false);
    }

    AddChild(element: SceneElement){
        if(element.Parent != null)
            element.Parent.RemoveChild(element);

        element.BaseState = this;
        element.Style.Copy(this.Style);
        element.parent = this;
        this.children.push(element);
        return this;
    }

    RemoveChild(element: SceneElement){
        if(element.Parent != this || !this.children.some(e=>e==element))
            throw "Unable to remove. Element is not child element";
        element.BaseState = null;
        element.parent = null;
        //TODO: Add styles backuping;
        this.children = this.children.filter(e=>e!= element);
    }

    AddComponent(component : Component){
        component.PriorityChanged = this.ResortComponents;
        this.components.push(component);
        this.ResortComponents();
        return this;
    }

    private ResortComponents(){
        this.components = this.Components.sort((a,b) => b.Priority - a.Priority);
    }

    OnUpdate(){
        this.components.forEach(c=>{
            if(!c.Started){
                c.OnStart();
                c.Started = true;
            }
                
            c.OnUpdate();
        });
    }
}