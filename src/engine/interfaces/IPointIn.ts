import { Point } from "../primitives/Point";

export interface IPointIn{
    IsPointIn(point:Point) : boolean;
}