import { Grid } from "../engine/grid/Grid";
import { SceneElement } from "../engine/core/SceneElement";
import { Rectangle } from "../engine/primitives/Rectangle";
import { ViewPort } from "../engine/core/ViewPort";
import { MouseState } from "../engine/core/MouseContext";

export function Main(){
    let viewport = new ViewPort("viewport");
    let back = viewport.AddScene();

    let grid = new Grid(back, 25);

    let front = viewport.AddScene(); 
    front.Root
        .CaptureMouse(()=>new Rectangle(0,0, front.Width, front.Height))
        .AddMouseComponent((node: SceneElement, state: MouseState) => {
            if(state.IsCaptured){
                grid.Transition.AddV(state.Movement);
                back.Redraw();
            }

            if(state.IsIn && state.KeyState.key == 'wheel'){
                var delta = 1 + state.KeyState.Delta / 1000;
                grid.Scale.Multiply(delta);
                back.Redraw();
            }
        });
        
    // let pos = new Vector(-6,-6);
    // let start = new Vector(-6,-6);

    // for(let i = 0; i < 81; i ++){
    //     if(i%9 == 0){
    //         start.Add(0,1);
    //         pos = new Vector(start.x, start.y);
    //     }

    //     pos.Add(1,0);
    //     let sun = new SceneElement(front);
    //     sun.Style.lineWidth = 0.05;
    //     sun.Style.fillStyle = 'yellow';
    //     sun.Style.strokeStyle = 'orange';
    //     sun.CaptureMouse(()=>new Ellips(0,0, 1.5, 1.5));
    //     sun.Scale = new Vector(0.2, 0.2);
    //     sun.Transition = pos.Copy();

    //     let earth = new Planet(front, "Earth", new Vector(5,1.5), 'blue');

    //     let moon = new Planet(front, "Moon", new Vector(2,0.5), 'gray')

    //     sun
    //         .AddComponent(new DrawEllipsCom(()=>new Ellips(0,0, 1.5, 1.5)))
    //         .AddComponent(new DragDropCom())
    //         .AddComponent(new SatelliteCom())
    //         .AddChild(earth
    //             .AddComponent(new TransitionCom())
    //             .AddComponent(new SatelliteCom())
    //             .AddComponent(new PerspectiveCom(6))
    //             .AddChild(moon
    //                 .AddComponent(new TransitionCom(-0.003))
    //                 .AddComponent(new SatelliteCom())));
    // }
    
    back.Redraw();
    front.Run();
}