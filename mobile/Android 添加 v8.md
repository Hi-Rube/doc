## Android 添加v8 过程
***tag: v2ex v8 android_studio android ndk c++***

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
可以利用 github 上 NativeScript 编译好的 v8 静态库 

##ndk 的坑    
###使用 c 和 c++的区别    
>c: (*env)->NewStringUTF(env, "hello");    
>c++: env->NewStringUTF("hello");


##about c++

###C++ char*，const char*，string的相互转换
1. string转const char*
```
string s ="abc";                      
constchar* c_s = s.c_str();
```
2. const char*转string
   直接赋值即可
```
constchar* c_s ="abc";                 
string s(c_s);                
```

3. string转char*           
```                  
string s ="abc";                  
char* c;                        
constint len = s.length();               
c =newchar[len+1];                 
strcpy(c,s.c_str());            
```

4. char*转string           
```                       
char* c ="abc";              
string s(c);                 
```

5. const char*转char*                          
```
constchar* cpc ="abc";
char* pc =newchar[100];//足够长
strcpy(pc,cpc);               
```