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

> 第一个参数（必要参数）：主要用于提供DOM的html内容，类型可以是字符串、对象或函数.(标签名)
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

* 尚硅谷['https://www.youtube.com/watch?v=MkRyxVmkeqk&list=PLmOn9nNkQxJFbDF2ZZgaSlMiurxt9saFx&index=18']

4. vue中的 render函数
* 本文章引用:[csdn博客](https://blog.csdn.net/q95548854/article/details/103119678)

##### 1. Render 的资料简介
* Render 函数是 Vue2.x 新增的一个函数、主要用来提升节点的性能，它是基于 JavaScript 计算。使用 Render 函数将 Template 里面的节点解析成虚拟的 Dom 

> Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用渲染函数，它比模板更接近编译器。

简单的说，在 Vue 中我们使用模板 HTML 语法组建页面的，使用 Render 函数我们可以用 Js 语言来构建 DOM。

因为 Vue 是虚拟 DOM，所以在拿到 Template 模板时也要转译成 VNode 的函数，而用 Render 函数构建 DOM，Vue 就免去了转译的过程。

#### 2. 与 Render 的初次相遇

* iview  
```js
render:(h, params)=>{
    return h('div', {style:{width:'100px',height:'100px',background:'#ccc'}}, '地方')
}
```
* element   
```js
<el-table-column :render-header="setHeader"></el-table-column>
setHeader (h) {
 return h('span', [
    h('span', { style: 'line-height: 40px;' }, '备注'),
      h('el-button', {
        props: { type: 'primary', size: 'medium', disabled: this.isDisable || !this.tableData.length },
        on: { click: this.save }
      }, '保存当前页')
    ])
  ])
}

或者这样

renderContent (createElement, { node, data, store }) {
	return createElement('span', [
		// 显示树的节点信息
		createElement('span', node.label)
		// ......
	])
}

而最初本身  

<h1>{{ blogTitle }}</h1>

render: function (createElement) {
  return createElement('h1', this.blogTitle)
}
```

* createElement 参数
> createElement（TagName，Option，Content）接受三个参数
> createElement(" 定义的元素 "，{ 元素的性质 }，" 元素的内容"/[元素的内容])

* 官方文档
```js
// @returns {VNode}
createElement(
  // {String | Object | Function}
  // 一个 HTML 标签名、组件选项对象，或者
  // resolve 了上述任何一种的一个 async 函数。必填项。
  'div',

  // {Object}
  // 一个与模板中属性对应的数据对象。可选。
  {
    // (详情见下一节-3.2 深入数据对象)
  },

  // {String | Array}
  // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
  // 也可以使用字符串来生成“文本虚拟节点”。可选。
  [
    '先写一些文字',
    createElement('h1', '一则头条'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)
```
* 举个小栗子

```js
render:(h) => {
  return h('div',{
　　　//给div绑定value属性
     props: {
         value:''
     },
　　　//给div绑定样式
　　　style:{
　　　　　width:'30px'
　　　},　
　　　//给div绑定点击事件　　
     on: {
         click: () => {
            console.log('点击事件')
         }
     },
  })
}
```

#### 4.4 render 中插槽
你可以通过 this.$slots 访问静态插槽的内容，每个插槽都是一个 VNode 数组：
```js
render: function (createElement) {
  // `<div><slot></slot></div>`
  return createElement('div', this.$slots.default)
}
```
也可以通过 this.$scopedSlots 访问作用域插槽，每个作用域插槽都是一个返回若干 VNode 的函数：
```js
props: ['message'],
render: function (createElement) {
  // `<div><slot :text="message"></slot></div>`
  return createElement('div', [
    this.$scopedSlots.default({
      text: this.message
    })
  ])
}
```
如果要用渲染函数向子组件中传递作用域插槽，可以利用 VNode 数据对象中的 scopedSlots 字段：
```js
render: function (createElement) {
  return createElement('div', [
    createElement('child', {
      // 在数据对象中传递 `scopedSlots`
      // 格式为 { name: props => VNode | Array<VNode> }
      scopedSlots: {
        default: function (props) {
          return createElement('span', props.text)
        }
      }
    })
  ])
}
···