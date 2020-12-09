import { Grid } from "../engine/grid/Grid";
import { SceneElement } from "../engine/core/SceneElement";
import { Rectangle } from "../engine/primitives/Rectangle";
import { ViewPort } from "../engine/core/ViewPort";
import { Vector } from "../engine/primitives/Vector";
import { Ellips } from "../engine/primitives/Ellips";
import { Planet } from "./nodes/Planet";
import { DrawEllipsCom } from "../engine/general-components/DrawEllipsCom";
import { DragDropCom } from "../engine/general-components/DragDropCom";
import { SatelliteCom } from "./components/SatelliteCom";
import { TransitionCom } from "./components/TransitionCom";
import { PerspectiveCom } from "./components/PerspectiveCom";
import { WheelScaleCom } from "../engine/general-components/WheelScaleCom";

export function Main(){
    let viewport = new ViewPort("viewport");
    let back = viewport.AddScene();

    let grid = new Grid(back, 50);

    let front = viewport.AddScene(); 
    front.Root
        .CaptureMouse(()=>new Rectangle(0,0, front.Width, front.Height))
        .AddComponent(new DragDropCom())
        .AddComponent(new WheelScaleCom())
        .AddChild(grid)
        .AddComponent(() => back.Redraw())
    
    front.Root.Scale = new Vector(50,-50);
    front.Root.Transition = front.Center;
    front.Root.Rotation = Math.PI * 0.5;
    let pos = new Vector(-6,-6);
    let start = new Vector(-6,-6);

    for(let i = 0; i < 81; i ++){
        if(i%9 == 0){
            start.Add(0,1);
            pos = new Vector(start.x, start.y);
        }

        pos.Add(1,0);
        let sun = new SceneElement(front);
        sun.Style.lineWidth = 0.05;
        sun.Style.fillStyle = 'yellow';
        sun.Style.strokeStyle = 'orange';
        sun.CaptureMouse(()=>new Ellips(0,0, 1.5));
        sun.Scale = new Vector(0.2, 0.2);
        sun.Transition = pos.Copy();

        let earth = new Planet(front, "Earth", new Vector(5,1.5), 'blue');

        let moon = new Planet(front, "Moon", new Vector(2,0.5), 'gray')

        sun
            .AddComponent(new DrawEllipsCom(()=>new Ellips(0,0, 1.5)))
            .AddComponent(new DragDropCom())
            .AddComponent(new SatelliteCom())
            .AddChild(earth
                .AddComponent(new TransitionCom())
                .AddComponent(new SatelliteCom())
                .AddComponent(new PerspectiveCom(6))
                .AddChild(moon
                    .AddComponent(new TransitionCom(-0.003))
                    .AddComponent(new SatelliteCom())));
    }
    
    back.Redraw();
    front.Run();
}