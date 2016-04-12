var http = require('http');
var html = '<html><body><form method="post" action="/">'+
	'<input name="text" type="text"/><br /><input type="submit" value="提交"><br />'+
	'<form></body></html>'
http.createServer(function(req,res){
	if(req.method == 'GET'){
		res.status = 200;
		res.setHeader('Content-Type','text/html');
		res.setHeader('Set-Cookie','as=baozi;Max-Age=1000');
		res.end(html)
	}else if(req.method='POST'){
		var arr = " "
		req.on('data', function(chunk){
			arr += chunk;
		})
		req.on('end', function(){
			console.log('req.headers '+req.headers);
			res.writeHead(200,{'Content-Type':"text/plain"})
			res.end(arr)	
		})
	}
}).listen(3000)