import { Point } from "./Point";

export class Label{
    position : Point;
    text : string;

    constructor(position:Point, text:string){
        this.position = position;
        this.text = text;
    }
}