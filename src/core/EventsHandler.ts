export type EventType = {
  "click" : MouseEvent;
  "mouseenter" : MouseEvent;
  "mouseleave" : MouseEvent;
  "mousedown" : MouseEvent; 
  "mouseup" : MouseEvent; 
  "mousemove" : MouseEvent; 
  "wheel" : WheelEvent;
  "dblclick" : MouseEvent;
}

export class EventHandler{
  private listeners : {[id:string] : any[]} = {
    'click' : [],
    'mouseenter' : [],
    "mouseleave" : [],
    "mousedown" : [],
    "mouseup" : [],
    "mousemove" : [],
    "wheel" : [],
    "dblclick" : []
  };

  addEventListener<K extends keyof EventType>(type: K, listener: (ev: EventType[K]) => void){
    this.listeners[type].push(listener);
  }

  removeEventListener<K extends keyof EventType>(type: K, listener: (ev: EventType[K]) => void){
    this.listeners[type] = this.listeners[type].filter(e => e != listener);
  }

  Emit(event: MouseEvent){
    this.listeners[event.type].forEach(listener => listener(event));
  }
}