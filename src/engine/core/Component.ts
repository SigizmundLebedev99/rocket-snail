export abstract class Component{

    Started : boolean = false;

    OnStart() : void{}

    abstract OnUpdate() : void;
}