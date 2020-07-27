import { Point } from "./primitives/Point";
import { StraightLine } from "./primitives/Straight-Line";
import { Section } from "./primitives/Section";
import { Label } from "./primitives/Label";

export type Drawable =
|{key:"point", value:Point}
|{key:"line", value:StraightLine}
|{key:"section", value:Section}
|{key:"label",value:Label}