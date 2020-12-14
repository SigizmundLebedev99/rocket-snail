import { Component, IState } from "../core/Component";

export class GeneralComponent extends Component {
  private action: (state: IState) => void;

  constructor(action: (state: IState) => void) {
    super();
    this.action = action;
  }

  OnUpdate(state: IState): void {
    this.action(state);
  }
}