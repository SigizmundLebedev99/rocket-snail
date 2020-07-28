import { Component } from "../../engine/map/Component";
import { Node } from "../../engine/map/Node";
import { Vector } from "../../engine/primitives/Vector";

export class SatelliteTransition extends Component{
    node : Node;
    transition = 0;
    increment:number;
    changed : boolean = true;
    amplitude : number = 4
    constructor(node : Node, speed : number, amplitude? : number){
        super();
        this.node = node;
        this.increment = speed;
        if(amplitude)
            this.amplitude = amplitude;
    }

    OnStart(){
        if(this.node.Priority == 0)
            this.node.Priority = 0.5;
    }

    OnUpdate(): void {
        this.transition += this.increment;
        let tr = 5 * Math.sin(this.transition);
        this.node.transition = new Vector(tr, -Math.cos(this.transition));
        if(tr > 4.5){
            if(!this.changed){
                this.node.Priority = -this.node.Priority;
                this.changed = true;
            }
        }     
        if(tr < -4.5){
            if(this.changed){
                this.node.Priority = -this.node.Priority;
                this.changed = false;
            }
        }
    }
}