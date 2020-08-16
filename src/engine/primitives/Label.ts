import { Point } from "./Point";

export class Label{
    position : Point;
    text : string;
    stroke? : string;
    fill? : string;

    constructor(text:string, position?:Point, fill?: string, stroke?: string){
        if(position)
            this.position = position;
        else
            this.position = new Point(0,0);
        this.text = text;
        this.stroke = stroke;
        this.fill = fill;
    }
}