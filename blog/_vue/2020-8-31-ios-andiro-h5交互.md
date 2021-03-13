---
date: 2020- 05- 14
tag: 
  -webview交互
author: xweb
location: Alanbang
---

1. 

```js
  // 调用App方法  封装组件
  emitAppMethods(methodsName,parmars){  
    if (/android/i.test(navigator.userAgent)){
       try{
          switch(methodsName){
            window.android.JS_APP_Deposit()  // JS_APP_Deposit 安卓 ios 定义的方法名
            break;
              case 'JS_APP_Registered':
            window.android.JS_APP_Registered()
            break;
            case 'JS_APP_Login':
            window.android.JS_APP_Login()
            break;
            case 'JS_APP_UserMange':
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

h5 在页面上直接使用 
gotoBuyProgramHandler() {
    if(this.isApp){ // 判断是不是在app打开端
       emitAppMethods("JS_APP_BUY")
    }
},

在路由里面写一个 守卫2

router.beforeEach(function (to, from, next) {
//   store.watch((state, getters) => state.logedUserInfo.userPwd, (userPwd) => {
//     Cookies.set('userPwd',userPwd)
//   });
  if(to.query.isApp=='true'){  // app 给h5 传一个 isApp 
    store.commit('setIsApp',true)
    // to.meta.navShow = false;
    // to.meta.titleHide = true
  }else{
    store.commit('setIsApp',false)
  }

}
```