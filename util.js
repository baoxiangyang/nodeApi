var util = require('util');
//util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数
function base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('Hello'+this.name)
	}
}
base.prototype.showName = function(){
	console.log(this.name)
}
function sub(){
	this.name = 'sub';
}
util.inherits(sub,base);
var objBase = new base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);



//util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换为字符串的方法，通常用于调试和错误输出
function person(){
	this.name = 'baozi';
	this.toString = function(){
		return this.name
	}
}
var obj = new person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true ,true));