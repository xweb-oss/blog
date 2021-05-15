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

### 手控密码眼睛
  ` 声明 flag  data(){ return { flag:true }}`
```html
  <el-input :type="flag ? 'password':'text'" v-model="password" autocomplete="off"
  placeholder="密码">
    <i slot="suffix" :class="flag ? 'close_eye':'el-icon-view'" autocomplete="auto" @click="flag=!flag" />
  </el-input>
```

### 全局定义组件 写法
在main.js 中 引入  
```js
import plugin from './utils/vantComponents'
Vue.use(plugin)   
```

```js
// vantComponents.js
import { 
  Button,
  Image as VanImage,
  Tabbar, 
  TabbarItem,
  NavBar 
} from 'vant';

function plugin(Vue) {
  if (plugin.installed) {
    return
  }
  Vue.use(VanImage);
  Vue.use(Button);
  Vue.use(Tabbar);
  Vue.use(TabbarItem);
  Vue.use(NavBar);
}

export default plugin
```


6. 字符串拼接
```js
  //  document.location.protocol  获取当前浏览器当前的协议类型
  var _protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
  let appid = 'dddd'
  let sessionid = 'sssss'
	let url = _protocol + "www.suibian.live/did/js/dp.js?appId=" + appid + "&sessionId=" + sessionid + "&ts=" + ts + "&callback=isOK";
```