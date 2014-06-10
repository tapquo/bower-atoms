/* atoms v0.06.10
   http://atoms.tapquo.com
   Copyright (c) 2014 Tapquo S.L. - Licensed MIT */
(function(){var a,b,c,d,e,f=[].slice,g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},h={}.hasOwnProperty,i=function(a,b){function c(){this.constructor=a}for(var d in b)h.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},j=function(a,b){return function(){return a.apply(b,arguments)}};a=this.Atoms={version:"0.06.10",Core:{},Class:{},Atom:{},Molecule:{},Organism:{},Entity:{},$:function(){var a;return a=1<=arguments.length?f.call(arguments,0):[],"undefined"!=typeof $$&&null!==$$?$$.apply(null,a):$.apply(null,a)}},a.Core.Children={"default":{children:[]},chemistry:function(){var a,b,c,d,e,f,g;for(f=this.attributes.children||(null!=(e=this.constructor["default"])?e.children:void 0)||[],g=[],c=0,d=f.length;d>c;c++)b=f[c],g.push(function(){var c;c=[];for(a in b)c.push(this.appendChild(a,b[a]));return c}.call(this));return g},appendChild:function(b,c){var d,e;return null==c&&(c={}),e=b.toClassObject(a),e?this.__available(e)?(null!=e["default"]&&(c=a.Core.Helper.mix(c,e["default"])),c.parent=c.parent||this,d=new e(c),this.children.push(d),c.id&&(this[c.id]=d),d):console.error("Instance "+b+" not available in "+this.constructor.type+"."+this.constructor.base+" #"+this.constructor.name+"."):console.error("Instance "+b+" doesn't exists.")},destroyChildren:function(){var a,b,c,d;for(d=this.children||[],b=0,c=d.length;c>b;b++)a=d[b],"function"==typeof a.destroy&&a.destroy();return this.children=[]},__available:function(a){var b;return b=""+a.type+"."+(a.base||a.name),!this.constructor.available||g.call(this.constructor.available,b)>=0}},a.Core.Constants={ANIMATION:{END:"webkitAnimationEnd MSAnimationEnd animationend"},APPEND:"append",EXCLUDED_IF_KEYS:["class","entity","events","if","parent","children"],ENTITY:{EVENT:{CREATE:"create",UPDATE:"update",DESTROY:"destroy"}}},a.Core.Event={bindings:null,bind:function(a,b){var c,d,e,f,g;for(a=a.split(" "),this.events=this.events||{},g=[],e=0,f=a.length;f>e;e++)c=a[e],c=this._customEventName(c),(d=this.events)[c]||(d[c]=[]),g.push(this.events[c].push(b));return g},unbind:function(a,b){var c;return a=this._customEventName(a),this.hasOwnProperty("events")&&(null!=(c=this.events)?c[a]:void 0)?this.events[a].splice(this.events[a].indexOf(b),1):void 0},trigger:function(){var a,b,c,d,e,g,h;if(b=arguments[0],a=2<=arguments.length?f.call(arguments,1):[],b=this._customEventName(b),c=this.hasOwnProperty("events")&&null!=(g=this.events)?g[b]:void 0){for(a.push(this),h=[],d=0,e=c.length;e>d&&(b=c[d],b.apply(this,a)!==!1);d++)h.push(void 0);return h}},bubble:function(){var a,b,c,d;return b=arguments[0],c=2<=arguments.length?f.call(arguments,1):[],a=!0,1===c.length&&g.call(this.attributes.events||[],b)<0&&(a=!1),a&&null!=(null!=(d=this.parent)?d.uid:void 0)?(c.push(this),this._state(this.parent,b,c,"bubble")):void 0},tunnel:function(){var a,b,c,d,e,g,h,i;if(c=arguments[0],a=2<=arguments.length?f.call(arguments,1):[],(null!=(g=this.children)?g.length:void 0)>0){for(a.push(this),h=this.children,i=[],d=0,e=h.length;e>d;d++)b=h[d],null!=b.uid&&i.push(this._state(b,c,a,"tunnel"));return i}},_customEventName:function(a){var b;return b=this._base(this.constructor),(""+this.constructor.type+":"+b+":"+a).toLowerCase()},_base:function(a){return a.base||a.name},_state:function(a,b,c,d){var e,f,g,h,i,j,k;return null==d&&(d="bubble"),"bubble"===d?(h=null!=(i=this.attributes.events)?i.indexOf(b):void 0,h>-1&&(f=null!=(j=this.attributes.callbacks)?j[h]:void 0,f&&(c[0].eventCustomCallback=f)),f||(f=c[0].eventCustomCallback),f||(g=1===c.length?this.constructor:c[1].constructor,e=this._base(g),g["extends"]&&(e=g.name),f="on"+e.toClassName()+b.toClassName())):"tunnel"===d&&(f=b),c[0].eventType=d,(null!=(k=a[f])?k.apply(a,c):void 0)!==!1?a[d].apply(a,[b].concat(c)):void 0}},a.Core.Helper=function(){var a,b;return b=function(a,b){var c,d;if(c=this._clone(b),null!=c)for(d in a)c[d]="object"==typeof a[d]?this.mix(a[d],c[d]):a[d];else c=a;return c},a=function(a){return"[object Array]"==={}.toString.call(a)},{_clone:function(a){var b,c,d;if(null==a||"object"!=typeof a)return a;if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp)return b="",null!=a.global&&(b+="g"),null!=a.ignoreCase&&(b+="i"),null!=a.multiline&&(b+="m"),null!=a.sticky&&(b+="y"),new RegExp(a.source,b);d=new a.constructor;for(c in a)d[c]=this._clone(a[c]);return d},mix:b,isArray:a}}(),String.prototype.toClassName=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.toClassObject=function(a){var b,c,d,e;for(c=this.split("."),a||(a=window[c[0]],c.shift()),d=0,e=c.length;e>d;d++)b=c[d],null!=a&&(a=a[b]);return a},c=["included","extended"],a.Core.Module=function(){function a(){this.uid=d()}return a.extend=function(a){var b,d,e;if(!a)throw new Error("extend(obj) requires obj");for(b in a)d=a[b],g.call(c,b)<0&&(this[b]=d);return null!=(e=a.extended)&&e.apply(this),this},a.include=function(a){var b,d,e;if(!a)throw new Error("include(obj) requires obj");for(d in a)e=a[d],g.call(c,d)<0&&(this.prototype[d]=e);return b=a.included,b&&b.apply(this),this},a.create=function(a,b){var c;return c=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return i(b,a),b}(this),a&&c.include(a),b&&c.extend(b),c},a}(),d=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b,c;return b=16*Math.random()|0,c="x"===a?b:3&b|8,c.toString(16)}).toUpperCase()},a.Core.Output={append:function(){return this.output("append")},prepend:function(){return this.output("prepend")},html:function(){return this.output("html")},output:function(){if(null==this.constructor.template)throw"No template defined.";if(null==this.container)throw"No container assigned.";return this._render(),this.constructor.method=this.attributes.method||a.Core.Constants.APPEND,("string"==typeof this.container||null==this.container.length)&&(this.container=a.$(this.container)),this.container.first()[this.constructor.method](this.el)},refresh:function(){var a;return a=this.el,this._render(),"function"==typeof this.bindEvents&&this.bindEvents(),a.replaceWith(this.el)},destroy:function(){return this.el.remove()},_render:function(){var b;return this._createIfBindings(),this.el=a.$(e(this.constructor.template)(this.attributes)),b=this.constructor.base||new String,this.el.attr("data-"+this.constructor.type,b.toLowerCase()),this.constructor.name.toLowerCase()!==b.toLowerCase()&&this.el.attr("data-extend",this.constructor.name.toLowerCase()),this.el},_createIfBindings:function(){var b,c;this.attributes["if"]={},c=[];for(b in this.attributes)g.call(a.Core.Constants.EXCLUDED_IF_KEYS,b)<0&&c.push(this.attributes[b]?this.attributes["if"][b]=!0:void 0);return c}},e=function(a){var b,c,d,e;return c=function(a,b){var c,d,e;for(b=1,a=a.replace(/\.\.\//g,function(){return b++,""}),d=["data[data.length - ",b,"]"],e="."===a?[]:a.split("."),c=0;c<e.length;)d.push("."+e[c]),c++;return d.join("")},e=function(a){return a.replace(/\{\{(!|&|\{)?\s*(.*?)\s*}}+/g,function(a,b,e){var f;return"!"===b?"":(f=d++,['"; var o',f," = ",c(e),", s",f," = (((typeof(o",f,') == "function" ? o',f,".call(data[data.length - 1]) : o",f,') || "") + ""); s += ',b?"s"+f:'(/[&"><]/.test(s'+f+") ? s"+f+'.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/>/g,"&gt;").replace(/</g,"&lt;") : s'+f+")",' + "'].join(""))})},b=function(a){return e(a.replace(/\{\{(\^|#)(.*?)}}(.*?)\{\{\/\2}}/g,function(a,e,f,g){var h;return h=d++,['"; var o',h," = ",c(f),"; ",("^"===e?["if ((o",h," instanceof Array) ? !o",h,".length : !o",h,') { s += "',b(g),'"; } ']:["if (typeof(o",h,') == "boolean" && o',h,') { s += "',b(g),'"; } else if (o',h,") { for (var i",h," = 0; i",h," < o",h,".length; i",h,"++) { data.push(o",h,"[i",h,']); s += "',b(g),'"; data.pop(); }}']).join(""),'; s += "'].join("")}))},d=0,new Function("data",'data = [data], s = "'+b(a.replace(/"/g,'\\"').replace(/\n/g,"\\n"))+'"; return s;')},a.Core.Scaffold={scaffold:function(){var a,b,c;return this.parent={},null!=(null!=(a=this.attributes)?a.parent:void 0)&&(this.parent=this.attributes.parent,delete this.attributes.parent),this.container=this.attributes.container||this.parent.el||document.body,null!=(null!=(b=this.attributes)?b.container:void 0)&&delete this.attributes.container,null!=(null!=(c=this.attributes)?c.entity:void 0)?(this.entity=this.attributes.entity,delete this.attributes.entity):void 0}},a.Url=function(){var b,c,d,e,g,h,i,j,k;return k={attributes:/:([\w\d]+)/g,splat:/\*([\w\d]+)/g,escape:/[-[\]{}()+?.,\\^$|#\s]/g,hash:/^#*/},i={path:null,forward:!0,history:!1,routes:{}},j=function(){var a,b,e;return a=1<=arguments.length?f.call(arguments,0):[],a.length>0?(i.forward=!0,b="/"+a.join("/"),b!==i.path?(i.history||(b="#"+b),e=window.history.state||null,window.history.pushState(e,document.title,b.toLowerCase()),h()):void 0):i.history?d():c()},b=function(){var a;return i.forward=!1,a=null!=window.history.state.steps?window.history.state.steps:1,window.history.go(-a)},e=function(a,b){var c,d;for(c=["url"],k.attributes.lastIndex=0;null!==(d=k.attributes.exec(a));)c.push(d[1]);for(k.splat.lastIndex=0;null!==(d=k.splat.exec(a));)c.push(d[1]);return a=a.replace(k.escape,"\\$&").replace(k.attributes,"([^/]*)").replace(k.splat,"(.*?)"),i.routes[a]={attributes:c,callback:b,regexp:new RegExp("^"+a+"$")}},h=function(a){var b;return a&&a.preventDefault(),b=i.history?d():c(),b!==i.path?(i.path=b,g(b)):void 0},d=function(){var a;return a=window.location.pathname,"/"!==a.substr(0,1)&&(a="/"+a),a},c=function(){return window.location.hash.replace(k.hash,"")},g=function(a){var b,c,d,e,f,g,h,j,k,l,m;m=[];for(e in i.routes){if(g=i.routes[e],c=g.regexp.exec(a)){for(f={},k=g.attributes,d=h=0,j=k.length;j>h;d=++h)b=k[d],f[b]=c[d];null!=(l=g.callback)&&l.call(this,f);break}m.push(void 0)}return m},function(){return a.$(window).on("popstate",h)}(),{path:j,back:b,listen:e,options:i}}(a),b={touch:"click",singleTap:"click",tap:"click",doubleTap:"dblClick"},a.Class.Atom=function(c){function d(b){var c,e,f;this.attributes=b,this.bindEntityDestroy=j(this.bindEntityDestroy,this),this.bindEntityUpdate=j(this.bindEntityUpdate,this),d.__super__.constructor.apply(this,arguments),this.attributes=a.Core.Helper.mix(this.attributes,this.constructor["default"]),this.scaffold(),this.entity&&(b=("function"==typeof(f=this.entity).parse?f.parse():void 0)||this.entity.attributes(),this.attributes=a.Core.Helper.mix(this.attributes,b),e=this.entity.className.toClassObject(__.Entity),e&&(c=a.Core.Constants.ENTITY.EVENT,this.attributes.bind.update&&e.bind(c.UPDATE,this.bindEntityUpdate),this.attributes.bind.destroy&&e.bind(c.DESTROY,this.bindEntityDestroy))),this.output(),this.bindEvents()}return i(d,c),d.include(a.Core.Scaffold),d.include(a.Core.Event),d.include(a.Core.Output),d.type="Atom",d["default"]={},d.prototype.bindEntityUpdate=function(a){var b,c,d;if(a.uid===this.entity.uid){c=("function"==typeof(d=this.entity).parse?d.parse():void 0)||this.entity.attributes();for(b in c)this.attributes[b]=c[b];return this.refresh()}},d.prototype.bindEntityDestroy=function(a){return a.uid===this.entity.uid?this.destroy():void 0},d.prototype.bindEvents=function(){var a,c,d,e,f,g;if(this.attributes.events){for(f=this.attributes.events,g=[],d=0,e=f.length;e>d;d++)a=f[d],("undefined"==typeof $$||null===$$)&&(c=b[a]),g.push(this.el.on(c||a,function(a){return function(b){return function(c){return a.el[0].disabled!==!0?a.bubble(b,c):void 0}}}(this)(a)));return g}},d}(a.Core.Module),a.Class.Entity=function(b){function c(a){c.__super__.constructor.apply(this,arguments),this.constructor.constructor.type="Entity",this.constructor.constructor.base=this.constructor.name,this.className=this.constructor.name,a&&this.load(a)}return i(c,b),c.extend(a.Core.Event),c.records={},c.attributes=[],c.fields=function(){var a;return a=1<=arguments.length?f.call(arguments,0):[],this.records={},this.attributes=a||[],this.unbind(),this},c.create=function(a){var b;return b=new this(a),b.save()},c.exists=function(a){return this.find(a)},c.find=function(a){var b;return b=this.records[a],(null!=b?b.clone():void 0)||null},c.findBy=function(a,b){var c,d,e;e=this.records;for(d in e)if(c=e[d],c[a]===b)return c.clone();return null},c.select=function(a){var b,c;return this.cloneArray(function(){var d,e;d=this.records,e=[];for(c in d)b=d[c],a(b)&&e.push(b);return e}.call(this))},c.each=function(a){var b,c,d,e;d=this.records,e=[];for(b in d)c=d[b],e.push(a(c.clone()));return e},c.all=function(){return this.cloneArray(this.recordsValues())},c.count=function(){return this.recordsValues().length},c.cloneArray=function(a){var b,c,d,e;for(e=[],c=0,d=a.length;d>c;c++)b=a[c],e.push(b.clone());return e},c.recordsValues=function(){var a,b,c,d;b=[],d=this.records;for(a in d)c=d[a],b.push(c);return b},c.destroyAll=function(){var a,b,c;c=this.records;for(b in c)a=c[b],a.destroy();return this.records={}},c.prototype.isNew=function(){return!this.exists()},c.prototype.exists=function(){return this.uid&&this.uid in this.constructor.records},c.prototype.load=function(a){var b,c;for(b in a)c=a[b],"function"==typeof this[b]?this[b](c):this[b]=c;return this},c.prototype.attributes=function(){var a,b,c,d,e;for(b={},e=this.constructor.attributes,c=0,d=e.length;d>c;c++)a=e[c],a in this&&(b[a]="function"==typeof this[a]?this[a]():this[a]);return b},c.prototype.equal=function(a){return!((null!=a?a.constructor:void 0)!==this.constructor||a.uid!==this.uid)},c.prototype.save=function(){var a,b;return null!=this.validate&&(a=this.validate()),a?this.trigger("error",a):(b=this.isNew()?this.create():this.update(),this.trigger("save"),b)},c.prototype.updateAttributes=function(a){return this.load(a),this.save()},c.prototype.create=function(){var a;return a=new this.constructor(this.attributes()),a.uid=this.uid,this.constructor.records[this.uid]=a,this.trigger("create"),this.trigger("change"),a.clone()},c.prototype.update=function(){var a;return a=this.constructor.records,a[this.uid].load(this.attributes()),this.trigger("update"),this.trigger("change"),a[this.uid].clone()},c.prototype.destroy=function(){return delete this.constructor.records[this.uid],this.trigger("destroy"),this.trigger("change"),this.unbind()},c.prototype.clone=function(){return Object.create(this)},c.prototype.unbind=function(){return this.trigger("unbind")},c.prototype.trigger=function(){var a,b;return a=1<=arguments.length?f.call(arguments,0):[],a.splice(1,0,this),(b=this.constructor).trigger.apply(b,a)},c}(a.Core.Module),"function"!=typeof Object.create&&(Object.create=function(a){var b;return b=function(){},b.prototype=a,new b}),a.Class.Molecule=function(b){function c(a){var b;this.attributes=a,this._removeAtomsEntities=j(this._removeAtomsEntities,this),this._addAtomEntity=j(this._addAtomEntity,this),c.__super__.constructor.apply(this,arguments),this.children=[],this._records=[],this.scaffold(),this.output(),this.chemistry(),null!=(null!=(b=this.attributes.bind)?b.entity:void 0)&&null!=this.attributes.bind.atom&&this.attributes.bind.create&&this._bindEntityCreate()}return i(c,b),c.include(a.Core.Scaffold),c.include(a.Core.Children),c.include(a.Core.Event),c.include(a.Core.Output),c.type="Molecule",c.prototype.entity=function(a,b){var c,d,e,f,g;if(null==b&&(b=!1),b||this._removeAtomsEntities(),null!=(null!=(f=this.attributes.bind)?f.entity:void 0)&&null!=this.attributes.bind.atom){for(g=[],d=0,e=a.length;e>d;d++)c=a[d],g.push(this._addAtomEntity(c,this.attributes.bind));return g}},c.prototype._addAtomEntity=function(b,c,d){var e,f,g,h,i,j,k;for(null==d&&(d=!0),f={entity:b,bind:{update:c.update,destroy:c.destroy}},j=["events","callbacks"],h=0,i=j.length;i>h;h++)g=j[h],null!=this.attributes.bind[g]&&(f[g]=this.attributes.bind[g]);return f=a.Core.Helper.mix(f,null!=(k=this["default"].children)?k[this.attributes.entityAtom]:void 0),e=this.appendChild(""+this.attributes.bind.atom,f),d&&this._records.push(e),e},c.prototype._removeAtomsEntities=function(){var a,b,c,d;for(d=this._records,b=0,c=d.length;c>b;b++)a=d[b],a.el.remove();return this._records=[]},c.prototype._bindEntityCreate=function(){var b;return b=this.attributes.bind.entity.toClassObject(),null!=b?(new b,b.bind(a.Core.Constants.ENTITY.EVENT.CREATE,function(a){return function(b){return a._addAtomEntity(b,a.attributes.bind)}}(this))):void 0},c}(a.Core.Module),a.Class.Organism=function(b){function c(b,e){this.attributes=b,c.__super__.constructor.apply(this,arguments),this.children=[],e&&(d=this._getScaffold(e)),this.attributes=a.Core.Helper.mix(this.attributes,d),d=void 0}var d;return i(c,b),c.include(a.Core.Scaffold),c.include(a.Core.Children),c.include(a.Core.Event),c.include(a.Core.Output),c.type="Organism",d=void 0,c.scaffold=function(a){var b,c;return b="undefined"!=typeof $$&&null!==$$?$$:$,c=b.ajax({url:a,async:!1,dataType:"text",error:function(){throw"Error loading scaffold in "+a}}),d=JSON.parse(c.responseText)},c.prototype.render=function(){return this.scaffold(),this.output(),this.chemistry()},c.prototype._getScaffold=function(a){var b,c;return b="undefined"!=typeof $$&&null!==$$?$$:$,c=b.ajax({url:a,async:!1,dataType:"text",error:function(){throw"Error loading scaffold in "+a}}),d=JSON.parse(c.responseText)},c}(a.Core.Module)}).call(this);