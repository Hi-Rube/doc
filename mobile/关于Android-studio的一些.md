##关于Android studio
***tag: android android-studio gradle***     

###1. gradle的一些   

**琐碎知识：**   
+ 加载 so       
  在 app/build.gradle 里添加           
  ```             
  sourceSets{                        
  		main{                             
			jniLibs.srcDirs = ['libs']               
		}                  
  }               
  ```              
