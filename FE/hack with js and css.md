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

##js hack 点