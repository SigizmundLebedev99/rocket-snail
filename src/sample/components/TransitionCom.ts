import { Component } from "../../engine/core/Component";
import { Vector } from "../../engine/primitives/Vector";
import { Planet } from "../nodes/Planet";
import { SceneElement } from "../../engine/core/SceneElement";

export class TransitionCom extends Component{
    private transition = 0;
    increment:number;

    constructor(speed? : number){
        super();
        this.increment = speed??0.005;
    }

    OnUpdate(node:SceneElement): void {
        let planet = <Planet>node;
        let altitude = planet.orbitEllips;
        let kx = altitude.x * planet.orbitYCoefficient;
        let ky = -planet.orbitYCoefficient * altitude.y
        this.transition += planet.orbitYCoefficient * this.increment;
        planet.Transition = new Vector(kx * Math.sin(this.transition), ky * Math.cos(this.transition));
    }
}