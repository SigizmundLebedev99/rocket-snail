import { Vector } from './Vector';

export class Line {
  public p1: Vector;
  public p2: Vector;

  constructor(p1: Vector, p2: Vector) {
    this.p1 = p1;
    this.p2 = p2;
  }
}