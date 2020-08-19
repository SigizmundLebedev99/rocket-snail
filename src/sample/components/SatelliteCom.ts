import { Component } from "../../engine/core/Component";
import { Vector } from "../../engine/primitives/Vector";
import { Planet } from "../nodes/Planet";
import { SceneElement } from "../../engine/core/SceneElement";
import { Point } from "../../engine/primitives/Point";

export class SatelliteCom extends Component{
    node : SceneElement;

    constructor(node : SceneElement){
        super();
        this.node = node;
    }

    OnUpdate(): void {
        this.node.Priority = -this.node.TotalTransition.y;
    }
}