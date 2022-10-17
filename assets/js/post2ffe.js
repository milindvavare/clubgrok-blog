/* Gallery card & progress bar [with modification]
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Website : ghost.org
   Repo    : github.com/tryghost
   Author  : Ghost
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
var gallery=document.querySelectorAll(".kg-gallery-image img");gallery.forEach(function(e){var l=e.closest(".kg-gallery-image"),a=e.attributes.width.value/e.attributes.height.value;l.style.flex=a+" 1 0%"});const readingProgress=(e,t)=>{const o=document.querySelector(e),n=document.querySelector(t),a=()=>{const e=o.getBoundingClientRect(),t=window.innerHeight/2;Math.round(n.max-n.value);e.top>t&&(n.value=0),e.top<t&&(n.value=n.max),e.top<=t&&e.bottom>=t&&(n.value=n.max*Math.abs(e.top-t)/e.height),window.addEventListener("scroll",a)};window.addEventListener("scroll",a)};

/* Custom settings for progress bar */
const progressTrigger = document.querySelector('.post-progress')

if (progressTrigger) {
  readingProgress(".post-content", ".post-progress");
}

/* clipboard.js
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Version : 2.0.8
   Website : clipboardjs.com
   Repo    : github.com/zenorocha/clipboard.js
   Author  : Zeno Rocha
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return n={134:(t,e,n)=>{"use strict";n.d(e,{default:()=>r});var e=n(817),o=n.n(e);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}const c=function(){function e(t){!function(t){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.resolveOptions(t),this.initSelection()}var t,n,r;return t=e,(n=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";e=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top="".concat(e,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==i(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}])&&a(t.prototype,n),r&&a(t,r),e}();var e=n(279),l=n.n(e),e=n(370),u=n.n(e);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=p(n);return t=r?(t=p(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==s(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){t="data-clipboard-".concat(t);if(e.hasAttribute(t))return e.getAttribute(t)}const r=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(o,l());var t,e,n,r=d(o);function o(t,e){var n;return function(t){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(n=r.call(this)).resolveOptions(e),n.listenClick(t),n}return t=o,n=[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof t?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===s(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=u()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){t=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){t=y("target",t);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&f(t.prototype,e),n&&f(t,n),o}()},828:t=>{var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:(t,e,n)=>{var a=n(828);function i(t,e,n,r,o){var i=function(e,n,t,r){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&r.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}t.exports=function(t,e,n,r,o){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,r,o)}))}},879:(t,n)=>{n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:(t,e,n)=>{var u=n(879),s=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!u.string(e))throw new TypeError("Second argument must be a String");if(!u.fn(n))throw new TypeError("Third argument must be a Function");if(u.node(t))return c=e,l=n,(a=t).addEventListener(c,l),{destroy:function(){a.removeEventListener(c,l)}};if(u.nodeList(t))return r=t,o=e,i=n,Array.prototype.forEach.call(r,function(t){t.addEventListener(o,i)}),{destroy:function(){Array.prototype.forEach.call(r,function(t){t.removeEventListener(o,i)})}};if(u.string(t))return t=t,e=e,n=n,s(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var r,o,i,a,c,l}},817:t=>{t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:t=>{function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},o={},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(134).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={exports:{}};return n[t](e,e.exports,r),e.exports}var n,o});

/* Custom settings for clipboard */
new ClipboardJS("#copy");

