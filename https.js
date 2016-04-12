var https = require('https');
var fs = require('fs');
var util = require('util')
var options = {
	key: fs.readFileSync('./key.pem'),
	cert:fs.readFileSync('./key-cert.pem')
};
https.createServer(options, function(req,res){
	var ss =  util.inspect(req)
	//res.writeHeader(200,{'Content-Type':"text/plain"});
	res.setHeader('Set-Cookie',['a=0','b=1'])
	res.write('req请求包含')
	res.end(ss);
}).listen(3000)