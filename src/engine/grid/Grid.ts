import { SceneElement } from "../../engine/core/SceneElement";
import { Line } from "../primitives/Line";
import { DrawLineCom } from "../../engine/general-components/DrawLineCom";
import { SceneContext } from "../../engine/core/SceneContext";
import { Vector } from "../primitives/Vector";
import { Style } from "../core/Style";
import { IgnorePlugin } from "webpack";

export class Grid extends SceneElement{

    private gap : number;
    private xk : number;
    private yk : number;
    constructor(view : SceneContext, gap: number){
        super(view);
        this.gap = gap;
        this.xk = 1;
        this.yk = 1;
        this.Priority = -1000;
        this.Style.lineWidth = 0.2;
        this.Style.strokeStyle = "black";
        this.Position = 'absolute';
        this.Transition = view.Center;

        let {Width, Height} = view;

        this.AddComponent(new DrawLineCom(() => this.GetLongitudes()));
        this.AddComponent(new DrawLineCom(() => this.GetLatitudes()));

        this.AddComponent(new DrawLineCom(() => new Line(
            new Vector(- Width,  this.Parent?this.Parent.Transition.y:0), 
            new Vector(Width,  this.Parent?this.Parent.Transition.y:0)
        ), new Style({
            lineWidth:1
        })))

        this.AddComponent(new DrawLineCom(() => new Line(
            new Vector( this.Parent?this.Parent.Transition.x:0, - Height), 
            new Vector( this.Parent?this.Parent.Transition.x:0, Height)
        ), new Style({
            lineWidth:1
        })))
    }

    private GetLatitudes(){
        let {Width, Height} = this.Scene;
        let arr : Line[] = [];
        let position = this.Parent?this.Parent.Transition : new Vector(0,0);
        let gap = this.Parent ? Math.abs(this.Parent.Scale.x) : this.gap;
        
        if(gap * this.xk > this.gap){
            this.xk /=2;
        }
        else if(gap * this.xk < this.gap)
            this.xk *= 2;

        gap *= this.xk;

        let x = position.x % gap;
        
        while(x < Width){
            let _x = x;
            arr.push(new Line(
                new Vector(_x, 0), 
                new Vector(_x, Height)
            ));
            x += gap;
        }
        return arr;
    }

    private GetLongitudes(){
        let {Width, Height} = this.Scene;
        if(!this.Parent)
            return [];
        let arr : Line[] = [];
        let position = this.Parent?this.Parent.Transition : new Vector(0,0);
        let gap = this.Parent ? Math.abs(this.Parent.Scale.y) : this.gap;

        if(gap * this.yk > this.gap){
            this.yk /=2;
        }
        else if(gap * this.yk < this.gap)
            this.yk *= 2;

        gap *= this.yk;

        let y = position.y % gap;
        
        while(y < Height){
            let _y = y;
            arr.push(new Line(
                new Vector(0, _y), 
                new Vector(Width, _y)
            ));
            y += gap;
        }
        return arr;
    }
}