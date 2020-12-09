import { SceneElement } from "../../engine/core/SceneElement";
import { Vector } from "../../engine/primitives/Vector";
import { Scene } from "../../engine/core/Scene";
import { SceneContext } from "../../engine/core/SceneContext";
import { DrawEllipsCom } from "../../engine/general-components/DrawEllipsCom";
import { Ellips } from "../../engine/primitives/Ellips";

export class Planet extends SceneElement{

    orbitYCoefficient : number = 1;
    orbitEllips : Vector;
    Name : string;

    constructor(view: SceneContext, name : string, orbitEllips:Vector, color?:string){
        super(view);
        this.orbitEllips = orbitEllips
        this.Name = name;
        this.Style.fillStyle = color??"red";
        this.Style.lineWidth= 0.1;
        this.AddComponent(new DrawEllipsCom(() => new Ellips(0,0,1)));
    }  
}