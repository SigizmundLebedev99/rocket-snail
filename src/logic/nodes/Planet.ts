import { Node } from "../../engine/core/Node";
import { DrawPointCom } from "../../engine/general-components/DrawPointCom";
import { Point } from "../../engine/primitives/Point";
import { Vector } from "../../engine/primitives/Vector";
import { View } from "../../engine/core/View";

export class Planet extends Node{

    orbitYCoefficient : number = 1;
    orbitEllips : Vector;
    Name : string;

    constructor(view: View, name : string, orbitEllips:Vector, color?:string){
        super(view);
        this.orbitEllips = orbitEllips
        this.Name = name;
        this.Style.fillStyle = color??"red";
        this.Style.pointRadius = 1;
        this.Style.lineWidth = 0.1;
        this.AddComponent(new DrawPointCom(this, o => new Point(0,0)));
    }  
}