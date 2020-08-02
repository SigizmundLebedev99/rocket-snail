import { Component } from "../../engine/core/Component";
import { Vector } from "../../engine/primitives/Vector";
import { Planet } from "../nodes/Planet";

export class TransitionCom extends Component{
    node : Planet;
    private transition = 0;
    increment:number;

    constructor(node : Planet, speed? : number){
        super();
        this.node = node;
        this.increment = speed??0.005;
    }

    OnUpdate(): void {
        let altitude = this.node.orbitEllips;
        let kx = altitude.x * this.node.orbitYCoefficient;
        let ky = -this.node.orbitYCoefficient * altitude.y
        this.transition += this.node.orbitYCoefficient * this.increment;
        this.node.Transition = new Vector(kx * Math.sin(this.transition), ky * Math.cos(this.transition));
    }
}