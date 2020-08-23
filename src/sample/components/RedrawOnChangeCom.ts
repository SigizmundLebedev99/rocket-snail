import { MouseComponent } from "../../engine/core/Component";
import { SceneContext } from "../../engine/core/SceneContext";
import { MouseState } from "../../engine/core/MouseContext";
import { SceneElement } from "../../engine/core/SceneElement";

export class RedrawOnChange extends MouseComponent{
    view:SceneContext;
    constructor(viewToRedraw: SceneContext){
        super();
        this.view = viewToRedraw;
    }

    OnUpdate(node: SceneElement, state:MouseState): void {
        if(state.IsCaptured || (state.IsIn && state.KeyState.key == 'wheel'))
            this.view.Redraw();
    }
}