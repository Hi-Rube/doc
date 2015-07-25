##React Native 7.3 分享-简单记录

会前期 鬼道 等人的一些分析与统计大致描述了他们在实际运用中遇到的问题和检测到得性能指标。在优化之后还是不错。   

我关注的如下:        

**更新与兼容**    
服务端通过投放系统，根据不同的路由、url进行投放    
涉及到两种兼容性问题    
>1. jsbundle不同版本的兼容，通过url中的特定参数进行    
>2. api的兼容，通过aop的方式实现特定平台的兼容   

**重点关注的react-web项目**   
react-web的思路不错，就1688这边现有的 hybird 应用来讲与 webapp 使用同一套代码，如果转用 react-native 开发的话，导致了 react-native 使用的代码将无法复用到 webapp 上，正因为这种情况于是出现了这个项目。   

react-web 将 native 上的组件在 web 上重新实现一遍。这有几个痛点   
>1. 性能上的损耗，貌似比较严重。
>2. 对于浏览器的兼容性必须做出非常大的努力，在不失代码优雅性的前提下 hack 十分困难
>3. 需要考虑两端，so web性能较难优化，无 SEO 可言。

当然优势，write once， working anywhere ，代价太大。   


**react-web的性能损耗**    
react-web 转化的细粒度太小，并且每个组件都有完整生命周期，创建千/万级的component 性能损耗很大。     
**举例:**图片加载，因为无法进行类似雪碧图的方式加载，一导致图片加载的阻塞，二是给造成了 I/O 较大的压力。       

[http://maobu.alibaba.net/slide/825](http://maobu.alibaba.net/slide/825)
 