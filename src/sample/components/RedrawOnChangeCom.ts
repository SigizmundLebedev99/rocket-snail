import { Component } from "../../engine/core/Component";
import { SceneContext } from "../../engine/core/SceneContext";
import { MouseState } from "../../engine/core/MouseContext";

export class RedrawOnChange extends Component{
    view:SceneContext;
    map: () => MouseState;
    constructor(viewToRedraw: SceneContext, map:() => MouseState){
        super();
        this.view = viewToRedraw;
        this.map = map;
    }

    OnUpdate(): void {
        let state = this.map();
        if(state.IsCaptured || (state.IsIn && state.KeyState.key == 'wheel'))
            this.view.Redraw();
    }
}