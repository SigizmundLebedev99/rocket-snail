import { IPath } from '../interfaces/IPath';
import { Vector } from './Vector';

export class Polygon implements IPath {
  public vertices : Vector[];

  constructor(vertexes: Vector[]) {
    this.vertices = vertexes;
  }

  GetPath(): Path2D {
    var path = new Path2D();
    let vector = this.vertices[0];
    path.moveTo(vector.x, vector.y)
    for (let i = 1; i < this.vertices.length; i++) {
      vector = this.vertices[i];
      path.lineTo(vector.x, vector.y);
    }
    path.closePath();
    return path;
  }
}