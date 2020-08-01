import { Component } from "../../engine/map/Component";
import { Vector } from "../../engine/primitives/Vector";
import { Planet } from "../nodes/Planet";

export class SatelliteTransition extends Component{
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
        let k = altitude.x * this.node.orbitYCoefficient;
        this.transition += this.node.orbitYCoefficient * this.increment;
        let tr = k * Math.sin(this.transition);
        this.node.Transition = new Vector(tr, -this.node.orbitYCoefficient * altitude.y * Math.cos(this.transition));
        let parent = this.node.ParentNode;
        if(parent == null)
            return

        if(this.node.Transition.y < 0){
            this.node.Priority = parent.Priority + 1;
        }
        else{
            this.node.Priority = parent.Priority -1;
        }
    }
}