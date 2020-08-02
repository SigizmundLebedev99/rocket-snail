import { Component } from "../../engine/core/Component";
import { Node } from "../../engine/core/Node";
import { Vector } from "../../engine/primitives/Vector";
import { Planet } from "../nodes/Planet";
import { Point } from "../../engine/primitives/Point";

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
        let view = this.node.View;
        if(!view)
            return;
        let nearest = view.Height/2;
        let nodeY = this.node.Camera.Convert(new Point(0,0))?.y;
        if(!nodeY)
            return;
        this.node.orbitYCoefficient = nodeY/nearest;
        this.node.Scale = this.originalScale.Product(this.node.orbitYCoefficient);
    }
}