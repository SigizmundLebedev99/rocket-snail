import { Grid } from "../engine/general-nodes/Grid";
import { View } from "../engine/map/View";
import { Planet } from "./nodes/Planet";
import { Vector } from "../engine/primitives/Vector";
import { RotateCom } from "./components/RotateCom";
import { Satellite } from "./nodes/Satellite";

export function Main(){
    let view = new View();
    let grid = new Grid();
    grid.AddComponent(new RotateCom(grid, 0.001));
    //grid.AddComponent(new TransitionCom(grid, 0.001));
    let planet = new Planet();
    planet.transition = new Vector(5,0);
    grid.AddChild(planet);
    view.Nodes.push(grid);
    view.Nodes.push(planet);
    view.Nodes.push(planet.child);
    view.Run();
}