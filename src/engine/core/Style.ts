
export class Style{
    strokeStyle? : string;
    fillStyle? : string;
    pointRadius? : number;
    lineWidth? : number;
    textAlign? : CanvasTextAlign;

    Copy(style : Style){
        this.fillStyle = this.fillStyle??style.fillStyle;
        this.lineWidth = this.lineWidth??style.lineWidth;
        this.pointRadius = this.pointRadius??style.pointRadius;
        this.strokeStyle = this.strokeStyle??style.strokeStyle;
        this.textAlign = this.textAlign??style.textAlign;
    }

    Apply(context : CanvasRenderingContext2D){
        context.fillStyle = this.fillStyle?? "black";
        context.strokeStyle = this.strokeStyle?? "black";
        context.lineWidth = this.lineWidth?? 0.5;
        context.textAlign = this.textAlign?? 'start';
    }
}