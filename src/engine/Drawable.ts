import { Point } from "./primitives/Point";
import { StraightLine } from "./primitives/Straight-Line";
import { Section } from "./primitives/Section";
import { IUnit } from "./IUnit";

export type Drawable =
|{key:"point", value:Point}
|{key:"line", value:StraightLine}
|{key:"section", value:Section}
|{key:"unit", value: IUnit}