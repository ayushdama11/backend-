// "events" is built in module - create, fire, listen for events

//example 1= registering for the event to be fired only one time using once

//example 2= create an event emitter instance and register a couple of callbacks

//example 3= registering for event with callback parameters

const EventEmitter=require('events');
const event= new EventEmitter();

event.on("sayMyName", ()=>{
    console.log("your name is ayush");
})

event.on("checkPage", (sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage", 200, "ok");
event.emit("sayMyName");
