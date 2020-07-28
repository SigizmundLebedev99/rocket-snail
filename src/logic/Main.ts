import { Grid } from "../engine/general-nodes/grid/Grid";
import { View } from "../engine/map/View";
import { Planet } from "./nodes/Planet";
import { Vector } from "../engine/primitives/Vector";
import { RotateCom } from "./components/RotateCom";
import { TransitionCom } from "./components/TransitionCom";

export function Main(){
    let grid = new Grid();
    grid.AddComponent(new RotateCom(grid, 0.001));
    grid.AddComponent(new TransitionCom(grid, 0.005));
    
    let planet = new Planet();
    planet.transition = new Vector(5,0);
    grid.AddChild(planet);

    View.AddChild(grid);
    View.Run();
}