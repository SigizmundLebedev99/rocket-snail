import { Component, IState } from "../core/Component";
import { Style } from "../core/Style";
import { Label } from "../primitives/Label";
import { Vector } from "../primitives/Vector";

export class DrawLabel extends Component {
  map: () => string | Label;
  style? : Style

  constructor(map: Label | string | (() => Label) | (() => string), style? : Style) {
    super();

    if (typeof (map) == 'function')
      this.map = map;
    else
      this.map = () => map;
    this.style = style;
  }

  OnUpdate({ context } : IState): void {
    let label = this.map();

    if(this.style){
      context.save();
      Style.Apply(context, this.style);
    }
    
    if (label instanceof Label) {
      let point = label.position;
      context.fillText(label.text, point.x, point.y);
    }
    else {
      let point = new Vector(0, 0);
      context.fillText(label, point.x, point.y);
    }

    if(this.style)
      context.restore();
  }
}