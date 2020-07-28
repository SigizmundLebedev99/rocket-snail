import { Node } from "./Node";
import { CONTEXT, SCREEN_WIDTH, SCREEN_HEIGTH } from "../Consts";

export class View{
    static readonly DependentNodes : Node[] = [];
    
    private static tree : Node;

    static AddChild(element: Node){
        this.DependentNodes.push(element);
        this.Resort();
        return element;
    }

    static Resort(){
        this.DependentNodes.sort((a,b) => a.Priority - b.Priority);
    }

    static Clear(){
        CONTEXT.clearRect(0,0,SCREEN_WIDTH, SCREEN_HEIGTH);        
    }

    static Run(){
        setInterval(() => {
            this.Clear();
            this.DependentNodes.forEach(n => n.OnUpdate());
        }, 8);
    }
}