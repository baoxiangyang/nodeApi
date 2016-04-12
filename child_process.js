var spawn = require('child_process').spawn;
/*var ping = spawn('ping',['www.baidu.com']); //创建一个子进程ping 百度 并输出返回结果
ping.stdout.setEncoding('utf8');
ping.stdout.on('data', function(data){
	console.log(data);
})
setTimeout(function(){
	ping.kill('SIGINT') //杀死子进程
	ping.on('exit', function(code ,signal){ //子进程关闭时执行
	console.log('child_process was killed with a '+signal+" signal");
	})

}, 5000);*/
var fork = require('child_process').fork;
var child = fork('./child.js')
child.on('message', function(m){
	console.log("parent process received message ",m);
})
child.send({message:"hello child"})

