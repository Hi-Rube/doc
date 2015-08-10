function *foo(){
 var x = 1 + (yield "foo");
 console.log(x);
}

var gen = foo();
console.log(gen.next());
console.log(gen.next(2));

console.log("-------------------");

function foo2(x){
	console.log("x:"+x);
	return 123;
}

function *bar(){
	yield;
 	return foo2(yield);
}
gen = bar();
gen.next();
gen.next();
console.log(gen.next(2));

console.log("-------------------");

function *foo3(){
 yield 1;
 yield 2;
 yield 3;
 yield 4;
 yield 5;
 yield 6;
 return 7;
}

gen = foo3();

for (var v of gen){
 console.log(v);
}


