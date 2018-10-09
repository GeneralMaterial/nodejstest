var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('customEvent', function (message, status) {
    console.log(`${status}: ${message}`)
});

emitter.emit('customEvent', 'Hello World event!', 200);