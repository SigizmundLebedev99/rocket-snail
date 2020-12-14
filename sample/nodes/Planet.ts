import { Item } from "../../src/core/Item";
import { Vector } from "../../src/primitives/Vector";
import { Circle } from "../../src/primitives/Circle";
import { SatelliteCom } from "../components/SatelliteCom";
import { PerspectiveCom } from "../components/PerspectiveCom";
import { PositionShowCom } from "../components/PositionShowCom";
import { TransitionCom } from "../components/TransitionCom";
import { Rectangle } from "../../src/primitives/Rectangle";
import { Clip } from "../../src/general-components/Clip";
import { DrawImage } from "../../src/general-components/DrawImage";

export class Planet extends Item {
  orbitYCoefficient: number = 1;
  orbitEllips: Vector;

  constructor(orbitEllips: Vector, radius : number, speed: number, img : CanvasImageSource, dest : Rectangle) {
    super();
    this.orbitEllips = orbitEllips
    this.Style.fillStyle = "red";
    this.Scale = new Vector(1,-1);
    this
      .AddComponent(new SatelliteCom())
      .AddComponent(new Clip(new Circle(0, 0, radius).GetPath()))
      .AddComponent(new DrawImage(img, dest))
      .AddComponent(new PerspectiveCom(6))
      .CaptureInner(new Circle(0, 0, radius).GetPath())
      .AddComponent(new PositionShowCom())
      .AddComponent(new TransitionCom(speed))
  }
}