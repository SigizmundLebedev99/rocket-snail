import { Grid } from "../src/grid/Grid";
import { Item } from "../src/core/Item";
import { Rectangle } from "../src/primitives/Rectangle";
import { ViewPort } from "../src/core/ViewPort";
import { Vector } from "../src/primitives/Vector";
import { Circle } from "../src/primitives/Circle";
import { Planet } from "./nodes/Planet";
import { DragDrop } from "../src/general-components/DragDropCom";
import { SatelliteCom } from "./components/SatelliteCom";
import { TransitionCom } from "./components/TransitionCom";
import { WheelScale } from "../src/general-components/WheelScaleCom";
import { PositionShowCom } from "./components/PositionShowCom";
import { DrawPath } from "../src/general-components/DrawPathCom";

export function Main() {
  let viewport = new ViewPort("viewport");
  
  let back = viewport.AddScene();

  let grid = new Grid(50);

  let front = viewport.AddScene();

  let root = new Item();
  root.Scale = new Vector(50, -50);
  root.Transition = front.Center;
  root.AddChild(grid);

  // camera
  new Item()
    .CaptureInner(() => new Rectangle(0, 0, front.Width, front.Height).GetPath())
    .AddComponent(new DragDrop(root), 2)
    .AddComponent(new WheelScale(root))
    .AddComponent(({ mouseState }) => {
      if (mouseState.Movement != null || mouseState.LastEvent.key == 'wheel'){
        back.Redraw();
      }
    });
  
  Item.Root = root;

  let pos = new Vector(-6, -6);
  let start = new Vector(-6, -6);

  // for(let i = 0; i < 255; i ++){
  for (let i = 0; i < 2; i++) {
    if (i % 15 == 0) {
      start.Add(0, 2);
      pos = new Vector(start.x, start.y);
    }

    pos.Add(2, 0);
    let sun = new Item();
    sun.Style.lineWidth = 0.1;
    sun.Style.fillStyle = 'yellow';
    sun.Style.strokeStyle = 'orange';
    sun.CaptureInner(() => new Circle(0, 0, 1.5).GetPath());
    sun.Scale = new Vector(0.2, 0.2);
    sun.Transition = pos.Copy();

    let earth = new Planet("Earth", new Vector(5, 1.5), 'blue');

    let moon = new Planet("Moon", new Vector(2, 0.5), 'gray')

    sun
      .AddComponent(new PositionShowCom())
      .AddComponent(new DrawPath(new Circle(0, 0, 1.5).GetPath()))
      .AddComponent(new DragDrop(), 2)
      .AddComponent(new SatelliteCom())
      .AddChild(earth
        .AddComponent(new PositionShowCom())
        .AddComponent(new TransitionCom())
        .AddComponent(new DrawPath(new Circle(0, 0, 1).GetPath()))
        .AddChild(moon
          .AddComponent(new PositionShowCom())
          .AddComponent(new TransitionCom(-0.005))
          .AddComponent(new DrawPath(new Circle(0, 0, 0.6).GetPath()))));
  }

  back.Redraw();
  front.Run();
}