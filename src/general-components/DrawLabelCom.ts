import { Component, IState } from "../core/Component";
import { Label } from "../primitives/Label";
import { Vector } from "../primitives/Vector";

export class DrawLabel extends Component {
  map: () => string | Label;
  inheritTransition: boolean;

  constructor(map: Label | string | (() => Label) | (() => string), inheritTransition = true) {
    super();

    if (typeof (map) == 'function')
      this.map = map;
    else
      this.map = () => map;

    this.inheritTransition = inheritTransition;
  }

  OnUpdate({ node, context } : IState): void {
    let label = this.map();
    if (label instanceof Label) {
      let point = label.position;
      context.fillText(label.text, point.x, point.y);
    }
    else {
      let point = new Vector(0, 0);
      context.fillText(label, point.x, point.y);
    }
  }
}