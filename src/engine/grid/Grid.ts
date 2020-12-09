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
        this.Style.lineWidth = 0.2;
        this.Style.strokeStyle = "black";
        this.Position = 'absolute';
        this.Transition = view.Center;

        let {Width, Height} = view;
        let x_c = view.Center.x;
        let y_c = view.Center.y;

        let x = x_c - Width + (Width % gap);
        let y = y_c - Height + (Height % gap);

        
        while(x < Width){
            let _x = x;
            this.AddComponent(new DrawLineCom(() => {
                return new Line(
                new Vector(
                    (x_c - _x + (<SceneElement>this.Parent).Transition.x % gap) * this.Scale.x,
                    - Height / 2
                ), 
                new Vector(
                    (x_c - _x + (<SceneElement>this.Parent).Transition.x % gap) * this.Scale.x, 
                    Height * 1.5
                )
            )}));
            x += gap;
        }

        while(y < Height){
            let _y = y;
            this.AddComponent(new DrawLineCom(() => new Line(
                new Vector(
                    - Width * 2, 
                    (y_c - _y + (<SceneElement>this.Parent).Transition.y % gap) * this.Scale.y
                ), 
                new Vector(
                    Width * 1.5, 
                    (y_c - _y + (<SceneElement>this.Parent).Transition.y % gap) * this.Scale.y
                )
            )));
            y += gap;
        }

        this.AddComponent(new DrawLineCom(() => new Line(
            new Vector(- Width,  (<SceneElement>this.Parent).Transition.y * this.Scale.x), 
            new Vector(Width,  (<SceneElement>this.Parent).Transition.y * this.Scale.x)
        ), new Style({
            lineWidth:1
        })))

        this.AddComponent(new DrawLineCom(() => new Line(
            new Vector( (<SceneElement>this.Parent).Transition.x * this.Scale.x, - Height), 
            new Vector( (<SceneElement>this.Parent).Transition.x * this.Scale.x, Height)
        ), new Style({
            lineWidth:1
        })))
    }
}