process.stdin.resume();
process.on('SIGINT', function(){ //退出node(Ctrl+c)时执行
	console.log('Got a SIGINT. Exiting');
	process.exit(0);
})
process.on('SIGTERM', function(){ //t退出node时执行
	console.log('Got a SIGTERM. Exiting');
	process.exit(0);
})
//process.pid  获取进程pid
console.log('Run kill '+ process.pid+' to send a SIGTERM');
console.log('Run Kill -s SIGINT '+process.pid+' to send a SIGINT');