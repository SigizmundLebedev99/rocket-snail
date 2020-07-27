import { Point } from "./Point";

export class Label{
    position : Point;
    text : string;
    absolute: boolean;
    constructor(position:Point, text:string, absolute?: boolean){
        this.position = position;
        this.text = text;
        if(absolute !== undefined)
            this.absolute = absolute;
        else
            this.absolute = false;
    }
}