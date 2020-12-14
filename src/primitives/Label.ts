import { Vector } from "./Vector";

export class Label {
  position: Vector;
  text: string;

  constructor(text: string, position?: Vector) {
    if (position)
      this.position = position;
    else
      this.position = new Vector(0, 0);
    this.text = text;
  }
}