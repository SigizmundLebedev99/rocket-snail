import { Component } from "../../engine/core/Component";
import { Vector } from "../../engine/primitives/Vector";
import { Planet } from "../nodes/Planet";
import { Node } from "../../engine/core/Node";
import { Point } from "../../engine/primitives/Point";

export class SatelliteCom extends Component{
    node : Node;

    constructor(node : Node){
        super();
        this.node = node;
    }

    OnUpdate(): void {
        this.node.Priority = -this.node.TotalTransition.y;
    }
}