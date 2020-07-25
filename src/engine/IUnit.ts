import { Point } from './primitives/Point'
import { IComponent } from "./IComponent";
import { Vector } from './primitives/Vector';
import { Drawable } from './Drawable';

export interface IUnit{

    components : IComponent[];
    parent : IUnit;
    children : Drawable[];

    position : Point;
    rotation : Vector;
    scale : number;
    sque : Vector;

    isPointIn(point : Point) : boolean;

}