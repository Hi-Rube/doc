var crypto = require("crypto");
var fs = require("fs");

var args = process.argv.splice(2);
var text = fs.readFileSync("xiba.png");
var cipher = crypto.createCipher("aes-256-cbc", args[0]);
var crypted = cipher.update(text,"utf-8",'hex');

crypted += cipher.final("hex");

fs.unlinkSync("xiba.png");
fs.writeFileSync("xiba.png", crypted, "utf-8");
