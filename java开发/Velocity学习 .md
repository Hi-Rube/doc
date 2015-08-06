##Velocity学习    

###赋值    

```
 #set ($rube = "good")
 #set ($rayna = "$rube/$rube")     ##rayna = "good/good"
 #set ($rayna = 'rube')    ##error 单引号的原因
```

当设定的值不存在时
<a class="$class"\> 会显示 <a class="$class"\>          
如果将 $class 变为 $!class 就会显示 <a class=""\> 为空  

###条件判断    

```
$set ($rube = "good")
#if ($rube == "good")
	${rube}hello
#elseif ($rube == "good2" || $rube != "good3")   ## || / ! / && 都 ok
	$rube
#elseif 
	good 
#end
```

###循环   

```
$dongs = ["a", "b", "c"];
#foreach ($dong in $dongs)
	<li>${dong}rube</li>
	<li>$dong rube</li>
#end
```

###引入外部文件

```
#include("one.html")
##只能在 TEMPLATE_ROOT 下
```

###引入vm   
a.vm

```
 #set($count=8)
 #parse("b.vm")
```
b.vm   

```
#set($count = $count - 1)
#if ($count > 0)
 #parse("b.vm")
#else
 over 
#end

使用 #stop 可以停止，常用于调试观察输出   

```

###自定义函数       

```
#macro( tablerows $color $somelist )
	#foreach($something in $somelist)
		<tr>
			<td bgcolor=$color>$something</td>
		</tr>
	#end
#end

##调用    
#set ($a = ["1",2","3"])
#set ($color = "yellow")
<table>
	#tablerows( $color $a )
</table>
```

###逃逸符

```

#set($name="hello")
#if ($name=="hello")
dongyiwei
#end

##output: dongyiwei

*****************************

#set($name="hello")
\#if ($name=="hello")
dongyiwei
\#end

##output: 
#if ($name=="hello")
dongyiwei
#end

*****************************

#set($name="hello")
\\\\#if ($name=="hello")
dongyiwei
\\\\#end

##output:
\\#if ($name=="hello")
dongyiwei
\\#end

```