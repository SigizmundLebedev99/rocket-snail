export class State<T>{
    Name:T;
    Conditions:{condition:()=>boolean, goto:T}[] = [];
    onEnter? : ()=>void;
    onLeave? : ()=>void;
    onCheck? : ()=>void;

    constructor(name:T){
        this.Name = name;
    }

    AddCondition(condition:()=>boolean, goto:T){
        this.Conditions.push({condition, goto})
        return this;
    }

    OnEnter(action:()=>void){
        this.onEnter = action;
        return this;
    }

    OnCheck(action:()=>void){
        this.onCheck = action;
        return this;
    }

    OnLeave(action:()=>void){
        this.onLeave = action;
        return this;
    }
}

export class StateMachine<T>{
    private states : { [id:string] : State<T>} = {};
    private currentState : T;
    constructor(initState:T){
        this.currentState = initState;
    }

    AddState(name:T){
        let state = new State(name);
        this.states[String(state.Name)] = state;
        return state;
    }

    CheckState(){
        let state = this.states[String(this.currentState)];
        for(let c in state.Conditions){
            let {condition, goto} = state.Conditions[c];
            if(!condition())
                continue;
            if(state.onLeave)
                state.onLeave();
            this.currentState = goto;
            let newState = this.states[String(this.currentState)];
            if(newState.onEnter)
                newState.onEnter();
            return;
        }
        
        if(state.onCheck)
            state.onCheck();
    }
}