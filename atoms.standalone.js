/**
 * atoms - Atomic & Reactive Development for Modern WebApps.
 * @version v0.10.7
 * @link    http://atoms.tapquo.com
 * @author  Tapquo S.L. (http://tapquo.com)
 * @license MIT
 */
(function(){"use strict";var t,e,n,r,i,s=[].slice,o=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},u={}.hasOwnProperty,a=function(t,e){function n(){this.constructor=t}for(var r in e)u.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},l=function(t,e){return function(){return t.apply(e,arguments)}};t=this.Atoms={version:"0.10.2",Device:{},Core:{},Class:{},Atom:{},Molecule:{},Organism:{},Entity:{},$:function(){var t;return t=1<=arguments.length?s.call(arguments,0):[],"undefined"!=typeof $$&&null!==$$?$$.apply(null,t):$.apply(null,t)}},t.$(function(){var e,n,r,i,s;e={ios:/ipad|iphone|ipod/i,android:/android/i,blackberry:/blackberry|bb10/i,webos:/webos/i,windows_phone:/windows phone/i,firefox_os:/(Mozilla).*Mobile[^\/]*\/([\d\.]*)/},s=navigator.userAgent.toLowerCase(),t.Device.os=void 0;for(i in e)if(n=e[i],n.test(s)===!0){t.Device.os=i,t.$(document.body).attr("data-os",i);break}return r=function(){var e,n,r;return r=window.innerWidth,e=window.innerHeight,n=e>r&&480>r||r>e&&480>e?"small":"normal",t.Device.width=r,t.Device.height=e,t.Device.screen=n,t.$(document.body).attr("data-screen",n)},r(),t.$(window).on("resize",r),t.$(window).on("orientationchange",r)}),t.Core.Children={"default":{children:[]},chemistry:function(){var t,e,n,r,i,s,o;for(s=this.attributes.children||(null!=(i=this.constructor["default"])?i.children:void 0)||[],o=[],n=0,r=s.length;r>n;n++)e=s[n],o.push(function(){var n;n=[];for(t in e)n.push(this.appendChild(t,e[t]));return n}.call(this));return o},appendChild:function(e,n){var r,i;return null==n&&(n={}),i=e.toClassObject(t),i?this.__available(i)?(null!=i["default"]&&(n=t.Core.Helper.mix(n,i["default"])),n.parent=n.parent||this,r=new i(n),this.children.push(r),n.id&&(this[n.id]=r),r):console.error("Instance "+e+" not available in "+this.constructor.type+"."+this.constructor.base+" #"+this.constructor.name+"."):console.error("Instance "+e+" doesn't exists.")},destroyChildren:function(){var t,e,n,r;for(r=this.children||[],e=0,n=r.length;n>e;e++)t=r[e],"function"==typeof t.destroy&&t.destroy();return this.children=[]},__available:function(t){var e;return e=""+t.type+"."+(t.base||t.name),!this.constructor.available||o.call(this.constructor.available,e)>=0}},t.Core.Constants={ANIMATION:{END:"webkitAnimationEnd MSAnimationEnd animationend"},APPEND:"append",EXCLUDED_IF_KEYS:["class","entity","events","if","parent","children"],ENTITY:{EVENT:{CREATE:"create",UPDATE:"update",DESTROY:"destroy"}}},t.Core.Event={bindings:null,bind:function(t,e){var n,r,i,s,o;for(t=t.split(" "),this.events=this.events||{},o=[],i=0,s=t.length;s>i;i++)n=t[i],n=this._customEventName(n),(r=this.events)[n]||(r[n]=[]),o.push(this.events[n].push(e));return o},unbind:function(t,e){var n;return t=this._customEventName(t),this.hasOwnProperty("events")&&(null!=(n=this.events)?n[t]:void 0)?this.events[t].splice(this.events[t].indexOf(e),1):void 0},trigger:function(){var t,e,n,r,i,o,u;if(e=arguments[0],t=2<=arguments.length?s.call(arguments,1):[],e=this._customEventName(e),n=this.hasOwnProperty("events")&&null!=(o=this.events)?o[e]:void 0){for(t.push(this),u=[],r=0,i=n.length;i>r&&(e=n[r],e.apply(this,t)!==!1);r++)u.push(void 0);return u}},bubble:function(){var t,e,n,r;return e=arguments[0],n=2<=arguments.length?s.call(arguments,1):[],t=!0,1===n.length&&o.call(this.attributes.events||[],e)<0&&(t=!1),t&&null!=(null!=(r=this.parent)?r.uid:void 0)?(n.push(this),this._state(this.parent,e,n,"bubble")):void 0},tunnel:function(){var t,e,n,r,i,o,u,a;if(n=arguments[0],t=2<=arguments.length?s.call(arguments,1):[],(null!=(o=this.children)?o.length:void 0)>0){for(t.push(this),u=this.children,a=[],r=0,i=u.length;i>r;r++)e=u[r],null!=e.uid&&a.push(this._state(e,n,t,"tunnel"));return a}},handleInputEvent:function(){var t,n,r,i,s,o;for(s=this.attributes.events,o=[],r=0,i=s.length;i>r;r++)t=s[r],("undefined"==typeof $$||null===$$)&&(n=e[t]),o.push(this.el.on(n||t,function(t){return function(e){return function(n){return t.el[0].disabled!==!0?t.bubble(e,n):void 0}}}(this)(t)));return o},_customEventName:function(t){var e;return e=this._base(this.constructor),(""+this.constructor.type+":"+e+":"+t).toLowerCase()},_base:function(t){return t.base||t.name},_state:function(t,e,n,r){var i,s,o,u,a,l,c;return null==r&&(r="bubble"),"bubble"===r?(u=null!=(a=this.attributes.events)?a.indexOf(e):void 0,u>-1&&(s=null!=(l=this.attributes.callbacks)?l[u]:void 0,s&&(n[0].eventCustomCallback=s)),s||(s=n[0].eventCustomCallback),s||(o=1===n.length?this.constructor:n[1].constructor,i=this._base(o),o["extends"]&&(i=o.name),s="on"+i.toClassName()+e.toClassName())):"tunnel"===r&&(s=e),n[0].eventType=r,(null!=(c=t[s])?c.apply(t,n):void 0)!==!1?t[r].apply(t,[e].concat(n)):void 0}},t.Core.Helper=function(){var t,e;return e=function(t,e){var n,r;if(n=this._clone(e),null!=n)for(r in t)n[r]="object"==typeof t[r]?this.mix(t[r],n[r]):t[r];else n=t;return n},t=function(t){return"[object Array]"==={}.toString.call(t)},{_clone:function(t){var e,n,r;if(null==t||"object"!=typeof t)return t;if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return e="",null!=t.global&&(e+="g"),null!=t.ignoreCase&&(e+="i"),null!=t.multiline&&(e+="m"),null!=t.sticky&&(e+="y"),new RegExp(t.source,e);r=new t.constructor;for(n in t)r[n]=this._clone(t[n]);return r},mix:e,isArray:t}}(),String.prototype.toClassName=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.toClassObject=function(t){var e,n,r,i;for(n=this.split("."),null==t&&null==window[n[0]]&&(t=window.Atoms),null==t&&(t=window[n[0]]||window.Atoms,n.shift()),r=0,i=n.length;i>r;r++)e=n[r],null!=t&&(t=t[e]);return t},n=["included","extended"],t.Core.Module=function(){function t(){this.uid=r()}return t.extend=function(t){var e,r,i;if(!t)throw new Error("extend(obj) requires obj");for(e in t)r=t[e],o.call(n,e)<0&&(this[e]=r);return null!=(i=t.extended)&&i.apply(this),this},t.include=function(t){var e,r,i;if(!t)throw new Error("include(obj) requires obj");for(r in t)i=t[r],o.call(n,r)<0&&(this.prototype[r]=i);return e=t.included,e&&e.apply(this),this},t.create=function(t,e){var n;return n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return a(e,t),e}(this),t&&n.include(t),e&&n.extend(e),n},t}(),r=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e,n;return e=16*Math.random()|0,n="x"===t?e:3&e|8,n.toString(16)}).toUpperCase()},t.Core.Output={append:function(){return this.output("append")},prepend:function(){return this.output("prepend")},html:function(){return this.output("html")},output:function(){if(null==this.constructor.template)throw"No template defined.";if(null==this.container)throw"No container assigned.";return this._render(),this.constructor.method=this.attributes.method||t.Core.Constants.APPEND,("string"==typeof this.container||null==this.container.length)&&(this.container=t.$(this.container)),this.container.first()[this.constructor.method](this.el)},refresh:function(t){var e,n,r;null==t&&(t={});for(n in t)r=t[n],this.attributes[n]=r;return e=this.el,this._render(),"function"==typeof this.bindEvents&&this.bindEvents(),"function"==typeof this.chemistry&&this.chemistry(),e.replaceWith(this.el)},destroy:function(){var t,e;return this.el.remove(),null!=this.entity&&(null!=(e=this.attributes.bind)?e.destroy:void 0)?this.entity.destroy(t=!1):void 0},_render:function(){var e,n,r,s;return this._createIfBindings(),this.el=t.$(i(this.constructor.template)(this.attributes)),e=this.constructor.base.toLowerCase()||new String,n=this.constructor.name.toLowerCase(),r=("data-"+this.constructor.type+"-"+e).toLowerCase(),s=n!==e?n:"",this.el.attr(r,s),this.el},_createIfBindings:function(){var e,n;this.attributes["if"]={},n=[];for(e in this.attributes)o.call(t.Core.Constants.EXCLUDED_IF_KEYS,e)<0&&n.push(this.attributes[e]?this.attributes["if"][e]=!0:void 0);return n}},i=function(t){var e,n,r,i;return n=function(t,e){var n,r,i;for(e=1,t=t.replace(/\.\.\//g,function(){return e++,""}),r=["data[data.length - ",e,"]"],i="."===t?[]:t.split("."),n=0;n<i.length;)r.push("."+i[n]),n++;return r.join("")},i=function(t){return t.replace(/\{\{(!|&|\{)?\s*(.*?)\s*}}+/g,function(t,e,i){var s;return"!"===e?"":(s=r++,['"; var o',s," = ",n(i),", s",s," = (((typeof(o",s,') == "function" ? o',s,".call(data[data.length - 1]) : o",s,') || "") + ""); s += ',e?"s"+s:'(/[&"><]/.test(s'+s+") ? s"+s+'.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/>/g,"&gt;").replace(/</g,"&lt;") : s'+s+")",' + "'].join(""))})},e=function(t){return i(t.replace(/\{\{(\^|#)(.*?)}}(.*?)\{\{\/\2}}/g,function(t,i,s,o){var u;return u=r++,['"; var o',u," = ",n(s),"; ",("^"===i?["if ((o",u," instanceof Array) ? !o",u,".length : !o",u,') { s += "',e(o),'"; } ']:["if (typeof(o",u,') == "boolean" && o',u,') { s += "',e(o),'"; } else if (o',u,") { for (var i",u," = 0; i",u," < o",u,".length; i",u,"++) { data.push(o",u,"[i",u,']); s += "',e(o),'"; data.pop(); }}']).join(""),'; s += "'].join("")}))},r=0,new Function("data",'data = [data], s = "'+e(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"))+'"; return s;')},t.Core.Scaffold={scaffold:function(){var e,n,r;return this.attributes=t.Core.Helper.mix(this.attributes,this.constructor["default"]),this.parent={},null!=(null!=(e=this.attributes)?e.parent:void 0)&&(this.parent=this.attributes.parent,delete this.attributes.parent),this.container=this.attributes.container||this.parent.el||document.body,null!=(null!=(n=this.attributes)?n.container:void 0)&&delete this.attributes.container,null!=(null!=(r=this.attributes)?r.entity:void 0)?(this.entity=this.attributes.entity,delete this.attributes.entity):void 0}},t.Url=function(){var e,n,r,i,o,u,a,l,c;return c={attributes:/:([\w\d]+)/g,splat:/\*([\w\d]+)/g,escape:/[-[\]{}()+?.,\\^$|#\s]/g,hash:/^#*/},a={path:null,forward:!0,absolute:!1,routes:{}},l=function(){var t,e,i;return t=1<=arguments.length?s.call(arguments,0):[],t.length>0?(a.forward=!0,e="/"+t.join("/"),e!==a.path?(a.absolute||(e="#"+e),i=window.history.state||null,window.history.pushState(i,document.title,e.toLowerCase()),u()):void 0):a.absolute?r():n()},e=function(){var t;return a.forward=!1,t=null!=window.history.state.steps?window.history.state.steps:1,window.history.go(-t)},i=function(t,e){var n,r;for(n=["url"],c.attributes.lastIndex=0;null!==(r=c.attributes.exec(t));)n.push(r[1]);for(c.splat.lastIndex=0;null!==(r=c.splat.exec(t));)n.push(r[1]);return t=t.replace(c.escape,"\\$&").replace(c.attributes,"([^/]*)").replace(c.splat,"(.*?)"),a.routes[t]={attributes:n,callback:e,regexp:new RegExp("^"+t+"$")}},u=function(t){var e;return t&&t.preventDefault(),e=a.absolute?r():n(),e!==a.path?(a.path=e,o(e)):void 0},r=function(){var t;return t=window.location.pathname,"/"!==t.substr(0,1)&&(t="/#{path}"),t},n=function(){return window.location.hash.replace(c.hash,"")},o=function(t){var e,n,r,i,s,o,u,l,c,h,d;d=[];for(i in a.routes){if(o=a.routes[i],n=o.regexp.exec(t)){for(s={},c=o.attributes,r=u=0,l=c.length;l>u;r=++u)e=c[r],s[e]=n[r];null!=(h=o.callback)&&h.call(this,s);break}d.push(void 0)}return d},function(){return t.$(window).on("popstate",u)}(),{path:l,back:e,listen:i,options:a}}(t),e={touch:"click",doubleTap:"dblClick"},t.Class.Atom=function(e){function n(e){var r,i,s,o;this.attributes=e,this.bindEntityDestroy=l(this.bindEntityDestroy,this),this.bindEntityUpdate=l(this.bindEntityUpdate,this),n.__super__.constructor.apply(this,arguments),this.scaffold(),this.entity&&(e=("function"==typeof(o=this.entity).parse?o.parse():void 0)||this.entity.attributes(),this.attributes=t.Core.Helper.mix(this.attributes,e),i=null!=t.Entity[this.entity.className]?t.Entity:__.Entity,s=this.entity.className.toClassObject(i),s&&(r=t.Core.Constants.ENTITY.EVENT,this.attributes.bind.update&&s.bind(r.UPDATE,this.bindEntityUpdate),this.attributes.bind.destroy&&s.bind(r.DESTROY,this.bindEntityDestroy))),this.output(),this.bindEvents()}return a(n,e),n.include(t.Core.Scaffold),n.include(t.Core.Event),n.include(t.Core.Output),n.type="Atom",n["default"]={},n.prototype.bindEntityUpdate=function(t){var e,n,r,i,s;if(t.uid===this.entity.uid){s=t.attributes();for(e in s)r=s[e],this.entity[e]=r;n=("function"==typeof(i=this.entity).parse?i.parse():void 0)||this.entity.attributes();for(e in n)this.attributes[e]=n[e];return this.refresh()}},n.prototype.bindEntityDestroy=function(t){return t.uid===this.entity.uid?this.destroy():void 0},n.prototype.bindEvents=function(){return this.attributes.events?this.handleInputEvent():void 0},n}(t.Core.Module),t.Class.Entity=function(e){function n(t){n.__super__.constructor.apply(this,arguments),this.constructor.constructor.type="Entity",this.constructor.constructor.base=this.constructor.name,this.className=this.constructor.name,t&&this.load(t)}return a(n,e),n.extend(t.Core.Event),n.records={},n.attributes=[],n.fields=function(){var t;return t=1<=arguments.length?s.call(arguments,0):[],this.records={},this.attributes=t||[],this},n.create=function(t){var e;return e=new this(t),e.save()},n.exists=function(t){return this.find(t)},n.find=function(t){var e;return e=this.records[t],(null!=e?e.clone():void 0)||null},n.findBy=function(t,e){var n,r,i;i=this.records;for(r in i)if(n=i[r],n[t]===e)return n.clone();return null},n.select=function(t){var e,n;return this.cloneArray(function(){var r,i;r=this.records,i=[];for(n in r)e=r[n],t(e)&&i.push(e);return i}.call(this))},n.each=function(t){var e,n,r,i;r=this.records,i=[];for(e in r)n=r[e],i.push(t(n.clone()));return i},n.all=function(){return this.cloneArray(this.recordsValues())},n.count=function(){return this.recordsValues().length},n.cloneArray=function(t){var e,n,r,i;for(i=[],n=0,r=t.length;r>n;n++)e=t[n],i.push(e.clone());return i},n.recordsValues=function(){var t,e,n,r;e=[],r=this.records;for(t in r)n=r[t],e.push(n);return e},n.destroyAll=function(){var t,e,n;n=this.records;for(e in n)t=n[e],t.destroy();return this.records={}},n.prototype.isNew=function(){return!this.exists()},n.prototype.exists=function(){return this.uid&&this.uid in this.constructor.records},n.prototype.load=function(t){var e,n;for(e in t)n=t[e],"function"==typeof this[e]?this[e](n):this[e]=n;return this},n.prototype.attributes=function(){var t,e,n,r,i;for(e={},i=this.constructor.attributes,n=0,r=i.length;r>n;n++)t=i[n],t in this&&(e[t]="function"==typeof this[t]?this[t]():this[t]);return e},n.prototype.equal=function(t){return!((null!=t?t.constructor:void 0)!==this.constructor||t.uid!==this.uid)},n.prototype.save=function(){var t,e;return null!=this.validate&&(t=this.validate()),t?this.trigger("error",t):e=this.isNew()?this.create():this.update()},n.prototype.updateAttributes=function(t){return this.load(t),this.save()},n.prototype.create=function(){var t;return t=new this.constructor(this.attributes()),t.uid=this.uid,this.constructor.records[this.uid]=t,this.trigger("create"),this.trigger("change"),t.clone()},n.prototype.update=function(){var t;return t=this.constructor.records,t[this.uid].load(this.attributes()),this.trigger("update"),this.trigger("change"),t[this.uid].clone()},n.prototype.destroy=function(t){return null==t&&(t=!0),delete this.constructor.records[this.uid],t?(this.trigger("destroy"),this.trigger("change")):void 0},n.prototype.clone=function(){return Object.create(this)},n.prototype.trigger=function(){var t,e;return t=1<=arguments.length?s.call(arguments,0):[],t.splice(1,0,this.clone()),(e=this.constructor).trigger.apply(e,t)},n}(t.Core.Module),"function"!=typeof Object.create&&(Object.create=function(t){var e;return e=function(){},e.prototype=t,new e}),t.Class.Molecule=function(e){function n(t){var e;this.attributes=t,this._addAtomEntity=l(this._addAtomEntity,this),n.__super__.constructor.apply(this,arguments),this.children=[],this._records=[],this.scaffold(),this.output(),this.chemistry(),null!=(null!=(e=this.attributes.bind)?e.entity:void 0)&&null!=this.attributes.bind.atom&&this.attributes.bind.create&&this._bindEntity()}return a(n,e),n.include(t.Core.Scaffold),n.include(t.Core.Children),n.include(t.Core.Event),n.include(t.Core.Output),n.type="Molecule",n.prototype.entity=function(t,e){var n,r,i,s,o;if(null==e&&(e=!1),e||this.destroyChildren(),null!=(null!=(s=this.attributes.bind)?s.entity:void 0)&&null!=this.attributes.bind.atom){for(o=[],r=0,i=t.length;i>r;r++)n=t[r],o.push(this._addAtomEntity(n,this.attributes.bind));return o}},n.prototype.destroyChildren=function(){var t,e,n,r;for(r=this.children||[],e=0,n=r.length;n>e;e++)t=r[e],"function"==typeof t.destroy&&t.destroy();return this.children=[],this._records=[]},n.prototype._addAtomEntity=function(e,n,r){var i,s,o,u,a,l,c;for(null==r&&(r=!0),s={entity:e,bind:{update:n.update,destroy:n.destroy}},l=["events","callbacks"],u=0,a=l.length;a>u;u++)o=l[u],null!=this.attributes.bind[o]&&(s[o]=this.attributes.bind[o]);return s=t.Core.Helper.mix(s,null!=(c=this["default"].children)?c[this.attributes.entityAtom]:void 0),i=this.appendChild(""+this.attributes.bind.atom,s),r&&this._records.push(i),i},n.prototype._bindEntity=function(){var e;return e=this.attributes.bind.entity.toClassObject(),null!=e?(new e,e.bind(t.Core.Constants.ENTITY.EVENT.CREATE,function(t){return function(e){return t._addAtomEntity(e,t.attributes.bind)}}(this)),e.bind(t.Core.Constants.ENTITY.EVENT.DESTROY,function(t){return function(e){var n,r,i,s,o,u;for(o=t._records,u=[],n=i=0,s=o.length;s>i;n=++i)if(r=o[n],r.entity.uid===e.uid){t._records.splice(n,1);break}return u}}(this))):void 0},n}(t.Core.Module),t.Class.Organism=function(e){function n(e,r){var i,s;this.attributes=e,null==r&&(r=this.constructor.url),n.__super__.constructor.apply(this,arguments),this.children=[],r&&(i="undefined"!=typeof $$&&null!==$$?$$:$,s=i.ajax({url:r,async:!1,dataType:"text",error:function(){throw"Error loading scaffold in "+r}}),200===s.status&&(s=JSON.parse(s.responseText),this.attributes=t.Core.Helper.mix(this.attributes,s)))}return a(n,e),n.include(t.Core.Scaffold),n.include(t.Core.Children),n.include(t.Core.Event),n.include(t.Core.Output),n.type="Organism",n.scaffold=function(t){return this.url=t,this},n.prototype.render=function(){return this.scaffold(),this.output(),this.chemistry()},n}(t.Core.Module)}).call(this);