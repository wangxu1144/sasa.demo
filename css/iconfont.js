;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M246.4 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z"  ></path>' +
    '' +
    '<path d="M716.8 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z"  ></path>' +
    '' +
    '<path d="M905.6 764.8l-537.6 0c-28.8 0-57.6-25.6-64-54.4l-96-566.4c-9.6-54.4-60.8-96-115.2-96l-22.4 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l22.4 0c28.8 0 57.6 25.6 64 54.4l96 566.4c9.6 54.4 60.8 96 115.2 96l537.6 0c12.8 0 25.6-12.8 25.6-25.6C931.2 777.6 921.6 764.8 905.6 764.8z"  ></path>' +
    '' +
    '<path d="M880 179.2l-572.8 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l572.8 0c25.6 0 38.4 16 32 41.6l-70.4 281.6c-6.4 32-41.6 57.6-73.6 60.8l-396.8 28.8c-12.8 0-25.6 12.8-22.4 28.8 0 12.8 12.8 25.6 28.8 22.4l396.8-28.8c54.4-3.2 105.6-48 118.4-99.2l70.4-281.6C976 230.4 937.6 179.2 880 179.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)