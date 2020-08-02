
export class NodeStyle{
    strokeStyle? : string;
    fillStyle? : string;
    pointRadius? : number;
    lineWidth? : number;

    private static _default? : NodeStyle
    static get Default(){
        if(this._default)
            return this._default;
        let style = new NodeStyle();
        style.strokeStyle = 'black';
        style.fillStyle = 'black';
        style.pointRadius = 0.2;
        style.lineWidth = 0.5;
        this._default = style;
        return style;
    }

    Copy(style : NodeStyle){
        this.fillStyle = this.fillStyle??style.fillStyle;
        this.lineWidth = this.lineWidth??style.lineWidth;
        this.pointRadius = this.pointRadius??style.pointRadius;
        this.strokeStyle = this.strokeStyle??style.strokeStyle;
    }

    Apply(context : CanvasRenderingContext2D){
        context.fillStyle = this.fillStyle??"black";
        context.strokeStyle = this.strokeStyle??"black";
        context.lineWidth = this.lineWidth??0.5;
    }
}