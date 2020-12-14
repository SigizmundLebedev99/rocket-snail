import { Component } from "../core/Component";

export class DrawLabelCom extends Component{
    map : () => Path2D;
    fill : boolean;
    stroke : boolean;

    constructor(map:Path2D | (() => Path2D), fill = true, stroke = true){
        super();
        if(map instanceof Path2D)
            this.map = () => map;
        else
            this.map = map;
        this.fill = fill;
        this.stroke = stroke;
    }

    OnUpdate({context}): void {
        var path = this.map();
        if(this.fill)
            context.fill(path);
        if(this.stroke)
            context.stroke(path);
    }
}