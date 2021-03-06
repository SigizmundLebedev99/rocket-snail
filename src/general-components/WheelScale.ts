import { Component, IState } from "../core/Component";
import { Item } from "../core/Item";

export class WheelScale extends Component {
  itemToScale? : Item;

  constructor(itemToScale? : Item) {
    super();
    this.itemToScale = itemToScale;
  }

  OnUpdate(state: IState): void {
    let { mouseState, node } = state;
    
    if (!mouseState.IsIn || !mouseState.WheelEvent)
      return;
    if(this.itemToScale)
      node = this.itemToScale;
    var delta = 1 + mouseState.WheelEvent.deltaY / 2000;
    node.Scale.Multiply(delta);
  }
}