export class State<T>{
    Name:T;
    Conditions:{condition:(state?: object)=>boolean, goto:T}[] = [];
    onEnter? : (o?: object)=>void;
    onLeave? : (o?: object)=>void;
    onCheck? : (o?: object)=>void;

    constructor(name:T){
        this.Name = name;
    }

    AddCondition(condition:(state?: object)=>boolean, goto:T){
        this.Conditions.push({condition, goto})
        return this;
    }

    OnEnter(action:(state?: object)=>void){
        this.onEnter = action;
        return this;
    }

    OnCheck(action:(state?: object)=>void){
        this.onCheck = action;
        return this;
    }

    OnLeave(action:(state?: object)=>void){
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

    CheckState(_state?:object){
        let state = this.states[String(this.currentState)];
        for(let c in state.Conditions){
            let {condition, goto} = state.Conditions[c];
            if(!condition(_state))
                continue;
            if(state.onLeave)
                state.onLeave(_state);
            this.currentState = goto;
            let newState = this.states[String(this.currentState)];
            if(newState.onEnter)
                newState.onEnter(_state);
            return;
        }
        
        if(state.onCheck)
            state.onCheck(_state);
    }
}