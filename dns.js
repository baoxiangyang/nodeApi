var dns = require('dns')
dns.resolve('baidu.com', 'A' ,function(e,r){
	if(e){
		console.log(e)
	}else{
		console.log(r)
	}
})
dns.resolve('baidu.com', 'MX' ,function(e,r){
	if(e){
		console.log(e)
	}else{
		console.log(r)
	}
})
dns.lookup('baidu.com', 4,function(e,a){
	console.log(a)
})