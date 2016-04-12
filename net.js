var net = require("net");
var chatserver = net.createServer(),
clientList=[];
chatserver.on('connection',function(client){
	client.name = client.remotePort;
	client.write('Hi'+client.name+"\n");
	clientList.push(client);
	client.on('data' ,function(data){
		boradcast(data,client)
	});
	client.on('end', function(){
		clientList.splice(clientList.indexOf(client),1)
	});
	client.on('error', function(e){
		console.log(e)
	})
})
function boradcast(data,client){
	var cleanup = [];
	for(var i=0;i<clientList.length;i++){
			if(clientList[i] == client) continue;
			if(clientList[i].writable){
				clientList[i].write(client.name+"say:"+data.toString()+"\n")
			}else{
				cleanup.push(clientList[i]);
				clientList[i].destroy();
			}
		}
}
chatserver.listen(3000)