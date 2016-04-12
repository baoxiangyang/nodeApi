var cp = require('child_process');
/*cp.exec('ls', function(e,stdout,stderr){
	if(!e){

		console.log(stdout);
		console.log(stderr)
	}
})*/
var cat = cp.spawn('cat');
cat.stdout.on('data', function(d){
	console.log(d.toString())
})
cat.stdout.on('exit', function(){
	console.log('kthxbai')
})
cat.stdin.write('meow');
cat.stdin.end();