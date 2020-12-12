import { Component } from "../../engine/core/Component";
import { Vector } from "../../engine/primitives/Vector";
import { Planet } from "../nodes/Planet";
import { Item } from "../../engine/core/Item";

export class PerspectiveCom extends Component{

    planeAngle : number;
    originalScale? : Vector;

    constructor(planeAngle:number){
        super();
        this.planeAngle = planeAngle;
    }

    OnStart({node}){
        this.originalScale = node.Scale;
    }

    OnUpdate({node}): void {
        let planet = <Planet>node;
        let nodeY = planet.Transition.y;
        if(nodeY == 0){
            planet.orbitYCoefficient = 1;
        }
        else if(nodeY >= 0){
            planet.orbitYCoefficient = 1 - Math.abs(nodeY)/this.planeAngle;  
        }
        else{
            planet.orbitYCoefficient = 1 + Math.abs(nodeY)/this.planeAngle;
        }
        if(this.originalScale)
            planet.Scale = this.originalScale.Copy().Multiply(planet.orbitYCoefficient);
    }
}