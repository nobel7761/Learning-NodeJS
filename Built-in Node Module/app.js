const MyEvent = require('./myEvent');
const myEvent = new MyEvent();

myEvent.on('event1', () => {
    console.log('Event 1 Triggered!');
});

myEvent.function1();
