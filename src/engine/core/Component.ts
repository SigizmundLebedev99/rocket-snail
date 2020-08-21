export abstract class Component{
    protected priority : number = 1;

    get Priority(){
        return this.priority;
    }
    set Priority(v: number){
        if(this.Priority == v)
            return;
        this.Priority = v;
        
    }

    Started : boolean = false;

    OnStart() : void{}

    abstract OnUpdate() : void;
}