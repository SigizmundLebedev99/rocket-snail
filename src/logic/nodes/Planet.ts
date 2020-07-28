import { Node } from "../../engine/map/Node";
import { DrawPointCom } from "../../engine/general-components/DrawPointCom";
import { Point } from "../../engine/primitives/Point";
import { Satellite } from "./Satellite";
import { Ellips } from "../../engine/primitives/Ellips";
import { DrawEllipsCom } from "../../engine/general-components/DrawEllipsCom";

export class Planet extends Node{
    constructor(){
        super();
        this.Style.pointColor = 'red';
        this.Style.pointRadius = 60;
        this.AddComponent(new DrawEllipsCom(this, o => new Ellips(0,0,100,50)));
        let satellite = new Satellite(-0.005);
        this.AddChild(satellite);
    }  
}