
css 区域

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

7. 清除浮动的几种方式，及原理？
a. 父级 加一个 height;
b. 父级 加一个 ovevflow:hiddle
c. ::after / <br> / clear: both

其中这里涉及到 bfc 概念: bfc(块级格式化上下文) 是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

js 区域

1. 写一个 1到100求和
 
function total(a,b){
  var sum = 0;
  for(var i = a;i <= b;i++){
      sum += i
  }
}

2. 页面渲染html的过程？ （自己理解）
主要 五个方面:
    DNS 查询
    TCP 连接
    HTTP 请求即响应
    服务器响应
    客户端渲染

3. 如何中断ajax请求？
a , 设置超时时间自动断开，
b , ，另一种是手动停止ajax请求，其核心是调用XML对象的abort方法，ajax.abort()

4. 说一下宏任务和微任务？
宏任务：当前调用栈中执行的任务称为宏任务。（主代码快，定时器等等）。
微任务： 当前（此次事件循环中）宏任务执行完，在下一个宏任务开始之前需要执行的任务为微任务。（可以理解为回调事件，promise.then，proness.nextTick等等）。

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

9. 什么是回话cookie 什么是持久cookie? 
cookie是服务器返回的，指定了expire time(有效期)的是持久cookie,反之是会话cookie

10. get post 区别:
get：传参方式会显示在地址栏中,url后通过 ? 连接,通过 & 进行参数分割。
post传参存放在 http 包体内。

get 通过url参数的时候，数据长度限制 2048字符，post 美元长度限制

get 后退不受影响，post 后退会重新请求

11. http 响应码

200 请成功返回结果  201 表示资源正在创建  3xx 表示重定向 400 请求出错  401 没有认证（比如 没有带 token ） 500 服务器出错

12. promise 
a. 三种状态：pending(进行中) fulfiled(已成功) rejected(已失败)
promise 对象接受一个回调函数作为参数 ，该回调函数有二个参数（reslove 成功回调，reject失败的回调）

than,catch 方法返回一个新的 promise实列

throw 中断
3）Promise缺点

1、无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2、如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
3、当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
4、Promise 真正执行回调的时候，定义 Promise 那部分实际上已经走完了，所以 Promise 的报错堆栈上下文不太友好。

13. 