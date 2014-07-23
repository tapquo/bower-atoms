/**
 * atoms - Atomic & Reactive Development for Modern WebApps.
 * @version v0.07.21
 * @link    http://atoms.tapquo.com
 * @author  Tapquo S.L. (http://tapquo.com)
 * @license MIT
 */
(function(){"use strict";var t,n,e,r,i,o,u=[].indexOf||function(t){for(var n=0,e=this.length;e>n;n++)if(n in this&&this[n]===t)return n;return-1},s=[].slice,a={}.hasOwnProperty,l=function(t,n){function e(){this.constructor=t}for(var r in n)a.call(n,r)&&(t[r]=n[r]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t},c=function(t,n){return function(){return t.apply(n,arguments)}};r=function(){var t,n,e,r,i,o,u,s,a,l,c,h,d,f,p,v,y;return r=[],s=Object.prototype,u=/^\s*<(\w+|!)[^>]*>/,e=[1,9,11],n=/^\.([\w-]+)$/,o=/^#[\w\d-]+$/,c=/^[\w-]+$/,a=document.createElement("table"),l=document.createElement("tr"),i={tr:document.createElement("tbody"),tbody:a,thead:a,tfoot:a,td:l,th:l,"*":document.createElement("div")},t=function(n,e){var r;return n?"function"===t.toType(n)?t(document).ready(n):(r=p(n,e),v(r,n)):v()},t.query=function(t,e){var r;return n.test(e)?r=t.getElementsByClassName(e.replace(".","")):c.test(e)?r=t.getElementsByTagName(e):o.test(e)&&t===document?(r=t.getElementById(e.replace("#","")),r||(r=[])):r=t.querySelectorAll(e),r.nodeType?[r]:Array.prototype.slice.call(r)},t.extend=function(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){var e,r;r=[];for(e in n)r.push(t[e]=n[e]);return r}),t},t.toType=function(t){return s.toString.call(t).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},t.each=function(n,e){var r,i,o,u,s;if(i=void 0,o=void 0,"array"===t.toType(n))for(i=u=0,s=n.length;s>u;i=++u)r=n[i],e.call(r,i,r)===!1;else for(o in n)e.call(n[o],o,n[o])===!1;return n},t.map=function(n,e){var r,i,o,u;if(u=[],r=void 0,i=void 0,"array"===t.toType(n))for(r=0;r<n.length;)o=e(n[r],r),null!=o&&u.push(o),r++;else for(i in n)o=e(n[i],i),null!=o&&u.push(o);return d(u)},t.mix=function(){var t,n,e,r,i;for(e={},t=0,r=arguments.length;r>t;){n=arguments[t];for(i in n)y(n,i)&&void 0!==n[i]&&(e[i]=n[i]);t++}return e},v=function(t,n){return null==n&&(n=""),t=t||r,t.selector=n,t.__proto__=v.prototype,t},p=function(n,r){var i,o;return i=null,o=t.toType(n),"array"===o?i=h(n):"string"===o&&u.test(n)?(i=f(n.trim(),RegExp.$1),n=null):"string"===o?(i=t.query(document,n),r&&(i=1===i.length?t.query(i[0],r):t.map(function(){return t.query(i,r)}))):(e.indexOf(n.nodeType)>=0||n===window)&&(i=[n],n=null),i},f=function(n,e){var r;return null==e&&(e="*"),e in i||(e="*"),r=i[e],r.innerHTML=""+n,t.each(Array.prototype.slice.call(r.childNodes),function(){return r.removeChild(this)})},h=function(t){return t.filter(function(t){return null!=t?t:void 0})},d=function(t){return t.length>0?r.concat.apply(r,t):t},y=function(t,n){return s.hasOwnProperty.call(t,n)},v.prototype=t.fn={},t.fn.each=function(t){return this.forEach(function(n,e){return t.call(n,e,n)}),this},t.fn.filter=function(n){return t(r.filter.call(this,function(e){return e.parentNode&&t.query(e.parentNode,n).indexOf(e)>=0}))},t.fn.forEach=r.forEach,t.fn.indexOf=r.indexOf,t.version="3.0.5",t}(),this.Quo=this.$$=r,function(t){var n,e,r,i,o,u,s,a,l,c,h,d;return n={TYPE:"GET",MIME:"json"},r={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},e=0,t.ajaxSettings={type:n.TYPE,async:!0,success:{},error:{},context:null,dataType:n.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:!1,timeout:0},t.ajax=function(e){var r,u,a,h;if(a=t.mix(t.ajaxSettings,e),a.type===n.TYPE?a.url+=t.serialize(a.data,"?"):a.data=t.serialize(a.data),i(a.url))return o(a);h=a.xhr(),h.onreadystatechange=function(){return 4===h.readyState?(clearTimeout(r),c(h,a)):void 0},h.open(a.type,a.url,a.async),l(h,a),a.timeout>0&&(r=setTimeout(function(){return d(h,a)},a.timeout));try{h.send(a.data)}catch(f){u=f,h=u,s("Resource not found",h,a)}return h},t.get=function(n,e,r,i){return t.ajax({url:n,data:e,success:r,dataType:i})},t.post=function(t,n,e,r){return a("POST",t,n,e,r)},t.put=function(t,n,e,r){return a("PUT",t,n,e,r)},t["delete"]=function(t,n,e,r){return a("DELETE",t,n,e,r)},t.json=function(n,e,r){return t.ajax({url:n,data:e,success:r})},t.serialize=function(t,n){var e,r;null==n&&(n=""),r=n;for(e in t)t.hasOwnProperty(e)&&(r!==n&&(r+="&"),r+=""+encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return r===n?"":r},o=function(n){var r,i,o,u;return n.async?(i="jsonp"+ ++e,o=document.createElement("script"),u={abort:function(){return t(o).remove(),i in window?window[i]={}:void 0}},r=void 0,window[i]=function(e){return clearTimeout(r),t(o).remove(),delete window[i],h(e,u,n)},o.src=n.url.replace(RegExp("=\\?"),"="+i),t("head").append(o),n.timeout>0&&(r=setTimeout(function(){return d(u,n)},n.timeout)),u):console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")},c=function(t,n){t.status>=200&&t.status<300||0===t.status?n.async&&h(u(t,n),t,n):s("QuoJS.ajax: Unsuccesful request",t,n)},h=function(t,n,e){e.success.call(e.context,t,n)},s=function(t,n,e){e.error.call(e.context,t,n,e)},l=function(t,n){var e;n.contentType&&(n.headers["Content-Type"]=n.contentType),n.dataType&&(n.headers.Accept=r[n.dataType]);for(e in n.headers)t.setRequestHeader(e,n.headers[e])},d=function(t,n){t.onreadystatechange={},t.abort(),s("QuoJS.ajax: Timeout exceeded",t,n)},a=function(n,e,r,i,o){return t.ajax({type:n,url:e,data:r,success:i,dataType:o,contentType:"application/x-www-form-urlencoded"})},i=function(t){return RegExp("=\\?").test(t)},u=function(t,e){var r,i;if(i=t,t.responseText){if(e.dataType===n.MIME)try{i=JSON.parse(t.responseText)}catch(o){r=o,i=r,s("QuoJS.ajax: Parse Error",t,e)}"xml"===e.dataType&&(i=t.responseXML)}return i}}(r),function(t){var n,e;return n=["-webkit-","-moz-","-ms-","-o-",""],t.fn.addClass=function(t){return this.each(function(){return this.classList.add(t)})},t.fn.removeClass=function(t){return this.each(function(){return this.classList.remove(t)})},t.fn.toggleClass=function(t){return this.each(function(){var n;return n=this.classList.contains(t)?"remove":"add",this.classList[n](t)})},t.fn.hasClass=function(t){return this.length>0&&this[0].classList.contains(t)},t.fn.listClass=function(){return this.length>0?this[0].classList:void 0},t.fn.style=t.fn.css=function(t,n){var r;return null!=n?this.each(function(){return this.style[t]=n}):(r=this[0],r.style[t]||e(r,t))},t.fn.vendor=function(t,e){var r,i,o,u;for(u=[],i=0,o=n.length;o>i;i++)r=n[i],u.push(this.style(""+r+t,e));return u},e=function(t,n){return document.defaultView.getComputedStyle(t,"")[n]}}(r),function(t){return t.fn.attr=function(n,e){return this.length>0&&"string"===t.toType(n)?e?this.each(function(){return this.setAttribute(n,e)}):this[0].getAttribute(n):void 0},t.fn.removeAttr=function(n){return this.length>0&&"string"===t.toType(n)?this.each(function(){return this.removeAttribute(n)}):void 0},t.fn.data=function(t,n){return this.attr("data-"+t,n)},t.fn.removeData=function(t){return this.removeAttr("data-"+t)},t.fn.val=function(t){return null!=t?this.each(function(){return this.value=t.toString()}):this.length>0?this[0].value:null},t.fn.show=function(){return this.style("display","block")},t.fn.hide=function(){return this.style("display","none")},t.fn.focus=function(){return this[0].focus()},t.fn.blur=function(){return this[0].blur()},t.fn.offset=function(){var t,n;return this.length>0&&(t=this[0].getBoundingClientRect(),n={left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:t.width,height:t.height}),n}}(r),function(t){var n,e,r,i,o,u;return r=null,n=/WebKit\/([\d.]+)/,e={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,Blackberry:/(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,FirefoxOS:/(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,webOS:/(webOS|hpwOS)[\s\/]([\d.]+)/},t.isMobile=function(){return this.environment(),r.isMobile},t.environment=function(){var t,n;return r||(n=navigator.userAgent,t=o(n),r={browser:i(n),isMobile:!!t,screen:u(),os:t}),r},i=function(t){var e;return e=t.match(n),e?e[0]:t},o=function(t){var n,r,i;for(r in e)if(i=t.match(e[r])){n={name:"iphone"===r||"ipad"===r||"ipod"===r?"ios":r,version:i[2].replace("_",".")};break}return n},u=function(){return{width:window.innerWidth,height:window.innerHeight}}}(r),function(t){var n,e,r,i,o,u,s,a,l,c,h,d,f;return n=1,i={},r={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},e={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touch:"click",orientationchange:"resize"},o=/complete|loaded|interactive/,t.fn.on=function(n,e,r){return null==e||"function"===t.toType(e)?this.bind(n,e):this.delegate(e,n,r)},t.fn.off=function(n,e,r){return null==e||"function"===t.toType(e)?this.unbind(n,e):this.undelegate(e,n,r)},t.fn.ready=function(n){return o.test(document.readyState)?n.call(this,t):t.fn.addEvent(document,"DOMContentLoaded",function(){return n.call(this,t)})},t.fn.bind=function(t,n){return this.forEach(function(e){return d(e,t,n)})},t.fn.unbind=function(t,n){return this.each(function(){return f(this,t,n)})},t.fn.delegate=function(n,e,r){return this.each(function(i,o){return d(o,e,r,n,function(e){return function(r){var i,s;return s=t(r.target).closest(n,o).get(0),s?(i=t.extend(u(r),{currentTarget:s,liveFired:o}),e.apply(s,[i].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,n,e){return this.each(function(){return f(this,n,e,t)})},t.fn.trigger=function(n,e,r){return"string"===t.toType(n)&&(n=l(n,e)),null!=r&&(n.originalEvent=r),this.each(function(){return this.dispatchEvent(n)})},t.fn.addEvent=function(t,n,e){return t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent?t.attachEvent("on"+n,e):t["on"+n]=e},t.fn.removeEvent=function(t,n,e){return t.removeEventListener?t.removeEventListener(n,e,!1):t.detachEvent?t.detachEvent("on"+n,e):t["on"+n]=null},l=function(t,n){var e;return e=document.createEvent("Events"),e.initEvent(t,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null),n&&(e.touch=n),e},d=function(n,e,r,o,u){var l,c,d,f;return e=a(e),d=h(n),c=i[d]||(i[d]=[]),l=u&&u(r,e),f={event:e,callback:r,selector:o,proxy:s(l,r,n),delegate:l,index:c.length},c.push(f),t.fn.addEvent(n,f.event,f.proxy)},f=function(n,e,r,o){var u;return e=a(e),u=h(n),c(u,e,r,o).forEach(function(e){return delete i[u][e.index],t.fn.removeEvent(n,e.event,e.proxy)})},h=function(t){return t._id||(t._id=n++)},a=function(n){var r;return r=("function"==typeof t.isMobile?t.isMobile():void 0)?n:e[n],r||n},s=function(t,n,e){var r;return n=t||n,r=function(t){var r;return r=n.apply(e,[t].concat(t.data)),r===!1&&t.preventDefault(),r}},c=function(t,n,e,r){return(i[t]||[]).filter(function(t){return!(!t||n&&t.event!==n||e&&t.callback!==e||r&&t.selector!==r)})},u=function(n){var e;return e=t.extend({originalEvent:n},n),t.each(r,function(t,r){return e[t]=function(){return this[r]=function(){return!0},n[t].apply(n,arguments)},e[r]=function(){return!1}}),e}}(r),r.Gestures=function(t){var n,e,r,i,o,s,a,l,c,h,d,f,p,v;return v=!1,h={},a=null,f=null,o=["input","select","textarea"],n=function(t){return h[t.name]=t.handler,r(t.events)},e=function(n,e,r){return t(n).trigger(e,r,f)},p=function(t){var n;return n=(t.srcElement||t.target).tagName.toLowerCase(),u.call(o,n)>=0?t.stopPropagation():(v=!0,f=t||event,a=l(t),c("start",t.target,a))},d=function(t){return v?(f=t||event,a=l(t),a.length>1&&f.preventDefault(),c("move",t.target,a)):void 0},s=function(t){return v?(f=t||event,c("end",t.target,a),v=!1):void 0},i=function(){return v=!1,c("cancel")},r=function(n){return n.forEach(function(n){return t.fn[n]=function(e){return t(document.body).delegate(this.selector,n,e)}}),this},c=function(t,n,e){var r,i,o;o=[];for(i in h)r=h[i],r[t]&&o.push(r[t].call(r,n,e));return o},l=function(t){var n,e,r,i,o;for(i=t.touches||[t],o=[],e=0,r=i.length;r>e;e++)n=i[e],o.push({x:n.pageX,y:n.pageY});return o},t(document).ready(function(){var n;return n=t(document.body),n.bind("touchstart",p),n.bind("touchmove",d),n.bind("touchend",s),n.bind("touchcancel",i)}),{add:n,trigger:e}}(r),r.Gestures.add({name:"basic",events:["touch","hold","doubleTap"],handler:function(t){var n,e,r,i,o,u,s,a,l,c,h,d;return e=15,n={TAP:200,DOUBLE_TAP:400,HOLD:400},a=null,d=!0,h=null,c=null,l=null,u=function(e,i){return 1===i.length?(c={time:new Date,x:i[0].x,y:i[0].y},h=e,a=setTimeout(function(){return t.trigger(e,"hold",i[0])},n.HOLD)):r()},o=function(t,n){var i;return null!==c&&(i=s(c,n[0]),i.x>e||i.y>e||n.length>1)?r():void 0},i=function(e,i){var o,u;if(c)return o=s(c,i[0]),0!==o.x||0!==o.y?r():(clearTimeout(a),u=new Date,u-c.time<n.TAP?u-l<n.DOUBLE_TAP?(t.trigger(e,"doubleTap",i[0]),l=null):(l=u,t.trigger(e,"touch",i[0])):void 0)},r=function(){return c=null,d=!1,clearTimeout(a)},s=function(t,n){var e;return e={x:n.x-t.x,y:n.y-t.y}},{start:u,move:o,end:i,cancel:r}}(r.Gestures)}),r.Gestures.add({name:"drag",events:["drag","dragging"],handler:function(t){var n,e,r,i,o,u,s,a,l,c,h,d;return n=window.devicePixelRatio>=2?15:20,d=null,c=null,h=null,l=null,o=function(t,n){return n.length>=2?(d=t,c=n.length,h=u(n)):void 0},i=function(t,n){var e;return n.length===c?(e=s(n),l={touches:n,delta:e},a(!0)):void 0},e=r=function(){return h&&l?(a(!1),c=null,h=null,l=null):void 0},s=function(t){var n;return n=u(t),{x:n.x-h.x,y:n.y-h.y}},u=function(t){var n,e,r,i,o;for(e=0,r=0,i=0,o=t.length;o>i;i++)n=t[i],e+=parseInt(n.x),r+=parseInt(n.y);return{x:e/t.length,y:r/t.length}},a=function(e){return e?t.trigger(d,"dragging",l):Math.abs(l.delta.x)>n||Math.abs(l.delta.y)>n?t.trigger(d,"drag",l):void 0},{start:o,move:i,end:r}}(r.Gestures)}),r.Gestures.add({name:"pinch",events:["pinch","pinching","pinchIn","pinchOut"],handler:function(t){var n,e,r,i,o,u,s,a,l,c;return n=window.devicePixelRatio>=2?15:20,c=null,l=null,a=null,o=function(t,n){return 2===n.length?(c=t,l=s(n[0],n[1])):void 0},i=function(t,n){var e;return l&&2===n.length?(e=s(n[0],n[1]),a={touches:n,delta:e-l},u(!0)):void 0},e=r=function(){return l&&a?(u(!1),l=null,a=null):void 0},s=function(t,n){return Math.sqrt((n.x-t.x)*(n.x-t.x)+(n.y-t.y)*(n.y-t.y))},u=function(e){var r;return e?t.trigger(c,"pinching",a):Math.abs(a.delta)>n?(t.trigger(c,"pinch",a),r=a.delta>0?"pinchOut":"pinchIn",t.trigger(c,r,a)):void 0},{start:o,move:i,end:r}}(r.Gestures)}),r.Gestures.add({name:"rotation",events:["rotate","rotating","rotateLeft","rotateRight"],handler:function(t){var n,e,r,i,o,u,s,a,l,c,h,d,f;return n=5,e=20,f=null,l=0,d=null,a=null,u=function(t,n){return 2===n.length?(f=t,l=0,d=c(n[0],n[1])):void 0},o=function(t,n){var r;return d&&2===n.length?(r=c(n[0],n[1])-d,a&&Math.abs(a.delta-r)>e&&(r+=360*h(a.delta)),Math.abs(r)>360&&(l++,r-=360*h(a.delta)),a={touches:n,delta:r,rotationsCount:l},s(!0)):void 0},r=i=function(){return d&&a?(s(!1),f=null,l=0,d=null,a=null,d=null):void 0},h=function(t){return 0>t?-1:1},c=function(t,n){var e;return e=Math.atan2(t.y-n.y,t.x-n.x),180*(0>e?e+2*Math.PI:e)/Math.PI},s=function(e){var r;return e?t.trigger(f,"rotating",a):Math.abs(a.delta)>n?(t.trigger(f,"rotate",a),r=a.delta>0?"rotateRight":"rotateLeft",t.trigger(f,r,a)):void 0},{start:u,move:o,end:i}}(r.Gestures)}),r.Gestures.add({name:"swipe",events:["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","swiping","swipingHorizontal","swipingVertical"],handler:function(t){var n,e,r,i,o,u,s,a,l,c,h;return n=Math.round(20/window.devicePixelRatio),h=null,l=null,c=null,a=null,o=function(t,n){return 1===n.length?(h=t,l=n[0],a=null):void 0},i=function(t,n){var e,r;return 1===n.length?(e={x:n[0].x-l.x,y:n[0].y-l.y},r=null===a,a={x:n[0].x,y:n[0].y,delta:e},u(!0,r)):a=null},e=r=function(t,n){var e;return null==a&&n.length>=1&&(e={x:n[0].x-l.x,y:n[0].y-l.y},a={x:n[0].x,y:n[0].y,delta:e}),a?(u(!1),a=null):void 0},u=function(e,r){var i,o,u,l,d;if(null==r&&(r=!1),e)return r&&(c=s(a.delta.x,a.delta.y)),null!==c&&t.trigger(h,"swiping"+c,a),t.trigger(h,"swiping",a);if(o=[],Math.abs(a.delta.y)>n?o.push(a.delta.y<0?"Up":"Down"):Math.abs(a.delta.x)>n&&o.push(a.delta.x<0?"Left":"Right"),o.length){for(t.trigger(h,"swipe",a),d=[],u=0,l=o.length;l>u;u++)i=o[u],d.push(t.trigger(h,"swipe"+i,a));return d}},s=function(t,n){var e;return e=null,Math.round(Math.abs(t/n))>=2?e="Horizontal":Math.round(Math.abs(n/t))>=2&&(e="Vertical"),e},{start:o,move:i,end:r}}(r.Gestures)}),function(t){return t.fn.text=function(t){return null!=t?this.each(function(){return this.textContent=t}):this.length>0?this[0].textContent:""},t.fn.html=function(n){var e;return null!=n?(e=t.toType(n),this.each(function(){return"string"===e?this.innerHTML=n:"array"===e?n.forEach(function(n){return function(e){return t(n).html(e)}}(this)):this.innerHTML+=t(n).html()})):this.length>0?this[0].innerHTML:""},t.fn.remove=function(){return this.each(function(){return null!=this.parentNode?this.parentNode.removeChild(this):void 0})},t.fn.empty=function(){return this.each(function(){return this.innerHTML=null})},t.fn.append=function(n){var e;return e=t.toType(n),this.each(function(){return"string"===e?this.insertAdjacentHTML("beforeend",n):"array"===e?n.forEach(function(n){return function(e){return t(n).append(e)}}(this)):this.appendChild(n)})},t.fn.prepend=function(n){var e;return e=t.toType(n),this.each(function(){return"string"===e?this.insertAdjacentHTML("afterbegin",n):"array"===e?n.each(function(t){return function(n,e){return t.insertBefore(e,t.firstChild)}}(this)):this.insertBefore(n,this.firstChild)})},t.fn.replaceWith=function(n){var e;return e=t.toType(n),this.each(function(){return this.parentNode?"string"===e?this.insertAdjacentHTML("beforeBegin",n):"array"===e?n.each(function(t){return function(n,e){return t.parentNode.insertBefore(e,t)}}(this)):this.parentNode.insertBefore(n,this):void 0}),this.remove()}}(r),function(t){var n,e,i,o;return n="parentNode",t.fn.find=function(n){var e;return e=1===this.length?r.query(this[0],n):this.map(function(){return r.query(this,n)}),t(e)},t.fn.parent=function(t){var r;return r=t?i(this):this.instance(n),e(r,t)},t.fn.children=function(t){var n;return n=this.map(function(){return Array.prototype.slice.call(this.children)}),e(n,t)},t.fn.siblings=function(t){var n;return n=this.map(function(t,n){return Array.prototype.slice.call(n.parentNode.children).filter(function(t){return t!==n})}),e(n,t)},t.fn.get=function(t){return this[t]||null},t.fn.first=function(){return t(this[0])},t.fn.last=function(){return t(this[this.length-1])},t.fn.closest=function(n,e){var r,i;for(i=this[0],r=t(n),r.length||(i=null);i&&r.indexOf(i)<0;)i=i!==e&&i!==document&&i.parentNode;return t(i)},t.fn.next=function(){return o.call(this,"nextSibling")},t.fn.prev=function(){return o.call(this,"previousSibling")},t.fn.instance=function(t){return this.map(function(){return this[t]})},t.fn.map=function(n){return t.map(this,function(t,e){return n.call(t,e,t)})},i=function(n){var e;for(e=[];n.length>0;)n=t.map(n,function(t){return t=t.parentNode,t!==document&&e.indexOf(t)<0?(e.push(t),t):void 0});return e},e=function(n,e){return null!=e?t(n).filter(e):t(n)},o=function(n){var e;for(e=this[0][n];e&&1!==e.nodeType;)e=e[n];return t(e)}}(r),t=this.Atoms={version:"0.07.23",Core:{},Class:{},Atom:{},Molecule:{},Organism:{},Entity:{},$:function(){var t;return t=1<=arguments.length?s.call(arguments,0):[],"undefined"!=typeof $$&&null!==$$?$$.apply(null,t):$.apply(null,t)}},t.Core.Children={"default":{children:[]},chemistry:function(){var t,n,e,r,i,o,u;for(o=this.attributes.children||(null!=(i=this.constructor["default"])?i.children:void 0)||[],u=[],e=0,r=o.length;r>e;e++)n=o[e],u.push(function(){var e;e=[];for(t in n)e.push(this.appendChild(t,n[t]));return e}.call(this));return u},appendChild:function(n,e){var r,i;return null==e&&(e={}),i=n.toClassObject(t),i?this.__available(i)?(null!=i["default"]&&(e=t.Core.Helper.mix(e,i["default"])),e.parent=e.parent||this,r=new i(e),this.children.push(r),e.id&&(this[e.id]=r),r):console.error("Instance "+n+" not available in "+this.constructor.type+"."+this.constructor.base+" #"+this.constructor.name+"."):console.error("Instance "+n+" doesn't exists.")},destroyChildren:function(){var t,n,e,r;for(r=this.children||[],n=0,e=r.length;e>n;n++)t=r[n],"function"==typeof t.destroy&&t.destroy();return this.children=[]},__available:function(t){var n;return n=""+t.type+"."+(t.base||t.name),!this.constructor.available||u.call(this.constructor.available,n)>=0}},t.Core.Constants={ANIMATION:{END:"webkitAnimationEnd MSAnimationEnd animationend"},APPEND:"append",EXCLUDED_IF_KEYS:["class","entity","events","if","parent","children"],ENTITY:{EVENT:{CREATE:"create",UPDATE:"update",DESTROY:"destroy"}}},t.Core.Event={bindings:null,bind:function(t,n){var e,r,i,o,u;for(t=t.split(" "),this.events=this.events||{},u=[],i=0,o=t.length;o>i;i++)e=t[i],e=this._customEventName(e),(r=this.events)[e]||(r[e]=[]),u.push(this.events[e].push(n));return u},unbind:function(t,n){var e;return t=this._customEventName(t),this.hasOwnProperty("events")&&(null!=(e=this.events)?e[t]:void 0)?this.events[t].splice(this.events[t].indexOf(n),1):void 0},trigger:function(){var t,n,e,r,i,o,u;if(n=arguments[0],t=2<=arguments.length?s.call(arguments,1):[],n=this._customEventName(n),e=this.hasOwnProperty("events")&&null!=(o=this.events)?o[n]:void 0){for(t.push(this),u=[],r=0,i=e.length;i>r&&(n=e[r],n.apply(this,t)!==!1);r++)u.push(void 0);return u}},bubble:function(){var t,n,e,r;return n=arguments[0],e=2<=arguments.length?s.call(arguments,1):[],t=!0,1===e.length&&u.call(this.attributes.events||[],n)<0&&(t=!1),t&&null!=(null!=(r=this.parent)?r.uid:void 0)?(e.push(this),this._state(this.parent,n,e,"bubble")):void 0},tunnel:function(){var t,n,e,r,i,o,u,a;if(e=arguments[0],t=2<=arguments.length?s.call(arguments,1):[],(null!=(o=this.children)?o.length:void 0)>0){for(t.push(this),u=this.children,a=[],r=0,i=u.length;i>r;r++)n=u[r],null!=n.uid&&a.push(this._state(n,e,t,"tunnel"));return a}},_customEventName:function(t){var n;return n=this._base(this.constructor),(""+this.constructor.type+":"+n+":"+t).toLowerCase()},_base:function(t){return t.base||t.name},_state:function(t,n,e,r){var i,o,u,s,a,l,c;return null==r&&(r="bubble"),"bubble"===r?(s=null!=(a=this.attributes.events)?a.indexOf(n):void 0,s>-1&&(o=null!=(l=this.attributes.callbacks)?l[s]:void 0,o&&(e[0].eventCustomCallback=o)),o||(o=e[0].eventCustomCallback),o||(u=1===e.length?this.constructor:e[1].constructor,i=this._base(u),u["extends"]&&(i=u.name),o="on"+i.toClassName()+n.toClassName())):"tunnel"===r&&(o=n),e[0].eventType=r,(null!=(c=t[o])?c.apply(t,e):void 0)!==!1?t[r].apply(t,[n].concat(e)):void 0}},t.Core.Helper=function(){var t,n;return n=function(t,n){var e,r;if(e=this._clone(n),null!=e)for(r in t)e[r]="object"==typeof t[r]?this.mix(t[r],e[r]):t[r];else e=t;return e},t=function(t){return"[object Array]"==={}.toString.call(t)},{_clone:function(t){var n,e,r;if(null==t||"object"!=typeof t)return t;if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return n="",null!=t.global&&(n+="g"),null!=t.ignoreCase&&(n+="i"),null!=t.multiline&&(n+="m"),null!=t.sticky&&(n+="y"),new RegExp(t.source,n);r=new t.constructor;for(e in t)r[e]=this._clone(t[e]);return r},mix:n,isArray:t}}(),String.prototype.toClassName=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.toClassObject=function(t){var n,e,r,i;for(e=this.split("."),null==t&&null==window[e[0]]&&(t=window.Atoms),null==t&&(t=window[e[0]]||window.Atoms,e.shift()),r=0,i=e.length;i>r;r++)n=e[r],null!=t&&(t=t[n]);return t},e=["included","extended"],t.Core.Module=function(){function t(){this.uid=i()}return t.extend=function(t){var n,r,i;if(!t)throw new Error("extend(obj) requires obj");for(n in t)r=t[n],u.call(e,n)<0&&(this[n]=r);return null!=(i=t.extended)&&i.apply(this),this},t.include=function(t){var n,r,i;if(!t)throw new Error("include(obj) requires obj");for(r in t)i=t[r],u.call(e,r)<0&&(this.prototype[r]=i);return n=t.included,n&&n.apply(this),this},t.create=function(t,n){var e;return e=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return l(n,t),n}(this),t&&e.include(t),n&&e.extend(n),e},t}(),i=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n,e;return n=16*Math.random()|0,e="x"===t?n:3&n|8,e.toString(16)}).toUpperCase()},t.Core.Output={append:function(){return this.output("append")},prepend:function(){return this.output("prepend")},html:function(){return this.output("html")},output:function(){if(null==this.constructor.template)throw"No template defined.";if(null==this.container)throw"No container assigned.";return this._render(),this.constructor.method=this.attributes.method||t.Core.Constants.APPEND,("string"==typeof this.container||null==this.container.length)&&(this.container=t.$(this.container)),this.container.first()[this.constructor.method](this.el)},refresh:function(t){var n,e,r;null==t&&(t={});for(e in t)r=t[e],this.attributes[e]=r;return n=this.el,this._render(),"function"==typeof this.bindEvents&&this.bindEvents(),n.replaceWith(this.el)},destroy:function(){return this.el.remove()},_render:function(){var n;return this._createIfBindings(),this.el=t.$(o(this.constructor.template)(this.attributes)),n=this.constructor.base||new String,this.el.attr("data-"+this.constructor.type,n.toLowerCase()),this.constructor.name.toLowerCase()!==n.toLowerCase()&&this.el.attr("data-extend",this.constructor.name.toLowerCase()),this.el},_createIfBindings:function(){var n,e;this.attributes["if"]={},e=[];for(n in this.attributes)u.call(t.Core.Constants.EXCLUDED_IF_KEYS,n)<0&&e.push(this.attributes[n]?this.attributes["if"][n]=!0:void 0);return e}},o=function(t){var n,e,r,i;return e=function(t,n){var e,r,i;for(n=1,t=t.replace(/\.\.\//g,function(){return n++,""}),r=["data[data.length - ",n,"]"],i="."===t?[]:t.split("."),e=0;e<i.length;)r.push("."+i[e]),e++;return r.join("")},i=function(t){return t.replace(/\{\{(!|&|\{)?\s*(.*?)\s*}}+/g,function(t,n,i){var o;return"!"===n?"":(o=r++,['"; var o',o," = ",e(i),", s",o," = (((typeof(o",o,') == "function" ? o',o,".call(data[data.length - 1]) : o",o,') || "") + ""); s += ',n?"s"+o:'(/[&"><]/.test(s'+o+") ? s"+o+'.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/>/g,"&gt;").replace(/</g,"&lt;") : s'+o+")",' + "'].join(""))})},n=function(t){return i(t.replace(/\{\{(\^|#)(.*?)}}(.*?)\{\{\/\2}}/g,function(t,i,o,u){var s;return s=r++,['"; var o',s," = ",e(o),"; ",("^"===i?["if ((o",s," instanceof Array) ? !o",s,".length : !o",s,') { s += "',n(u),'"; } ']:["if (typeof(o",s,') == "boolean" && o',s,') { s += "',n(u),'"; } else if (o',s,") { for (var i",s," = 0; i",s," < o",s,".length; i",s,"++) { data.push(o",s,"[i",s,']); s += "',n(u),'"; data.pop(); }}']).join(""),'; s += "'].join("")}))},r=0,new Function("data",'data = [data], s = "'+n(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"))+'"; return s;')},t.Core.Scaffold={scaffold:function(){var t,n,e;return this.parent={},null!=(null!=(t=this.attributes)?t.parent:void 0)&&(this.parent=this.attributes.parent,delete this.attributes.parent),this.container=this.attributes.container||this.parent.el||document.body,null!=(null!=(n=this.attributes)?n.container:void 0)&&delete this.attributes.container,null!=(null!=(e=this.attributes)?e.entity:void 0)?(this.entity=this.attributes.entity,delete this.attributes.entity):void 0}},t.Url=function(){var n,e,r,i,o,u,a,l,c;return c={attributes:/:([\w\d]+)/g,splat:/\*([\w\d]+)/g,escape:/[-[\]{}()+?.,\\^$|#\s]/g,hash:/^#*/},a={path:null,forward:!0,absolute:!1,routes:{}},l=function(){var t,n,i;return t=1<=arguments.length?s.call(arguments,0):[],t.length>0?(a.forward=!0,n="/"+t.join("/"),n!==a.path?(a.absolute||(n="#"+n),i=window.history.state||null,window.history.pushState(i,document.title,n.toLowerCase()),u()):void 0):a.absolute?r():e()},n=function(){var t;return a.forward=!1,t=null!=window.history.state.steps?window.history.state.steps:1,window.history.go(-t)},i=function(t,n){var e,r;for(e=["url"],c.attributes.lastIndex=0;null!==(r=c.attributes.exec(t));)e.push(r[1]);for(c.splat.lastIndex=0;null!==(r=c.splat.exec(t));)e.push(r[1]);return t=t.replace(c.escape,"\\$&").replace(c.attributes,"([^/]*)").replace(c.splat,"(.*?)"),a.routes[t]={attributes:e,callback:n,regexp:new RegExp("^"+t+"$")}},u=function(t){var n;return t&&t.preventDefault(),n=a.absolute?r():e(),n!==a.path?(a.path=n,o(n)):void 0},r=function(){var t;return t=window.location.pathname,"/"!==t.substr(0,1)&&(t="/#{path}"),t},e=function(){return window.location.hash.replace(c.hash,"")},o=function(t){var n,e,r,i,o,u,s,l,c,h,d;d=[];for(i in a.routes){if(u=a.routes[i],e=u.regexp.exec(t)){for(o={},c=u.attributes,r=s=0,l=c.length;l>s;r=++s)n=c[r],o[n]=e[r];null!=(h=u.callback)&&h.call(this,o);break}d.push(void 0)}return d},function(){return t.$(window).on("popstate",u)}(),{path:l,back:n,listen:i,options:a}}(t),n={touch:"click",doubleTap:"dblClick"},t.Class.Atom=function(e){function r(n){var e,i,o;this.attributes=n,this.bindEntityDestroy=c(this.bindEntityDestroy,this),this.bindEntityUpdate=c(this.bindEntityUpdate,this),r.__super__.constructor.apply(this,arguments),this.attributes=t.Core.Helper.mix(this.attributes,this.constructor["default"]),this.scaffold(),this.entity&&(n=("function"==typeof(o=this.entity).parse?o.parse():void 0)||this.entity.attributes(),this.attributes=t.Core.Helper.mix(this.attributes,n),i=this.entity.className.toClassObject(__.Entity),i&&(e=t.Core.Constants.ENTITY.EVENT,this.attributes.bind.update&&i.bind(e.UPDATE,this.bindEntityUpdate),this.attributes.bind.destroy&&i.bind(e.DESTROY,this.bindEntityDestroy))),this.output(),this.bindEvents()}return l(r,e),r.include(t.Core.Scaffold),r.include(t.Core.Event),r.include(t.Core.Output),r.type="Atom",r["default"]={},r.prototype.bindEntityUpdate=function(t){var n,e,r;if(t.uid===this.entity.uid){e=("function"==typeof(r=this.entity).parse?r.parse():void 0)||this.entity.attributes();for(n in e)this.attributes[n]=e[n];return this.refresh()}},r.prototype.bindEntityDestroy=function(t){return t.uid===this.entity.uid?this.destroy():void 0},r.prototype.bindEvents=function(){var t,e,r,i,o,u;if(this.attributes.events){for(o=this.attributes.events,u=[],r=0,i=o.length;i>r;r++)t=o[r],("undefined"==typeof $$||null===$$)&&(e=n[t]),u.push(this.el.on(e||t,function(t){return function(n){return function(e){return t.el[0].disabled!==!0?t.bubble(n,e):void 0}}}(this)(t)));return u}},r}(t.Core.Module),t.Class.Entity=function(n){function e(t){e.__super__.constructor.apply(this,arguments),this.constructor.constructor.type="Entity",this.constructor.constructor.base=this.constructor.name,this.className=this.constructor.name,t&&this.load(t)}return l(e,n),e.extend(t.Core.Event),e.records={},e.attributes=[],e.fields=function(){var t;return t=1<=arguments.length?s.call(arguments,0):[],this.records={},this.attributes=t||[],this.unbind(),this},e.create=function(t){var n;return n=new this(t),n.save()},e.exists=function(t){return this.find(t)},e.find=function(t){var n;return n=this.records[t],(null!=n?n.clone():void 0)||null},e.findBy=function(t,n){var e,r,i;i=this.records;for(r in i)if(e=i[r],e[t]===n)return e.clone();return null},e.select=function(t){var n,e;return this.cloneArray(function(){var r,i;r=this.records,i=[];for(e in r)n=r[e],t(n)&&i.push(n);return i}.call(this))},e.each=function(t){var n,e,r,i;r=this.records,i=[];for(n in r)e=r[n],i.push(t(e.clone()));return i},e.all=function(){return this.cloneArray(this.recordsValues())},e.count=function(){return this.recordsValues().length},e.cloneArray=function(t){var n,e,r,i;for(i=[],e=0,r=t.length;r>e;e++)n=t[e],i.push(n.clone());return i},e.recordsValues=function(){var t,n,e,r;n=[],r=this.records;for(t in r)e=r[t],n.push(e);return n},e.destroyAll=function(){var t,n,e;e=this.records;for(n in e)t=e[n],t.destroy();return this.records={}},e.prototype.isNew=function(){return!this.exists()},e.prototype.exists=function(){return this.uid&&this.uid in this.constructor.records},e.prototype.load=function(t){var n,e;for(n in t)e=t[n],"function"==typeof this[n]?this[n](e):this[n]=e;return this},e.prototype.attributes=function(){var t,n,e,r,i;for(n={},i=this.constructor.attributes,e=0,r=i.length;r>e;e++)t=i[e],t in this&&(n[t]="function"==typeof this[t]?this[t]():this[t]);
return n},e.prototype.equal=function(t){return!((null!=t?t.constructor:void 0)!==this.constructor||t.uid!==this.uid)},e.prototype.save=function(){var t,n;return null!=this.validate&&(t=this.validate()),t?this.trigger("error",t):(n=this.isNew()?this.create():this.update(),this.trigger("save"),n)},e.prototype.updateAttributes=function(t){return this.load(t),this.save()},e.prototype.create=function(){var t;return t=new this.constructor(this.attributes()),t.uid=this.uid,this.constructor.records[this.uid]=t,this.trigger("create"),this.trigger("change"),t.clone()},e.prototype.update=function(){var t;return t=this.constructor.records,t[this.uid].load(this.attributes()),this.trigger("update"),this.trigger("change"),t[this.uid].clone()},e.prototype.destroy=function(){return delete this.constructor.records[this.uid],this.trigger("destroy"),this.trigger("change"),this.unbind()},e.prototype.clone=function(){return Object.create(this)},e.prototype.unbind=function(){return this.trigger("unbind")},e.prototype.trigger=function(){var t,n;return t=1<=arguments.length?s.call(arguments,0):[],t.splice(1,0,this),(n=this.constructor).trigger.apply(n,t)},e}(t.Core.Module),"function"!=typeof Object.create&&(Object.create=function(t){var n;return n=function(){},n.prototype=t,new n}),t.Class.Molecule=function(n){function e(t){var n;this.attributes=t,this._addAtomEntity=c(this._addAtomEntity,this),e.__super__.constructor.apply(this,arguments),this.children=[],this._records=[],this.scaffold(),this.output(),this.chemistry(),null!=(null!=(n=this.attributes.bind)?n.entity:void 0)&&null!=this.attributes.bind.atom&&this.attributes.bind.create&&this._bindEntity()}return l(e,n),e.include(t.Core.Scaffold),e.include(t.Core.Children),e.include(t.Core.Event),e.include(t.Core.Output),e.type="Molecule",e.prototype.entity=function(t,n){var e,r,i,o,u;if(null==n&&(n=!1),n||this.destroyChildren(),null!=(null!=(o=this.attributes.bind)?o.entity:void 0)&&null!=this.attributes.bind.atom){for(u=[],r=0,i=t.length;i>r;r++)e=t[r],u.push(this._addAtomEntity(e,this.attributes.bind));return u}},e.prototype.destroyChildren=function(){var t,n,e,r;for(r=this.children||[],n=0,e=r.length;e>n;n++)t=r[n],"function"==typeof t.destroy&&t.destroy();return this.children=[],this._records=[]},e.prototype._addAtomEntity=function(n,e,r){var i,o,u,s,a,l,c;for(null==r&&(r=!0),o={entity:n,bind:{update:e.update,destroy:e.destroy}},l=["events","callbacks"],s=0,a=l.length;a>s;s++)u=l[s],null!=this.attributes.bind[u]&&(o[u]=this.attributes.bind[u]);return o=t.Core.Helper.mix(o,null!=(c=this["default"].children)?c[this.attributes.entityAtom]:void 0),i=this.appendChild(""+this.attributes.bind.atom,o),r&&this._records.push(i),i},e.prototype._bindEntity=function(){var n;return n=this.attributes.bind.entity.toClassObject(),null!=n?(new n,n.bind(t.Core.Constants.ENTITY.EVENT.CREATE,function(t){return function(n){return t._addAtomEntity(n,t.attributes.bind)}}(this)),n.bind(t.Core.Constants.ENTITY.EVENT.DESTROY,function(t){return function(n){var e,r,i,o,u,s;for(u=t._records,s=[],e=i=0,o=u.length;o>i;e=++i)if(r=u[e],r.entity.uid===n.uid){t._records.splice(e,1);break}return s}}(this))):void 0},e}(t.Core.Module),t.Class.Organism=function(n){function e(n,i){this.attributes=n,e.__super__.constructor.apply(this,arguments),this.children=[],i&&(r=this.constructor.requestJSON(i)),this.attributes=t.Core.Helper.mix(this.attributes,r),r=void 0}var r;return l(e,n),e.include(t.Core.Scaffold),e.include(t.Core.Children),e.include(t.Core.Event),e.include(t.Core.Output),e.type="Organism",r=void 0,e.scaffold=function(t){return r=this.requestJSON(t)},e.requestJSON=function(t){var n,e;return n="undefined"!=typeof $$&&null!==$$?$$:$,e=n.ajax({url:t,async:!1,dataType:"text",error:function(){throw"Error loading scaffold in "+t}}),JSON.parse(e.responseText)},e.prototype.render=function(){return this.scaffold(),this.output(),this.chemistry()},e}(t.Core.Module)}).call(this);