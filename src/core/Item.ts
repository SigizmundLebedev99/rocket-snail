import { Component, IState } from "./Component";
import { Style } from "./Style";
import { MouseState, MouseContext } from "./MouseContext";
import { Vector } from "../primitives/Vector";
import { GeneralComponent } from "../general-components/GeneralComponent";
import { Scene } from "./Scene";
import { EventType, EventHandler } from "./EventsHandler";

export class Item {
  public static Root: Item | null;

  private _scene: Scene;
  private _eventHandler: EventHandler = new EventHandler();

  get Scene() {
    return this._scene;
  }

  set Scene(val: Scene) {
    if (this._scene == val)
      return;
    this.Remove();
    this._scene = val;
    this._scene.AddElement(this);
  }

  private isActive : boolean = true;
  get IsActive(){
    return this.isActive;
  }
  set IsActive(val:boolean){
    this.isActive = val;
    this.children.forEach(e => e.IsActive = val);
  }

  InheritTransform: boolean = true;

  private priority: number = 1;

  get Priority() {
    return this.priority;
  }

  set Priority(v: number) {
    if (v == this.priority)
      return;
    this.priority = v;
    this.Scene.PriorityChanged();
  }

  private parent: Item | null = null;

  get Parent() {
    return this.parent;
  }

  set Parent(val: Item | null) {
    if (val == null && this.parent != null) {
      this.parent.RemoveChild(this);
    }
    else if (val != null && this.parent != null) {
      this.parent.RemoveChild(this);
      val.AddChild(this);
    }
    else {
      val?.AddChild(this);
    }
  }

  private children: Item[] = [];

  get Children() {
    return [...this.children];
  }

  readonly Style: Style = new Style();

  Transition: Vector = new Vector(0, 0);
  Rotation: number = 0;
  Scale: Vector = new Vector(1, 1);

  get TotalRotation(): number {
    if (this.Parent != null)
      return this.Rotation + this.Parent.TotalRotation;
    return this.Rotation;
  }

  get TotalScale(): Vector {
    if (this.Parent != null) {
      let baseScale = this.Parent.TotalScale;
      return this.Scale.Copy().MultiplyV(baseScale);
    }
    return this.Scale;
  }

  private mouseContext: MouseContext;

  constructor(view?: Scene) {
    if (Item.Root != null) {
      this._scene = view ? view : Item.Root.Scene;
      this._scene.AddElement(this);
      this.mouseContext = this._scene.Mouse;
      this.Parent = Item.Root;
    }
    else if (view) {
      this.mouseContext = view.Mouse;
      this._scene = view;
      view.AddElement(this);
    }
    else if (Scene.ActiveScene) {
      this.mouseContext = Scene.ActiveScene.Mouse;
      this._scene = Scene.ActiveScene;
      Scene.ActiveScene.AddElement(this);
    }
    else
      throw "No active scene found";
  }

  AddChild(element: Item) {
    if (element.Parent != null)
      element.Parent.RemoveChild(element);

    element.parent = this;
    this.children.push(element);
    return this;
  }

  private RemoveChild(element: Item) {
    element.parent = null;
    this.children = this.children.filter(e => e != element);
  }


  private components: Component[] = [];

  AddComponent(component: Component | ((node: IState) => void), priority = 0) {

    if (component instanceof Component)
      this.components.push(component);
    else {
      component = new GeneralComponent(component)
      this.components.push(<Component>component);
    }
    component.Priority = priority;
    component.PriorityChanged = this.ResortComponents;
    this.ResortComponents();
    return this;
  }

  RemoveComponent(component: Component){
    this.components = [...this.components].filter(e => e != component);
  }

  Remove(fromParent = true) {
    this._scene.RemoveElement(this);
    if (fromParent && this.parent != null) {
      this.parent.children = this.parent.children.filter(e => e != this);
    }
    this.DropCapture();
    this.children.forEach(e => e.Remove(false));
  }

  private map?: () => MouseState;

  CaptureInner(map: Path2D | (() => Path2D)) {
    if (this.mouseContext)
      this.map = this.mouseContext.CaptureMouseInPath(this, map);
    return this;
  }

  CaptureStroke(map: Path2D | (() => Path2D)) {
    if (this.mouseContext)
      this.map = this.mouseContext.CaptureMouseOnStroke(this, map);
    return this;
  }

  DropCapture(){
    this.mouseContext.RemoveBinding(this);
  }

  private ResortComponents() {
    this.components = [...this.components].sort((a, b) => b.Priority - a.Priority);
  }

  OnUpdate() {
    if (this.components.length == 0)
      return;

    this.TransformCanvas(this._scene.Context)

    Style.Apply(this._scene.Context, this);

    let mouseState: MouseState;
    if (this.map)
      mouseState = this.map();
    else
      mouseState = this.mouseContext.GetState();

    this.components.forEach(c => {
      let state = { node: this, context: this._scene.Context, mouseState: mouseState };
      this.CheckIfStarted(c, state);
      c.OnUpdate(state);
    });
  }

  private CheckIfStarted(component: Component, state: IState) {
    if (component.Started)
      return;

    component.OnStart(state);
    component.Started = true;
  }

  ToLocal(point: Vector) {
    function transformVector(state: Item) {
      if (state.Parent == null || !state.InheritTransform) {
        point
          .Add(-state.Transition.x, -state.Transition.y)
          .Multiply(1 / state.Scale.x, 1 / state.Scale.y)
          .Rotate(-state.Rotation);
        return;
      }

      transformVector(state.Parent);
      point
        .Add(-state.Transition.x, -state.Transition.y)
        .Multiply(1 / state.Scale.x, 1 / state.Scale.y)
        .Rotate(-state.Rotation);
    }

    transformVector(this);

    return point;
  }

  ToGlobal(point: Vector) {
    function transformVector(state: Item) {
      point
        .Rotate(state.Rotation)
        .MultiplyV(state.Scale)
        .AddV(state.Transition);

      if (state.Parent == null || !state.InheritTransform)
        return;

      transformVector(state.Parent);
    }

    transformVector(this);

    return point;
  }

  TransformCanvas(context: CanvasRenderingContext2D) {
    function transformContext(state: Item) {

      if (state.Parent == null || !state.InheritTransform) {
        context.translate(state.Transition.x, state.Transition.y);
        context.scale(state.Scale.x, state.Scale.y);
        context.rotate(state.Rotation);
        return;
      }

      transformContext(state.Parent);
      context.translate(state.Transition.x, state.Transition.y);
      context.scale(state.Scale.x, state.Scale.y);
      context.rotate(state.Rotation);
    }
    transformContext(this);
  }

  AddEventListener<K extends keyof EventType>(type: K, listener: (ev: EventType[K]) => void){
    this._eventHandler.addEventListener(type, listener);
    return this;
  }

  RemoveEventListener<K extends keyof EventType>(type: K, listener: (ev: EventType[K]) => void){
    this._eventHandler.removeEventListener(type, listener);
    return this;
  }

  HandleEvent(event: MouseEvent) {
    this._eventHandler.Emit(event);
  }
}