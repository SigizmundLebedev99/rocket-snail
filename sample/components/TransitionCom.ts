import { Component, IState } from "../../src/core/Component";
import { Vector } from "../../src/primitives/Vector";
import { Planet } from "../nodes/Planet";

export class TransitionCom extends Component {
  private transition = 0;
  increment: number;

  constructor(speed?: number) {
    super();
    this.increment = speed ?? 0.005;
  }

  OnUpdate({ node }: IState): void {
    let planet = <Planet>node;
    let altitude = planet.orbitEllips;
    let kx = altitude.x * planet.orbitYCoefficient;
    let ky = planet.orbitYCoefficient * altitude.y
    this.transition += planet.orbitYCoefficient * this.increment;
    planet.Transition = new Vector(kx * Math.sin(this.transition), ky * Math.cos(this.transition));
  }
}