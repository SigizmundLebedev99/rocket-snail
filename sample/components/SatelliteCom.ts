import { Component, IState } from "../../src/core/Component";
import { Vector } from "../../src/primitives/Vector";

export class SatelliteCom extends Component {
  constructor() {
    super();
  }

  OnUpdate({ node }: IState): void {
    node.Priority = node.ToGlobal(new Vector(0, 0)).y;
  }
}