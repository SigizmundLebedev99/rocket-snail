import { Node } from "../../engine/map/Node";
import { DrawPointCom } from "../../engine/general-components/DrawPointCom";
import { Point } from "../../engine/primitives/Point";
import { RotateCom } from "../components/RotateCom";
import { SatelliteTransition } from "../components/SatelliteTransition";

export class Satellite extends Node{
    
    constructor(){
        super();
        this.Style.pointColor = 'blue';
        this.Style.pointRadius = 30;
        this.AddComponent(new DrawPointCom(this, o => new Point(0,0)));
        this.AddComponent(new SatelliteTransition(this, -0.005));
    }
}