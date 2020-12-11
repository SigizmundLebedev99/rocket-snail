import { Component } from "../../engine/core/Component";
import { SceneElement } from "../../engine/core/SceneElement";
import { Vector } from "../../engine/primitives/Vector";

export class SatelliteCom extends Component{
    constructor(){
        super();
    }

    OnUpdate(node:SceneElement): void {
        node.Priority = node.CoordinateGrid.Convert(new Vector(0,0)).y;
    }
}