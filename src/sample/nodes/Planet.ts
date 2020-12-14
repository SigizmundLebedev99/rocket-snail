import { Item } from "../../engine/core/Item";
import { Vector } from "../../engine/primitives/Vector";
import { Circle } from "../../engine/primitives/Circle";
import { SatelliteCom } from "../components/SatelliteCom";
import { PerspectiveCom } from "../components/PerspectiveCom";

export class Planet extends Item{
    orbitYCoefficient : number = 1;
    orbitEllips : Vector;
    Name : string;

    constructor(name : string, orbitEllips:Vector, color?:string){
        super();
        this.orbitEllips = orbitEllips
        this.Name = name;
        this.Style.fillStyle = color ?? "red";
        this.AddComponent(new SatelliteCom())
        .AddComponent(new PerspectiveCom(6))
        .CaptureInner(() => new Circle(0,0,1).GetPath())
    }
}