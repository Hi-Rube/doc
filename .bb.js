var fs = require("fs");
var crypto=require('crypto');
var crypted = fs.readFileSync("xiba.png", 'utf-8');
var decipher = crypto.createDecipher('aes-256-cbc','widkling');
var dec = decipher.update(crypted,'hex','utf-8');
dec += decipher.final('utf8');
//console.log('解密的文本：'+dec);
fs.unlinkSync("xiba.png");
fs.writeFileSync("xiba.png", dec, 'utf8');
