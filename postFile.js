/*
	说明：
		1.简单处理上传二进制数据原理,只是原理没有写成模块
		2.所有操作在内存中进行，所有不支持大文件上传。根据原理很好做到大文件上传
		3.未处理multiple的多选。
*/
'use strict'
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
	if(req.method == 'GET'){
		res.writeHead(200,{'Content-type':'text/html'});
		res.end('<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>post上传文件</title><link rel="stylesheet" href=""></head>'
						+'<body><form action="/" method="post" enctype="multipart/form-data"><p><input type="text" name="username"/></p><p><textarea type="text" name="content" ></textarea></p>'
        		+'<p><input type="file" name="images"/></p><p><input type="file" name="images2"/></p><input  type="submit" /></form></body></html>');
	}else{
		var arrData = [];
		req.on('data',function(chunck){
			arrData.push(chunck);
		})
		req.on('end',function(){
					//合并上传二进制数组
			var postData = Buffer.concat(arrData), 
					//保存上传数据
					postJson = {},
					//数据分割线
					boundary = '--' + req.headers["content-type"].split('=')[1],
					//割线所在位置
					catArr = boundaryArr(postData, boundary);
					console.log(catArr);
				catArr.forEach(function(item, index, arr){
					let temp = [];//数据内容二进制
					if(arr[index+1]){
						temp = postData.slice(item, arr[index+1]);
						//处理二进制是文字
						if(temp.indexOf('Content-Type') == -1){
							let valueIndex = temp.indexOf('\r\n',temp.indexOf('name=')),
									name = temp.slice(temp.indexOf('name=')+6, valueIndex-1).toString(),
									value =  temp.slice(valueIndex+4, temp.indexOf('\r\n',valueIndex+4)).toString();
							postJson[name] = value;
						}else{
							//处理二进制是文件
							let valueIndex = temp.indexOf(';',temp.indexOf('name=')),
									name = temp.slice(temp.indexOf('name=')+6, temp.indexOf(';',temp.indexOf('name='))-1).toString(),
									fileName = temp.slice(temp.indexOf('filename')+10, temp.indexOf('\r\n',temp.indexOf('filename'))-1).toString();
									postJson[name] = fileName;
							let valueIndex2 = temp.indexOf('\r\n',temp.indexOf('Content-Type'));
							let buf = temp.slice(valueIndex2+4,temp.length-2);
							fs.writeFile('./'+fileName,buf,function(err,data){
								console.log('导出成功2')
							})
						}
					}
				})
				console.log(postJson);
				res.writeHead(200,{'Content-Type':'text/plain'});
				res.end('上传成功')
		})
	}
}).listen(3000);
console.log('服务器启动成功');
//返回boundary 出现次数和位置
function boundaryArr(buffer,str){
	var index = 0, indexArr = [];
	do
	{
		index = buffer.indexOf(str,index);
		if(index != -1){
			indexArr.push(index);
			index += 1;
		}
	}
	while (buffer.indexOf(str,index) != -1)
	return indexArr;
}
