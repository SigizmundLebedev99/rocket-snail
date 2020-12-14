import { Component } from "../core/Component";
import { Label } from "../primitives/Label";

export class DrawLabelCom extends Component{

    map : () => Label;
    inheritTransition : boolean;

    constructor(map: Label | string | (() => Label), inheritTransition = true){
        super();
        if(map instanceof Label)
            this.map = () => map;
        else if(typeof(map) == 'string')
            this.map = () => new Label(map);
        else
            this.map = map;

        this.inheritTransition = inheritTransition;
    }

    OnUpdate({node, context}): void {
        let label = this.map();
        
        let point = !node.ApplyTransform && this.inheritTransition ? node.ToGlobal(label.position) : label.position ;
        
        context.fillText(label.text, point.x, point.y);
    }
}