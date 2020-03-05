---
date: 2019-9-6
tag: 
  -vue文件中的render
author: xweb
location: Alanbang
---

# render函数
1. vue通过 template 来创建你的 HTML。但是，在特殊情况下，这种写死的模式无法满足需求，必须需要js的编程能力。此时，需要用render来创建HTML。

2. render方法的实质就是生成template模板;

3. 通过这三个参数，可以生成一个完整的模板;

> 第一个参数（必要参数）：主要用于提供DOM的html内容，类型可以是字符串、对象或函数.
> 第二个参数（类型是对象，可选）：用于设置这个DOM的一些样式、属性、传的组件的参数、绑定事件之类.
> 第三个参数（类型是数组，数组元素类型是VNode，可选）：主要是指该结点下还有其他结点，用于设置分发的内容，包括新增的其他组件。注意，组件树中的所有VNode必须是唯一的.

```js
export default {
 props: {
  type: {
   type: String,
   default: 'normal'
  },
  text: {
   type: String,
   default: 'normal'
  }
 },
 computed: {
  tag() {
   switch (this.type) {
    case 'success':
     return 1;
    case 'danger':
     return 2;
    case 'warning':
     return 3;
    default:
     return 1;
   }
  }
 },
 render(h) {
  return h('div', {
    // 给div绑定样式
   style:{
　　　width:'30px'
　　},　
    // 给div绑定class名称
   class: {
    btn: true,
    'btn-success': this.type === 'success',
    'btn-danger': this.type === 'danger',
    'btn-warning': this.type === 'warning'
   },
   domProps: {
    innerText: this.text
   },
   // 给div绑定点击事件
   on: {
    click: this.handleClick
   }
  });
 },
 methods: {
  handleClick() {
   console.log('-----------------------');
   console.log('do something');
  }
 }
};
上面代码编译之后

<div class="btn btn-success" v-if="type === 'success'">{{ text }}</div>
<div class="btn btn-danger" v-else-if="type === 'danger'">{{ text }}</div>
<div class="btn btn-warning" v-else-if="type === 'warning'">{{ text }}</div>

```