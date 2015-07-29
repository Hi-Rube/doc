##建立 webx3 项目  
***tag: webx3 maven eclipse***

###新建一个项目后添加子应用
1. webapp 下新建一个子应用目录包含 /screen/index.vm
2. main/java 下新建目录 com.alibaba.webx.**.**.module
3. WEB-INF 下新建一个 webx-**.xml 配置文件，复制一下并做相应修改。
4. WEB-INF 下新建一个 form.xml 复制一下并做相应修改。

###webx 装载css，js等文件
1. 诡异现象
[http://blog.creke.net/804.html](http://blog.creke.net/804.html)     
第一种解决方法为子应用加 <contextPath>/</contextPath>
2. css / js 文件夹建立在和 templates 同一层

###maven 的依赖问题
依赖放在 的
 
###eclipse 快捷键
1. c+s+g:查看类的被引用情况
2. c+s+t:查看方法所在的jar包和类