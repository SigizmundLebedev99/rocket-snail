import { Grid } from "../engine/general-nodes/Grid";
import { View } from "../engine/map/View";
import { RotateCom } from "./RotateCom";

export function Main(){
    let view = new View();
    let grid = new Grid();
    //grid.AddComponent(new RotateCom(grid));
    view.Nodes.push(grid);
    view.Run();
}