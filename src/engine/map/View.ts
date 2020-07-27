import { Node } from "./Node";
import { Camera } from "./Camera";
import { CONTEXT, SCREEN_WIDTH, SCREEN_HEIGTH } from "../Consts";

export class View extends Node{
    readonly Nodes : Node[] = [];
    MainCamera : Camera;

    constructor(){
        super();
        this.MainCamera = new Camera();
    }

    Clear(){
        CONTEXT.clearRect(0,0,SCREEN_WIDTH, SCREEN_HEIGTH);        
    }

    TreeTraversal(node : Node){
        node.DependentNodes.forEach(n=>{
            
        })
    }

    Run(){
        setInterval(() => {
            this.Clear();
            this.Nodes.forEach(n => n.OnUpdate());
        }, 5);
    }
}