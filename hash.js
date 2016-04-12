var crypto = require('crypto');
var md5 = crypto.createHash('md5');
md5.update('foo');
console.log(md5.digest('hex'));