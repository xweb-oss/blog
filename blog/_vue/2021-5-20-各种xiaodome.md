---
date: 2021-5- 20
tag: 
 - xiao  demo
author: xweb
location: Alanbang
---

### 回到顶部方法 -- 由慢变快方法
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

### 手控密码眼睛
  ` 声明 flag  data(){ return { flag:true }}`
```html
  <el-input :type="flag ? 'password':'text'" v-model="password" autocomplete="off"
  placeholder="密码">
    <i slot="suffix" :class="flag ? 'close_eye':'el-icon-view'" autocomplete="auto" @click="flag=!flag" />
  </el-input>
```

### 全局定义组件 写法
* 在main.js 中 引入  
```js
import plugin from './utils/vantComponents'
Vue.use(plugin)   
```
* vantComponents.js 文件
```js
import { Button,Image as VanImage,Tabbar, TabbarItem,NavBar } from 'vant';
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

7. ### 移动端解决点击 0.3s延迟的问题（使用 在index.html中引入）
<!-- ```js -->
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded',function(){
      FastClick.attach(document.body);
    },false)
  }
  if(!window.promise){
    document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.js"></script>')
  }
</script>
<!-- ``` -->


```js
// 复制文本
export const copy = function(ele) { // ele = document.createElement('div');
  if (!ele) return
  window.getSelection().removeAllRanges()
  const range = document.createRange()
  range.selectNode(ele)
  window.getSelection().addRange(range)
  document.execCommand('copy')
  window.getSelection().removeAllRanges()
  return true
}
```


### 錨點跳
```js
 點  btn 跳 到  <li id="test"></li>
  // document.getElementById('test').scrollIntoView({ behavior:'smooth' })
 document.querySelector('#test').scrollIntoView({
  behavior:'smooth'  // 匀速
});
```