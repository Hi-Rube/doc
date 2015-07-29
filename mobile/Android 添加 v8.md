## Android 添加v8 过程
***tag: v2ex v8 android_studio android***

###坑点    
1. android 编译 so 进apk，app 的 build.gradle 需要设置

```            
android{       
	...
	buildTypes{
	}
	...
	sourceSetS{                 
		main{                
			jniLibs,srcDirs = ['libs']                  
		}	
	}
}  
```      

###失败ing...
等待继续
在 v2ex 上提了问题 