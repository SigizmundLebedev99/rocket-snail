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

    Apply(context : CanvasRenderingContext2D){
        Object.getOwnPropertyNames(this).forEach(p => {
            if(this[p] && context[p])
                context[p] = this[p];
        });
    }
}