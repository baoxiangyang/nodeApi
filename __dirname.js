//可以读取此文件夹下所有资料。访问是需加上文件名称
var http = require('http'),
parse = require('url').parse,
join = require('path').join,
fs = require('fs');
var root = __dirname; //返回运行程序的所在的绝对路径
var server = http.createServer(function(req,res){
	var url = parse(req.url);
	var path = join(root,url.pathname); //获取文件绝对路径
	console.log(path)
	fs.stat(path,function(err,stats){
		if(err){
			if('ENOENT' == err.code){
				res.statusCode = 404;
				res.end('Not found')
			}else{
				res.statusCode = 500;
				res.end('Server error')
			}
		}else{
			res.writeHeader(200,{"Content-Type":"text/plain","charset":"utf8"})
			var stream = fs.createReadStream(path);
			stream.pipe(res);
			stream.on('error',function(err){
				res.statusCode = 500;
				res.end('Server Error' + err)
			})
		}
	})
});
server.listen(3000)