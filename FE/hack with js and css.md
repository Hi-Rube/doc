##css hack 点
***tag: css hack点 前端零碎*** 
   
1. inline-block     
**现象：**
两个div 样式为 inline-block 会成为行内元素并排，但是发现间距不是理想值。
中间会多一个空。 如果用js 动态 dom 操作插入不会有空。    
**原因：**
dom 解析的时候将两个div 之间的空白 \r\n 等变成了一个空白符，这个空白符有大小，导致了出现间隔距离的加大。    
**解决：**
将父级的div 元素的 font-size 设为 0， 这样使得这个空白符的font-size 为 0，也就不会出现空白了。        

2. 多列等高的布局实现    
>**使用背景模拟多列等高效果**      
>外面套一层 div 背景设为和子 div 相同
>     
>**负margin-bottom和padding-bottom叠加法**
>外层 div overflow:hidden 内层 margin-bottom:-10000px padding-bottom:10000px    
>           
>使用脚本实现

##js hack 点
解决 ios 下 fixed 产生的问题      
1. 使用 js 监听 scroll然后改变 title 的 top，title 的 position 设为 absolution        
2. 使用 js 去计算高度然后固定，title 外部还有一层，那一层的 width 和 height 都为 100%， 然后中间需要滚动的内容层使用 overflow 为 scroll。 