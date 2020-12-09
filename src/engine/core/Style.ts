import { SceneElement } from "./SceneElement";

export class Style{
    strokeStyle? : string | CanvasGradient | CanvasPattern;
    fillStyle? : string | CanvasGradient | CanvasPattern;
    pointRadius? : number;
    lineWidth? : number;
    textAlign? : CanvasTextAlign;
    globalAlpha?: number;
    globalCompositeOperation?: string;

    Copy(style : Style){
        Object.getOwnPropertyNames(this).forEach(p => {
            if(!this[p])
                this[p] = style[p];
        });
    }

    static Apply(context : CanvasRenderingContext2D, node : SceneElement){
        if(node.Parent != null)
            this.Apply(context, node.Parent);
        Object.getOwnPropertyNames(node.Style).forEach(p => {
            if(node.Style[p] && context[p])
                context[p] = node.Style[p];
        });
    }
}