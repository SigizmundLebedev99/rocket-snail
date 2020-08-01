import { Node } from "../../engine/map/Node";
import { DrawPointCom } from "../../engine/general-components/DrawPointCom";
import { Point } from "../../engine/primitives/Point";
import { Vector } from "../../engine/primitives/Vector";

export class Planet extends Node{

    orbitYCoefficient : number = 1;
    orbitEllips : Vector;
    Name : string;

    constructor(name : string, orbitEllips:Vector, color?:string){
        super();
        this.orbitEllips = orbitEllips
        this.Name = name;
        this.Style.fillStyle = color??"red";
        this.Style.pointRadius = 1;
        this.Style.lineWidth = 0.1;
        this.AddComponent(new DrawPointCom(this, o => new Point(0,0)));
    }  
}