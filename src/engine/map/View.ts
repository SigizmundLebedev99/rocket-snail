import { Node } from "./Node";
import { CONTEXT, SCREEN_WIDTH, SCREEN_HEIGTH } from "../Consts";

export class View{
    private static _singleton : View = new View();

    static get Instanse(){
        return this._singleton;
    }

    static readonly DependentNodes : Node[] = [];

    static AddChild(element: Node){
        this.DependentNodes.push(element);
        return element;
    }

    static Clear(){
        CONTEXT.clearRect(0,0,SCREEN_WIDTH, SCREEN_HEIGTH);        
    }

    static Run(){
        setInterval(() => {
            this.Clear();
            this.DependentNodes.forEach(n => n.OnUpdate());
        }, 5);
    }
}