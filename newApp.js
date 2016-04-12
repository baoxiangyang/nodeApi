var http = require("http"),
fs = require('fs');
var server = http.createServer(function(req,res){
	fs.readFile("./index.html", function(error,data){
		if(error){
			console.log(error);
		}else{
			res.writeHead(200, {"Content-Type":"text/html"});
			res.end(data,"utf8")
		}
	})
}).listen(3000,"0.0.0.0");
console.log('server runing a,port:000');
var io = require("socket.io").listen(server);
io.sockets.on('connection', function(socket){ //客户端接通时执行
	console.log('user connection')
	socket.on('message', function(data){ //收到客户端发送的消息
		console.log(data);
		socket.broadcast.emit('message', {"text":data.text}) //给除发送来消息客户端的其他客户端发送消息
	})
	socket.on('disconnect', function(){ //客户端断开是执行
		console.log('user disconnected')
	})
	socket.on('ping', function(data){
		console.log('Received PING. Send Pong...');
		socket.emit('pong',{text:"PONG"})
	})
	socket.on('pong', function(data){
		console.log('Received PONG response. PONG');
	})
	setInterval(function(){
		console.log('Sending....,PING to Client');
		socket.emit('ping', {text:"PING"})
	},5000);
})
//同过stream写入