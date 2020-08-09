import { Grid } from "./grid/Grid";
import { View } from "../engine/core/View";
import { Planet } from "./nodes/Planet";
import { Vector } from "../engine/primitives/Vector";
import { PerspectiveCom } from "./components/PerspectiveCom";
import { SatelliteCom } from "./components/SatelliteCom";
import { Node } from "../engine/core/Node";
import { DrawPointCom } from "../engine/general-components/DrawPointCom";
import { Point } from "../engine/primitives/Point";
import { TransitionCom } from "./components/TransitionCom";
import { DragDropCom } from "../engine/general-components/DragDropCom";
import { Ellips } from "../engine/primitives/Ellips";

export function Main(){
    let canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    let view = new View(<CanvasRenderingContext2D>canvas.getContext('2d'))
    let grid = new Grid(view);

    let sun = new Node();
    sun.Style.pointRadius = 1.5;
    sun.Style.fillStyle = 'yellow';
    sun.Style.strokeStyle = 'yellow';

    let earth = new Planet("Earth", new Vector(8,2), 'blue');

    let moon = new Planet("Moon", new Vector(2,0.5), 'gray')
    moon.Style.pointRadius = 0.3;

    grid.AddChild(
        sun
        .AddComponent(new DrawPointCom(sun, s=>new Point(0,0)))
        .AddComponent(new DragDropCom(sun, s=>new Ellips(0,0,1.5,1.5)))
        .AddComponent(new SatelliteCom(sun))
        .AddChild(earth
            .AddComponent(new TransitionCom(earth))
            .AddComponent(new SatelliteCom(earth))
            .AddComponent(new PerspectiveCom(earth, 6))
            .AddChild(moon
                .AddComponent(new TransitionCom(moon, -0.003))
                .AddComponent(new SatelliteCom(moon)))));

    view.AddChild(grid);
    view.Run();
}