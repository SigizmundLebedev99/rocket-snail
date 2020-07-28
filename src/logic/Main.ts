import { Grid } from "./grid/Grid";
import { View } from "../engine/map/View";
import { Planet } from "./nodes/Planet";
import { TransitionCom } from "./components/TransitionCom";
import { DrawSectionCom } from "../engine/general-components/DrawSectionCom";
import { Section } from "../engine/primitives/Section";
import { Point } from "../engine/primitives/Point";

export function Main(){
    let grid = new Grid();

    let planet = new Planet();
    planet.AddComponent(new TransitionCom(planet, 0.003, 10, 7));
    grid.AddChild(planet);
    grid.AddComponent(new DrawSectionCom(grid, o => new Section(Point.From(planet.transition), new Point(0,0))));

    View.AddChild(grid);
    View.Run();
}