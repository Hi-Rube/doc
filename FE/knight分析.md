##knight使用-己见

knight 是一种MVVM-like的业务模块化解决方案 

**util**    
提供基本的功能操作     
slice ：数组切割     
inArray ：indexOf的强化，并做了 jQuery 方法存在性判断和 indexOf 的兼容
each, trim，isFunction ： 判断是否是函数等，沿用 jQuery的。         
uid ： 范围唯一标识      
inject：向宿主某点**时注入函数     
extend：复制 source 到 host      
clone：完全复制 source 为一个新对象     
remove:删除对象某属性    

**store**         
注册全局缓存componentCache， knightCache        
封装 store 提供缓存的 getter，setter 方法          

**apart**       


**KnightModel**      

**Connector**     

**observer**
       
**middleware**   
为Connector提供操作方法

**bindings**       
binding 下面的文件结合 knight级 的 addBindHandler       
checked 

**knight级**    

1. component    

2. extend      

3. notify     

4. attach   
 
5. makeup       

6. connect    

7. addBindHandler       

8. detach

9. define     

**scope级**      

1. install     

2. destory     

3. uninstall     

4. get

5. set    

6. $ 

7. observable    

8. connect    

9. computed   

10. group   

11. ask   

12. bring    

13. provide    

14. take 

15. fetch    

16. give    

17. encrypt     

18. decrypt          
 
 

