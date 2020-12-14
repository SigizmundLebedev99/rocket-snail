import { Item } from "./Item";
import { MouseState } from "./MouseContext";

export interface IState { node: Item, context: CanvasRenderingContext2D, mouseState: MouseState };

export abstract class Component {
  protected priority: number = 0;
  PriorityChanged?: () => void;

  get Priority() {
    return this.priority;
  }

  set Priority(v: number) {
    if (this.priority == v)
      return;
    this.priority = v;
    if (this.PriorityChanged)
      this.PriorityChanged();
  }

  Started: boolean = false;

  OnStart(state: IState): void { }

  abstract OnUpdate(state: IState): void;
}