---
date: 2020-07- 30
tag: 
 -  transform，transition，animation，keyframes区别
author: xweb
location: Alanbang
---
## transform、过渡transition、动画animation区分

1. transform用于元素旋转、缩放、移动、倾斜等效果

  rotate旋转、scale缩放、translate位移、skew倾斜、matrix矩阵变形、perspective透视
```js
    transform: scale(2, 0.5) // x轴缩放2倍，y轴缩放0.5倍
    transform: rotate(0.5turn) // 顺时针旋转0.5圈
    transform: rotate(140deg) // 顺时针旋转140度
    transform: translate(120px, 160px) //  x轴平移120px,y轴平移160px
    transform: skew(30deg,20deg) // x轴旋转30度,y轴旋转20度
    transform: matrix(1, 2, 3, 4, 5, 6) // 6个值的矩阵（需要再详细）
    transform: scale(0.5) translate(-100%, -100%); // x、y轴缩放0.5倍，再根据自身长宽向左向上translate移动100%（100%是由自身宽高决定的）

```

2. transition用于较为单一的动画

事列
```css
 div{
    width:100px;
    height:100px;
    background:red;
    transition:width 2s;
    /** transition:width 2s,height 2s,top 2s; 连着使用 具体可以看api文档**/    
}

div:hover{
    width:300px;
}
```


3. animation一般用于较为复杂、有中间态的动画 / 使用定义的动画规则
  keyframes   定义动画规则     二个共同使用  。

  animation的子属性有:

 ```js
animation-delay
设置延时，即从元素加载完成之后到动画序列开始执行的这段时间。

animation-direction
设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行。

animation-duration
设置动画一个周期的时长。

animation-iteration-count
设置动画重复次数， 可以指定infinite无限次重复动画

animation-name
指定由@keyframes描述的关键帧名称。

animation-play-state
允许暂停和恢复动画。

animation-timing-function
设置动画速度， 即通过建立加速度曲线，设置动画在关键帧之间是如何变化。

animation-fill-mode
指定动画执行前后如何为目标元素应用样式。

```

1. 事列     
```css
 @-webkit-keyframes haha1 {
  0% {
    -webkit-transform: rotate3d(0, 0, 0, 0deg);
  }
  50% {
    -webkit-transform: rotate3d(0, -0.5, 0, 180deg);
  }
  100% {
    -webkit-transform: rotate3d(0, -1, 0, 360deg);
  }
}

 .imgimg {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    -webkit-animation: haha1 3s linear infinite;//这里需要兼容写法哈我这里没处理
  }

1. 步骤1 先定义动画规则，@keyframes，在这个规则里面haha1是你要命名的动画名称，在之后transform来定义你要旋转还是平移还是其他


是咧2

<html>
<head>
<style>
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}

@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}
</style>
</head>
<body>

<p><b>Note:</b> This example does not work in Internet Explorer 9 and earlier versions.</p>

<div></div>

</body>
</html>

```