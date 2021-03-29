// rem.js
const baseSize = 28   // 相当于在 750 设计稿里面是根元素 1rem == 28px  375屏幕里面是根元素  1rem == 14px
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 设计稿750 宽的缩放比例，可根据自己需要修改。
  // document.documentElement.clientWidth 屏幕的宽度
  // Math.min(scale, 2)  取最小
  let ws = document.documentElement.clientWidth
  if(ws >= 750){  // 把设备类型钉死  移动端
    ws = 750
  }
  const scale = ws / 750
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
