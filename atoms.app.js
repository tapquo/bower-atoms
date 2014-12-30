/**
 * atoms - Atomic & Reactive Development for Modern WebApps.
 * @version v0.12.30
 * @link    http://atoms.tapquo.com
 * @author  Tapquo S.L. (http://tapquo.com)
 * @license MIT
 */
(function(){"use strict";var __Media,__path,__hasProp={}.hasOwnProperty,__extends=function(child,parent){function ctor(){this.constructor=child}for(var key in parent)__hasProp.call(parent,key)&&(child[key]=parent[key]);return ctor.prototype=parent.prototype,child.prototype=new ctor,child.__super__=parent.prototype,child},__bind=function(fn,me){return function(){return fn.apply(me,arguments)}},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;l>i;i++)if(i in this&&this[i]===item)return i;return-1},__slice=[].slice;window.__=Atoms.App={version:"0.12.30",Article:{},Aside:{},Dialog:{},Entity:{},Extension:{},Url:null},Atoms.$(function(){return navigator.standalone?Atoms.$(document.body).addClass("standalone"):void 0}),Atoms.resource=function(extension,type,url){var file,promise;return promise=new Hope.Promise,file=document.createElement(type),file.setAttribute("data-extension",extension),file.onload=function(){return promise.done(null,!0)},file.onError=function(){return promise.done(!0,null)},"script"===type?(file.type="text/javascript",file.src=url,document.body.appendChild(file)):(file.rel="stylesheet",file.href=url,document.head.appendChild(file)),promise},Atoms.App.Url=function(a){var _activeAside,_activeSection,_addStepHistory,_article,_aside,_onChangeRoute,_options,_stepHistory;return _article=void 0,_aside=void 0,_options=Atoms.Url.options,_onChangeRoute=function(properties){var article;return article=a.App.Article[properties.article.toClassName()],article?(article.el||article.render(),(null!=_article?_article.el.hasClass("aside"):void 0)&&_article.aside(_aside),setTimeout(function(){return _options.forward||_stepHistory(0),_activeSection(article,properties.section),_article!==article?(_options.forward?(_stepHistory(1),article.state("in"),_article&&_article.state("back-in").addClass(article.attributes.style)):(_article.state("out"),article.state("back-out").removeClass(_article.attributes.style)),_article=article):void 0},10)):void 0},_activeAside=function(id){return null==id&&(id=_aside),null!=_article?_article.aside(_aside=id):void 0},_activeSection=function(article,section){return _addStepHistory(),article.section(section)},_addStepHistory=function(){var state;return state=window.history.state||{steps:0},state.steps++,window.history.replaceState(state,document.title)},_stepHistory=function(value){return window.history.replaceState({steps:value},document.title)},Atoms.$(function(){var url;return url=Atoms.Url.path().split("/"),3===url.length&&_onChangeRoute({article:url[1],section:url[2]}),Atoms.Url.listen("/:article/:section",_onChangeRoute)}),{aside:_activeAside,current:function(){return _article}}}(Atoms),Atoms.Atom.Button=function(_super){function Button(){return Button.__super__.constructor.apply(this,arguments)}return __extends(Button,_super),Button.template='<button class="{{style}}{{^if.text}} icon{{/if.text}}" {{#if.disabled}}disabled{{/if.disabled}}>\n  {{#if.icon}}<span class="icon {{icon}}"></span>{{/if.icon}}\n  {{#if.text}}<abbr>{{text}}</abbr>{{/if.text}}\n  {{#if.count}}<small>{{count}}</small>{{/if.count}}\n</button>',Button.base="Button",Button.events=["touch"],Button["default"]={events:["touch"]},Button}(Atoms.Class.Atom),Atoms.Atom.Figure=function(_super){function Figure(){return Figure.__super__.constructor.apply(this,arguments)}return __extends(Figure,_super),Figure.template='<figure {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.url}}<span class="icon loading-config"></span>{{/if.url}}\n</figure>',Figure.base="Figure",Figure.events=["touch","tap","hold","swipe","rotate"],Figure.prototype._render=function(){var image;return Figure.__super__._render.apply(this,arguments),this.attributes.url?(image=new Image,image.addEventListener("load",function(_this){return function(){return _this.el.html(""),_this.el.attr("style","background-image: url("+_this.attributes.url+");")}}(this)),image.src=this.attributes.url):void 0},Figure}(Atoms.Class.Atom),Atoms.Atom.Heading=function(_super){function Heading(){return Heading.__super__.constructor.apply(this,arguments)}return __extends(Heading,_super),Heading.template='<{{size}} {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.image}}<img src="image" />{{/if.image}}\n  {{#if.value}}{{value}}{{/if.value}}\n</{{size}}>',Heading.base="Heading",Heading["default"]={size:"h1"},Heading}(Atoms.Class.Atom),Atoms.Atom.Icon=function(_super){function Icon(){return Icon.__super__.constructor.apply(this,arguments)}return __extends(Icon,_super),Icon.template='<span class="icon {{#if.icon}}{{icon}}{{/if.icon}} {{#if.style}}{{style}}{{/if.style}}"></span>',Icon.base="Icon",Icon}(Atoms.Class.Atom),Atoms.Atom.Iframe=function(_super){function Iframe(){return Iframe.__super__.constructor.apply(this,arguments)}return __extends(Iframe,_super),Iframe.template='<iframe {{#if.url}}src="{{url}}"{{/if.url}} {{#if.style}}class="{{style}}"{{/if.style}}></iframe>',Iframe.base="Iframe",Iframe}(Atoms.Class.Atom),Atoms.Atom.Image=function(_super){function Image(){return Image.__super__.constructor.apply(this,arguments)}return __extends(Image,_super),Image.template='<img src="{{url}}" {{#if.style}}class="{{style}}"{{/if.style}} {{#if.alt}}alt="{{alt}}"{{/if.alt}}/>',Image.base="Image",Image.events=["touch","tap","hold","swipe","rotate"],Image}(Atoms.Class.Atom),Atoms.Atom.Input=function(_super){function Input(){return Input.__super__.constructor.apply(this,arguments)}return __extends(Input,_super),Input.template='<input type="{{type}}" name="{{name}}" {{#if.placeholder}}placeholder="{{placeholder}}"{{/if.placeholder}} {{#if.style}}class="{{style}}"{{/if.style}} {{#if.value}}value="{{value}}"{{/if.value}} {{#required}}required{{/required}} {{#disabled}}disabled{{/disabled}} {{#if.maxlength}}maxlength={{maxlength}}{{/if.maxlength}} {{#if.checked}}checked{{/if.checked}} />',Input.base="Input",Input.events=["keypress","keyup","change"],Input["default"]={type:"text"},Input.prototype.value=function(value){return"checkbox"===this.attributes.type?null!=value?this.el[0].checked=value:this.el[0].checked:null!=value?this.el.val(value):this.el.val()},Input.prototype.clean=function(){return this.value("")},Input.prototype.error=function(value,focus){var method;return null==focus&&(focus=!0),method="removeClass",value&&(method="addClass",focus&&this.el[0].focus()),this.el[method]("error")},Input}(Atoms.Class.Atom),Atoms.Atom.AutoComplete=function(_super){function AutoComplete(){this._hide=__bind(this._hide,this),this._bindTouch=__bind(this._bindTouch,this),this._bindKeyup=__bind(this._bindKeyup,this),AutoComplete.__super__.constructor.apply(this,arguments),this._managePseudoElements()}return __extends(AutoComplete,_super),AutoComplete["extends"]=!0,AutoComplete.template='<fieldset>\n  <input type="text" name="{{name}}" {{#if.placeholder}}placeholder="{{placeholder}}"{{/if.placeholder}} {{#if.style}}class="{{style}}"{{/if.style}} {{#if.value}}value="{{value}}"{{/if.value}} {{#required}}required{{/required}} {{#disabled}}disabled{{/disabled}} {{#if.maxlength}}maxlength={{maxlength}}{{/if.maxlength}} />\n  <datalist for="{{name}}"></datalist>\n</fieldset>',AutoComplete.events=["change","select"],AutoComplete.prototype.refresh=function(){return AutoComplete.__super__.refresh.apply(this,arguments),this._managePseudoElements()},AutoComplete.prototype.value=function(value){var option,_i,_len,_ref;if(null!=value)return this.el.val(value);for(value=this.el.val(),_ref=this.attributes.options||[],_i=0,_len=_ref.length;_len>_i;_i++)if(option=_ref[_i],option.label===value){value=option.value;break}return value},AutoComplete.prototype._managePseudoElements=function(){var option,options,_i,_len,_ref,_ref1;if(this.datalist=this.el.find("datalist"),this.el=this.el.find("input"),this.el.bind("keyup",this._bindKeyup),this.datalist.bind("touchstart",this._bindTouch),(null!=(_ref=this.attributes.options)?_ref.length:void 0)>0){for(options=[],_ref1=this.attributes.options||[],_i=0,_len=_ref1.length;_len>_i;_i++)option=_ref1[_i],options.push(null!=option.value?option:{value:option,label:option});return this.attributes.options=options}},AutoComplete.prototype._bindKeyup=function(){var markup,option,value,_i,_len,_ref,_ref1;if(this.datalist.removeClass("active"),value=this.el.val().toLowerCase(),null!=this.timer&&clearTimeout(this.timer),value){for(markup="",_ref=this.attributes.options,_i=0,_len=_ref.length;_len>_i;_i++)option=_ref[_i],0===(null!=(_ref1=option.label.toLowerCase().match(value))?_ref1.index:void 0)&&(markup+='<li value="'+option.value+'">'+option.label+"</li>");""!==markup&&(this.datalist.html(markup),this.datalist.addClass("active"),this.timer=setTimeout(function(_this){return function(){return _this._hide()}}(this),3e3))}return this.bubble("change")},AutoComplete.prototype._bindTouch=function(event){return this.value(Atoms.$(event.target).html()),this._hide(),this.bubble("select")},AutoComplete.prototype._hide=function(){return this.datalist.hasClass("active")?this.datalist.removeClass("active"):void 0},AutoComplete}(Atoms.Atom.Input),Atoms.Atom.Label=function(_super){function Label(){return Label.__super__.constructor.apply(this,arguments)}return __extends(Label,_super),Label.template='<label {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.icon}}<span class="icon {{icon}}"></span>{{/if.icon}}\n  {{value}}\n  {{#if.count}}<strong>{{count}}</strong>{{/if.count}}\n</label>',Label.base="Label",Label}(Atoms.Class.Atom),Atoms.Atom.Li=function(_super){function Li(){Li.__super__.constructor.apply(this,arguments),this.bindDestroyable()}return __extends(Li,_super),Li.template='<li {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.image}}<figure><span class="icon loading-config"></span></figure>{{/if.image}}\n  {{#if.icon}}<span class="icon {{icon}}"></span>{{/if.icon}}\n  <div>\n    {{#if.info}}<span>{{info}}</span>{{/if.info}}\n    {{#if.text}}<strong>{{text}}</strong>{{/if.text}}\n    {{#if.description}}<small>{{description}}</small>{{/if.description}}\n  </div>\n</li>',Li.base="Li",Li.events=["touch","doubleTap","hold","swipeLeft","swipeRight","destroyable"],Li.prototype.refresh=function(){return Li.__super__.refresh.apply(this,arguments),this.bindDestroyable()},Li.prototype.bindDestroyable=function(){return __indexOf.call(this.attributes.events||[],"destroyable")>=0?(this.destroying=!1,this.el.bind("touchstart",function(_this){return function(){return _this.destroying=!1,_this.el.css("transition","none")}}(this)),this.el.bind("swiping",function(_this){return function(event){var pixels;return pixels=event.touch.delta.x,pixels>0?void 0:(pixels=Math.abs(pixels),128>pixels&&(_this.el.css("right",""+pixels+"px"),pixels>80&&!_this.destroying)?(_this.destroying=!0,_this.el.addClass("destroy"),setTimeout(function(){return _this.destroy()},450)):void 0)}}(this)),this.el.bind("touchend",function(_this){return function(){return _this.el.css("transition","right 450ms").css("right","0px")}}(this))):void 0},Li.prototype._render=function(){var figure,image;return Li.__super__._render.apply(this,arguments),this.attributes.image?(figure=this.el.children("figure"),image=new Image,image.addEventListener("load",function(_this){return function(){return figure.html(""),figure.attr("style","background-image: url("+_this.attributes.image+");")}}(this)),image.src=this.attributes.image):void 0},Li}(Atoms.Class.Atom),Atoms.Atom.Link=function(_super){function Link(){return Link.__super__.constructor.apply(this,arguments)}return __extends(Link,_super),Link.template='<a href="{{href}}" {{#if.target}}target="{{target}}"{{/if.target}} {{#if.style}}class="{{style}}"{{/if.style}} >\n  {{#if.icon}}<span class="icon {{icon}}"></span>{{/if.icon}}\n  {{#if.text}}{{text}}{{/if.text}}\n  {{#if.info}}<small>{{info}}</small>{{/if.info}}\n</a>',Link.base="Link",Link.events=["touch"],Link}(Atoms.Class.Atom),__Media=function(_super){function __Media(){var event,events,_i,_len,_ref;for(__Media.__super__.constructor.apply(this,arguments),events={load:"canplaythrough",downloading:"progress",timing:"timeupdate",end:"ended"},_ref=this.attributes.events||[],_i=0,_len=_ref.length;_len>_i;_i++)event=_ref[_i],event in events&&this._listen(events[event],event)}return __extends(__Media,_super),__Media.events=["load","error","downloading","play","timing","pause","stop","end"],__Media.prototype.src=function(url,type){return url?(this.el.attr("src",url),type&&this.el.attr("type",type),this.el[0].load()):this.el.attr("src")},__Media.prototype.play=function(){return this.el[0].play()},__Media.prototype.stop=function(){return this.time(0),this.pause()},__Media.prototype.pause=function(){return this.el[0].pause()},__Media.prototype.volume=function(percent){return null!=percent?this.el[0].volume=parseInt(percent)/100:this.el[0].volume},__Media.prototype.time=function(value){return null!=value?this.el[0].currentTime=value:this.el[0].currentTime},__Media.prototype.duration=function(){return this.el[0].duration},__Media.prototype._listen=function(event,bubble){return this.el.bind(event,function(_this){return function(event){return _this.bubble(bubble,event)}}(this))},__Media}(Atoms.Class.Atom),Atoms.Atom.Audio=function(_super){function Audio(){return Audio.__super__.constructor.apply(this,arguments)}return __extends(Audio,_super),Audio.template='<audio {{#if.autoplay}}autoplay="{{autoplay}}"{{/if.autoplay}} {{#if.controls}}controls="{{controls}}"{{/if.controls}} {{#if.preload}}preload="{{preload}}"{{/if.preload}} {{#if.loop}}loop="{{loop}}"{{/if.loop}} {{#if.src}}src="{{src}}"{{/if.src}}></audio>',Audio.base="Audio",Audio.prototype.src=function(url,type){return null==type&&(type="audio/mpeg"),Audio.__super__.src.call(this,url,type)},Audio}(__Media),Atoms.Atom.Video=function(_super){function Video(){return Video.__super__.constructor.apply(this,arguments)}return __extends(Video,_super),Video.template='<video {{#if.autoplay}}autoplay="{{autoplay}}"{{/if.autoplay}} {{#if.controls}}controls="{{controls}}"{{/if.controls}} {{#if.preload}}preload="{{preload}}"{{/if.preload}} {{#if.loop}}loop="{{loop}}"{{/if.loop}} {{#if.src}}src="{{src}}"{{/if.src}}></video>',Video.base="Video",Video.prototype.src=function(url,type){return null==type&&(type="audio/mpeg"),Video.__super__.src.call(this,url,type)},Video}(__Media),Atoms.Atom.Progress=function(_super){function Progress(){return Progress.__super__.constructor.apply(this,arguments)}return __extends(Progress,_super),Progress.template='<progress {{#if.style}}class="{{style}}"{{/if.style}} {{#if.max}}max="{{max}}"{{/if.max}} {{#if.value}}value="{{value}}"{{/if.value}}></progress>',Progress.base="Progress",Progress["default"]={max:100,value:0},Progress.prototype.value=function(value){return null!=value?this.el[0].value=value:this.el[0].value},Progress.prototype.clean=function(){return this.value("")},Progress}(Atoms.Class.Atom),Atoms.Atom.Select=function(_super){function Select(){Select.__super__.constructor.apply(this,arguments),null!=this.attributes.value&&this.value(this.attributes.value)}return __extends(Select,_super),Select.template='<select name="{{name}}" {{#if.style}}class="{{style}}"{{/if.style}} {{#required}}required{{/required}} {{#disabled}}disabled{{/disabled}}>\n  {{#options}}\n    <option value="{{value}}">{{label}}</option>\n  {{/options}}\n</select>',Select.base="Select",Select.events=["change"],Select.prototype._render=function(){var option,options,_i,_len,_ref,_ref1;if((null!=(_ref=this.attributes.options)?_ref.length:void 0)>0){for(options=[],_ref1=this.attributes.options,_i=0,_len=_ref1.length;_len>_i;_i++)option=_ref1[_i],options.push(null!=option.value?option:{value:option,label:option});this.attributes.options=options}return Select.__super__._render.apply(this,arguments)},Select.prototype.value=function(value){return null!=value?this.el.val(value):this.el.val()},Select.prototype.clean=function(){return this.value("")},Select}(Atoms.Class.Atom),Atoms.Atom.Switch=function(_super){function Switch(){this.onTap=__bind(this.onTap,this);var event_name;Switch.__super__.constructor.apply(this,arguments),null!=this.attributes.value&&this.value(this.attributes.value),event_name=("undefined"!=typeof $$&&null!==$$&&"function"==typeof $$.isMobile?$$.isMobile():void 0)?"touchstart":"change",this.el.bind(event_name,this.onTap)}return __extends(Switch,_super),Switch.template='<input type="checkbox" name="{{name}}" {{#if.style}}class="{{style}}"{{/if.style}} {{#required}}required{{/required}} {{#disabled}}disabled{{/disabled}}/>',Switch.base="Switch",Switch.events=["changed"],Switch.prototype.value=function(value){return value===!0?this.el.attr("checked","true"):value===!1?this.el.removeAttr("checked"):null!=this.el.attr("checked")},Switch.prototype.onTap=function(event){return event.preventDefault(),event.stopPropagation(),this.value(!this.el.attr("checked")),this.bubble("changed",event)},Switch}(Atoms.Class.Atom),Atoms.Atom.Text=function(_super){function Text(){return Text.__super__.constructor.apply(this,arguments)}return __extends(Text,_super),Text.template='<p {{#if.style}}class="{{style}}"{{/if.style}}>{{value}}</p>',Text.base="Text",Text}(Atoms.Class.Atom),Atoms.Atom.Textarea=function(_super){function Textarea(){return Textarea.__super__.constructor.apply(this,arguments)}return __extends(Textarea,_super),Textarea.template='<textarea name="{{name}}" {{#if.placeholder}}placeholder="{{placeholder}}"{{/if.placeholder}} {{#if.style}}class="{{style}}"{{/if.style}} {{#required}}required{{/required}} {{#disabled}}disabled{{/disabled}} {{#if.maxlength}}maxlength={{maxlength}}{{/if.maxlength}}>{{#if.value}}{{value}}{{/if.value}}</textarea>',Textarea.base="Textarea",Textarea.events=["keypress","keyup","change"],Textarea.prototype.value=function(value){return null!=value?this.el.val(value):this.el.val()},Textarea.prototype.clean=function(){return this.value("")},Textarea}(Atoms.Class.Atom),Atoms.Molecule.Div=function(_super){function Div(){Div.__super__.constructor.apply(this,arguments),this.bindEvents()}return __extends(Div,_super),Div.template='<div {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></div>',Div.base="Div",Div.events=["touch"],Div.prototype.bindEvents=function(){return this.attributes.events?this.handleInputEvent():void 0},Div}(Atoms.Class.Molecule),Atoms.Molecule.Form=function(_super){function Form(){this.onButtonTouch=__bind(this.onButtonTouch,this),Form.__super__.constructor.apply(this,arguments),this.el.bind("submit",function(event){return event.preventDefault()})}return __extends(Form,_super),Form.template='<form {{#if.style}}class="{{style}}"{{/if.style}}></form>',Form.available=["Atom.Button","Atom.Input","Atom.Label","Atom.Progress","Atom.Select","Atom.Switch","Atom.Textarea"],Form.events=["change","submit","error"],Form.base="Form",Form["default"]={events:["submit"]},Form.prototype.value=function(values){var child,_i,_j,_len,_len1,_ref,_ref1;if(values)for(_ref=this.children,_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],child.attributes.name&&null!=child.value&&values[child.attributes.name]&&child.value(values[child.attributes.name]);else for(values={},_ref1=this.children,_j=0,_len1=_ref1.length;_len1>_j;_j++)child=_ref1[_j],child.attributes.name&&null!=child.value&&(values[child.attributes.name.toLowerCase()]=child.value());return values},Form.prototype.clean=function(){var child,_i,_len,_ref,_results;for(_ref=this.children,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],child.attributes.name&&null!=child.value&&_results.push("Switch"===child.constructor.name?child.value(!1):child.clean());return _results},Form.prototype.onInputKeypress=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onInputKeyup=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onInputChange=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onTextareaKeypress=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onTextareaKeyup=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onTextareaChange=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onSelectChange=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onSwitchChanged=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onButtonTouch=function(event){var child,method,required,_i,_len,_ref;for(event.preventDefault(),required=!0,_ref=this.children,_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],null!=child.value&&(child.attributes.required&&!child.value()?(child.el.addClass("error"),required=!1):child.el.removeClass("error"));return method=required?"submit":"error",this.bubble(method,event),!1},Form.prototype._bubbleChange=function(event,atom){return event.preventDefault(),atom.attributes.required&&!atom.value()?atom.el.addClass("error"):atom.el.removeClass("error"),this.bubble("change",event),!1},Form}(Atoms.Class.Molecule),Atoms.Molecule.List=function(_super){function List(){return this.onLiTouch=__bind(this.onLiTouch,this),this.select=__bind(this.select,this),this.findBy=__bind(this.findBy,this),List.__super__.constructor.apply(this,arguments)}return __extends(List,_super),List.template='<ul {{#if.style}}class="{{style}}"{{/if.style}}></ul>',List.available=["Atom.Li"],List.base="List",List.events=["select"],List.prototype.findBy=function(field,value){return this.select(function(entity){var _ref;return(null!=(_ref=entity[field])?_ref.toLowerCase().trim():void 0)===value.toLowerCase().trim()?entity:void 0})},List.prototype.select=function(callback){var record,records,_i,_len,_ref,_results;for(this.clean(),this.children=[],callback&&(records=function(){var _i,_len,_ref,_results;for(_ref=this.cache,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)record=_ref[_i],callback(record.entity)&&_results.push(record);return _results}.call(this)),_ref=records||this.cache,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)record=_ref[_i],_results.push(this._addAtomEntity(record.entity,this.attributes.bind,record=!1));return _results},List.prototype.all=function(){return this.select()},List.prototype.clean=function(){return this.el.html("")},List.prototype.onLiTouch=function(event,atom){return this.bubble("select",atom),!1},List}(Atoms.Class.Molecule),Atoms.Molecule.Navigation=function(_super){function Navigation(){return Navigation.__super__.constructor.apply(this,arguments)}return __extends(Navigation,_super),Navigation.template='<nav {{#if.style}}class="{{style}}"{{/if.style}}></nav>',Navigation.available=["Atom.Button","Atom.Link"],Navigation.base="Navigation",Navigation.events=["select"],Navigation.prototype.onButtonTouch=function(event,atom){return this._bubbleSelect(event,atom)},Navigation.prototype.onLinkTouch=function(event,atom){return this._bubbleSelect(event,atom)},Navigation.prototype.onArticleChange=function(){var article,child,event,hierarchy,path,_i,_len,_ref;for(event=arguments[0],article=arguments[1],hierarchy=3<=arguments.length?__slice.call(arguments,2):[],path=Atoms.Url.path().substr(1),_ref=this.children,_i=0,_len=_ref.length;_len>_i;_i++)if(child=_ref[_i],child.attributes.path===path){this._active(child);break}return!1},Navigation.prototype.onSectionScroll=function(event){return this.el[event.addClass?"addClass":"removeClass"]("scroll"),!1},Navigation.prototype._active=function(atom){return atom.el.addClass("active").siblings().removeClass("active")},Navigation.prototype._bubbleSelect=function(event,atom){var _ref;return event.preventDefault(),!(null!=(_ref=atom.attributes.callbacks)?_ref.length:void 0)>0?(atom.el.addClass("active").siblings().removeClass("active"),this.bubble("select",event,atom),null!=atom.attributes.path&&__path(atom.attributes.path),!1):void 0},Navigation}(Atoms.Class.Molecule),__path=function(path){var parts;return null!=path&&(parts=path.split("/"),1===parts.length?"back"===parts[0]?Atoms.Url.back():Atoms.App.Url.aside(parts[0]):2===parts.length&&Atoms.Url.path()!=="/"+path&&Atoms.Url.path(path)),!1},Atoms.Molecule.Search=function(_super){function Search(){return this.onButtonTouch=__bind(this.onButtonTouch,this),this.onInputKeypress=__bind(this.onInputKeypress,this),this.onInputKeyup=__bind(this.onInputKeyup,this),Search.__super__.constructor.apply(this,arguments)}return __extends(Search,_super),Search.available=["Atom.Input","Atom.Button"],Search.events=["change","submit"],Search["extends"]=!0,Search["default"]={events:["submit"],children:[{"Atom.Input":{id:"input",type:"search",placeholder:"Type your search...",events:["keypress","keyup"],required:!0}},{"Atom.Button":{icon:"search"}}]},Search.prototype.value=function(value){return this.input.value(value)},Search.prototype.onInputKeyup=function(event){return 13!==event.keyCode&&this.bubble("change",event),!1},Search.prototype.onInputKeypress=function(event,atom){return 13===event.keyCode&&this._bubbleSubmit(event,atom),!1},Search.prototype.onButtonTouch=function(event,atom){return event.preventDefault(),this._bubbleSubmit(event,atom),!1},Search.prototype.onSectionScroll=function(event){return this.el[event.addClass?"addClass":"removeClass"]("scroll"),!1},Search.prototype._bubbleSubmit=function(event,atom){var value;return atom.el.blur(),value=this.input.value(),""!==value?this.bubble("submit",event):void 0},Search}(Atoms.Molecule.Form),Atoms.Molecule.Tags=function(_super){function Tags(){return this.onLabelTap=__bind(this.onLabelTap,this),this.onLabelSingleTap=__bind(this.onLabelSingleTap,this),Tags.__super__.constructor.apply(this,arguments)}return __extends(Tags,_super),Tags["extends"]=!0,Tags.available=["Atom.Label"],Tags.events=["select"],Tags.prototype.onLabelSingleTap=function(event,atom){return this._bubbleSelect(event,atom)},Tags.prototype.onLabelTap=function(event,atom){return this._bubbleSelect(event,atom)},Tags.prototype._bubbleSelect=function(event,atom){return event.preventDefault(),this.bubble("select",atom),!1},Tags}(Atoms.Molecule.Div),Atoms.Organism.Article=function(_super){function Article(attributes,scaffold){null==attributes&&(attributes={}),this.onAnimationEnd=__bind(this.onAnimationEnd,this),this.aside=__bind(this.aside,this),Article.__super__.constructor.call(this,attributes,scaffold),Atoms.App.Article[this.constructor.name]=this}var ACTIVE_STATES,EVENT;return __extends(Article,_super),Article.template='<article {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></article>',Article.available=["Organism.Header","Organism.Section","Organism.Footer","Molecule.Navigation","Molecule.Form"],Article.base="Article",Article.events=["show","hide"],ACTIVE_STATES=["in","back-out","aside-show","aside-hide","aside-show-right","aside-hide-right"],EVENT={TUNNEL:{ARTICLE_CHANGE:"onArticleChange",SECTION_SCROLL:"onSectionScroll"}},Article.prototype.render=function(){var animation_end,_i,_len,_ref,_results;for(Article.__super__.render.apply(this,arguments),_ref=Atoms.Core.Constants.ANIMATION.END.split(" "),_results=[],_i=0,_len=_ref.length;_len>_i;_i++)animation_end=_ref[_i],_results.push(this.el.bind(animation_end,this.onAnimationEnd));return _results},Article.prototype.state=function(state){return"small"===Atoms.Device.screen?this.el.addClass("active").attr("data-state",state):(this._trigger(state),"in"===state||"back-out"===state||"aside-show"===state||"aside-show-right"===state?this.el.addClass("active"):this.el.removeClass("active"))},Article.prototype.section=function(id){var child,_i,_len,_ref;for(this.tunnel(EVENT.TUNNEL.ARTICLE_CHANGE),this.tunnel(EVENT.TUNNEL.SECTION_SCROLL),_ref=this.children,_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],"Section"===child.constructor.base&&(child.attributes.id===id?(child.show(),child.el.focus()):child.el.hasClass("active")&&(child.hide(),child.el.blur()));return"aside-show"===this.el.attr("data-state")?this.aside():void 0},Article.prototype.aside=function(id){var aside_instance,method;return aside_instance=Atoms.App.Aside[id.toClassName()],null!=aside_instance?(method=this.el.hasClass("aside")?"hide":"show",aside_instance[method](),"hide"===method&&this.el.removeClass("aside").removeClass("right"),"right"===aside_instance.attributes.style&&(method+="-right"),"small"===Atoms.Device.screen?this.state("aside-"+method):"show"===method&&this.el.addClass("aside"),aside_instance.tunnel(EVENT.TUNNEL.ARTICLE_CHANGE)):void 0},Article.prototype.back=function(){return this.el.addClass("back")},Article.prototype.front=function(){return this.el.removeClass("back")},Article.prototype.onAnimationEnd=function(event){var animation_name,state;return animation_name=event.animationName||event.originalEvent.animationName,animation_name=animation_name.split("-")[0],"article"===animation_name?(state=this.el.attr("data-state"),this._trigger(state),__indexOf.call(ACTIVE_STATES,state)<0&&this.el.removeClass("active"),("aside-show"===state||"aside-show-right"===state)&&(this.el.addClass("aside"),"aside-show-right"===state&&this.el.addClass("right")),this.el.removeAttr("data-state")):void 0},Article.prototype.onSectionScroll=function(event){return event.addClass=event.down&&(event.percent>5||event.height-event.scroll<128)?!0:!1,this.tunnel("onSectionScroll",event),!1},Article.prototype._trigger=function(state){return"in"===state||"back-out"===state?this.trigger("show"):"out"===state||"back-in"===state?this.trigger("hide"):void 0},Article}(Atoms.Class.Organism),Atoms.Organism.Aside=function(_super){function Aside(attributes,scaffold){null==attributes&&(attributes={}),this.onAnimationEnd=__bind(this.onAnimationEnd,this),attributes.method="prepend",Aside.__super__.constructor.call(this,attributes,scaffold),Atoms.App.Aside[this.constructor.name]=this}return __extends(Aside,_super),Aside.template='<aside {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></aside>',Aside.available=["Organism.Header","Organism.Section","Organism.Footer","Molecule.Navigation","Molecule.Form"],Aside.base="Aside",Aside.events=["show","hide"],Aside.prototype.render=function(){var animation_end,_i,_len,_ref,_results;for(Aside.__super__.render.apply(this,arguments),_ref=Atoms.Core.Constants.ANIMATION.END.split(" "),_results=[],_i=0,_len=_ref.length;_len>_i;_i++)animation_end=_ref[_i],_results.push(this.el.bind(animation_end,this.onAnimationEnd));return _results},Aside.prototype.show=function(){return this.el||this.render(),this.el.addClass("active"),"small"===Atoms.Device.screen?this.el.attr("data-state","in"):void 0},Aside.prototype.hide=function(){var _ref;return(null!=(_ref=this.el)?_ref.hasClass("active"):void 0)?"small"===Atoms.Device.screen?this.el.attr("data-state","out"):this.el.removeClass("active"):void 0},Aside.prototype.onAnimationEnd=function(){var state;return state=this.el.attr("data-state"),this.trigger("in"===state?"show":"hide"),this.el.removeAttr("data-state"),"out"===state?this.el.removeClass("active"):void 0},Aside}(Atoms.Class.Organism),Atoms.Organism.Dialog=function(_super){function Dialog(attributes,scaffold){var animation_end,block_el,_i,_len,_ref,_ref1;for(null==attributes&&(attributes={}),this.onAnimationEnd=__bind(this.onAnimationEnd,this),Dialog.__super__.constructor.call(this,attributes,scaffold),block_el=Atoms.$(document.createElement("div")).attr("data-system","dialog"),Atoms.$(this.attributes.container||document.body).prepend(block_el),this.attributes.container=block_el,Atoms.App.Dialog[(null!=(_ref=this.attributes.id)?_ref.toClassName():void 0)||this.constructor.name]=this,this.render(),_ref1=Atoms.Core.Constants.ANIMATION.END.split(" "),_i=0,_len=_ref1.length;_len>_i;_i++)animation_end=_ref1[_i],this.el.bind(animation_end,this.onAnimationEnd)}return __extends(Dialog,_super),Dialog.template='<article {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></article>',Dialog.available=["Organism.Header","Organism.Section","Organism.Footer"],Dialog.base="Dialog",Dialog.events=["show","hide"],Dialog.prototype.show=function(){var _ref;return this.el.parent().addClass("active"),this.el.addClass("show"),this.trigger("show"),setTimeout(function(_this){return function(){return _this.onAnimationEnd()
}}(this),450),null!=(_ref=__.Url.current())?_ref.back():void 0},Dialog.prototype.hide=function(){var _ref;return this.el.addClass("hide"),this.trigger("hide"),null!=(_ref=__.Url.current())?_ref.front():void 0},Dialog.prototype.onAnimationEnd=function(){return this.el.hasClass("show")&&this.el.removeClass("show"),this.el.hasClass("hide")?(this.el.removeClass("hide"),this.el.parent().removeClass("active")):void 0},Dialog}(Atoms.Class.Organism),Atoms.Organism.Loading=function(_super){function Loading(){return Loading.__super__.constructor.apply(this,arguments)}return __extends(Loading,_super),Loading.prototype.show=function(){return this.el.parent().addClass("active"),this.el.addClass("show"),setTimeout(function(_this){return function(){return _this.onAnimationEnd()}}(this),450)},Loading.prototype.hide=function(){return this.el.addClass("hide")},Loading}(Atoms.Organism.Dialog),new Atoms.Organism.Loading,Atoms.Organism.Push=function(_super){function Push(attributes){this._onTouch=__bind(this._onTouch,this),Push.__super__.constructor.call(this,attributes),this.parent=this.el.parent().addClass("no-block"),this.title=this.el.children("h1"),this.text=this.el.find("p"),this.figure=this.el.find("figure"),this.el.on("touch",this._onTouch)}return __extends(Push,_super),Push.template="<article>\n  <h1></h1>\n  <section>\n    <figure></figure>\n    <p></p>\n  </section>\n</article>",Push.prototype.show=function(attributes,timeout){return null==timeout&&(timeout=3e3),clearTimeout(this.id_timeout),this.parent.removeClass("expand"),this.title.html(attributes.title),this.text.html(attributes.description),this.figure.hide(),null!=attributes.image&&this.figure.show().css("background-image","url('"+attributes.image+"')"),this.el.parent().addClass("active"),this.el.addClass("show"),this.trigger("show"),setTimeout(function(_this){return function(){return _this.onAnimationEnd()}}(this),450),null!=attributes.timeout?this.id_timeout=setTimeout(function(_this){return function(){return _this.parent.hasClass("expand")?void 0:_this.hide()}}(this),attributes.timeout):void 0},Push.prototype.hide=function(){var _ref;return this.el.addClass("hide"),this.trigger("hide"),null!=(_ref=__.Url.current())&&_ref.front(),clearTimeout(this.id_timeout)},Push.prototype._onTouch=function(){var _ref;return this.parent.hasClass("expand")?this.hide():(this.parent.addClass("expand"),null!=(_ref=__.Url.current())?_ref.back():void 0)},Push}(Atoms.Organism.Dialog),new Atoms.Organism.Push,Atoms.Organism.Footer=function(_super){function Footer(){Footer.__super__.constructor.apply(this,arguments),this.render()}return __extends(Footer,_super),Footer.template='<footer {{#if.style}}class="{{style}}"{{/if.style}}></footer>',Footer.available=["Atom.Progress","Molecule.Div","Molecule.Navigation"],Footer.base="Footer",Footer.prototype.onSectionScroll=function(event){return this.el[event.addClass?"addClass":"removeClass"]("scroll"),!1},Footer}(Atoms.Class.Organism),Atoms.Organism.Header=function(_super){function Header(){Header.__super__.constructor.apply(this,arguments),this.render()}return __extends(Header,_super),Header.template='<header {{#if.style}}class="{{style}}"{{/if.style}}></header>',Header.available=["Atom.Heading","Atom.Icon","Atom.Image","Atom.Progress","Molecule.Div","Molecule.Navigation"],Header.base="Header",Header.prototype.onSectionScroll=function(event){return this.el[event.addClass?"addClass":"removeClass"]("scroll"),!1},Header}(Atoms.Class.Organism),Atoms.Organism.Section=function(_super){function Section(attributes,scaffold){null==attributes&&(attributes={}),this._scrollEvent=__bind(this._scrollEvent,this),Section.__super__.constructor.call(this,attributes,scaffold),this.render()}return __extends(Section,_super),Section.template='<section {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></section>',Section.available=["Molecule.Div","Molecule.Form","Molecule.List","Molecule.Navigation","Molecule.Tags","Molecule.Table","Atom.Audio","Atom.Button","Atom.Figure","Atom.GMap","Atom.Heading","Atom.Icon","Atom.Iframe","Atom.Image","Atom.Leaflet","Atom.Progress","Atom.Text","Atom.Video"],Section.base="Section",Section.events=["show","hide","scroll","pull"],Section.prototype.render=function(){return Section.__super__.render.apply(this,arguments),__indexOf.call(this.attributes.events||[],"scroll")>=0&&this.bindScroll(),__indexOf.call(this.attributes.events||[],"pull")>=0?this.bindPull():void 0},Section.prototype.show=function(){return this.el.addClass("active"),this.bubble("show")},Section.prototype.hide=function(){return this.el.removeClass("active"),this.bubble("hide")},Section.prototype.refresh=function(){return this.pulling=!1,this.el.removeAttr("data-state=pull").css("top","0px"),setTimeout(function(_this){return function(){return _this.el.removeAttr("style").removeClass("loading").removeAttr("data-state")}}(this),300)},Section.prototype.bindScroll=function(){return this.current_scroll=0,this.el.bind("scroll",this._scrollEvent),this.el.bind("touchcancel",this._scrollEvent)},Section.prototype.bindPull=function(){return this.pulling=!1,this.el.bind("touchstart",function(_this){return function(){return _this.el.attr("data-pull",parseInt(_this.el.offset().top))}}(this)),this.el.bind("swiping",function(_this){return function(event){var y;return y=event.touch.delta.y,_this.el[0].scrollTop<16&&!_this.pulling&&y>0&&(event.originalEvent.preventDefault(),y=event.touch.delta.y,y>=0&&80>=y&&(_this.el.attr("data-state","pulling").css("top",""+y+"px"),y>72))?(_this.pulling=!0,_this.bubble("pull",event),_this.el.attr("data-state","pull")):void 0}}(this)),this.el.bind("touchend",function(_this){return function(){return _this.el.css("transition","top 300ms"),_this.pulling?_this.el.addClass("loading"):_this.refresh()}}(this))},Section.prototype._scrollEvent=function(event){var down,now;return now=new Date,now-(this.previous_gesture||0)>100?(this.previous_gesture=now,down=event.target.scrollTop>this.current_scroll?!0:!1,this.current_scroll=event.target.scrollTop,event={height:parseInt(event.target.scrollHeight-event.target.getBoundingClientRect().height),scroll:event.target.scrollTop,down:down,up:!down},event.percent=parseInt(100*event.scroll/event.height),this.bubble("scroll",event)):void 0},Section}(Atoms.Class.Organism)}).call(this);