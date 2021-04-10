(function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        // 1920是设计稿的宽度，当大于1920时采用1920宽度，比例也是除以19.20
        if(clientWidth>1300) {
            // 大于1300 给根 字体大小 clientWidth / 19.20 + 'px';
          clientWidth = clientWidth > 1920 ? 1920 : clientWidth; 
          docEl.style.fontSize = clientWidth / 19.20 + 'px';
        }else {
          docEl.style.fontSize = 1300 / 19.20 + 'px';
          // 小于1300 给根 字体大小 1300 / 19.20 + 'px';
        }
      };
  
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);



//   (function (doc, win) {
//     // 分辨率Resolution适配
//     let docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function () {
//             let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//             let htmlDom = document.getElementsByTagName('html')[0];
//             if(htmlWidth<=750){
//                 htmlDom.style.fontSize= htmlWidth/3.75+ 'px';
//             }else {
//                 htmlDom.style.fontSize = 100 + 'px';
//             }
//         };

//     // Abort if browser does not support addEventListener
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     win.addEventListener('pageshow', recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);
