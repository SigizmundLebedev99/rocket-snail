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
    grid.Rotation = Math.PI * 0.25;
    let front = viewport.AddScene(); 
    front.Root
        .CaptureMouse(()=>new Rectangle(0,0, front.Width, front.Height))
        .AddComponent(new DragDropCom())
        .AddComponent(new WheelScaleCom())
        .AddComponent(new RedrawOnChange(back))
        .AddChild(grid);
        
    let pos = new Vector(-6,-6);
    let start = new Vector(-6,-6);

    for(let i = 0; i < 81; i ++){
        if(i%9 == 0){
            start.Add(0,1);
            pos = new Vector(start.x, start.y);
        }

        pos.Add(1,0);
        let sun = new SceneElement(front);
        sun.Style.pointRadius = 1.5;
        sun.Style.lineWidth = 0.05;
        sun.Style.fillStyle = 'yellow';
        sun.Style.strokeStyle = 'orange';
        sun.CaptureMouse(()=>new Ellips(0,0, 1.5, 1.5));
        sun.Scale = new Vector(0.2, 0.2);
        sun.Transition = pos.Copy();

        let earth = new Planet(front, "Earth", new Vector(5,1.5), 'blue');

        let moon = new Planet(front, "Moon", new Vector(2,0.5), 'gray')
        moon.Style.pointRadius = 0.3;

        grid.AddChild(sun
            .AddComponent(new DrawEllipsCom(()=>new Ellips(0,0, 1.5, 1.5)))
            .AddComponent(new DragDropCom())
            .AddComponent(new SatelliteCom())
            .AddChild(earth
                .AddComponent(new TransitionCom())
                .AddComponent(new SatelliteCom())
                .AddComponent(new PerspectiveCom(6))
                .AddChild(moon
                    .AddComponent(new TransitionCom(-0.003))
                    .AddComponent(new SatelliteCom()))));
    }
    
    back.Redraw();
    front.Run();
}