import { IUnit } from "./IUnit";

export interface IComponent{
    OnStart() : void;
    OnUpdate() : void;
}