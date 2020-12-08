import { Vector } from "./Vector";

export class Label{
    position : Vector;
    text : string;
    stroke? : string;
    fill? : string;

    constructor(text:string, position?:Vector, fill?: string, stroke?: string){
        if(position)
            this.position = position;
        else
            this.position = new Vector(0,0);
        this.text = text;
        this.stroke = stroke;
        this.fill = fill;
    }
}