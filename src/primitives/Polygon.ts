import { IPath } from '../interfaces/IPath';
import { Vector } from './Vector';

export class Polygon implements IPath {
  public vertexes: Vector[];

  constructor(vertexes: Vector[]) {
    this.vertexes = vertexes;
  }

  GetPath(): Path2D {
    var path = new Path2D();
    let vector = this.vertexes[0];
    path.moveTo(vector.x, vector.y)
    for (let i = 1; i < this.vertexes.length; i++) {
      vector = this.vertexes[i];
      path.lineTo(vector.x, vector.y);
    }
    path.closePath();
    return path;
  }
}