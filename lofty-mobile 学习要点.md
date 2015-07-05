##lofty-mobile 学习要点     


###fmdjs   
**模块定义:**    
1. define(id, d, f)    
2. define(id, f)   
3. define(id, f<object, array>)  f即为数据   
4. define(d, f) 匿名模块，立即执行   
5. define(f) 匿名模块没有d   

**require:**   
使用内建的require模块     
```
define(['require'], function(require){});     
```    
异步加载模块使用require.use带有callback，callback会递归完依赖加载全部依赖后执行callback   

**exports:**   
使用如require    
exports不能被覆盖 	
return 与 module.exports同         

```     
function(){
	return {
		ok: function(){
		}
	}
}

function(module){
	module.exports = function(){
	}
}     
```   

生效顺序return > module.exports > exports

**配置相关**    
fmd.config({key:value});     
fmd.config(key);  获取配置    
参数：
>alias:模块id的别名   
>async是否允许异步   
>resolve根据id获取url  
>baseUrl作为异步读取文件时的url基础部分  
>hasStamp异步取得url是否加时间戳
>stamp   {'rube/a':'20130407} 独立id的时间戳,匹配正则   
>timeout 超时时间默认10秒
>charset 指定加载资源的字符集 
>debug是否进入调试状态

**熟悉各种事件**     

**公共基础类的使用**      

***class***：可继承，init为入口       
***base***：    
>1.获取属性，属性定义在 options 下，value 为值，拥有 get，set 方法      
>2.监听属性变化，默认为 on('属性名' + Changed)     
>3.装载插件 object.install(plugin); object.uninstall(plugin);  new myClass({plugins:{plg:plugin}})  
>4.绑定事件     

***plugin***：    
>1.setUp:插件入口函数    
>2.beforeHost:宿主执行之前执行,如果 return false 宿主对象将不执行    
>3.afterHost:宿主之后执行     
>4.onHostEvent:监听宿主事件执行，比宿主事件先执行    
>5.使 plugin 生效必须加 plugin.Name 才行 
   
