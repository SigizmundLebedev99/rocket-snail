import { SceneElement } from "../../engine/core/SceneElement";
import { Line } from "../primitives/Line";
import { DrawLineCom } from "../../engine/general-components/DrawLineCom";
import { SceneContext } from "../../engine/core/SceneContext";
import { Vector } from "../primitives/Vector";
import { Style } from "../core/Style";

export class Grid extends SceneElement{
    constructor(view : SceneContext, gap: number){
        super(view);
        this.Priority = -1000;
        this.Style.lineWidth = 0.5;
        this.Style.strokeStyle = "black";
        this.Position = 'absolute';
        this.Transition = view.Center;

        let {Width, Height} = view;
        let {x,y} = view.Center;
        x = x - Width - Width % gap + 5;
        y = y - Height - Height % gap + 6;

        while(x < Width){
            let _x = x;
            this.AddComponent(new DrawLineCom(() => new Line(
                new Vector(
                    (_x + this.Transition.x % gap) * this.Scale.x,
                    - Height / 2
                ), 
                new Vector(
                    (_x + this.Transition.x % gap) * this.Scale.x, 
                    Height * 1.5
                )
            )));
            x += gap;
        }

        while(y < Height){
            let _y = y;
            this.AddComponent(new DrawLineCom(() => new Line(
                new Vector(
                    - Width * 2, 
                    (_y + this.Transition.y % gap) * this.Scale.y
                ), 
                new Vector(
                    Width * 1.5, 
                    (_y + this.Transition.y % gap) * this.Scale.y
                )
            )));
            y += gap;
        }

        this.AddComponent(new DrawLineCom(() => new Line(
            new Vector(- Width,  this.Transition.y * this.Scale.x), 
            new Vector(Width,  this.Transition.y * this.Scale.x)
        ), new Style({
            lineWidth:5
        })))

        this.AddComponent(new DrawLineCom(() => new Line(
            new Vector( this.Transition.x * this.Scale.x, - Height), 
            new Vector( this.Transition.x * this.Scale.x, Height)
        ), new Style({
            lineWidth:5
        })))
    }
}