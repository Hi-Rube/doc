##CSS规范

**禁止**      
*选择器      
		
**避免**    
body >span     
直接修改标签			
避免修改div, span的样式       
子孙嵌套不超过4层      
id尽量不赋予样式     
不使用滤镜		
样式不能写在标签     
!important 尽量不使用，只做优先级应用    
清除浮动尽量使用after方式，overflow方式作为第二选择

CSS级联不超过4层    
副logo字体依次取微软雅黑、黑体、文泉驿正黑体、华文细黑      


##JS规范      
js文件编码 gb2312     
不要嵌入在html中，除非这些代码需要有后台开发工程师进行控制。    
缩进的单位为4个空格       

javascript中的每个方法/函数都应该有明确地注释，注释包括   
> 1.方法的作用    
> 2.@param 所需要传入的参数   
> 3.@return 返回的结果  
> 4.@author||@modify  作者以及修改人  
> 5.@version 编写或者最后修改的时间

对于独立的js文件需要在开头标明作者(@author)和文件编写(修改的时间)@version   
方法注释代码块上/* 注释， 语句注释 使用//在语句上方添加         

3个条件及以上的条件语句用switch 代替 if else    
try catch不允许嵌套，嵌套需要理由    
使用选择器时能确定tagName的尽量加上tagName    
给元素设置样式时2个或者2个以上采用ClassName处理     
引入第三方广告时采用无阻塞方式    
防止重复提交表单     
form验证需要加载onsubmit上     
DOMReady之前不能进行DOM操作    
不能出现onerror事件       


**变量命名**      
一个页面上建议只适用一个全局变量，如果需要多个全局变量则应该通过一个全局变量对象进行管理      
前面加is的变量名应该为布尔值     
术语computed作为变量名应该为计算完成的变量     
found应为已经查找完成的变量     
initialize 或者 init 表示已经实例化（初始化）完成的类或者其他类型的变量    
带有num 或者 count 开头的变量约定为数字     
重复变量建议使用i ,j ,k等名称变量     

**其他**    
关于取消链接的默认值：请不要使用href="javascript:void(0)" 而是通过js将链接的默认事件去掉。使用    

```
阻止冒泡
if (e && e.stopPropagation){
	e.stopPropagation();
} else {
	window.event.cancelBubble = true;
}


阻止浏览器默认行为
if (e && e.preventDefault){
	e.preventDefault();
} else {
	window.event.returnValue = false;
}
return false;
```    
不要在if 和 while语句的条件部分做赋值。 like if ((a=1) && true){}   
始终使用 === 和 !== 操作符。 == 和 != 操作符会做类型强制转换，不要用 ==来和“假”值比较     

**文件-模板-及目录**    
静态文件编码应为gbk/gb2312    
文件夹名称不要用中横线分割，除非需要区分版本 like fdev-v3    
