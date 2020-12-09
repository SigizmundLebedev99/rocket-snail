import { SceneElement } from "../../engine/core/SceneElement";
import { Scene } from "../../engine/core/Scene";
import { DrawLabelCom } from "../../engine/general-components/DrawLabelCom";
import { Label } from "../../engine/primitives/Label";
import { SceneContext } from "../../engine/core/SceneContext";
import { Vector } from "../../engine/primitives/Vector";

export class LabelNode extends SceneElement{
    constructor(view:SceneContext, text:string, position?: Vector){
        super(view);
        this.Position = 'absolute';
        this.Style.fillStyle = 'white';
        this.Priority = 10000;
        this.AddComponent(new DrawLabelCom(()=>new Label(text, position)));
    }
}