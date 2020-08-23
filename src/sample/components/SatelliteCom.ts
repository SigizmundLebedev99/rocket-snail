import { Component } from "../../engine/core/Component";
import { SceneElement } from "../../engine/core/SceneElement";

export class SatelliteCom extends Component{
    constructor(){
        super();
    }

    OnUpdate(node:SceneElement): void {
        node.Priority = -node.TotalTransition.y;
    }
}