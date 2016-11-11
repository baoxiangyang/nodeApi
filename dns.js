var dns = require('dns');
//将域名解析为ipv4或ipv6的第一个记录
dns.lookup('baidu.com',function(err,address, family){
	if(err) console.log('err: ' + err);
	console.log('address: '+ address);
});
//将域名解析为记录类型的数组
dns.resolve('baidu.com',function(err,address, family){
	if(err) console.log('err: ' + err);
	console.log('address: '+ address);
});
//查询 CNAME 记录, 解析出其他域名地址
dns.resolveCname('www.baidu.com',function(err,address, family){
	if(err) console.log('resolveCnameErr: ' + err);
	console.log('address: '+ address);
});
//反向解析 IP 地址，返回指向该 IP 地址的域名数组。
dns.reverse('218.201.4.3', function(err,domain){
	if(err) console.log('reverseErr: ' + err);
	console.log('domain: '+ domain);
});
//返回一个当前用于解析的 IP 地址的数组。
ipArr = dns.getServers();
console.log(ipArr);
//返回hostname 和 service
dns.lookupService('127.0.0.1', 80, (err, hostname, service) => {
  console.log(hostname, service);
});



dns.resolve('baidu.com', 'A' ,function(e,r){
	if(e){
		console.log(e);
	}else{
		console.log(r);
	}
});
dns.resolve('baidu.com', 'MX' ,function(e,r){
	if(e){
		console.log(e);
	}else{
		console.log(r);
	}
});
dns.lookup('baidu.com', 4,function(e,a){
	console.log(a);
});
/*
指定一个 IP 地址字符串数组，将它们作为解析所用的服务器。
dns.setServers(servers)

返回域名的的各种记录
dns.resolve4
dns.resolve6
dns.resolveMx
dns.resolveTxt
dns.resolveSrv
dns.resolveNs

dns.NODATA: 无数据响应。
dns.FORMERR: 查询格式错误。
dns.SERVFAIL: 常规失败。
dns.NOTFOUND: 没有找到域名。
dns.NOTIMP: 未实现请求的操作。
dns.REFUSED: 拒绝查询。
dns.BADQUERY: 查询格式错误。
dns.BADNAME: 域名格式错误。
dns.BADFAMILY: 地址协议不支持。
dns.BADRESP: 回复格式错误。
dns.CONNREFUSED: 无法连接到 DNS 服务器。
dns.TIMEOUT: 连接 DNS 服务器超时。
dns.EOF: 文件末端。
dns.FILE: 读文件错误。
dns.NOMEM: 内存溢出。
dns.DESTRUCTION: 通道被摧毁。
dns.BADSTR: 字符串格式错误。
dns.BADFLAGS: 非法标识符。
dns.NONAME: 所给主机不是数字。
dns.BADHINTS: 非法HINTS标识符。
dns.NOTINITIALIZED: c c-ares 库尚未初始化。
dns.LOADIPHLPAPI: 加载 iphlpapi.dll 出错。
dns.ADDRGETNETWORKPARAMS: 无法找到 GetNetworkParams 函数。
dns.CANCELLED: 取消 DNS 查询。
*/