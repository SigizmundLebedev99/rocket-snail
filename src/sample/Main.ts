import { Grid } from "./grid/Grid";
import { Scene } from "../engine/core/Scene";
import { Planet } from "./nodes/Planet";
import { Vector } from "../engine/primitives/Vector";
import { PerspectiveCom } from "./components/PerspectiveCom";
import { SatelliteCom } from "./components/SatelliteCom";
import { SceneElement } from "../engine/core/SceneElement";
import { TransitionCom } from "./components/TransitionCom";
import { DragDropCom } from "../engine/general-components/DragDropCom";
import { Ellips } from "../engine/primitives/Ellips";
import { DrawEllipsCom } from "../engine/general-components/DrawEllipsCom";
import { Rectangle } from "../engine/primitives/Rectangle";
import { WheelScaleCom } from "../engine/general-components/WheelScaleCom";

export function Main(){
    let canvas = <HTMLCanvasElement>document.getElementById('canvas');
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    let view = new Scene(<CanvasRenderingContext2D>canvas.getContext('2d')).Context;
    let grid = new Grid(view);
    let gridMouse = view.Mouse.CaptureMouse(grid, ()=>new Rectangle(0,0, view.Width, view.Height));    

    grid
    .AddComponent(new DragDropCom(grid, gridMouse))
    .AddComponent(new WheelScaleCom(grid, gridMouse))

    let pos = new Vector(-6,-6);
    let start = new Vector(-6,-6);

    for(let i = 0; i < 100; i ++){
        if(i%10 == 0){
            start = start.Add(new Vector(0,1));
            pos = new Vector(start.x, start.y);
        }
        pos = pos.Add(new Vector(1,0));
        let sun = new SceneElement(view);
        sun.Style.pointRadius = 1.5;
        sun.Style.lineWidth = 0.05;
        sun.Style.fillStyle = 'yellow';
        sun.Style.strokeStyle = 'orange';
        let sunMouse = view.Mouse.CaptureMouse(sun, ()=>new Ellips(0,0, 1.5, 1.5))
        sun.Scale = new Vector(0.2, 0.2);
        sun.Transition = pos;

        let earth = new Planet(view, "Earth", new Vector(5,1.5), 'blue');

        let moon = new Planet(view, "Moon", new Vector(2,0.5), 'gray')
        moon.Style.pointRadius = 0.3;

        grid.AddChild(sun
            .AddComponent(new DrawEllipsCom(sun, ()=>new Ellips(0,0, 1.5, 1.5)))
            .AddComponent(new DragDropCom(sun, sunMouse))
            .AddComponent(new WheelScaleCom(grid, sunMouse))
            .AddComponent(new SatelliteCom(sun))
            .AddChild(earth
                .AddComponent(new TransitionCom(earth))
                .AddComponent(new SatelliteCom(earth))
                .AddComponent(new PerspectiveCom(earth, 6))
                .AddChild(moon
                    .AddComponent(new TransitionCom(moon, -0.003))
                    .AddComponent(new SatelliteCom(moon)))));
    }

    
    
    view.AddElement(grid);
    view.Run();
}