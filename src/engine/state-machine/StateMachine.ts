export class State<T>{
    Name:T;
    Conditions:{condition:()=>boolean, goto:T}[] = [];
    Machine : StateMachine<T>;
    onEnterListeners : (()=>void)[] = [];
    onLeaveListeners : (()=>void)[] = [];

    constructor(name:T, machine:StateMachine<T>){
        this.Name = name;
        this.Machine = machine;
    }

    AddCondition(condition:()=>boolean, goto:T){
        this.Conditions.push({condition, goto})
        return this;
    }

    OnEnter(action:()=>void){
        this.onEnterListeners.push(action);
        return this;
    }

    OnLeave(action:()=>void){
        this.onLeaveListeners.push(action);
        return this;
    }
}

export class StateMachine<T>{
    private states : { [id:string] : State<T>} = {};
    private currentState : T;
    constructor(initState:T){
        this.currentState = initState;
    }

    AddState(state: State<T>){
        this.states[String(state.Name)] = state;
        return this;
    }

    CheckState(){
        let state = this.states[String(this.currentState)];
        for(let c in state.Conditions){
            let {condition, goto} = state.Conditions[c];
            if(!condition())
                continue;
            state.onLeaveListeners.forEach(l=>l());
            this.currentState = goto;
            let newState = this.states[String(this.currentState)];
            newState.onEnterListeners.forEach(l=>l());
            return;
        }
    }
}