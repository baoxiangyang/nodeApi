var utils = require('util'),
EventEmitter = require('events').EventEmitter;
var server = function(){
	console.log('init');
}
utils.inherits(server, EventEmitter);
var s = new server();
s.on('abc' ,function(){
	console.log('abc')
})
s.emit('abc')

var emitter = new EventEmitter();
emitter.on('some', function(str1,str2){
	console.log('say:'+str1+str2)
})
emitter.emit('some','baozi','haha')