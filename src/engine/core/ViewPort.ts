import { Scene } from "./Scene";
import { MouseContext } from "./MouseContext";
import { Point } from "../primitives/Point";
import { Vector } from "../primitives/Vector";

export class ViewPort{
    private scenes : Scene[] = [];
    private container : HTMLDivElement;
    readonly Mouse : MouseContext;

    constructor(viewportContainerId : string){
        this.container = <HTMLDivElement>document.getElementById(viewportContainerId);
        this.Mouse = new MouseContext();

        this.container.addEventListener("mousedown", (e) => {
            this.Mouse.HandleState({
                key:"down",
                Position: new Point(e.x, e.y),
                Which : e.which
            })
        });
        this.container.addEventListener("mouseup", (e) => {
            this.Mouse.HandleState(
            {
                key:"up",
                Position: new Point(e.x, e.y)
            });
        });
        this.container.addEventListener("wheel", (e) =>{
            this.Mouse.HandleState({
                key:"wheel",
                Delta: e.deltaY,
                Position: new Point(e.x, e.y)
            })
        });
        this.container.addEventListener("mousemove", (e) => {
            this.Mouse.HandleState({
                key:"move",
                Movement: new Vector(e.movementX, e.movementY),
                Position: new Point(e.x, e.y)
            })
        });
    }

    AddScene(){
        let canvas = <HTMLCanvasElement>document.createElement('canvas');
        canvas.width = this.container.clientWidth;
        canvas.height = this.container.clientHeight;
        canvas.style.position = 'absolute';
        this.container.appendChild(canvas);
        let context = canvas.getContext('2d');
        if(context == null)
            throw "Your brouser doesn't support canvas"
        let scene = new Scene(context, this.Mouse, this.scenes.length);
        this.scenes.push(scene);

        return scene.Context;
    }
}