var fs = require('fs');
var readStream = fs.ReadStream("./app.js"); //标准输入流
var writeStream = fs.WriteStream("./newApp.js") //标准输出流
var data = '';
readStream.setEncoding('utf8');
readStream.on('data',function(chunk){ //一边读入，一边写出。管道模式
	writeStream.write(chunk)
})
readStream.on('close', function(){
	writeStream.write("通过stream写入")
	writeStream.end()
})
//readStream.pipe(writeStream)  此方法等效于 readStream.on('data'),on('close')