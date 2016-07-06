'use strict'
let fs = require('fs'),
		rs = fs.createReadStream('./1.zip'),
		ws = fs.createWriteStream('./2.zip');
rs.on('data',function(chunck){
	console.log('rs.data-----');
	if(!ws.write(chunck)){
		console.log('ws.write false');
		rs.pause();
	}
})
rs.on('end',function(){
	console.log('rs.end');
	ws.end();
})
ws.on('drain',function(){
	console.log('ws.drain');
	rs.resume();
})
ws.on('finish',function(){
	console.log('ws.finish');
})