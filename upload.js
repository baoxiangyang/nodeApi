var http = require('http'),
qs = require('querystring'),
formidable = require('formidable'),
util = require('util'),
items = [];
var server = http.createServer(function(req,res){
	if('/' == req.url){
		switch(req.method){
			case 'GET':
				show(res)
				break;
			case "POST":
				add(req,res)
				break;
			default:
				badRequest(res)
				break;
		}
	}else if('/post' == req.url){
		if(req.method == "POST"){
			upload(req,res)
		}else{
			showup(res)
		}

	}else{
		notFound(res)
	}
});
server.listen(3000);
function show(res){
	var html = '<html><head><title>Tode List</title> <meta http-equiv="Content-Type"  charset=utf-8" /> </head><body><h1>Todo List</h1>'+
	'<ul>' + items.map(function(item){
		return "<li>" +item+'</li>'
	}).join(' ') + "</ul>" +
	'<form method="post" action="/"><p><input type="text" name="item" /></p>'+
	'</p><input type="submit" value="Add Item" /></p></form></body></html>';
	res.writeHeader(200,{"Content-Type":"text/html"});
	res.end(html)
}
function notFound(res){
	res.writeHeader(404,{"Content-Type":"text/plain"});
	res.end('Not found')
}
function badRequest(res){
	res.writeHeader(400,{"Content-Type":"text/plain"});
	res.end('Bad Request')
}
function add(req,res){
	var body = '';
	req.setEncoding('utf8');
	req.on('data',function(chunk){
		body += chunk
	});
	req.on('end',function(){
		var obj = qs.parse(body);
		items.push(obj.item)
		show(res)
	})
}
function showup(res){
	var html = '<form method="post" action="/post" enctype="multipart/form-data">'+
	'<p><input type="text" name="name" /></p>'+
	'<p><input type="file" name="file" /></p>'+
	'<p><input type="submit" value="Upload">' ;
	res.writeHeader(200,{"Content-Type":"text/html"});
	res.end(html)
}
function upload(req,res){
	if(!isFormaData(req)){
		res.writeHeader(400,{"Content-Type":"text/plain"})
		res.end('Bad request: form=data');
		return ;
	}
	var form = new formidable.IncomingForm();
	form.uploadDir = "./tmp";
	/*form.on('file',function(name,file){
		console.log(name)
	})
	form.on("end",function(){
		res.end('upload complete')
	})*/
	form.parse(req,function(err,fields,files){
		console.log(fields,files);
		console.log('Upload complete');
		res.end('upload complete')
	});
	form.on('progress',function(bytesReceived,bytesExpected){ //监控上传进度
		var percent = Math.floor(bytesReceived/bytesReceived*100);
		console.log(percent);
	})

}
function isFormaData(req){
	var type = req.headers["content-type"]|| " ";
	return -1 != type.indexOf('multipart/form-data')
}