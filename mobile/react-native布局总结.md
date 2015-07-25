##总结##
         
1.react 宽度基于pt为单位， 可以通过Dimensions 来获取宽高，PixelRatio 获取密度，如果想使用百分比，可以通过获取屏幕宽度手动计算。
        
2.基于flex的布局          
view默认宽度为100%             
水平居中用alignItems, 垂直居中用justifyContent                
基于flex能够实现现有的网格系统需求，且网格能够各种嵌套无bug         
		
3.图片布局               
通过Image.resizeMode来适配图片布局，包括contain, cover, stretch        
默认不设置模式等于cover模式             
contain模式自适应宽高，给出高度值即可          
cover铺满容器，但是会做截取          
stretch铺满容器，拉伸                         
		
4.定位               
定位相对于父元素，父元素不用设置position也行                          
padding 设置在Text元素上的时候会存在bug。所有padding变成了marginBottom            
			
5.文本元素               
文字必须放在Text元素里边               
Text元素可以相互嵌套，且存在样式继承关系                      
numberOfLines 需要放在最外层的Text元素上，且虽然截取了文字但是还是会占用空间
