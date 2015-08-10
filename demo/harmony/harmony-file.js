var helper = function(fn){
 return function(){
 	var args = [].slice.call(arguments);
	var pass;
	args.push(function(){
	 console.log('pass0');
	 if (pass){
	 	pass.apply(null, arguments);
	 }
	});
	console.log('pass1');
	fn.apply(null, args);
	return function(fn){
		console.log('pass2');
		pass = fn;
	}
 }
}

var fs = require("fs");
var readFile = helper(fs.readFile);

var flow = function* (){
	var text = yield readFile("./harmony.js","utf8");
	console.log(text);
}

var gen = flow();
var ret = gen.next();
console.log(ret);
ret.value(function(err, data){
 if (err){
  	return consolse.log(err);
 }
 console.log("===" + data);
 gen.next(data);
});
