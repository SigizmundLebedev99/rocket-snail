import { Component, IState } from "./Component";
import { Style } from "./Style";
import { SceneContext } from "./SceneContext";
import { IPointIn } from "../interfaces/IPointIn";
import { MouseState, MouseContext } from "./MouseContext";
import { Vector } from "../primitives/Vector";
import { GeneralComponent } from "../general-components/GeneralComponent";

export type NodePosition = "relative" | "absolute"

export class Item {
    private _scene: SceneContext;

    get Scene() {
        return this._scene;
    }

    IsActive: boolean;

    Position: NodePosition = "relative";

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

    set Parent(val: Item | null){
        if(val == null && this.parent != null){
            this.parent.RemoveChild(this);
        }
        else if(val != null && this.parent != null){
            this.parent.RemoveChild(this);
            val.AddChild(this);
        }
        else{
            val?.AddChild(this);
        }
    }

    private children: Item[] = [];

    get Children() {
        return [...this.children];
    }

    private components: Component[] = [];

    readonly Style: Style = new Style();

    Transition: Vector = new Vector(0, 0);
    Rotation: number = 0;
    Scale: Vector = new Vector(1, 1);

    get TotalRotation() {
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

    constructor(view: SceneContext, active: boolean = true) {
        this._scene = view;
        this.mouseContext = view.Mouse;
        view.AddElement(this);
        this.IsActive = active;
    }

    AddChild(element: Item) {
        if (element.Parent != null)
            element.Parent.RemoveChild(element);

        element.parent = this;
        this.children.push(element);
        return this;
    }

    Remove() {
        this._scene.RemoveElement(this);
        if (this.parent != null) {
            this.parent.children = this.parent.children.filter(e => e != this);
        }
        this.children.forEach(e => e.Remove());
    }

    private RemoveChild(element: Item) {
        element.parent = null;
        this.children = this.children.filter(e => e != element);
    }

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

    private map?: () => MouseState;

    CaptureMouse(map: () => IPointIn) {
        if (this.mouseContext)
            this.map = this.mouseContext.CaptureMouse(this, map);
        return this;
    }

    private ResortComponents() {
        this.components = [...this.components].sort((a, b) => b.Priority - a.Priority);
    }

    OnUpdate() {
        if (this.components.length == 0)
            return;

        if (this.Position == 'relative')
            this.PrepareCanvas(this._scene.Canvas)

        Style.Apply(this._scene.Canvas, this);

        this.components.forEach(c => {
            let mouseState : MouseState | null;
            if(this.map){
                mouseState = this.map();
            }
            else
                mouseState = this.mouseContext.GetState();
            let state = {node: this, context: this._scene.Canvas, mouseState: mouseState};
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
            if (state.Parent == null) {
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

            if (state.Parent == null)
                return;

            transformVector(state.Parent);
        }

        transformVector(this);

        return point;
    }

    private PrepareCanvas(context: CanvasRenderingContext2D) {
        function transformContext(state: Item) {
            if (state.Parent == null) {
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
}