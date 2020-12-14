import { Component, IState } from "../core/Component";
import { Style } from "../core/Style";

export class Clip extends Component {
  map: () => Path2D;
  style? : Style;

  constructor(map: Path2D | (() => Path2D)) {
    super();
    this.Priority = 1;
    if (map instanceof Path2D)
      this.map = () => map;
    else
      this.map = map;
  }

  OnUpdate({ context } : IState): void {
    var path = this.map();
    context.clip(path);
  }
}