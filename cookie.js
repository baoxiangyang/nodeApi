var  http = require('http');
http.createServer(function(req,res){
	res.status = 200;
	res.setHeader('Content-Type',"text/plain");
	//Max-Age 单位为 s ，多少s之后过期
	res.setHeader('Set-Cookie',['aa=bb;Expires=Tue,08 Jun 2017 0:0:0 GMT;domain=127.0.0.1','bb=cc','a=1;Max-Age=1000']);
	res.end('cookie')
}).listen(3000)