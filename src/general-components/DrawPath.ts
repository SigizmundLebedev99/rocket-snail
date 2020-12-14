import { Component, IState } from "../core/Component";
import { Style } from "../core/Style";

export class DrawPath extends Component {
  map: () => Path2D;
  fill: boolean;
  stroke: boolean;
  style? : Style;

  constructor(map: Path2D | (() => Path2D), style? : Style, fill = true, stroke = true) {
    super();
    if (map instanceof Path2D)
      this.map = () => map;
    else
      this.map = map;
    this.fill = fill;
    this.stroke = stroke;
    this.style = style;
  }

  OnUpdate({ context } : IState): void {
    var path = this.map();

    if(this.style){
      context.save();
      Style.Apply(context, this.style);
    }

    if (this.fill)
      context.fill(path);
    if (this.stroke)
      context.stroke(path);

    if(this.style){
      context.restore();
    }
  }
}