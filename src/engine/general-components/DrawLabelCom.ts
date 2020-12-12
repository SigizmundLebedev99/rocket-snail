import { Component } from "../core/Component";
import { Item } from "../core/Item";
import { Label } from "../primitives/Label";

export class DrawLabelCom extends Component{

    map : () => Label;
    constructor(map:() => Label){
        super();
        this.map = map;
    }

    OnUpdate({node, context}): void {
        let label = this.map();
        
        let point = node.Position == 'absolute' ? node.ToGlobal(label.position) : label.position ;
        
        context.fillText(label.text, point.x, point.y);
    }
}