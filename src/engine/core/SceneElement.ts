import { Component, DrawComponent, MouseComponent, BaseComponent } from "./Component";
import { Style } from "./Style";
import { CoordinateGrid } from "./CoordinateGrid";
import { BaseState } from "./BaseState";
import { SceneContext } from "./SceneContext";
import { IPointIn } from "../interfaces/IPointIn";
import { MouseState, MouseContext } from "./MouseContext";

export type NodePosition = "relative" | "absolute"

export class SceneElement extends BaseState {
    private _scene : SceneContext;

    get Scene(){
        return this._scene;
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
    private drawComponents : DrawComponent[] = [];
    private mouseComponents : MouseComponent[] = [];

    readonly Style : Style = new Style();

    private mouseContext? : MouseContext;
    set MouseContext(val:MouseContext){
        this.mouseContext = val;
    }

    constructor(view: SceneContext, active:boolean = true){
        super();
        this._scene = view;
        this.isActive = active;
        view.AddElement(this);
    }

    get CoordinateGrid(){
        return new CoordinateGrid(this);
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

    AddComponent(component : Component | DrawComponent | MouseComponent){
        component.PriorityChanged = this.ResortComponents;
        if(component instanceof Component)
            this.components.push(component);
        else if(component instanceof DrawComponent)
            this.drawComponents.push(component);
        else
            this.mouseComponents.push(component);
        this.ResortComponents();
        return this;
    }

    private map?: ()=>MouseState;
    CaptureMouse(map:() => IPointIn){
        if(this.mouseContext)
            this.map = this.mouseContext.CaptureMouse(this, map);
        return this;
    }

    private ResortComponents(){
        this.components = [...this.components].sort((a,b) => b.Priority - a.Priority);
        this.drawComponents = [...this.drawComponents].sort((a,b) => b.Priority - a.Priority);
        this.mouseComponents = [...this.mouseComponents].sort((a,b) => b.Priority - a.Priority);
    }

    private CheckIfStarted(component: BaseComponent){
        if(component.Started)
            return;
        
        component.OnStart(this);
        component.Started = true;
    }

    OnMouseUpdate(){
        if(this.map){
            let mouseState = this.map();
            this.mouseComponents.forEach(c => {
                this.CheckIfStarted(c);
                c.OnUpdate(this, mouseState);
            });
        }
    }

    OnDrawUpdate(){
        if(this.drawComponents.length == 0)
            return;

        if(this.Position == 'relative')
            this.CoordinateGrid.PrepareAxis(this._scene.Canvas)

        this.drawComponents.forEach(c=>{
            this.CheckIfStarted(c);
            c.OnUpdate(this, this._scene.Canvas);
        });
    }

    OnComponentsUpdate(){
        this.components.forEach(c=>{
            this.CheckIfStarted(c); 
            c.OnUpdate(this);
        });
    }
}