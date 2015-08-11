##js 细碎知识

### js 之 caller, callee      
* **caller**   
返回一个对函数的引用，返回的引用所对应的函数调用了当前函数。     

```     
function a(){     
	console.log(a.caller);         
}    
a.caller;      //null
a();		   //[Function: defaultEval]      
```      
  对于函数来说，caller 属性只有在函数执行时才有定义。如果函数是由顶层调用的，那么 caller 包含的就是 null 。如果在字符串上下文中使用 caller 属性，那么结果和 functionName.toString 一样，也就是说，显示的是函数   
  
* **callee**       
返回正被执行的 Function 对象，也就是所指定的 Function 对象的正文。  
     
```
function a(){
	console.log(arguments.callee);
	//arguments.callee(); 会引起栈溢出
}
a();     //[Function: a]
```    



