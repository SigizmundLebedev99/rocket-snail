import { Component, IState } from "../../src/core/Component";
import { Item } from "../../src/core/Item";
import { Style } from "../../src/core/Style";
import { DrawLabel } from "../../src/general-components/DrawLabel";
import { Label } from "../../src/primitives/Label";
import { Vector } from "../../src/primitives/Vector";

export class PositionShowCom extends Component {
  lable?: Item;
  constructor() {
    super();
  }

  OnStart({ node }: IState) {
    var lable = new Item();
    lable.IsActive = false;
    lable.Style.fillStyle = "black";
    lable.Style.font = "15px serif"
    lable.InheritTransform = false;
    lable.Priority = Number.MAX_VALUE;
    lable.AddComponent(() => lable.Transition = node.ToGlobal(new Vector(0,0)));
    lable.AddComponent(new DrawLabel(() => node.Transition.x.toFixed(2) + ", " + node.Transition.y.toFixed(2), new Style({fillStyle:"teal"})));
    this.lable = lable;
    node.AddChild(lable)
  }

  OnUpdate({ mouseState }) {
    if (!this.lable)
      return;
    if (mouseState.IsIn)
      this.lable.IsActive = true;
    else
      this.lable.IsActive = false;
  }
}