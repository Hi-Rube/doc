##Android 错误集锦       

***tag: android error collection***

1.  **Android Studio com.android.dex.DexException: Multiple dex files define(重复引用包)**      
在引用的 jar 包里包含了你现有项目已经引用的包导致了重复引用， 比如我打包了一个 lib 里面有 support.v7 的包，而我现有项目可能也引用了 v7 因此导致了冲突    

2. **Android 使用 httpClient 请求 localhost 或者 127.0.0.1 时报错 refused**      
因为在虚拟机里面 127.0.0.1 或 localhost 会去访问模拟器虚拟机里的地址而不是你本机的地址，用你的本机内网地址就 ok 了。       

3. **Android 获取 manifest.xml 的 meta-data 信息时为空***       
meta-data的 name 要大写才行