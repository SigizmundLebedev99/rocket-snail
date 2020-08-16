import { Component } from "../core/Component";
import { SceneElement } from "../core/SceneElement";
import { Label } from "../primitives/Label";

export class DrawLabelCom extends Component{
    node : SceneElement;
    map : () => Label;
    constructor(node:SceneElement, map:() => Label){
        super();
        this.node = node;
        this.map = map;
    }

    OnUpdate(): void {
        let label = this.map();
        let context = this.node.Scene.Canvas;
        let point = this.node.Position == 'absolute' ? this.node.Camera.Convert(label.position) : label.position ;
        
        context.save();
        if(label.stroke){
            context.strokeStyle = label.stroke;
            context.strokeText(label.text, point.x, point.y);
        }
        if(label.fill){
            context.fillStyle = label.fill;
        }
        context.fillText(label.text, point.x, point.y);
        context.restore();
    }
}