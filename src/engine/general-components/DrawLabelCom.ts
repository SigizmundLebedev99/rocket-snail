import { Component, DrawComponent } from "../core/Component";
import { SceneElement } from "../core/SceneElement";
import { Label } from "../primitives/Label";

export class DrawLabelCom extends DrawComponent{

    map : () => Label;
    constructor(map:() => Label){
        super();
        this.map = map;
    }

    OnUpdate(node: SceneElement, context: CanvasRenderingContext2D): void {
        let label = this.map();
        
        let point = node.Position == 'absolute' ? node.CoordinateGrid.Convert(label.position) : label.position ;
        
        context.fillText(label.text, point.x, point.y);
    }
}