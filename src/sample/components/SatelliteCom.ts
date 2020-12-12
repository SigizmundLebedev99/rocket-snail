import { Component } from "../../engine/core/Component";
import { Item } from "../../engine/core/Item";
import { Vector } from "../../engine/primitives/Vector";

export class SatelliteCom extends Component{
    constructor(){
        super();
    }

    OnUpdate({node}): void {
        node.Priority = node.ToGlobal(new Vector(0,0)).y;
    }
}