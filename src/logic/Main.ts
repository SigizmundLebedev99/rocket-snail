import { Grid } from "./grid/Grid";
import { View } from "../engine/map/View";
import { Planet } from "./nodes/Planet";
import { TransitionCom } from "./components/TransitionCom";
import { Vector } from "../engine/primitives/Vector";
import { PerspectiveCom } from "./components/PerspectiveCom";
import { SatelliteTransition } from "./components/SatelliteTransition";
import { Node } from "../engine/map/Node";
import { DrawPointCom } from "../engine/general-components/DrawPointCom";
import { Point } from "../engine/primitives/Point";

export function Main(){
    let canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.width = document.body.clientWidth;
    canvas.height = screen.availHeight;

    let view = new View(<CanvasRenderingContext2D>canvas.getContext('2d'))
    let grid = new Grid(view);

    let sun = new Node();
    sun.Style.pointRadius = 1;
    sun.Style.fillStyle = 'yellow';
    sun.Style.strokeStyle = 'yellow';
    let earth = new Planet("Earth", new Vector(8,2), 'blue');
    let moon = new Planet("Moon", new Vector(2,0.5), 'gray')
    moon.Style.pointRadius = 0.3;
    moon
        .AddComponent(new SatelliteTransition(moon, 0.006));
        //.AddComponent(new PerspectiveCom(moon, 6));
    earth
        .AddComponent(new SatelliteTransition(earth, -0.003))
        .AddComponent(new PerspectiveCom(earth, 6))
        .AddChild(moon);
    sun
        .AddComponent(new DrawPointCom(sun, s=>new Point(0,0)))
        .AddChild(earth);
    
    view.AddChild(grid.AddChild(sun));
    view.Run();
}