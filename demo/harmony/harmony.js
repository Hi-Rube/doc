var compute = function *(a, b){
	var foo = yield a+b;
	console.log(foo);
};
var ge = compute(2,3);
var re = ge.next();   //1123
ge.next(1);  //1

console.log(re);

