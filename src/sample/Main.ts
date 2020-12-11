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
import { WheelScaleCom } from "../engine/general-components/WheelScaleCom";
import { DrawLabelCom } from "../engine/general-components/DrawLabelCom";
import { Label } from "../engine/primitives/Label";
import { PositionShowCom } from "./components/PositionShowCom";

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

    let pos = new Vector(-6,-6);
    let start = new Vector(-6,-6);

    for(let i = 0; i < 255; i ++){
        if(i%15 == 0){
            start.Add(0,2);
            pos = new Vector(start.x, start.y);
        }

        pos.Add(2,0);
        let sun = new SceneElement(front);
        sun.Style.lineWidth = 0.1;
        sun.Style.fillStyle = 'yellow';
        sun.Style.strokeStyle = 'orange';
        sun.CaptureMouse(()=>new Ellips(0,0, 1.5));
        sun.Scale = new Vector(0.2, 0.2);
        sun.Transition = pos.Copy();

        let earth = new Planet(front, "Earth", new Vector(5,1.5), 'blue');

        let moon = new Planet(front, "Moon", new Vector(2,0.5), 'gray')

        sun
            .AddComponent(new PositionShowCom())
            .AddComponent(new DrawEllipsCom(()=>new Ellips(0,0, 1.5)))
            .AddComponent(new DragDropCom())
            .AddComponent(new SatelliteCom())
            .AddChild(earth
                .AddComponent(new PositionShowCom())
                .AddComponent(new TransitionCom())
                .AddComponent(new DrawEllipsCom(()=>new Ellips(0,0, 1)))
                .AddChild(moon
                    .AddComponent(new PositionShowCom())
                    .AddComponent(new TransitionCom(-0.005))
                    .AddComponent(new DrawEllipsCom(()=>new Ellips(0,0, 0.8)))));
    }
    
    back.Redraw();
    front.Run();
}