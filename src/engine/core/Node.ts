import { Component } from "./Component";
import { NodeStyle } from "./NodeStyle";
import { Camera } from "./Camera";
import { BaseState } from "../BaseState";
import { View } from "./View";
import { IPointIn } from "../primitives/IPointIn";

export class Node extends BaseState {

    private _view : View;

    get View(){
        return this._view;
    }

    get Mouse(){
        return this._view.Mouse;
    }

    CaptureMouse(map:(n:Node) => IPointIn){
        return this._view.Mouse.CaptureMouse(this, map);
    }

    Position : "relative" | "absolute" = "relative";

    private priority : number = 1;

    get Priority(){
        return this.priority;
    }

    set Priority(v : number){
        this.priority = v;
        this.View.Resort();
    }

    ParentNode : Node | null = null;
    readonly DependentNodes : Node[] = [];

    readonly Components : Component[] = [];
    readonly Style : NodeStyle = new NodeStyle();

    constructor(view: View){
        super();
        this._view = view;
        view.AddChild(this);
    }

    get Camera(){
        return new Camera(this,this.View);
    }

    AddChild(element: Node){
        element.BaseState = this;
        element.Style.Copy(this.Style);
        element.ParentNode = this;
        this.DependentNodes.push(element);
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