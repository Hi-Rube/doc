##PHP basic      

###php文档  [http://php.net/manual/zh/](http://php.net/manåual/zh/)

###语法          
* <?php ?> / 分号结尾      
* 弱类型        
* boolean，字符串          
* 数组     

>``` $arr = array("1","23","google" => "hello"); ```
>``` $arr = ["google" => "hello"]```    PHP>=5.4         

* 对象			
 
```    

class Google{
	fuction hello(){
		echo "hello world";
	}	
}

$test = new Goole;
$test->hello();
```      
      
* 变量常量  

```
$w = 'hello';    
$hello = 1;
echo $$w;     //1
echo ${'hell'.'o'} //1
```      

```
  echo __FILE__;
  echo __DIR__;
  define("google", "hello");  
```     

* 表达式及流程控制       
类c

* require，include，require_once, include_once
require 出错时产生 ERROR        
include 出错时产生 WARNING     
once  只包含一次           

* oop     

```
<?php
class BaseClass {
   function __construct() {
       print "base";
   }
}

class SubClass extends BaseClass {
   function __construct() {
       parent::__construct();
       print "sub";
   }
}

class OtherSubClass extends BaseClass {
	private $c = 1;
	const a = 12;
	public static $d = 13;
	 
	public function getC(){
		return $this->c;
	}    
	
	public function getD(){
		return self::$d;
	}
	
}

echo OtherSubClass::a;
echi OtherSubClass::$d;

?>

```


* 命名空间       

```
//file1.php       
namespace A\B\C;       
class Google{
	statuc function hello()
	{
		echo "hello";
	}
}

//file2.php     
namespace A\B;
class Google{
	statuc function hello()
	{
		echo "hello2";
	}
}

$a = new Google;				//非限定名称
$b = new C\Google;			//限定名称
$c = new \A\B\C\Google;	   //完全限定名称

use C\Google as CQUT;
$d = new CQUT;
       
```

* 异常 
    
```    
try{
	throw new Exception('hello google');
} catch(Exception $e){
	echo $e->getMessage();
} finally{
	echo "finally gone";
}
```

 




##laravel       

###Laravel 文档 [http://www.golaravel.com/laravel/docs/5.1/](http://www.golaravel.com/laravel/docs/5.1/)     
