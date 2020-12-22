import { Vector } from "../primitives/Vector";
import { Item } from "./Item";
import { Style } from "./Style";

type captureMode = "inPath" | "onStroke";

class Binding {
  node: Item;
  getPath: () => Path2D;

  captureMode: captureMode = 'inPath';

  isCaptured: boolean = false;
  isIn: boolean = false;

  constructor(node: Item, getPath: () => Path2D) {
    this.node = node;
    this.getPath = getPath;
  }
}

export class MouseContext {
  private context: CanvasRenderingContext2D;
  private captureStack: Binding[] = [];
  private isIn: Binding | null = null;
  private isCaptured: Binding | null = null;

  get In() {
    return this.isIn;
  }

  get Captured() {
    return this.isCaptured;
  }

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  Position: Vector = new Vector(0, 0);
  LastEvent: MouseEvent | { type: "none" } = { type: "none" };
  LastWheelEvent: WheelEvent | null = null;
  Movement: Vector | null = null;

  HandleState(e: MouseEvent) {
    this.Position = new Vector(e.x, e.y)
    let isIn = false;
    for(let i = this.captureStack.length - 1; i >= 0 ; i --) {
      let binding = this.captureStack[i];

      if(!binding.node.IsActive)
        continue;
        
      let path = binding.getPath();
      let point = binding.node.ToLocal(this.Position.Copy());

      if (binding.captureMode == 'inPath')
        isIn = this.context.isPointInPath(path, point.x, point.y)
      else {
        let l_width = this.context.lineWidth;
        let item_l_width = Style.GetProperty('lineWidth', binding.node);
        if (item_l_width)
          this.context.lineWidth = item_l_width;
        isIn = this.context.isPointInStroke(path, point.x, point.y);
        this.context.lineWidth = l_width;
      }

      if (isIn) {
        if(this.isIn && binding == this.isIn)
          break;
        else if(this.isIn != null){
          this.isIn.node.HandleEvent(new MouseEvent("mouseleave", e));
          this.isIn.isIn = false;
          binding.node.HandleEvent(new MouseEvent("mouseenter", e));
        }
        else{
          binding.node.HandleEvent(new MouseEvent("mouseenter", e));
        }
        
        binding.isIn = true;
        this.isIn = binding;
        break;
      }
    }

    if(!isIn && this.isIn){
      this.isIn.node.HandleEvent(new MouseEvent("mouseleave", e))
      this.isIn.isIn = false;
      this.isIn = null;
    }

    this.LastEvent = e;

    if(this.isIn){
      this.isIn.node.HandleEvent(e);
    }

    switch (e.type) {
      case 'mousemove': {
        this.Movement = new Vector(e.movementX, e.movementY);
        break;
      }
      case 'mousedown': {
        this.isCaptured = this.isIn;
        if (this.isIn != null)
          this.isIn.isCaptured = true;
        break;
      }
      case 'mouseup': {
        if (this.isCaptured) {
          this.isCaptured.isCaptured = false;
          this.isCaptured = null;
        }
        break;
      }
      case 'wheel': {
        this.LastWheelEvent = <WheelEvent>e;
      }
    }
  }

  ListenEvents(htmlElement: HTMLElement) {
    htmlElement.addEventListener("mousedown", (e) =>
      this.HandleState(e));
    htmlElement.addEventListener("mouseup", (e) =>
      this.HandleState(e));
    htmlElement.addEventListener("wheel", (e) =>
      this.HandleState(e));
    htmlElement.addEventListener("mousemove", (e) =>
      this.HandleState(e));
    htmlElement.addEventListener("click", (e) =>
      this.HandleState(e));
    htmlElement.addEventListener("dblclick", (e) =>
      this.HandleState(e));
  }

  Resort() {
    this.captureStack = [...this.captureStack].sort((a, b) => a.node.Priority - b.node.Priority);
  }

  Reset() {
    this.LastEvent = { type: "none" };
    this.LastWheelEvent = null;
    this.Movement = null;
  }

  CaptureMouseInPath(node: Item, path: Path2D | (() => Path2D)): () => MouseState {
    return this.CaptureMouse(node, path, 'inPath');
  }

  CaptureMouseOnStroke(node: Item, path: Path2D | (() => Path2D)): () => MouseState {
    return this.CaptureMouse(node, path, 'onStroke');
  }

  private CaptureMouse(node: Item, path: Path2D | (() => Path2D), captureMode: captureMode): () => MouseState {
    let handle: () => Path2D
    if (path instanceof Path2D)
      handle = () => path;
    else
      handle = path;

    let binding = this.captureStack.find(e => e.node == node);
    if (binding) {
      binding.getPath = handle;
      binding.captureMode = captureMode;
    }
    else {
      binding = new Binding(node, handle);
      binding.captureMode = captureMode;
      this.captureStack.push(binding);
      this.Resort();
    }
    let bind = binding;
    return () => new MouseState(this, bind);
  }

  GetState(): MouseState {
    return new MouseState(this, { isIn: false, isCaptured: false });
  }

  RemoveBinding(node: Item){
    this.captureStack = this.captureStack.filter(e=>e.node != node);
  }
}

export class MouseState {
  IsCaptured: boolean = false;
  IsIn: boolean = false;
  MouseEvent: MouseEvent | { type: "none" };
  WheelEvent: WheelEvent | null;
  Position: Vector;
  Movement: Vector | null;
  In: Binding | null = null;
  Captured: Binding | null = null;

  constructor(context: MouseContext, bind: { isIn: boolean, isCaptured: boolean }) {
    this.MouseEvent = context.LastEvent;
    this.WheelEvent = context.LastWheelEvent;
    this.Position = context.Position.Copy();
    this.Movement = context.Movement == null ? null : context.Movement.Copy();
    this.IsCaptured = bind.isCaptured;
    this.IsIn = bind.isIn;
    this.In = context.In;
    this.Captured = context.Captured;
  }
}