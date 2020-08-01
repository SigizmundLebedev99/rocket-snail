import { Component } from "./Component";
import { NodeStyle } from "./NodeStyle";
import { Camera } from "./Camera";
import { BaseState } from "../BaseState";
import { View } from "./View";

export class Node extends BaseState {

    private _view : View | null = null;

    get View(){
        return this._view;
    }

    set View(v : View | null){
        if(v == null)
            return;
        this.DependentNodes.forEach(node => {
            v.AddChild(node);
        });
            
        this._view = v;
    }

    Position : "relative" | "absolute" = "relative";

    private priority : number = 1;

    get Priority(){
        return this.priority;
    }

    set Priority(v : number){
        this.priority = v;
        if(this.View)
            this.View.Resort();
    }

    ParentNode : Node | null = null;
    readonly DependentNodes : Node[] = [];

    readonly Components : Component[] = [];
    readonly Style : NodeStyle = new NodeStyle();

    get Camera(){
        return new Camera(this);
    }

    AddChild(element: Node){
        element.BaseState = this;
        element.Style.Copy(this.Style);
        element.ParentNode = this;
        this.DependentNodes.push(element);
        if(this.View)
            this.View.AddChild(element);
        return this;
    }

    AddComponent(component : Component){
        this.Components.push(component);
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