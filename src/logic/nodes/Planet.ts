import { Node } from "../../engine/map/Node";
import { DrawPointCom } from "../../engine/general-components/DrawPointCom";
import { Point } from "../../engine/primitives/Point";
import { Satellite } from "./Satellite";

export class Planet extends Node{
    child : Satellite;
    constructor(){
        super();
        this.Style.pointColor = 'red';
        this.Style.pointRadius = 60;
        this.AddComponent(new DrawPointCom(this, o => 
            new Point(0,0)));
        this.child = new Satellite();
        this.AddChild(this.child);
    }
}