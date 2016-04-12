var process = require('process');
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data' ,function(chunk){
	process.stdout.write('data:'+chunk)
});
process.stdin.on('end' ,function(){
	process.stdout.write('data:end')
});

//通过管道方式把标准输入转到标准输出
//process.stdin.resume();
//process.stdin.pipe(process.stdout);

//process.nextTick()往事件循环队列里插入回调函数
var http = require('http');
var s = http.createServer(function(req, res) {
			res.writeHead(200, {});
			res.end('foo');
			console.log('http response');
			process.nextTick(function(){console.log('tick')});
 		});
s.listen(8000);