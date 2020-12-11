import { IPointIn } from '../interfaces/IPointIn';
import { Vector } from './Vector';

export class Polygon implements IPointIn{

    public vertexes : Vector[];

    constructor(vertexes : Vector[]){
        this.vertexes = vertexes;
    }
    
    IsPointIn(point: Vector): boolean {
        throw new Error("Method not implemented.");
    }
}