import { SceneElement } from "../../engine/core/SceneElement";
import { Scene } from "../../engine/core/Scene";
import { DrawLabelCom } from "../../engine/general-components/DrawLabelCom";
import { Label } from "../../engine/primitives/Label";
import { Point } from "../../engine/primitives/Point";
import { SceneContext } from "../../engine/core/SceneContext";

export class LabelNode extends SceneElement{
    constructor(view:SceneContext, text:string, position?: Point){
        super(view);
        this.Position = 'absolute';
        this.Style.fillStyle = 'white';
        this.Priority = 10000;
        this.AddComponent(new DrawLabelCom(()=>new Label(text, position)));
    }
}