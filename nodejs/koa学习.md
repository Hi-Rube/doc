##koa

###知识     
wind 模式，wind.js 使用 eval 编译了函数使将看似同步的函数，通过 eval 拼接成一个异步函数，但是对于开发者来说是同步的写法，在生产环境实际部署的是异步的编译结果。   
1. Promise 模式    
生成一个 Promise 对象，然后通过向 Promise 对象注入函数，通过 Promise 进行流程控制。    
```      
P = new P();  
{                     
onOK:function(){p.ok(a);}     
onfailed:function(){p.failed(b);}              
}                  
P.then(a).then(b);                   
p.when(a,b).then(c);             
var P = function(){};      
P.prototype.then = function(func){};
P.prototype.ok = function(func){};       
P.prototype.failed = function(fun()){};       
```      
2. Generator 模式   
使用 * 、next和 yield 控制        
```
var compute = function *(a, b){
	var foo = yield console.log(1123);
	console.log(foo);
};
var ge = compute(2,3);
ge.next();   //1123
ge.next(1);  //1
```                         
3. 高阶函数处理异步回调  
async 和 step 的实现。     

###1. 运行   
node --harmony app.js   
|| alias node = 'node --harmony'