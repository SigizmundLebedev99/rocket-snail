export type EventType = "click" | "mouseenter" | "mouseleave" | "mousedown" | "mouseup" | "mousemove" | "wheel"

export class EventHandler{
  private listeners : {[id:string] : ((e:MouseEvent) => void)[]} = {
    'click' : [],
    'mouseenter' : [],
    "mouseleave" : [],
    "mousedown" : [],
    "mouseup" : [],
    "mousemove" : [],
    "wheel" : []
  };

  addEventListener(type: EventType, listener: (e:MouseEvent) => void){
    this.listeners[type].push(listener);
  }

  removeEventListener(type: EventType, listener: (e:MouseEvent) => void){
    this.listeners[type] = this.listeners[type].filter(e => e != listener);
  }

  Emit(event: MouseEvent){
    this.listeners[event.type].forEach(listener => listener(event));
  }
}