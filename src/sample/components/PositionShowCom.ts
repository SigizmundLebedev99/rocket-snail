import { MouseComponent } from "../../engine/core/Component";
import { SceneElement } from "../../engine/core/SceneElement";
import { DrawLabelCom } from "../../engine/general-components/DrawLabelCom";
import { Label } from "../../engine/primitives/Label";
import { MouseState } from "../../engine/core/MouseContext";

export class PositionShowCom extends MouseComponent {
    lable? : SceneElement;
    constructor() {
        super();
    }

    OnStart(node: SceneElement) {
        var lable = new SceneElement(node.Scene, false);
        lable.Style.fillStyle = "black";
        lable.Style.font = "15px serif"
        lable.Position = "absolute";
        lable.Priority = Number.MAX_VALUE;
        lable.AddComponent(new DrawLabelCom(() => new Label(node.Transition.x.toFixed(2) + ", " + node.Transition.y.toFixed(2))));
        this.lable = lable;
        node.AddChild(lable)
    }

    OnUpdate(node: SceneElement, mouseState: MouseState){
        if(!this.lable)
            return;
        if(mouseState.IsIn)
            this.lable.IsActive = true;
        else
            this.lable.IsActive = false;
    }
}