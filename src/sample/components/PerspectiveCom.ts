import { Component } from "../../engine/core/Component";
import { Vector } from "../../engine/primitives/Vector";
import { Planet } from "../nodes/Planet";

export class PerspectiveCom extends Component{

    node : Planet;
    planeAngle : number;
    originalScale : Vector;

    constructor(node:Planet, planeAngle:number){
        super();
        this.node = node;
        this.originalScale = node.Scale;
        this.planeAngle = planeAngle;
    }

    OnUpdate(): void {
        let view = this.node.Scene;
        if(!view)
            return;
        let nodeY = this.node.Transition.y;
        if(nodeY == 0){
            this.node.orbitYCoefficient = 1;
        }
        else if(nodeY >= 0){
            this.node.orbitYCoefficient = 1 - Math.abs(nodeY)/this.planeAngle;  
        }
        else{
            this.node.orbitYCoefficient = 1 + Math.abs(nodeY)/this.planeAngle;
        }
        this.node.Scale = this.originalScale.Product(this.node.orbitYCoefficient);
    }
}