import { SceneElement } from "./SceneElement";

export class Style{
    strokeStyle? : string | CanvasGradient | CanvasPattern;
    fillStyle? : string | CanvasGradient | CanvasPattern;
    lineWidth? : number;
    textAlign? : CanvasTextAlign;
    globalAlpha?: number;
    globalCompositeOperation?: string;

    constructor(state: any = null){
        if(state)
        Object.getOwnPropertyNames(state).forEach(p => {
            this[p] = state[p];
        });
    }

    Copy(style : Style){
        Object.getOwnPropertyNames(this).forEach(p => {
            if(!this[p])
                this[p] = style[p];
        });
    }

    static Apply(context : CanvasRenderingContext2D, node : SceneElement | Style){
        if(node instanceof Style){
            Object.getOwnPropertyNames(node).forEach(p => {
                if(node[p] && context[p])
                    context[p] = node[p];
            });
            return;
        }

        if(node.Parent != null)
            this.Apply(context, node.Parent);
        Object.getOwnPropertyNames(node.Style).forEach(p => {
            if(node.Style[p] && context[p])
                context[p] = node.Style[p];
        });
    }
}