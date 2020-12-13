import { Grid } from "../engine/grid/Grid";
import { Item } from "../engine/core/Item";
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
import { PositionShowCom } from "./components/PositionShowCom";

export function Main(){
    let viewport = new ViewPort("viewport");
    let back = viewport.AddScene();

    let grid = new Grid(50);

    let front = viewport.AddScene();
    var root = 
        new Item()
        .CaptureMouse(()=>new Rectangle(0,0, front.Width, front.Height))
        .AddComponent(new DragDropCom(),2)
        .AddComponent(new WheelScaleCom())
        .AddChild(grid)
        .AddComponent(({mouseState}) => {
            back.Redraw();
        })
    
    root.Scale = new Vector(50,-50);
    root.Transition = front.Center;
    root.Position = 'absolute';
    Item.Root = root;

    let pos = new Vector(-6,-6);
    let start = new Vector(-6,-6);

    // for(let i = 0; i < 255; i ++){
    for(let i = 0; i < 2; i ++){
        if(i%15 == 0){
            start.Add(0,2);
            pos = new Vector(start.x, start.y);
        }

        pos.Add(2,0);
        let sun = new Item();
        sun.Style.lineWidth = 0.1;
        sun.Style.fillStyle = 'yellow';
        sun.Style.strokeStyle = 'orange';
        sun.CaptureMouse(()=>new Ellips(0,0, 1.5));
        sun.Scale = new Vector(0.2, 0.2);
        sun.Transition = pos.Copy();

        let earth = new Planet("Earth", new Vector(5,1.5), 'blue');

        let moon = new Planet("Moon", new Vector(2,0.5), 'gray')

        sun
            .AddComponent(new PositionShowCom())
            .AddComponent(new DrawEllipsCom(()=>new Ellips(0,0, 1.5)))
            .AddComponent(new DragDropCom(), 2)
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