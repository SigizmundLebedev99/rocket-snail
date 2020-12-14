import { Component } from "../core/Component";
import { Circle } from "../primitives/Circle";

export class DrawCircleCom extends Component{
    map : () => Circle;
    
    constructor(map : () => Circle){
        super();
        this.map = map;
    }

    OnUpdate({context}): void {
        let e = this.map();
        var path = e.GetPath();
        context.fill(path);
        context.stroke(path);
    }
}