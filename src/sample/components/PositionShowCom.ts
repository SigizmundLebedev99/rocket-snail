import { Component } from "../../engine/core/Component";
import { Item } from "../../engine/core/Item";
import { DrawLabelCom } from "../../engine/general-components/DrawLabelCom";
import { Label } from "../../engine/primitives/Label";

export class PositionShowCom extends Component {
    lable? : Item;
    constructor() {
        super();
    }

    OnStart({node}) {
        var lable = new Item();
        lable.IsActive = false;
        lable.Style.fillStyle = "black";
        lable.Style.font = "15px serif"
        lable.ApplyTransform = false;
        lable.Priority = Number.MAX_VALUE;
        lable.AddComponent(new DrawLabelCom(() => new Label(node.Transition.x.toFixed(2) + ", " + node.Transition.y.toFixed(2))));
        this.lable = lable;
        node.AddChild(lable)
    }

    OnUpdate({mouseState}){
        if(!this.lable)
            return;
        if(mouseState.IsIn)
            this.lable.IsActive = true;
        else
            this.lable.IsActive = false;
    }
}