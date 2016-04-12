var express = require('express');
var app = express();
var tweets = [];
app.get('/', function(req, res){
	res.send('Welcome to Tweets')
});
app.get('/tweets', function(req, res){
	res.send(tweets)
});
app.post('/send', express.bodyParser(), function(req, res){
	if(req.body&&req.body.tweet){
		res.send({status:'OK',message:'Tweet,received'})
	}else{
		res.send({status:'OK',message:'no tweet'})
	}
});
app.listen(3333)