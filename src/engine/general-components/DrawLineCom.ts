import { Component, IState } from "../core/Component";
import { Line } from "../primitives/Line";
import { Style } from "../core/Style";

export class DrawLineCom extends Component{
    map: (() => Line) | (() => Line[])| Line;
    style? : Style;

    constructor(map: (() => Line) | (() => Line[])| Line, style? : Style){
        super();
        this.map = map;
        this.style = style;
    }

    OnUpdate({context}): void {
        let state : Line | Line[];
        if(this.map instanceof Line)
            state = this.map;
        else
            state = this.map()
            
        if(this.style){
            context.save()
            Style.Apply(context, this.style);
        }

        if(state instanceof Line){
            let line = state;
            context.beginPath();
            context.moveTo(line.p1.x, line.p1.y);
            context.lineTo(line.p2.x, line.p2.y);
            context.closePath();
            context.stroke();
        }
        
        else{
            state.forEach(line => {
                context.beginPath();
                context.moveTo(line.p1.x, line.p1.y);
                context.lineTo(line.p2.x, line.p2.y);
                context.closePath();
                context.stroke();
            })
        }
        
        if(this.style)
            context.restore();
    }
}