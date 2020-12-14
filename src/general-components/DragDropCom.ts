import { Component, IState } from '../core/Component';
import { Vector } from '../primitives/Vector';

export class DragDrop extends Component {
  mouseDown = false;

  OnUpdate(state: IState): void {
    let { mouseState, node } = state;
    if (mouseState.IsCaptured && !this.mouseDown)
      this.mouseDown = true;
    if (!mouseState.IsCaptured && this.mouseDown)
      this.mouseDown = false;
    if (!this.mouseDown)
      return;

    let d = mouseState.Movement;

    if (d == null)
      return;

    if (node.ApplyTransform && node.Parent != null) {
      let scale = node.Parent.TotalScale;
      var v = new Vector(d.x / scale.x, d.y / scale.y);
      v.Rotate(-node.TotalRotation);
      node.Transition.AddV(v);
    }
    else
      node.Transition.Add(d.x, d.y);
  }
}