/* lightense-images
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Version : 1.0.17
   Website : sparanoid.com/work/lightense-images/
   Repo    : github.com/sparanoid/lightense-images
   Author  : Tunghsiao Liu
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Lightense=t():e.Lightense=t()}(this,(function(){return e={352:e=>{function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(){"use strict";var e,t={time:300,padding:40,offset:40,keyboard:!0,cubicBezier:"cubic-bezier(.2, 0, .1, 1)",background:"var(--bg-color-80, rgba(255, 255, 255, .98))",zIndex:1e6,beforeShow:void 0,afterShow:void 0,beforeHide:void 0,afterHide:void 0},r={};function o(e){var t=r[e];if(t){if("function"!=typeof t)throw"config.".concat(e," must be a function!");Reflect.apply(t,r,[r])}}function a(e){switch(i(e)){case"undefined":throw"You need to pass an element!";case"string":return document.querySelectorAll(e);case"object":return e}}function c(e){var t=e.length;if(t)for(var n=0;n<t;n++)s(e[n]);else s(e)}function s(e){e.src&&!e.classList.contains("lightense-target")&&(e.classList.add("lightense-target"),e.addEventListener("click",(function(i){if(r.keyboard&&(i.metaKey||i.ctrlKey))return window.open(e.src,"_blank");!function(e){if(r.target=e,r.target.classList.contains("lightense-open"))return g();o("beforeShow"),r.scrollY=window.scrollY,function(e,t,n){e.addEventListener(t,(function r(i){Reflect.apply(n,this,i),e.removeEventListener(t,r)}))}(r.target,"transitionend",(function(){o("afterShow")}));var i=new Image;i.onload=function(){!function(e){var n=e.width,i=e.height,o=window.pageYOffset||document.documentElement.scrollTop||0,a=window.pageXOffset||document.documentElement.scrollLeft||0,c=r.target.getBoundingClientRect(),s=n/c.width,d=window.innerWidth||document.documentElement.clientWidth||0,l=window.innerHeight||document.documentElement.clientHeight||0,u=r.target.getAttribute("data-lightense-padding")||r.target.getAttribute("data-padding")||r.padding,g=d>u?d-u:d-t.padding,p=l>u?l-u:l-t.padding,f=n/i,b=g/p;r.scaleFactor=n<g&&i<p?s:f<b?p/i*s:g/n*s;var h=d/2,m=o+l/2,v=c.left+a+c.width/2,y=c.top+o+c.height/2;r.translateX=Math.round(h-v),r.translateY=Math.round(m-y)}(this),function(){r.target.classList.add("lightense-open"),r.wrap=document.createElement("div"),r.wrap.className="lightense-wrap",setTimeout((function(){r.target.style.transform="scale("+r.scaleFactor+")"}),20),r.target.parentNode.insertBefore(r.wrap,r.target),r.wrap.appendChild(r.target),setTimeout((function(){r.wrap.style.transform="translate3d("+r.translateX+"px, "+r.translateY+"px, 0)"}),20);var e={cubicBezier:r.target.getAttribute("data-lightense-cubic-bezier")||r.cubicBezier,background:r.target.getAttribute("data-lightense-background")||r.target.getAttribute("data-background")||r.background,zIndex:r.target.getAttribute("data-lightense-z-index")||r.zIndex},t=n(n({},r),e);d("lightense-images-css-computed","\n    :root {\n      --lightense-z-index: ".concat(t.zIndex-1,";\n      --lightense-backdrop: ").concat(t.background,";\n      --lightense-duration: ").concat(t.time,"ms;\n      --lightense-timing-func: ").concat(t.cubicBezier,";\n    }")),r.container.style.visibility="visible",setTimeout((function(){r.container.style.opacity="1"}),20)}(),window.addEventListener("keyup",f,!1),window.addEventListener("scroll",p,!1),r.container.addEventListener("click",g,!1)},i.src=r.target.src}(this)}),!1))}function d(e,t){var n=document.head||document.getElementsByTagName("head")[0];document.getElementById(e)&&document.getElementById(e).remove();var r=document.createElement("style");r.id=e,r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t)),n.appendChild(r)}function l(){d("lightense-images-css","\n:root {\n  --lightense-z-index: ".concat(r.zIndex-1,";\n  --lightense-backdrop: ").concat(r.background,";\n  --lightense-duration: ").concat(r.time,"ms;\n  --lightense-timing-func: ").concat(r.cubicBezier,";\n}\n\n.lightense-backdrop {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: calc(var(--lightense-z-index) - 1);\n  padding: 0;\n  margin: 0;\n  transition: opacity var(--lightense-duration) ease;\n  cursor: zoom-out;\n  opacity: 0;\n  background-color: var(--lightense-backdrop);\n  visibility: hidden;\n}\n\n@supports (-webkit-backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    -webkit-backdrop-filter: blur(30px);\n  }\n}\n\n@supports (backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    backdrop-filter: blur(30px);\n  }\n}\n\n.lightense-wrap {\n  position: relative;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  z-index: var(--lightense-z-index);\n  pointer-events: none;\n}\n\n.lightense-target {\n  cursor: zoom-in;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  pointer-events: auto;\n}\n\n.lightense-open {\n  cursor: zoom-out;\n}\n\n.lightense-transitioning {\n  pointer-events: none;\n}"))}function u(){null===document.querySelector(".lightense-backdrop")?(r.container=document.createElement("div"),r.container.className="lightense-backdrop",document.body.appendChild(r.container)):r.container=document.querySelector(".lightense-backdrop")}function g(){o("beforeHide"),window.removeEventListener("keyup",f,!1),window.removeEventListener("scroll",p,!1),r.container.removeEventListener("click",g,!1),r.target.classList.remove("lightense-open"),r.wrap.style.transform="",r.target.style.transform="",r.target.classList.add("lightense-transitioning"),r.container.style.opacity="",setTimeout((function(){o("afterHide"),r.container.style.visibility="",r.container.style.backgroundColor="",r.wrap.parentNode.replaceChild(r.target,r.wrap),r.target.classList.remove("lightense-transitioning")}),r.time)}function p(){Math.abs(r.scrollY-window.scrollY)>=r.offset&&g()}function f(e){e.preventDefault(),27===e.keyCode&&g()}return function(i){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=a(i),r=n(n({},t),o),l(),u(),c(e)}}();e.exports=o}},t={},function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(352);var e,t}));

/* Custom settings for lightense-images */
window.addEventListener("load",function(){const e=document.querySelector(".post-content .kg-card img"),t=document.querySelectorAll(".post-content .kg-image-card a img");if(t)for(var n=0;n<t.length;n++)t[n].classList.add("no-lightense");e&&Lightense(".post-content .kg-image-card img:not(.no-lightense),.post-content .kg-gallery-card img:not(.no-lightense)",{padding:60,offset:0})},!1);

