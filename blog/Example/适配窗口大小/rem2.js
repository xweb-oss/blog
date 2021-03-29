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