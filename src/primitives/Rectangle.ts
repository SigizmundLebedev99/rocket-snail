import { IPath } from "../interfaces/IPath";

export class Rectangle implements IPath {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  GetPath(): Path2D {
    var path = new Path2D();
    path.rect(this.x, this.y, this.width, this.height);
    return path;
  }
}