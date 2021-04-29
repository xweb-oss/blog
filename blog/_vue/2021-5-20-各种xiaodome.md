---
date: 2021-5- 20
tag: 
 - xiao  demo
author: xweb
location: Alanbang
---

### 回到顶部方法
```js
export function scrollToptimer(){
  let scrollToptimer = null
  scrollToptimer = setInterval(()=> {
    var top = document.body.scrollTop || document.getElementById("app").scrollTop;
    var speed = top / 4;
    if (document.body.scrollTop!=0) {
        document.body.scrollTop -= speed;
    }else {
        document.getElementById("app").scrollTop -= speed;
    }
    if (top == 0) {
      clearInterval(scrollToptimer);
    }
  }, 30); 
}
```

### 调用app方法
```js
emitAppMethods(methodsName,parmars){
  if (/android/i.test(navigator.userAgent)){
    try{
      switch(methodsName){
        case 'JS_APP_GoBack':
        window.android.JS_APP_GoBack()    // JS_APP_GoBack app定义得方法
        break;
        case 'JS_APP_HOME':
        window.android.JS_APP_HOME()   // JS_APP_HOME app定义得方法
        break;
        case 'JS_APP_BUY':
        window.android.JS_APP_BUY()
        break;
      }
  }
  catch(err){
    console.log(err)
  }
} else if (/ipad|iphone|iPod|iOS|mac/i.test(navigator.userAgent)){
    let message ={
      'method' : methodsName,
      'param' : parmars,
    }
    try{
      window.webkit.messageHandlers.jsOpenSwiftFunc.postMessage(message);
    }
    catch(err){
      console.log(err)
    }
  }
},
```