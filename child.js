process.on('message', function(m){
	console.log('child process received message ',m)
})
process.send({message:"hello parent"})
