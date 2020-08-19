import { Grid } from "./grid/Grid";
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
import { ViewPort } from "../engine/core/ViewPort";
import { RedrawOnChange } from "./components/RedrawOnChangeCom";

export function Main(){
    let viewport = new ViewPort("viewport");
    let back = viewport.AddScene();
    let grid = new Grid(back);

    back.AddElement(grid);

    let front = viewport.AddScene();
    let root = new SceneElement(front);
    root.Position = 'absolute';
    root.Priority = -1000;
    let rootMouse = front.CaptureMouse(root, ()=>new Rectangle(0,0, front.Width, front.Height));    

    root
    .AddComponent(new DragDropCom(root, rootMouse))
    .AddComponent(new WheelScaleCom(root, rootMouse))
    .AddComponent(new RedrawOnChange(back, rootMouse))
    .AddComponent(new DragDropCom(grid, rootMouse))
    .AddComponent(new WheelScaleCom(grid, rootMouse))

    let pos = new Vector(-6,-6);
    let start = new Vector(-6,-6);

    for(let i = 0; i < 169; i ++){
        if(i%13 == 0){
            start = start.Add(new Vector(0,1));
            pos = new Vector(start.x, start.y);
        }

        pos = pos.Add(new Vector(1,0));
        let sun = new SceneElement(front);
        sun.Style.pointRadius = 1.5;
        sun.Style.lineWidth = 0.05;
        sun.Style.fillStyle = 'yellow';
        sun.Style.strokeStyle = 'orange';
        let sunMouse = front.CaptureMouse(sun, ()=>new Ellips(0,0, 1.5, 1.5))
        sun.Scale = new Vector(0.2, 0.2);
        sun.Transition = pos;

        let earth = new Planet(front, "Earth", new Vector(5,1.5), 'blue');

        let moon = new Planet(front, "Moon", new Vector(2,0.5), 'gray')
        moon.Style.pointRadius = 0.3;

        root.AddChild(sun
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
    back.Redraw();
    front.AddElement(root);
    front.Run();
}