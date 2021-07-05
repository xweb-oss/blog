
* 各大大厂面试题网址 [ https://www.axihe.com/edu/ask.html' ]

* css 区域

1. calc, support, media各自的含义及用法？
@support主要是用于检测浏览器是否支持CSS的某个属性，其实就是条件判断，如果支持某个属性，你可以写一套样式，如果不支持某个属性，你也可以提供另外一套样式作为替补。

calc() 函数用于动态计算长度值。 calc()函数支持 "+", "-", "*", "/" 运算；

@media 查询，你可以针对不同的媒体类型定义不同的样式。

2. css水平、垂直居中的写法，请至少写出4种？
水平:  
a。 行内元素: text-align: center
    块级元素: margin: 0 auto,    
    弹性盒子 display:flex + justify-content: center  
    定位 position:absolute +left:50%+ transform:translateX(-50%)
锤值：
   light-height:等于高度值,margin:auto , 
   弹性盒子 display:flex + align-items: center ,
   定位 position：absolute +top:50%+ transform:translateY(-50%)
   display:table+display:table-cell + vertical-align: middle;

水平且垂直:
a: position:absoult： 上下左右为0 marain:auto
b: position:absoult： 上左为50%  marain-left margin:-top 分别为高 宽负一半
c: position：absolute +top:50%+ transform:translateY(-50%) left:50%+ transform:translateX(-50%)

3. 1rem 1em 1vh 1px 各自代表的含义
1rem : 相对根元素（html）来计算，通常给根元素一个字体大小，然后其他元素单位用 rem
1 em : 子元素字体大小根据父元素的 em 来变化，元素的 padding margin width height是相对该元素的font-size 

1px:像素单位 ，代表 1px 像素距离(相对屏幕分别率而言)

1vh/vw:视图的宽度和高度 相当于屏幕高度和宽度的 1% 

4. 画一条 0.5px 直线 
 height:1px   transfrom:scale(0.5)  缩放一倍

5. 说下盒子模型
Ie盒子模型: width 等于 padding + margin + border + 内容宽 
标准盒模型: width 等于 内容宽度 

box-sizeing : border-box  转成 是IE盒子模型
box-sizing: content-box 是W3C （标准）盒子模型   （默认）

6. 画一个三角形 
a . width:0;height:0;border-width:10px;border-style:solid;
border-color：transparent #0099CC transparent transparent;
把border 三面设置 透明，一面给颜色

b.  width: 7px;
  height: 8px;
  border-top: 7px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 8px solid #13aef8;



7. 清除浮动的几种方式，及原理？
a. 父级 加一个 height;
b. 父级 加一个 ovevflow:hiddle
c. ::after / <br> / clear: both

其中这里涉及到 bfc 概念: bfc(块级格式化上下文) 是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

* js 区域

1. 写一个 1到100求和
function total(a,b){
  var sum = 0;
  for(var i = a;i <= b;i++){
      sum += i
  }
}


2. 页面渲染html的过程？ （自己理解）     ** 深入了解 **
主要 五个方面:
    DNS 查询
    TCP 连接
    HTTP 请求即响应
    服务器响应
    客户端渲染

3. 如何中断ajax请求？
a , 设置超时时间自动断开，
b , 另一种是手动停止ajax请求，其核心是调用XML对象的abort方法，ajax.abort()

4. 说一下宏任务和微任务？
宏任务：当前调用栈中执行的任务称为宏任务。（主代码快，定时器等等）。
微任务： 当前（此次事件循环中）宏任务执行完，在下一个宏任务开始之前需要执行的任务为微任务。（可以理解为回调事件，promise.then，proness.nextTick等等）。

扩展: 
1. nextTick() ：是将回调函数延迟在下一次dom更新数据后调用
```js
<template>
  <button id="firstBtn" @click="testClick()" ref="aa">{{testMsg}}</button>
</template>
export default {
  data(){
    return {
      testMsg:'原始值'
    }
  }
  methods:{
    testClick(){
      this.testMsg="修改后的值";
      console.log(this.$refs.aa.innerText);   //that.$refs.aa获取指定DOM，输出：原始值
    }
  }
}
```
2. promise 
a. 三种状态：pending(进行中) fulfiled(已成功) rejected(已失败)
promise 对象接受一个回调函数作为参数 ，该回调函数有二个参数（reslove 成功回调，reject失败的回调）

than,catch 方法返回一个新的 promise实列

throw 中断
3）Promise缺点

1、无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2、如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
3、当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
4、Promise 真正执行回调的时候，定义 Promise 那部分实际上已经走完了，所以 Promise 的报错堆栈上下文不太友好。

2-1. 原型链
  就是一层一层的查找对象属性,叫做原型链。（所有对象多有 '_proto__' 属性）
      

5. 说一下继承的几种方式及优缺点？
a. 构造函数 使用call或apply方法，将父对象的构造函数绑定在子对象上  缺点 :(没有原型: 无法复用 )
b. 原型继承，将子对象的prototype指向父对象的一个实例  缺点：

6. 说一下闭包？
闭包：就是函数嵌套函数 ;闭包就是能够读取其他函数内部变量的函数。
比如 ：
f1(){
    var a = '0000'
    f2(){
        alert(a)
    }
    return f2  // 把 f2函数返回出去
}
f1()()    // '0000'

7. export和export default的区别？
使用上不同
export xxxx
import { xxxx }

export default xxxx
import aaaa

8. 说一下自己常用的es6的功能？
let const var 解构赋值 promise Module
 class  ...等等


h5 新特性：
  * 语义标签    <header>  <footer> <nav>   <main>
  * 增强型表单
  * 视频和音频
  * Canvas绘图
  * SVG绘图    SVG指可伸缩矢量图形
  * 地理定位
  * 拖放API.
  * WebWorker.  Web Worker可以通过加载一个脚本文件，进而创建一个独立工作的线程，在主线程之外运行。
  基本使用：
     Web Worker的基本原理就是在当前javascript的主线程中，使用Worker类加载一个javascript文件来开辟一个新的线程，
    起到互不阻塞执行的效果，并且提供主线程和新县城之间数据交换的接口：postMessage、onmessage。

javascript:


9. 什么是回话cookie 什么是持久cookie? 
cookie是服务器返回的，指定了expire time(有效期)的是持久cookie,反之是会话cookie

10. get post 区别:
get：传参方式会显示在地址栏中,url后通过 ? 连接,通过 & 进行参数分割。
post传参存放在 http 包体内。

get 通过url参数的时候，数据长度限制 2048字符，post 没有长度限制

get 后退不受影响，post 后退会重新请求

11. http 响应码

200 请成功返回结果  201 表示资源正在创建  3xx 表示重定向 400 请求出错  401 没有认证（比如 没有带 token ） 500 服务器出错


* vue 区域

1. vue常用修饰符
    a. .precent：提交事件不在重载页面
    b. .stop： 阻止继续单击事件冒泡
    c. .self：当事件发生在该元素本身而不是子元素的时候会触发
    d. .capture: 事件侦听, 事件发生的时候会调用

2. Vue等单页面应用及其优缺点?

  a. 优点：Vue的目标是通过尽可能简单的API实现响应的数据绑定和组合的视图组件，核心是一个响应的数据绑定系统。MVVM、数据驱动、组件化、轻量、简洁、高效、快速、模块友好
  b. 缺点：不支持低版本的浏览器， 最低只支持IE9；不利于SEO的优化（如果要支持SEO，建议通过服务端来进行渲染组件）；第一次加载首页耗时相对长一点；不可以使用浏览器的导航按钮需要自行实现前进后退

3. vue-loader是什么？使用它的用途有哪些？
  解析: vue 文件的一个加载器。 比如： js可以使用 es6 , 样式 style 可以使用css 预编译 scss less

4. 为什么避免v-if 和 v-for 用在一起
   .v-for 的优先级比 v-if 高，用在一起会重复去遍历列表。

5. 虚拟DOM 
   就是由 vue 组件树建立起来的整个 Vnode 树的一种叫法 （vnode 节点）,就是用js对象记录一个 dom 节点的副本,当dom 发生更改的时候，先用虚拟dom 进行diff, 算出最小的差异，然后在修改真实的dom,提高性能


* 尚硅谷

5-1. diff算法是一种通过'同层的树节点' 进行比较的高效算法,避免了对树进行逐层搜索遍历

5-2. 真正的,彻底的弄懂虚拟 DOM 和 diff 算法
* diff
就是新虚拟DOM 和 老虚拟DOM 进行精细化比对,实现最小量的更新，最后反应到真正的 dom 上。
条件：1.'key 代表唯一性',2. 选择器(标签)要相同(代表的相同的节点) 3. 只会同层比较

* 虚拟DOM
**** 用 javaScript对象 描述DOM的层次结构 ****
DOM中的一切属性都在虚拟dom中有对应的属性。

虚拟节点有哪些属性:
```js
{
  children:undefined // (子元素)
  data:{}  
  elm:undefined   // undefined表示虚拟dom还没有上树
  key:undefined
  sel:'div',
  text:'我的一个盒子'
}
```

h函数：产生虚拟节点的
```js
h('a',{ props:{ href:'https://www.baidu.com'}},'尚硅谷')
```




5-3. 数据响应式原理
1. mvvm 模式 ： 数据变化，视图会自动变化

```js
Object.defineProperty()可以设置一些隐藏的属性
(enumerable 是否被枚举,也就是这个对象能不能被循环出来)
(writable 是否可写)

var obj ={ }
// 第一个参数代表哪一个对象, obj
// 第二个参数代表属性， a
// 第三个是给属性赋值。 { }
Object.defineProperty(obj,'a',{
  value:3,
  // 是否可写
  writable:true   // 默认是false 不可写
})
console.log(obj.a++) // 输出4 
 
 2. Object.defineProperty中会有一个 get 和 set 函数
 Object.defineProperty(obj,'b',{
   get(){
     console.log('视图访问了b属性');
   },
   set(){
     console.log('视图改变了b属性');
   }
 })
obj.b++;  // 触发set函数 
 

defineReactiove 函数

function defineReactiove(data,key,val){
  Object.defineProperty(data,key){
    get(){
      return val
    },
    set(newVal){
      if(val == newVal){
        return;
      }
      val = newVal
    }
  }
}

```
1. `this.$router.push()` 描述：跳转到不同的url，但这个方法回向history栈添加一个记录，点击后退会返回到上一个页面。

2. `this.$router.replace()` 描述：同样是跳转到指定的url，但是这个方法不会向history里面添加新的记录，点击返回，会跳转到上上一个页面。上一个记录是不存在的。
比如： `/home/1`  跳到  `/hoem/2`

3. `this.$router.go(n)` 相对于当前页面向前或向后跳转多少个页面,类似 window.history.go(n)。n可为正数可为负数。正数返回上一个页面
`this.$router.go(0)` 刷新当前页面。











Proxy 可以劫持整个对象,并返回一个新的对象。Proxy 不仅可以代理对象,还可以代理数组。还可以代理动态增加的属性。

7. 为什么组件的data 必须是一个函数
   为了每个组件中的data 唯一。如果是一个对象的话,对象是一个引用类型，一个组件实例修改了 data 会影响到其他的组件实例。

8. 组件是怎么通信的 
a. 父像子传递: props , 传 
b. 子像父传递：$emit,  传 
c. 兄弟之间传用  eventBus 传
d. 后去组件实例用 $ref ,$children $parent
f. vuex 

9. vue双向绑定的原理

简单来说:是通过数据劫持结合发布者-订阅者模式的方式来实现的，
<!-- 而vue 是通过 Object.defineProperty()来实现数据劫持的。 -->
这里可以分成三步:
1. 实现一个监听器observer,用来劫持,监听所有属性,如果有变动就通知订阅者
2. 实现一个订阅者的watcher,用来收到属性的变化通知并执行相应的函数,从而跟新视图
3. 实现一个解析器compile,来扫描和解析每个节点的相关指令,并根据初始化模板数据来初始化相应的订阅器

10. 为什么在 Vue3.0 采用了 Proxy,抛弃 Object.defineProperty?
Object.defineProperty 只对单例属性做监听
Object.defineProperty 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。Vue 2.x 里,是通过 递归 + 遍历 data 对象来实现对数据的监控的,如果属性值也是对象那么需要深度遍历,显然如果能劫持一个完整的对象是才是更好的选择。

11. es6新增基本数据类型   : Symbol( 生bo ) 表示独一无二的值

12. 如何将伪数组转换为数组
    伪数组 其实是个对象，所以装换的方法有 1. 遍历  2.ES6新增的数组方法Array.from，（let realArray =Array.from(arguments);）

13. new 运算符 创建一个 空的javascript 对象
  ```js
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const car1 = new Car('Eagle', 'Talon TSi', 1993);

  console.log(car1) // { make: "Eagle", model: "Talon TSi" ,year: 1993}
  ```

14. 当js中的for循环遇到延时器或者定时器时需要注意的问题
```js
for(var i = 0;i<6;i++){
  setTimeout(function(){
    console.log(i); //此时输出为 6 个 6
  },1000)
}
这主传进去要是因为setTimeout的执行时异步执行的，而for循环的执行却非常的快，
所以，在1s后执行定时器函数时， i 已经 循环到了最大值6，其他的i值已经被销毁，
此时再执行定时器，则是把 i=6传进去了，所以造成了这样的结果。 
要想输出 0 1 2 3 4 5;可以用一个自定义函数包裹着延时器,把 i 传进去
```

15. 哈希算法定义
* 是一个单向函数,可以把任意长度的输入数据转化为固定长度的数字
h = H(x);
例如:对 'morning' 和 'bitcoin' 两个输入进行某种哈希算法 得到的固定长度的数字是
H("morning") = c7c3169c21f1d92e9577871831d067c8
H("bitcoin") = cd5b1e4947e304476c788cd474fb579a