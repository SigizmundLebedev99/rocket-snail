import { IPath } from '../interfaces/IPath';
import { Vector } from './Vector';

export class Polygon implements IPath{

    public vertexes : Vector[];

    constructor(vertexes : Vector[]){
        this.vertexes = vertexes;
    }
    
    GetPath(): Path2D {
        throw new Error("Method not implemented.");
    }
}