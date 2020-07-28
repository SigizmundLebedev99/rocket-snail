import { Grid } from "./grid/Grid";
import { View } from "../engine/map/View";
import { Planet } from "./nodes/Planet";
import { TransitionCom } from "./components/TransitionCom";

export function Main(){
    let grid = new Grid();

    //grid.AddComponent(new RotateCom(grid, 0.001));
    //grid.AddComponent(new TransitionCom(grid, 0.005));
    
    let planet = new Planet();
    planet.AddComponent(new TransitionCom(planet, 0.003, 10, 7));
    grid.AddChild(planet);

    View.AddChild(grid);
    View.Run();
}