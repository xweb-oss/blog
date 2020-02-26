
adaptive(document, window);//初始加载自适应
function adaptive(doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function() {
		var clientWidth = docEl.clientWidth;
		if(!clientWidth) return;
		if(clientWidth >= 1920) {
    
			docEl.style.fontSize = '100px';// 当前宽度大于1920的时候 默认为100px

		} else {

			docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
		}
	};
	if(!doc.addEventListener) return;
	    win.addEventListener(resizeEvt, recalc, false);
		  doc.addEventListener('DOMContentLoaded', recalc, false);
	}
	//随浏览器大小自适应
	window.onresize = function() {
	  adaptive(document, window);
  }
