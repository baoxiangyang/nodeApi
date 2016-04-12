var http = require('http');
var opts = {
	host:'www.baidu.com',
	port:80,
	path:'/',
}
var req = http.get(opts, function(res){
	res.setEncoding('utf8');
	res.on('data' ,function(data){
		console.log(data)
	})
})
