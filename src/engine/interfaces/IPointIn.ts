import { Vector } from "../primitives/Vector";

export interface IPointIn{
    IsPointIn(point:Vector) : boolean;
}