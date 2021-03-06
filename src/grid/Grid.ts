import { Item } from "../core/Item";
import { Line } from "../primitives/Line";
import { DrawLine } from "../general-components/DrawLine";
import { Vector } from "../primitives/Vector";
import { Style } from "../core/Style";
import { Scene } from "../core/Scene";

export class Grid extends Item {

  private gap: number;
  // private xk : number;
  // private yk : number;
  constructor(gap: number, scene?: Scene) {
    super(scene);
    this.gap = gap;
    this.Priority = -1000;
    this.Style.lineWidth = 0.2;
    this.Style.strokeStyle = "black";
    this.InheritTransform = false;

    let { Width, Height } = this.Scene;

    this.AddComponent(new DrawLine(() => this.GetLongitudes()));
    this.AddComponent(new DrawLine(() => this.GetLatitudes()));

    this.AddComponent(new DrawLine(() => new Line(
      new Vector(- Width, this.Parent ? this.Parent.Transition.y : 0),
      new Vector(Width, this.Parent ? this.Parent.Transition.y : 0)
    ), new Style({
      lineWidth: 1
    })))

    this.AddComponent(new DrawLine(() => new Line(
      new Vector(this.Parent ? this.Parent.Transition.x : 0, - Height),
      new Vector(this.Parent ? this.Parent.Transition.x : 0, Height)
    ), new Style({
      lineWidth: 1
    })))
  }

  private GetLatitudes() {
    let { Width, Height } = this.Scene;
    let arr: Line[] = [];
    let position = this.Parent ? this.Parent.Transition : new Vector(0, 0);
    let gap = this.Parent ? Math.abs(this.Parent.Scale.x) : this.gap;
    
    let x = position.x % gap;

    while (x < Width) {
      let _x = x;
      arr.push(new Line(
        new Vector(_x, 0),
        new Vector(_x, Height)
      ));
      x += gap;
    }
    return arr;
  }

  private GetLongitudes() {
    let { Width, Height } = this.Scene;
    if (!this.Parent)
      return [];
    let arr: Line[] = [];
    let position = this.Parent ? this.Parent.Transition : new Vector(0, 0);
    let gap = this.Parent ? Math.abs(this.Parent.Scale.y) : this.gap;

    let y = position.y % gap;

    while (y < Height) {
      let _y = y;
      arr.push(new Line(
        new Vector(0, _y),
        new Vector(Width, _y)
      ));
      y += gap;
    }
    return arr;
  }
}