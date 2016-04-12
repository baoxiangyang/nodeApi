var url = require('url');
var qs = require('querystring')
var myurl = 'http://www.baidu.com:8080/some/url?with=query&param=that&are=awesome#alsoaahash';
console.log(url.parse(myurl));
console.log(url.parse(myurl, true));
console.log(qs.parse(url.parse(myurl).query));
var obj = {'a':"1",'b':[2,3],'fun':function(){console.log('abc')}}
console.log(obj,qs.encode(obj))