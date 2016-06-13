var mongo = require('mongodb');
var host = "localhost";
var port = 27017;
var server = new mongo.Server(host,port,{auto_reconnect:true})
var db = new mongo.Db('fengBlog',server, {safe:true}); //fengBlog 为数据库名字
var docs=[
     {type:"food",price:11},
     {type:"food",price:10},
     {type:"food",price:9},
     {type:"food",price:8},
     {type:"book",price:9}
 ];
db.open(function(err,db){ //连接数据库
	if(err){
		throw err;
	}else{
		console.log('成功建立连接');
		db.collection('users',function(err,collection){
			//写入数据
			collection.insert(docs,function(err,docs){ //批量写入
				console.log(docs);
				//db.close(); //关闭数据库连接
			})
			//读取数据       //读取type=food。price小于10的数据
			collection.find({type:"food",price:{$lt:10}}).toArray(function(err,docs){
				if(err){throw err;}else{
					console.log(docs);
					db.close();
				}
			})
		})
	}
});
db.on('close', function(err,db){//关闭数据库
	if(err){throw err}else{
		console.log('关闭数据库')
	}
})
