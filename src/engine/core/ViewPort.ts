import { Scene } from "./Scene";
import { MouseContext } from "./MouseContext";

export class ViewPort{
    private scenes : Scene[] = [];
    private container : HTMLDivElement;

    constructor(viewportContainerId : string){
        this.container = <HTMLDivElement>document.getElementById(viewportContainerId);
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
        let scene = new Scene(context, this.container);
        this.scenes.push(scene);
        return scene;
    }
}