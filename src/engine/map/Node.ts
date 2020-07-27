import { Component } from "./Component";
import { NodeStyle } from "./NodeStyle";
import { Camera } from "./Camera";
import { BaseState } from "../BaseState";

export class Node<T> extends BaseState {
    isMouseIn : boolean = false;

    readonly Components : Component[] = [];
    readonly Style : NodeStyle = new NodeStyle();

    DependentNodes : Node<unknown>[] = [];

    Content : T | null = null;

    private camera : Camera | null = null;
    get Camera(){
        return this.camera;
    }

    AddChild(element: Node<unknown>){
        element.camera = Camera.FromState(this);
        this.DependentNodes.push(element);
        return element;
    }

    AddComponent(component : Component){
        component.OnStart();
        this.Components.push(component);
    }

    private onUpdate(){
        this.Components.forEach(c=>c.OnUpdate());
    }
}