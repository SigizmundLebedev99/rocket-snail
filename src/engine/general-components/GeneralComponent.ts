import { Component, MouseComponent } from "../core/Component";
import { SceneElement } from "../core/SceneElement";

export class GeneralComponent extends Component{    
    private action : (node:SceneElement) => void; 

    constructor(action : (node:SceneElement) => void){
        super();
        this.action = action;
    }
    
    OnUpdate(node: SceneElement): void {
        this.action(node);
    }
}