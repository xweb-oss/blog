1. 合并二维有序数组成一维有序数组，归并排序的思路
```js
var arr=[[1,2,4],[2,3,7],[3,5,7],[4,5,8,9]]
var news = []
function fun01(arr){
  arr.forEach(ele => { // ele 是每一个子数组
    news = news.concat(ele)
  });
  fun02(news)
  console.log(fun02(news))
}
var quchong = []
function fun02(data){    // 1.先去重
  for(var i=0;i<data.length;i++){  
    if(quchong.indexOf(data[i])===-1){
      quchong.push(data[i])
    }
  }
  quchong.sort()       //  2.sort排序  2.用冒泡方法 二个循环进行排序
  // return quchong
                         //3.找最大 和最小
  var max = quchong[0]  // 假设第一个最大
  quchong.map(item=>{
    if(max < item){
      max = item
    }
  })
  return max
}

fun01(arr)
```


2. 介绍chrome 浏览器的几个版本

a.稳定版(Stable) ----- 正式版

b.测试版(Beta) ------ 正式发布前的最后测试版本

c .开发者版(Dev)  ---- 被 Canary 取代

d. Canary  版   ---- 只用用于测试 是 Chrome 的未来版本，是功能、代码最先进的Chrome 版本



3. Http 缓存策略，有什么区别，分别解决了什么问题

3-1. 强缓存，服务器通知浏览器一个缓存时间，在缓存时间内，下次请求，直接用缓存，不在时间内，执行比较缓存策略。
3-2. 协商缓存，让客户端与服务器之间能实现缓存文件是否更新的验证、提升缓存的复用率，将缓存信息中的Etag和Last-Modified
通过请求发送给服务器，由服务器校验，返回304状态码时，浏览器直接使用缓存。

开始 --- 浏览器 --- 发起Get请求 --- 是否有缓存  
 
a. 是  --- 检查强缓存是否是最新的  --- 读取浏览器缓存  --- 把缓存发回给浏览器

b. 否 --- 上次响应头中是否有 Etag  

b-1. 有 : 发起请求 请求头带上 if-none-match  --- 返回状态是否 304 --- 200 请求响应完成 ---缓存协商
b-2. 无:  查看上一次请求中是否有 last-modified  --- 发起请求 --- 返回状态是否 304  --- 200 请求响应完成 ---缓存协商


4. 防抖节流原理、区别以及应用
a. 防抖
原理：在事件被触发n秒后在执行回调,如果n秒内又被触发，则重新计时。

b.节流
原理:规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

5. 攻击手段
a. 本地存储数据   ---  避免重要的用户信息存在浏览器缓存中
b. XSS 跨站脚本攻击
c. CSRF：跨站请求伪造

6. 对闭包的看法，为什么要用闭包？说一下闭包原理以及应用场景
a. 函数嵌套函数。
b. 1.可以在内部函数访问到外部函数作用域  2. 可以将函数中的变量存储在内存中，保护变量不被污染

c. 原理: 在预编译阶段，如果发现内部函数使用了外部函数的变量，则会在内存中创建一个“闭包”对象并保存对应变量值，如果已存在“闭包”，则只需要增加对应属性值即可。
执行完后，函数执行上下文会被销毁，函数对“闭包”对象的引用也会被销毁，但其内部函数还持用该“闭包”的引用，所以内部函数可以继续使用“外部函数”中的变量
利用了函数作用域链的特性，一个函数内部定义的函数会将包含外部函数的活动对象添加到它的作用域链中，函数执行完毕，其执行作用域链销毁，但因内部函数的作用域链仍然在引用这个活动对象，所以其活动对象不会被销毁，直到内部函数被烧毁后才被销毁。

d. 优点:
  1. 可以从内部函数访问外部函数的作用域中的变量，且访问到的变量长期驻扎在内存中，可供之后使用
  2. 避免变量污染全局
  3. 把变量存到独立的作用域，作为私有成员存在

e. 缺点: 对内存消耗有负面影响。因内部函数保存了对外部变量的引用，导致无法被垃圾回收，增大内存使用量，所以用不当会导致内存泄漏
 

7. 链式调用  ---- 核心就在于调用完的方法将自身实例返回

事列 :
```js
function Class1() {
    console.log('初始化')
}

Class1.prototype.method = function(param) { //  Class1.prototype 就是返回得 this
    console.log(param)
    return this
}
// 初始化 执行 Class1 函数
let cl = new Class1() //由于new 在实例化的时候this会指向创建的对象, 

cl.method('第一次调用').method('第二次链式调用').method('第三次链式调用')

事列2 ：
var obj = {
    a: function() {
        console.log("a");
        return this;
    },
    b: function() {
        console.log("b");
        return this;
    },
};
obj.a().b();
```

8. 声明视渲染  vue
```html
  <p>{{ message }}</p>   
  <script>
    new Vue({
    data: { greeting: ‘Hello There!’},  // vue管理和隐藏了中间实现得过程
    el: ‘#app’
  });
 </script>

<!-- vue 声明式渲染 实现过程 -->
<p id="app"></p>
<script>
 const text ='声明一个变量'
 // 获取定义得 id  并赋值
 document.getElementById('app').innerText = text
</script>
```

9. 简单描述每个周期具体适合哪些场景
  created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用
  mounted : 挂载元素，获取到DOM节点
  updated : 如果对数据统一处理，在这里写上相应函数
  beforeDestroy : 可以做一个确认停止事件的确认框
  nextTick : 更新数据后立即操作dom

10. 在哪个生命周期内调用异步请求？
    created 钩子函数中调用异步请求有以下优点:
   * 能更快获取到服务端数据，减少页面 loading 时间.
   * ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性.

11. 谈谈你对 keep-alive 的了解？
   keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：

   * 一般结合路由和动态组件一起使用，用于缓存组件；

   * 提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；

   * 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。


  12.  v-model 本质上不过是语法糖，v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件;
  ```html
  <input v-model='something'>

  相当于
  <input v-bind:value="something" v-on:input="something = $event.target.value">
  ```

  13. vue-loader是什么？使用它的用途有哪些？
     a. 解析.vue文件的一个加载器。
     b. 用途：js可以写es6、style样式可以scss或less、template可以加jade等

  14. router 和 route 区别

  router  是 '路由实列'对象 包括了路由的跳转方法，钩子函数等
  route   是 '路由信息对象' 包括path,params,hash query  等 路由信息参数

  15. vue.js的两个核心是什么？
    数据驱动 组件系统
