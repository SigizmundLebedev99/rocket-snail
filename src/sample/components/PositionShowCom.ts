import { Component } from "../../engine/core/Component";
import { Item } from "../../engine/core/Item";
import { DrawLabelCom } from "../../engine/general-components/DrawLabelCom";
import { Label } from "../../engine/primitives/Label";
import { MouseState } from "../../engine/core/MouseContext";

export class PositionShowCom extends Component {
    lable? : Item;
    constructor() {
        super();
    }

    OnStart({node}) {
        var lable = new Item(node.Scene, false);
        lable.Style.fillStyle = "black";
        lable.Style.font = "15px serif"
        lable.Position = "absolute";
        lable.Priority = Number.MAX_VALUE;
        lable.AddComponent(new DrawLabelCom(() => new Label(node.Transition.x.toFixed(2) + ", " + node.Transition.y.toFixed(2))));
        this.lable = lable;
        node.AddChild(lable)
    }

    OnUpdate({node, mouseState}){
        if(!this.lable)
            return;
        if(mouseState.IsIn)
            this.lable.IsActive = true;
        else
            this.lable.IsActive = false;
    }
}