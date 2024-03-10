export function getDeviceType() {
  const userAgent = navigator.userAgent
  const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = 'pc'
  for (let i = 0; i < agents.length; i++) {
    if (userAgent.indexOf(agents[i]) > 0) {
      flag = 'mobile'
      break
    }
  }
  if (window.matchMedia('(max-width: 750px)').matches) {
    flag = 'mobile'
  }
  return flag
}

;(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    var deviceType = getDeviceType()
    if (deviceType === 'pc') {
      var size = 16 * (clientWidth / 1920)
      docEl.style.fontSize = (size < 12 ? 12 : size) + 'px'
    } else {
      var size = 16 * (clientWidth / 750)
      docEl.style.fontSize = size + 'px'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
