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
        let height = this.node.Camera.Convert(new Point(0,0))?.y;
        if(height)
            this.node.Priority = height;
    }
}