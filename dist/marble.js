module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,o=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||a,scrollIntoView:o.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,s=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?v.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):v.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;v.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var n=d(this),o=n.getBoundingClientRect(),i=this.getBoundingClientRect();n!==t.body?(v.call(this,n,n.scrollLeft+i.left-o.left,n.scrollTop+i.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function a(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+s<e.scrollHeight:"X"===t?e.clientWidth+s<e.scrollWidth:void 0}function u(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function f(e){var t=c(e,"Y")&&u(e,"Y"),n=c(e,"X")&&u(e,"X");return t||n}function d(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function h(t){var n,o,r,s,a=(i()-t.startTime)/468;s=a=a>1?1:a,n=.5*(1-Math.cos(Math.PI*s)),o=t.startX+(t.x-t.startX)*n,r=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,r),o===t.x&&r===t.y||e.requestAnimationFrame(h.bind(e,t))}function v(n,o,s){var l,c,u,f,d=i();n===t.body?(l=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=r.scroll):(l=n,c=n.scrollLeft,u=n.scrollTop,f=a),h({scrollable:l,method:f,startTime:d,startX:c,startY:u,x:o,y:s})}}}}()},function(e,t,n){e.exports={bp1200:"1200px"}},function(e,t){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var e=window.document,t=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(e){if(!this._observationTargets.some((function(t){return t.element==e}))){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter((function(t){return t.element!=e})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var e=this._queuedEntries.slice();return this._queuedEntries=[],e},o.prototype._initThresholds=function(e){var t=e||[0];return Array.isArray(t)||(t=[t]),t.sort().filter((function(e,t,n){if("number"!=typeof e||isNaN(e)||e<0||e>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return e!==n[t-1]}))},o.prototype._parseRootMargin=function(e){var t=(e||"0px").split(/\s+/).map((function(e){var t=/^(-?\d*\.?\d+)(px|%)$/.exec(e);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}}));return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(r(window,"resize",this._checkForIntersections,!0),r(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,i(window,"resize",this._checkForIntersections,!0),i(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),t=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var r=o.element,i=s(r),a=this._rootContainsTarget(r),l=o.entry,c=e&&a&&this._computeTargetAndRootIntersection(r,t),u=o.entry=new n({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:i,rootBounds:t,intersectionRect:c});l?e&&a?this._hasCrossedThreshold(l,u)&&this._queuedEntries.push(u):l&&l.isIntersecting&&this._queuedEntries.push(u):this._queuedEntries.push(u)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(t,n){if("none"!=window.getComputedStyle(t).display){for(var o,r,i,a,c,u,f,d,h=s(t),v=l(t),p=!1;!p;){var m=null,g=1==v.nodeType?window.getComputedStyle(v):{};if("none"==g.display)return;if(v==this.root||v==e?(p=!0,m=n):v!=e.body&&v!=e.documentElement&&"visible"!=g.overflow&&(m=s(v)),m&&(o=m,r=h,i=void 0,a=void 0,c=void 0,u=void 0,f=void 0,d=void 0,i=Math.max(o.top,r.top),a=Math.min(o.bottom,r.bottom),c=Math.max(o.left,r.left),u=Math.min(o.right,r.right),d=a-i,!(h=(f=u-c)>=0&&d>=0&&{top:i,bottom:a,left:c,right:u,width:f,height:d})))break;v=l(v)}return h}},o.prototype._getRootRect=function(){var t;if(this.root)t=s(this.root);else{var n=e.documentElement,o=e.body;t={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(e){var t=this._rootMarginValues.map((function(t,n){return"px"==t.unit?t.value:t.value*(n%2?e.width:e.height)/100})),n={top:e.top-t[0],right:e.right+t[1],bottom:e.bottom+t[2],left:e.left-t[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(e,t){var n=e&&e.isIntersecting?e.intersectionRatio||0:-1,o=t.isIntersecting?t.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},o.prototype._rootIsInDom=function(){return!this.root||a(e,this.root)},o.prototype._rootContainsTarget=function(t){return a(this.root||e,t)},o.prototype._registerInstance=function(){t.indexOf(this)<0&&t.push(this)},o.prototype._unregisterInstance=function(){var e=t.indexOf(this);-1!=e&&t.splice(e,1)},window.IntersectionObserver=o,window.IntersectionObserverEntry=n}function n(e){this.time=e.time,this.target=e.target,this.rootBounds=e.rootBounds,this.boundingClientRect=e.boundingClientRect,this.intersectionRect=e.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!e.intersectionRect;var t=this.boundingClientRect,n=t.width*t.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function o(e,t){var n,o,r,i=t||{};if("function"!=typeof e)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout((function(){n(),r=null}),o))}),this._callback=e,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(e){return e.value+e.unit})).join(" ")}function r(e,t,n,o){"function"==typeof e.addEventListener?e.addEventListener(t,n,o||!1):"function"==typeof e.attachEvent&&e.attachEvent("on"+t,n)}function i(e,t,n,o){"function"==typeof e.removeEventListener?e.removeEventListener(t,n,o||!1):"function"==typeof e.detatchEvent&&e.detatchEvent("on"+t,n)}function s(e){var t;try{t=e.getBoundingClientRect()}catch(e){}return t?(t.width&&t.height||(t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.right-t.left,height:t.bottom-t.top}),t):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(e,t){for(var n=t;n;){if(n==e)return!0;n=l(n)}return!1}function l(e){var t=e.parentNode;return t&&11==t.nodeType&&t.host?t.host:t&&t.assignedSlot?t.assignedSlot.parentNode:t}}()},function(e,t,n){"use strict";n.r(t);n(1);const o="undefined"!=typeof window,r=o&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=o&&"IntersectionObserver"in window,s=o&&"classList"in document.createElement("p"),a={elements_selector:"img",container:r||o?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_poster:"poster",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1};const l=function(e,t){var n;let o=new e(t);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};const c=(e,t)=>e.getAttribute("data-"+t),u=(e,t,n)=>{var o="data-"+t;null!==n?e.setAttribute(o,n):e.removeAttribute(o)},f=e=>"true"===c(e,"was-processed"),d=(e,t)=>u(e,"ll-timeout",t),h=e=>c(e,"ll-timeout"),v=(e,t,n,o)=>{e&&(void 0===o?void 0===n?e(t):e(t,n):e(t,n,o))},p=(e,t)=>{e.loadingCount+=t,0===e._elements.length&&0===e.loadingCount&&v(e._settings.callback_finish,e)},m=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)"SOURCE"===n.tagName&&t.push(n);return t},g=(e,t,n)=>{n&&e.setAttribute(t,n)},y=(e,t)=>{g(e,"sizes",c(e,t.data_sizes)),g(e,"srcset",c(e,t.data_srcset)),g(e,"src",c(e,t.data_src))},b={IMG:(e,t)=>{const n=e.parentNode;if(n&&"PICTURE"===n.tagName){m(n).forEach(e=>{y(e,t)})}y(e,t)},IFRAME:(e,t)=>{g(e,"src",c(e,t.data_src))},VIDEO:(e,t)=>{m(e).forEach(e=>{g(e,"src",c(e,t.data_src))}),g(e,"poster",c(e,t.data_poster)),g(e,"src",c(e,t.data_src)),e.load()}},w=(e,t)=>{const n=t._settings,o=e.tagName,r=b[o];if(r)return r(e,n),p(t,1),void(t._elements=(i=t._elements,s=e,i.filter(e=>e!==s)));var i,s;((e,t)=>{const n=c(e,t.data_src),o=c(e,t.data_bg);n&&(e.style.backgroundImage=`url("${n}")`),o&&(e.style.backgroundImage=o)})(e,n)},_=(e,t)=>{s?e.classList.add(t):e.className+=(e.className?" ":"")+t},E=(e,t)=>{s?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},k=(e,t,n)=>{e.addEventListener(t,n)},T=(e,t,n)=>{e.removeEventListener(t,n)},I=(e,t,n)=>{T(e,"load",t),T(e,"loadeddata",t),T(e,"error",n)},M=function(e,t,n){var o=n._settings;const r=t?o.class_loaded:o.class_error,i=t?o.callback_loaded:o.callback_error,s=e.target;E(s,o.class_loading),_(s,r),v(i,s,n),p(n,-1)},O=(e,t)=>{const n=r=>{M(r,!0,t),I(e,n,o)},o=r=>{M(r,!1,t),I(e,n,o)};((e,t,n)=>{k(e,"load",t),k(e,"loadeddata",t),k(e,"error",n)})(e,n,o)},R=["IMG","IFRAME","VIDEO"],x=(e,t)=>{var n=t._observer;j(e,t),n&&t._settings.auto_unobserve&&n.unobserve(e)},L=e=>{var t=h(e);t&&(clearTimeout(t),d(e,null))},S=(e,t)=>{var n=t._settings.load_delay,o=h(e);o||(o=setTimeout((function(){x(e,t),L(e)}),n),d(e,o))},j=(e,t,n)=>{var o=t._settings;!n&&f(e)||(R.indexOf(e.tagName)>-1&&(O(e,t),_(e,o.class_loading)),w(e,t),(e=>{u(e,"was-processed","true")})(e),v(o.callback_reveal,e,t),v(o.callback_set,e,t))},C=e=>{return!!i&&(e._observer=new IntersectionObserver(t=>{t.forEach(t=>(e=>e.isIntersecting||e.intersectionRatio>0)(t)?((e,t,n)=>{const o=n._settings;v(o.callback_enter,e,t,n),o.load_delay?S(e,n):x(e,n)})(t.target,t,e):((e,t,n)=>{const o=n._settings;v(o.callback_exit,e,t,n),o.load_delay&&L(e)})(t.target,t,e))},{root:(t=e._settings).container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}),!0);var t},A=["IMG","IFRAME"],F=(e,t)=>{return(e=>e.filter(e=>!f(e)))((n=e||(e=>e.container.querySelectorAll(e.elements_selector))(t),Array.prototype.slice.call(n)));var n},P=e=>{var t=e._settings;t.container.querySelectorAll("."+t.class_error).forEach(e=>{E(e,t.class_error),(e=>{u(e,"was-processed",null)})(e)}),e.update()},N=function(e,t){var n;this._settings=(e=>Object.assign({},a,e))(e),this.loadingCount=0,C(this),this.update(t),n=this,o&&window.addEventListener("online",e=>{P(n)})};N.prototype={update:function(e){var t,n=this._settings;(this._elements=F(e,n),!r&&this._observer)?((e=>e.use_native&&"loading"in HTMLImageElement.prototype)(n)&&((t=this)._elements.forEach(e=>{-1!==A.indexOf(e.tagName)&&(e.setAttribute("loading","lazy"),j(e,t))}),this._elements=F(e,n)),this._elements.forEach(e=>{this._observer.observe(e)})):this.loadAll()},destroy:function(){this._observer&&(this._elements.forEach(e=>{this._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(e,t){j(e,this,t)},loadAll:function(){this._elements.forEach(e=>{x(e,this)})}},o&&function(e,t){if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)l(e,n);else l(e,t)}(N,window.lazyLoadOptions);var q=N;n(2);var V=function(){!function(){const e=new q({elements_selector:".lazy",callback_loaded:e=>{e.dispatchEvent(new CustomEvent("image-loaded",{bubbles:!0}))}});document.querySelector("body").addEventListener("flickity-change",()=>{e.update()}),window.addEventListener("scroll",(function t(){e.loadAll(),window.removeEventListener("scroll",t,!0)}),!0)}()},B=n(0),z=n.n(B);var W=function(){z.a.polyfill(),document.querySelectorAll(".js-jump-link").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})};
/*! @vimeo/player v2.12.1 | (c) 2020 Vimeo | MIT License | https://github.com/vimeo/player.js */function Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var D="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function H(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function U(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function $(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function G(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,o=t||n;if(!o)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if($(o))return"https://vimeo.com/".concat(o);if(G(o))return o.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(o,"” is not a vimeo.com url."))}var Q=void 0!==Array.prototype.indexOf,K="undefined"!=typeof window&&void 0!==window.postMessage;if(!(D||Q&&K))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var Z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function r(e,n){if(!o(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+s()+"."+s()}function s(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(r(this,"delete"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),n(e.prototype,"get",(function(e){if(r(this,"get"),o(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(r(this,"has"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(r(this,"set"),!o(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:Z);var ee=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
var t,n,o;o=function(){var e,t,n,o=Object.prototype.toString,r="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,o){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==o})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function i(e,o){n.add(e,o),t||(t=r(n.drain))}function s(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function a(){for(var e=0;e<this.chain.length;e++)l(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function l(e,t,n){var o,r;try{!1===t?n.reject(e.msg):(o=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(r=s(o))?r.call(o,n.resolve,n.reject):n.resolve(o)}catch(e){n.reject(e)}}function c(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=s(e))?i((function(){var o=new d(n);try{t.call(e,(function(){c.apply(o,arguments)}),(function(){u.apply(o,arguments)}))}catch(e){u.call(o,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&i(a,n))}catch(e){u.call(new d(n),e)}}}function u(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(a,t))}function f(e,t,n,o){for(var r=0;r<t.length;r++)!function(r){e.resolve(t[r]).then((function(e){n(r,e)}),o)}(r)}function d(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function v(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new h(this);this.then=function(e,n){var o={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return o.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");o.resolve=e,o.reject=t})),t.chain.push(o),0!==t.state&&i(a,t),o.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){c.call(t,e)}),(function(e){u.call(t,e)}))}catch(e){u.call(t,e)}}n=function(){var e,n,o;function r(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){o=new r(t,i),n?n.next=o:e=o,n=o,o=void 0},drain:function(){var o=e;for(e=n=t=void 0;o;)o.fn.call(o.self),o=o.next}}}();var p=e({},"constructor",v,!1);return v.prototype=p,e(p,"__NPO__",0,!1),e(v,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(v,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(v,"all",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");var r=e.length,i=Array(r),s=0;f(t,e,(function(e,t){i[e]=t,++s===r&&n(i)}),o)}))})),e(v,"race",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):new t((function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),o)}))})),v},(n=Z)[t="Promise"]=n[t]||o(),e.exports&&(e.exports=n[t])})),te=new WeakMap;function ne(e,t,n){var o=te.get(e.element)||{};t in o||(o[t]=[]),o[t].push(n),te.set(e.element,o)}function oe(e,t){return(te.get(e.element)||{})[t]||[]}function re(e,t,n){var o=te.get(e.element)||{};if(!o[t])return!0;if(!n)return o[t]=[],te.set(e.element,o),!0;var r=o[t].indexOf(n);return-1!==r&&o[t].splice(r,1),te.set(e.element,o),o[t]&&0===o[t].length}function ie(e,t){var n=te.get(e);te.set(t,n),te.delete(e)}var se=["autopause","autoplay","background","byline","color","controls","dnt","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return se.reduce((function(t,n){var o=e.getAttribute("data-vimeo-".concat(n));return(o||""===o)&&(t[n]=""===o?1:o),t}),t)}function le(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var o=document.createElement("div");return o.innerHTML=n,t.appendChild(o.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(o,r){if(!G(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var s in t)t.hasOwnProperty(s)&&(i+="&".concat(s,"=").concat(encodeURIComponent(t[s])));var a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",i,!0),a.onload=function(){if(404!==a.status)if(403!==a.status)try{var t=JSON.parse(a.responseText);if(403===t.domain_status_code)return le(t,n),void r(new Error("“".concat(e,"” is not embeddable.")));o(t)}catch(e){r(e)}else r(new Error("“".concat(e,"” is not embeddable.")));else r(new Error("“".concat(e,"” was not found.")))},a.onerror=function(){var e=a.status?" (".concat(a.status,")"):"";r(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},a.send()}))}function ue(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function fe(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var o={method:t};void 0!==n&&(o.value=n);var r=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));r>=8&&r<10&&(o=JSON.stringify(o)),e.element.contentWindow.postMessage(o,e.origin)}}function de(e,t){var n,o=[];if((t=ue(t)).event){if("error"===t.event)oe(e,t.data.method).forEach((function(n){var o=new Error(t.data.message);o.name=t.data.name,n.reject(o),re(e,t.data.method,n)}));o=oe(e,"event:".concat(t.event)),n=t.data}else if(t.method){var r=function(e,t){var n=oe(e,t);if(n.length<1)return!1;var o=n.shift();return re(e,t,o),o}(e,t.method);r&&(o.push(r),n=t.value)}o.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var he=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,o=t.length,r={};n<o;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)r[t[0][n]]=e[n];return r}return!1}(),ve={fullscreenchange:he.fullscreenchange,fullscreenerror:he.fullscreenerror},pe={request:function(e){return new Promise((function(t,n){var o=function e(){pe.off("fullscreenchange",e),t()};pe.on("fullscreenchange",o);var r=(e=e||document.documentElement)[he.requestFullscreen]();r instanceof Promise&&r.then(o).catch(n)}))},exit:function(){return new Promise((function(e,t){if(pe.isFullscreen){var n=function t(){pe.off("fullscreenchange",t),e()};pe.on("fullscreenchange",n);var o=document[he.exitFullscreen]();o instanceof Promise&&o.then(n).catch(t)}else e()}))},on:function(e,t){var n=ve[e];n&&document.addEventListener(n,t)},off:function(e,t){var n=ve[e];n&&document.removeEventListener(n,t)}};Object.defineProperties(pe,{isFullscreen:{get:function(){return Boolean(document[he.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[he.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[he.fullscreenEnabled])}}});var me=new WeakMap,ge=new WeakMap,ye=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Y(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!U(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var r=t.querySelector("iframe");r&&(t=r)}if("IFRAME"===t.nodeName&&!G(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(me.has(t))return me.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var i=new ee((function(e,r){if(n._onMessage=function(t){if(G(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var o=ue(t.data);if(o&&"error"===o.event&&o.data&&"ready"===o.data.method){var i=new Error(o.data.message);return i.name=o.data.name,void r(i)}var s=o&&"ready"===o.event,a=o&&"ping"===o.method;if(s||a)return n.element.setAttribute("data-ready","true"),void e();de(n,o)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=ae(t,o);ce(J(i),i,t).then((function(e){var o=le(e,t);return n.element=o,n._originalElement=t,ie(t,o),me.set(n.element,n),e})).catch(r)}}));return ge.set(this,i),me.set(this.element,this),"IFRAME"===this.element.nodeName&&fe(this,"ping"),this}var t,n,o;return t=e,(n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new ee((function(o,r){return t.ready().then((function(){ne(t,e,{resolve:o,reject:r}),fe(t,e,n)})).catch(r)}))}},{key:"get",value:function(e){var t=this;return new ee((function(n,o){return e=H(e,"get"),t.ready().then((function(){ne(t,e,{resolve:n,reject:o}),fe(t,e)})).catch(o)}))}},{key:"set",value:function(e,t){var n=this;return new ee((function(o,r){if(e=H(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){ne(n,e,{resolve:o,reject:r}),fe(n,e,t)})).catch(r)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");!pe.isEnabled||"fullscreenchange"!==e&&"fullscreenerror"!==e?(0===oe(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),ne(this,"event:".concat(e),t)):pe.on(e,t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");!pe.isEnabled||"fullscreenchange"!==e&&"fullscreenerror"!==e?re(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){})):pe.off(e,t)}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=ge.get(this)||new ee((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return ee.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return pe.isEnabled?pe.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return pe.isEnabled?pe.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return pe.isEnabled?ee.resolve(pe.isFullscreen):this.get("fullscreen")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new ee((function(t){ge.delete(e),me.delete(e.element),e._originalElement&&(me.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&e.element.parentNode.removeChild(e.element),e._window.removeEventListener("message",e._onMessage),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&X(t.prototype,n),o&&X(t,o),e}();D||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=ae(e);ce(J(t),t,e).then((function(t){return le(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(G(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),o=0;o<n.length;o++)if(n[o].contentWindow===t.source){n[o].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}());var be=ye;const we={global:V,jumpLinkBanner:W,vimeoPlayToggle:function(){document.querySelectorAll(".js-vimeo-container").forEach(e=>{const t=e.querySelector("iframe"),n=new be(t),o=e.querySelector(".js-vimeo-play");o.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),n.getPaused().then((function(e){e?((e,t)=>{e.play(),t.querySelector(".js-vimeo-play__play-icon").classList.add("is-hidden"),t.querySelector(".js-vimeo-play__pause-icon").classList.remove("is-hidden")})(n,o):((e,t)=>{e.pause(),t.querySelector(".js-vimeo-play__play-icon").classList.remove("is-hidden"),t.querySelector(".js-vimeo-play__pause-icon").classList.add("is-hidden")})(n,o)}))}))})}};t.default=we}]);
//# sourceMappingURL=marble.js.map