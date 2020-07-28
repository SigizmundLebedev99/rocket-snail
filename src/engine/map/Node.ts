import { Component } from "./Component";
import { NodeStyle } from "./NodeStyle";
import { Camera } from "./Camera";
import { BaseState } from "../BaseState";
import { View } from "./View";

export class Node extends BaseState {
    
    private priority : number = 0;

    get Priority(){
        return this.priority;
    }

    set Priority(v : number){
        this.priority = v;
        View.Resort();
    }

    readonly Components : Component[] = [];
    readonly Style : NodeStyle = new NodeStyle();

    readonly DependentNodes : Node[] = [];

    get Camera(){
        return Camera.FromState(this);
    }

    AddChild(element: Node){
        element.From(this);
        this.DependentNodes.push(element);
        View.AddChild(element);
        return element;
    }

    AddComponent(component : Component){
        this.Components.push(component);
        component.OnStart();
    }

    OnUpdate(){
        this.Components.forEach(c=>c.OnUpdate());
    }
}