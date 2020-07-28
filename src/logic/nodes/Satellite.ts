import { Node } from "../../engine/map/Node";
import { DrawPointCom } from "../../engine/general-components/DrawPointCom";
import { Point } from "../../engine/primitives/Point";
import { RotateCom } from "../components/RotateCom";

export class Satellite extends Node{
    constructor(){
        super();
        this.Style.pointColor = 'blue';
        this.Style.pointRadius = 50;
        this.AddComponent(new DrawPointCom(this, o => new Point(0,3)));
        this.AddComponent(new RotateCom(this, 0.005));
    }
}