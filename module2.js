function a(){
	this.a = "a";
}
a.prototype.c = function(){
	console.log(this.a)
}
function b(){
	this.b = "b"
}
b.prototype.c = function(){
	console.log(this.b);
}
module.exports.a =a;
module.exports.b=b;