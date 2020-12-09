import { Component, DrawComponent, MouseComponent, BaseComponent } from "./Component";
import { Style } from "./Style";
import { CoordinateGrid } from "./CoordinateGrid";
import { SceneContext } from "./SceneContext";
import { IPointIn } from "../interfaces/IPointIn";
import { MouseState, MouseContext } from "./MouseContext";
import { Vector } from "../primitives/Vector";
import { GeneralComponent } from "../general-components/GeneralComponent";
import { GeneralMouseComponent } from "../general-components/GeneralMouseComponent";

export type NodePosition = "relative" | "absolute"

export class SceneElement {
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

    Transition : Vector = new Vector(0,0);
    Rotation : number = 0;
    Scale : Vector = new Vector(1,1);

    get TotalTransition(){
        if(this.Parent != null)
            return this.Transition.Copy().MultiplyV(this.Parent.Scale).AddV(this.Parent.TotalTransition);
        return this.Transition;
    }

    get TotalRotation(){
        if(this.Parent != null)
            return this.Rotation + this.Parent.TotalRotation;
        return this.Rotation;
    }

    get TotalScale() : Vector{
        if(this.Parent != null){
            let baseScale = this.Parent.TotalScale;
            return this.Scale.Copy().MultiplyV(baseScale);
        }
        return this.Scale;
    }

    private mouseContext : MouseContext;

    constructor(view: SceneContext, active:boolean = true){
        this._scene = view;
        this.mouseContext = view.Mouse;
        view.AddElement(this);
        this.isActive = active;
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

        element.parent = this;
        this.children.push(element);
        return this;
    }

    Remove(){
        this._scene.RemoveElement(this);
        if(this.parent != null){
            this.parent.children = this.parent.children.filter(e=>e != this);
        }
        this.children.forEach(e => e.Remove());
    }

    RemoveChild(element: SceneElement){
        if(element.Parent != this || !this.children.some(e=>e==element))
            throw "Unable to remove. Element is not child element";

        element.parent = null;
        //TODO: Add styles backuping;
        this.children = this.children.filter(e=>e!= element);
    }

    AddComponent(component : Component | DrawComponent | MouseComponent | ((node: SceneElement) => void)){
        
        if(component instanceof Component)
            this.components.push(component);
        else if(component instanceof DrawComponent)
            this.drawComponents.push(component);
        else if(component instanceof MouseComponent)
            this.mouseComponents.push(component);
        else{
            component = new GeneralComponent(component)
            this.components.push(<Component>component);
        }
        component.PriorityChanged = this.ResortComponents;
        this.ResortComponents();
        return this;
    }

    AddMouseComponent(component : MouseComponent | ((node: SceneElement, state: MouseState) => void)){
        if(component instanceof MouseComponent)
            this.mouseComponents.push(component);
        else{
            component = new GeneralMouseComponent(component);
            this.mouseComponents.push(<MouseComponent>component);
        }
        component.PriorityChanged = this.ResortComponents;
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

        Style.Apply(this._scene.Canvas, this);

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