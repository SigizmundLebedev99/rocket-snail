import { SceneElement } from "../../engine/core/SceneElement";
import { DrawPointCom } from "../../engine/general-components/DrawPointCom";
import { Point } from "../../engine/primitives/Point";
import { Vector } from "../../engine/primitives/Vector";
import { Scene } from "../../engine/core/Scene";
import { SceneContext } from "../../engine/core/SceneContext";

export class Planet extends SceneElement{

    orbitYCoefficient : number = 1;
    orbitEllips : Vector;
    Name : string;

    constructor(view: SceneContext, name : string, orbitEllips:Vector, color?:string){
        super(view);
        this.orbitEllips = orbitEllips
        this.Name = name;
        this.Style.fillStyle = color??"red";
        this.Style.pointRadius = 1;
        this.Style.lineWidth = 0.1;
        this.AddComponent(new DrawPointCom(this, () => new Point(0,0)));
    }  
}