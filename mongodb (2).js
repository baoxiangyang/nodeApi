var mong = require('mongodb');
var host = 'localhost';
var port = mong.Connection.DEFAULT_PORT;
var db = new mong.Db('node-mong-examples', new mong.Server(host,port,{}),{});
db.open(function(err,db){
	db.collection('user', function(err,collection){
		collection.insert({username:'Bilbo',firstname:'shibo'},function(srr,docs){
			console.log(docs);
			db.close();
		})
	})
})