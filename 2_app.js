var stuff = require('./stuff');
// console.log(stuff.counter(['shaun','crystal','rex']));
// console.log(stuff.added(6,9));
// console.log(stuff.added(stuff.pi,5));
// ---- Video 6 (Modules and require()) + Video 7 (Module Patterns) - with stuff.js

var events = require('events');

if(false){
var myEmitter = new events.EventEmitter(); // We can wire up events to this
myEmitter.on('someEvent', function(msg){ //When 'someEvent' occurs, then function
    console.log(msg);
});
myEmitter.emit('someEvent', 'the event was emitted'); //First argument is someEvent, the second one is the parameter
}

var util = require('util');
var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter); //Something can be fixed here, not declared in the video?
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james,mary,ryu];

people.forEach(function(person){ //forEach is just javaScript function
    person.on('speak', function(msg){//Whatever person object is currently passed on,we are attaching custom event to it 'speak'
    console.log(person.name + ' said: ' + msg);
    });
});

james.emit('speak','hey dudes');
ryu.emit('speak','I want a kebab');

// ---- End of Video 8 (The Node Event Emitter)