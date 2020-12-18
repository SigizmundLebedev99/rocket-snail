import { Grid } from "../src/grid/Grid";
import { Item } from "../src/core/Item";
import { Rectangle } from "../src/primitives/Rectangle";
import { ViewPort } from "../src/core/ViewPort";
import { Vector } from "../src/primitives/Vector";
import { Circle } from "../src/primitives/Circle";
import { Planet } from "./nodes/Planet";
import { DragDrop } from "../src/general-components/DragDrop";
import { SatelliteCom } from "./components/SatelliteCom";
import { PositionShowCom } from "./components/PositionShowCom";

import sunImg from './sun.jpg';
import earthImg from './earth.jpg';
import moonImg from './moon.jpg';

import { DrawImage } from "../src/general-components/DrawImage";
import { Clip } from "../src/general-components/Clip";
import { Style } from "../src/core/Style";

export function Main() {
  let viewport = new ViewPort("viewport");
 
  let front = viewport.AddScene();

  onresize = (e) => {
    front.Resize(document.body.clientWidth, document.body.clientHeight);
  }
  
  let grid = new Grid(50, new Style({strokeStyle:'red', lineWidth:5}), new Style({strokeStyle:'blue', lineWidth:5}));
  let root = new Item();
  root.Scale = new Vector(50, -50);
  root.Transition = front.Center;
  root.AddChild(grid);

  // camera
  new Item()
    .CaptureInner(() => new Rectangle(0, 0, front.Width, front.Height).GetPath())
    .AddComponent(new DragDrop(root), 2)
    .AddEventListener("wheel", e => root.Scale.Multiply(1 + e.deltaY / 2000))
  
  Item.Root = root;

  
  let _sunimg = new Image();
  _sunimg.src = sunImg;
  let _earthImg = new Image();
  _earthImg.src = earthImg;
  let _moonImg = new Image();
  _moonImg.src = moonImg;

  let pos = new Vector(-6, -6);
  let start = new Vector(-6, -6);
  for (let i = 0; i < 2; i++) {
    if (i % 15 == 0) {
      start.Add(0, 5);
      pos = new Vector(start.x, start.y);
    }

    pos.Add(5, 0);
    let sun = new Item();
    sun.AddEventListener('mouseenter', (e) => console.log("enter"));
    sun.AddEventListener('mouseleave', (e) => console.log("leave"));
    sun.AddEventListener('click', (e) => console.log("click"));
    sun.CaptureInner(new Circle(0, 0, 1.5).GetPath());
    sun.Scale = new Vector(0.5, 0.5);
    sun.Transition = pos.Copy();
    sun.Style.lineWidth = 0.2;
    sun.Style.strokeStyle = "orange";
    let earth = new Planet(new Vector(5, 1.5), 1, 0.003, _earthImg, new Rectangle(-1.2,-1.2, 2.4, 2.4));

    let moon = new Planet(new Vector(2, 0.5), 0.5, 0.005, _moonImg, new Rectangle(-0.7,-0.7,1.5, 1.5))

    sun
      .AddComponent(new Clip(new Circle(0, 0, 1.5).GetPath()))
      .AddComponent(new PositionShowCom())
      .AddComponent(new DrawImage(_sunimg, new Rectangle(-4,-2.5, 8, 5)))
      .AddComponent(new DragDrop(), 2)
      .AddComponent(new SatelliteCom())
      .AddChild(earth.AddChild(moon));
  }

  front.Run();
}