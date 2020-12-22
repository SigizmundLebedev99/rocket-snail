import { IPath } from '../interfaces/IPath';
import { Vector } from './Vector';

export class Line  implements IPath{
  public p1: Vector;
  public p2: Vector;

  constructor(p1: Vector, p2: Vector) {
    this.p1 = p1;
    this.p2 = p2;
  }

  GetPath(){
    let path = new Path2D();
    path.moveTo(this.p1.x, this.p1.y);
    path.lineTo(this.p2.x, this.p2.y);
    return path;
  }
}