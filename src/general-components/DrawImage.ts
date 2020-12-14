import { Component, IState } from "../core/Component";
import { Style } from "../core/Style";
import { Rectangle } from "../primitives/Rectangle";
import { Vector } from "../primitives/Vector";

export class DrawImage extends Component {
  image: CanvasImageSource;
  style? : Style;
  destination : Rectangle | Vector;
  sourse? : Rectangle;
  
  constructor(image: CanvasImageSource, destination : Rectangle | Vector = new Vector(0,0), sourse? : Rectangle, style? : Style) {
    super();
    this.image = image;
    this.destination = destination;
    this.sourse = sourse;
    this.style = style;
  }

  OnUpdate({ context } : IState): void {
    if(this.style){
      context.save();
      Style.Apply(context, this.style);
    }
    
    if(this.destination instanceof Rectangle && this.sourse){
      let d = this.destination;
      let s = this.sourse;
      context.drawImage(this.image, s.x, s.y, s.width, s.height, d.x, d.y, d.width, d.height);
    }
    else if(this.destination instanceof Rectangle){
      let d = this.destination;
      context.drawImage(this.image, d.x, d.y, d.width, d.height);
    }
    else{
      let d = this.destination;
      context.drawImage(this.image, d.x, d.y);
    }

    if(this.style){
      context.restore();
    }
  }
}