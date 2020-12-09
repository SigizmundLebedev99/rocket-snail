import { Component, MouseComponent } from "../core/Component";
import { MouseState } from "../core/MouseContext";
import { SceneElement } from "../core/SceneElement";

export class GeneralMouseComponent extends MouseComponent{    
    private action : (node:SceneElement, state:MouseState) => void; 

    constructor(action : (node:SceneElement, state:MouseState) => void){
        super();
        this.action = action;
    }
    
    OnUpdate(node: SceneElement, state: MouseState): void {
        this.action(node, state);
    }
}