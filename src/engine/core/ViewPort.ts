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

        this.Mouse.ListenEvents(this.container);
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