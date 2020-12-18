import { Component, IState } from '../core/Component';
import { Item } from '../core/Item';
import { Vector } from '../primitives/Vector';

export class DragDrop extends Component {
  mouseDown = false;
  itemToDrag?: Item;

  constructor(drag?: Item){
    super();
    this.itemToDrag = drag;
  }

  OnUpdate({ mouseState, node }: IState): void {
    if (mouseState.IsCaptured && !this.mouseDown)
      this.mouseDown = true;
    if (!mouseState.IsCaptured && this.mouseDown)
      this.mouseDown = false;
    if (!this.mouseDown)
      return;

    if(this.itemToDrag)
      node = this.itemToDrag;

    let d = mouseState.Movement;

    if (d == null)
      return;

    if (node.Parent != null) {
      let scale = node.Parent.TotalScale;
      var v = new Vector(d.x / scale.x, d.y / scale.y);
      v.Rotate(-node.TotalRotation);
      node.Transition.AddV(v);
    }
    else
      node.Transition.Add(d.x, d.y);
  }
}