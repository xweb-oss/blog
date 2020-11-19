---
date: 2017-9- 15
tag: 
 - EventTarget 事件监听
author: xweb
location: Alanbang
---
# EventTarget 

  > addEventListener：绑定事件的监听函数
  > removeEventListener：移除事件的监听函数
  > dispatchEvent：触发事件

1. `target.addEventListener(type, listener[, useCapture]);`

  > type：事件名称，大小写敏感。
  > listener：监听函数。事件发生时，会调用该监听函数。
  > useCapture：布尔值，表示监听函数是否在捕获阶段（capture）触发（参见后文《事件的传播》部分），默认为false（监听函数只在冒泡阶段被触发）。该参数可选。

  ```js
    function helloFun() {
      console.log('Hello world');
    }

    var button = document.getElementById('btn');
    button.addEventListener('click', helloFun, false);
    // 相当于给属性id='btn'的标签绑定了一个 helloFun 函数
  ```

2. `EventTarget.removeEventListener()`
    > EventTarget.removeEventListener方法用来移除addEventListener方法添加的事件监听函数。该方法没有返回值。
  ```js
      div.addEventListener('click', listener, false);
      div.removeEventListener('click', listener, false);
      
      注意，removeEventListener方法移除的监听函数，必须是addEventListener方法添加的那个监听函数，而且必须在同一个元素节点，否则无效。
  ```