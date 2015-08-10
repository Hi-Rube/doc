##koa
***tag: koa nodejs框架 wing.js Promise Generator 异步处理 对象复制 数据隔离***

###0. 知识     
wind 模式，wind.js 使用 eval 编译了函数使将看似同步的函数，通过 eval 拼接成一个异步函数，但是对于开发者来说是同步的写法，在生产环境实际部署的是异步的编译结果。   
**1. Promise 模式**    
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
**2. Generator 模式**   
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
[http://www.infoq.com/cn/articles/generator-and-asynchronous-programming/ ](http://www.infoq.com/cn/articles/generator-and-asynchronous-programming/ )       

[自己的DEMO](https://github.com/Hi-Rube/doc/tree/master/demo/harmony )           

关于 yield 的变形 yield*         
[http://blog.jobbole.com/79601/](http://blog.jobbole.com/79601/)    

**3. 高阶函数处理异步回调**  
async 和 step 的实现。     
**4. 看代码时遇到的：** 可以通过 [].slice.call(arguments) 来隔离 arguments，使数组对象独立起到 copy 的作用
###1. 运行   
node --harmony app.js   
|| alias node = 'node --harmony'        

###2. 启动     
```              
var koa = require('koa');     
var app = koa();             
app.use(function*(){              
	this.body = 'hello world';   
});              
app.listen(3000);           
```

###3. 中间件编写      
![](https://github.com/koajs/koa/raw/master/docs/middleware.gif )
  
