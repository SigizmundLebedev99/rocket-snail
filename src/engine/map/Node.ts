import { Component } from "./Component";
import { NodeStyle } from "./NodeStyle";
import { Camera } from "./Camera";
import { BaseState } from "../BaseState";

export class Node extends BaseState {
    isMouseIn : boolean = false;

    readonly Components : Component[] = [];
    readonly Style : NodeStyle = new NodeStyle();

    DependentNodes : Node[] = [];

    get Camera(){
        return Camera.FromState(this);
    }

    AddChild(element: Node){
        element.From(this);
        this.DependentNodes.push(element);
        return element;
    }

    AddComponent(component : Component){
        component.OnStart();
        this.Components.push(component);
    }

    OnUpdate(){
        this.Components.forEach(c=>c.OnUpdate());
    }
}