/* reframe.js
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Version : 2.2.6
   Website : dollarshaveclub.github.io/reframe.js
   Repo    : github.com/yowainwright/reframe.js
   Author  : Jeff Wainwright
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).reframe=t()}(this,function(){"use strict";return function(e,t){var i="string"==typeof e?document.querySelectorAll(e):e,n=t||"js-reframe";"length"in i||(i=[i]);for(var o=0;o<i.length;o+=1){var r=i[o];if(!(-1!==r.className.split(" ").indexOf(n))){var f=r.getAttribute("height"),d=r.getAttribute("width");if(!(-1<d.indexOf("%")||-1<r.style.width.indexOf("%"))){var s=(f||r.offsetHeight)/(d||r.offsetWidth)*100,a=document.createElement("div");a.className=n;var l=a.style;l.position="relative",l.width="100%",l.paddingTop=s+"%";var p=r.style;p.position="absolute",p.width="100%",p.height="100%",p.left="0",p.top="0",r.parentNode.insertBefore(a,r),r.parentNode.removeChild(r),a.appendChild(r)}}}}});

/* Custom settings for reframe.js */
reframe('.post-content iframe:not(.reframe-off)');

/* disqusLazy [with modifications]
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Version : 1.0.0
   Website : samclarke.com/lazy-loading-disqus
   Author  : Sam Clarke
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
!function(e,t){var n,i,r,s,a=.75*t.innerHeight;function d(){!i&&r.getBoundingClientRect().top-t.innerHeight<=a&&(removeEventListener("scroll",s),removeEventListener("resize",s),(n=e.createElement("script")).async=!0,n.src='https://'+disqus_id+'.disqus.com/embed.js',n.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(n),i=!0)}r&&(addEventListener("scroll",s),addEventListener("resize",s)),t.disqusLazy=function(n){var i,l,o,c;i=d,l=(n=n||{}).throttle||100,c=0,s=function(){var e=+new Date,t=l-(e-c),n=arguments;clearTimeout(o),t>0?o=setTimeout(function(){c=e,i.apply(null,n)},t):(c=e,i.apply(null,n))},r=n.element||e.getElementById("disqus_thread"),a=n.threashold||.75*t.innerHeight,r&&(addEventListener("scroll",s),addEventListener("resize",s))}}(document,window);

/* Custom settings for disqusLazy */
const disqus = document.querySelector('.disqus-lazy');

if (disqus) {
    disqusLazy();
}