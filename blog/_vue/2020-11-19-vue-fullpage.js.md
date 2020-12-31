---
date: 2020-11- 19
tag: 
 - vue-fullpage和调用app方法
author: xweb
location: Alanbang
---

### vue-fullpage和调用app方法

### 安装
1. `npm install vue-fullpage.js`

### 入口文件
 ```js
   import 'fullpage.js/vendors/scrolloverflow'
   import VueFullpage from 'vue-fullpage.js';

   Vue.use(ueFullpage)
 ```

 ### 案列
 ```js
   https://segmentfault.com/a/1190000017742521；



   emitAppMethods(methodsName,parmars){
    if (/android/i.test(navigator.userAgent)){
      // todo : android
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