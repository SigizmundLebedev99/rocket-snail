export class Complex{
    x: number;
    y: number;
    constructor(x:number, y:number){
        this.x=x;
        this.y=y;
    }

    
    Mod(){
        var t=this.x*this.x+this.y*this.y;
        return Math.sqrt(t);
    }

    Arg(){
        if (this.x>0 && this.y>=0)
          return Math.atan(this.y/this.x); 
        else if (this.x<0)
          return Math.atan(this.y/this.x)+Math.PI;
        else if (this.x>0 && this.y<0)
          return Math.atan(this.y/this.x)+2*Math.PI;
        else if (this.x==0 && this.y>0)
          return Math.PI/2;
        else if (this.x==0 && this.y<0)
          return 3*Math.PI/2;
        else return 0;
      }
      

    Mul(obj: Complex){
        var r1=this.Mod(), r2=obj.Mod();
        var p1=this.Arg(), p2=obj.Arg();
        var u=r1*r2*Math.cos(p1+p2);
        var v=r1*r2*Math.sin(p1+p2);
        return new Complex(u,v);
    }

}