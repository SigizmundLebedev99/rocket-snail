import { Component } from "../../engine/map/Component";
import { Node } from "../../engine/map/Node";
import { Vector } from "../../engine/primitives/Vector";
import { Planet } from "../nodes/Planet";

export class PerspectiveCom extends Component{

    node : Planet;
    nearest : number;
    originalScale : Vector;

    constructor(node:Planet, nearest:number){
        super();
        this.node = node;
        this.originalScale = node.Scale;
        this.nearest = nearest;
    }

    OnUpdate(): void {
        let nearest = this.node.orbitEllips;
        let relation = 3/(this.node.Transition.y + nearest.y + 3);
        this.node.orbitYCoefficient = relation;
        this.node.Scale = this.originalScale.Product(relation);
    }
}