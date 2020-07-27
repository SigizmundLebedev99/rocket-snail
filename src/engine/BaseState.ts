import { Vector } from "./primitives/Vector";

export abstract class BaseState{
    transition : Vector = new Vector(0,0);
    rotation : number = 0;
    scale : Vector = new Vector(1,1);
}