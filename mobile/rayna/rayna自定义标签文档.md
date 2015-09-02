##Rayna

###component

**activity**
> **action（必选）即对这个 activity 的标明**        
> action 为 main 时代表这是一个启动页            
> **title（可选）这个页面的一个标题**               
> **type（可选）表明我这个页面被哪个端使用，不写的话代表通用**     
> type 有 android、ios、web 三个选项代表不同的平台类型     
> **encode（可选）页面编码，默认使用 utf-8**  

***一个页面有且只能有一个 activity 不然会报错***    

**script**
> **module（必选）代表我这段 script 是什么模块**      
> module 可以类似 'index' 也可以类似 'index/hello' 命名自定  
> **action（必选）代表这个模块是如何运行的**    
> action 为 main 时代表这个模块是启动即运行的     
> **src（可选）表示是一个外联的 js 模块**    

***一个页面可以有多个 script 但是模块不能重名***     