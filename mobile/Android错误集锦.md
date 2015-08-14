##Android 错误集锦       

1.  **Android Studio com.android.dex.DexException: Multiple dex files define(重复引用包)**      
在引用的 jar 包里包含了你现有项目已经引用的包导致了重复引用， 比如我打包了一个 lib 里面有 support.v7 的包，而我现有项目可能也引用了 v7 因此导致了冲突