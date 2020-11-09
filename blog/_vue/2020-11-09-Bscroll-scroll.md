---
date: 2020-11- 09
tag: 
 - bscroll-scroll使用案例
author: xweb
location: Alanbang
---

1. 安装
`npm install better-scroll --save`

2. 使用 
   a. 导入   `import BScroll from 'better-scroll'`

3. 具体的一些 方法和事件  看官网地址
`https://better-scroll.github.io/docs-v1/doc/zh-hans/events.html#pullingdown`

4. 案例
```html
<template>
    <div class="app">
        <div ref="wrap"></div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
const options = {
  click: true,
  scrollY: true // 因为scrollY默认为true，其实可以省略
};
options.pullDownRefresh = {
  threshold: 90, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
  stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
};
options.pullUpLoad = {
  threshold: -30,// 在上拉到超过底部 20px 时，触发 pullingUp 事件
  stop: 10,
};

methods:{
    init(){
        this.scroll = new BScroll(this.$refs.wrap, options);

        this.scroll.on('pullingDown', () => {
            // 在一次下拉刷新的动作后，这个时机一般用来去后端请求数据。

            this.scroll.finishPullDown(); // 当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
        });
        this.scroll.on('pullingUp', () => {   
              // 在一次上拉加载的动作后，这个时机一般用来去后端请求数据。

            this.scroll.finishPullUp       // 当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
        })
    }
}

</script>
```
