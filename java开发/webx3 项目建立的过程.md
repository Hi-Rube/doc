##建立 webx3 项目  
***tag: webx3 maven eclipse petstore***

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
依赖放在 pom.xml 的 dependencies 下      
1. denpendencies 下放主包    
2. denpendencyManagement 下放应用需要的包的版本号，这个包在已下载的 denpendencies 主包里面     
3. denpendcies 下的会下载，denpendcyManagement 不会下载
 
###eclipse 快捷键等
1. c+s+g:查看类的被引用情况
2. c+s+t:查看方法所在的jar包和类
3. ctr+h:全文查询
4. eclipse 编码问题: 
windows->Preferences...打开"首选项"对话框，左侧导航树，导航到 general->Content Types，

##webx3 petstore 项目分析  

###机制及核心分析     
[http://www.xiaoyaochong.net/wordpress/index.php/2013/03/29/webx-%E6%A0%B8%E5%BF%83%E6%9C%BA%E5%88%B6/](http://www.xiaoyaochong.net/wordpress/index.php/2013/03/29/webx-%E6%A0%B8%E5%BF%83%E6%9C%BA%E5%88%B6/)    

[http://tianya23.blog.51cto.com/1081650/683848](http://tianya23.blog.51cto.com/1081650/683848)

###总体分析    
[http://code.taobao.org/p/webx/wiki/index/](http://code.taobao.org/p/webx/wiki/index/)

###1. web.xml 分析      
<context-param\>    
<listener\>        
<filter\>      
<filter-mapping\>   
基于Spring 为servlet 原生[http://blog.csdn.net/psyuhen/article/details/7527814](http://blog.csdn.net/psyuhen/article/details/7527814)       

**linster**   
com.alibaba.citrus.logconfig.logConfiguratorLister   
继承至ServletContextListener 作为一个日志系统监听 Servlet 的生命周期      

com.alibaba.citrus.webx.context.WebContextLoaderListenter     
继承至Spring 的ContextLoaderListener 对webx.xml, webx-*.xml进行装载   

**filter**     
com.alibaba.citrus.webx.servlet.SetLogginContextFilter        
设置日志的filter并在 request 之前做处理    

com.alibaba.citrus.webx.servlet.WebxFrameworkFilter      
利用 webx 框架进行处理，真正的处理入口。

###2. webx-xml 分析      
**services:property-placeholder**    （有待具体分析）    
源码位于package com.alibaba.citrus.service.configuration.support， 重写了  org.springframework.beans.factory.config.PropertyPlaceholderConfigurer 方法，使之能够支持 $(***) 的替换。          

比如 <services:property key="component">home</services:property>   
就可以使用 $(component) 来获取home
 
传送门[http://www.cnblogs.com/yl2755/archive/2012/05/06/2486752.html](http://www.cnblogs.com/yl2755/archive/2012/05/06/2486752.html)    

**common/webx-component-and-root.xml** 共享的配置      
1. template    
源码位于package com.alibaba.citrus.service.template.impl;    
会去分析并加载各个模板引擎。模板的配置，按用时具体分析、     
2. mapping-rules   
源码一样位于 package com.alibaba.citrus.service 下    
传送门 [http://code.taobao.org/p/webx/wiki/turbine_mapping_rule/](http://code.taobao.org/p/webx/wiki/turbine_mapping_rule/)      
3. data-resolver      
主要用于 在screen，action，control等的参数注入    
      
turbine-rundata-resolver 主要用于对 http* 的注入     
paramerter-resolver 主要用于对 外部传入参数的注入         
form-resolver 主要用于对于表单的注入     

传送门[http://code.taobao.org/p/webx/wiki/data_resolver/](http://code.taobao.org/p/webx/wiki/data_resolver/)   

**resources.xml**   
为内部资源的路径配置，以 webapp 为 / 目录     

**uris.xml**    
模板中所引用的一些外部和内部链接,需要通过 uris-tool 暴露给模板     

**comom/biz/biz-manager.xml**      
需要注入的一些业务处理类      

**webx-configuration**      
productionMode 生产模式还是开发模式      
defaultComponent 为默认的启动哪个子应用      

**request-context**     
请求的上下文，对请求的一个预处理链      
传送门[http://openwebx.org/docs/Webx3_Guide_Book.html#d0e5103](http://openwebx.org/docs/Webx3_Guide_Book.html#d0e5103)      

**pull**     
暴露给模板的一些工具，如 utils, page-tool, control-tool, uris-tool等
，类似一个视图助手类。    

**module-loader**     
模块装载服务，就是装载 action,screen, control中的类    
可以自己定义 pull tool    
传送门[http://code.taobao.org/p/webx/wiki/module_load_service/](http://code.taobao.org/p/webx/wiki/module_load_service/)   

###3. webx-*.xml 分析   

**pipeline.xml**

**form.xml**

     
###4. data-*.xml 分析
**dal-data-loader.xml**     

**dal-data-source.xml**

**dal-dao.xml**    


##5. Spring 配置的分析与加载
   

   
     
