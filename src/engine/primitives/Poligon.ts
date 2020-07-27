import {Point} from './Point'

export class Polygon{

    private _vertexes : Point[];

    get vertexes(){
        return [...this._vertexes]
    }

    constructor(vertexes : Point[]){
        this._vertexes = vertexes;
    }
}