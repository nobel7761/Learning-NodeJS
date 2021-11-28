const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event1', () => {
    console.log("Event 1 Called");
})

emitter.on('event2', () => {
    console.log("Event 2 Called");
})

emitter.on('event3', (e) => {
    console.log(`Event 3 Called! Name: ${e.name} Age: ${e.age}`);
})


emitter.emit('event1');
emitter.emit('event3', { name: 'Habibur Nobel', age: 26 });