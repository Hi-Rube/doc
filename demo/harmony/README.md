###es6 generator file read DEMO       

May be you will see , command line show 'pass1' in the front of 'pass0'             
but we have done fn.apply                   
because js thread should finish this loop, then will do the fs's callback.   

回调会在下一个loop执行，所以 fn.apply 时 pass0 没有打出来，因为还没有执行回调。当执行回调的时候 pass 已经被赋值了。


```      
node --harmony harmony-file.js     
```
