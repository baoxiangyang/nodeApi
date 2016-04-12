var server = require('./Server');
var router = require('./router');
var requesHandlers = require('./requesHandlers');
var handle = {};
handle['/'] = requesHandlers.start;
handle['/start'] = requesHandlers.start;
handle['/upload'] = requesHandlers.upload;
handle['/show'] = requesHandlers.show;
server.start(router.route, handle);