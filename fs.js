var fs = require('fs');
/*//异步读取文件,r如果不指定编码方式，则返回Buffer 二进制文件
fs.readFile('./test.txt','utf-8',function(err,data){
	if(err){
		console.log(err)
	}else{
		console.log(data)
	}
})
//同步读取文件，r如果不指定编码方式，则返回Buffer 二进制文件
var data = fs.readFileSync('./test.txt','utf-8');*/

//fs.open(path, flags, [mode], [callback(err, fd)])
/* path 为路径；flags 可以是以下值
   	r ：以读取模式打开文件。
 	r+ ：以读写模式打开文件。
 	w ：以写入模式打开文件，如果文件不存在则创建。
 	w+ ：以读写模式打开文件，如果文件不存在则创建。
 	a ：以追加模式打开文件，如果文件不存在则创建。
 	a+ ：以读取追加模式打开文件，如果文件不存在则创建。
mode 参数用于创建文件时给文件指定权限，默认是 0666①。
回调函数将会传递一个文件描述符fd 文件描述符是一个非负整数，表示操作系统内核为当前进程所维护的打开文件的记录表索引。
*/
/*fs.read(fd, buffer, offset, length, position, [callback(err, bytesRead,
buffer)])从指定的文件描述符 fd 中读取数据并写入 buffer 指向的缓冲区对象
。offset 是buffer 的写入偏移量。length 是要从文件中读取的字节数。position 是文件读取的起始
位置，如果 position 的值为 null，则会从当前文件指针的位置读取。回调函数传递
bytesRead 和 buffer，分别表示读取的字节数和缓冲区对象。*/
fs.open('./test.txt','r',function(err,fd){
	if(err){
		console.log(err);
		return;
	}
	var buf = new Buffer(8);
	fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){
		if(err){
			console.log(err);
			return;
		}
		console.log('bytesRead'+bytesRead);
		console.log(buffer)
	})
})