/* atoms v0.04.16
   http://atoms.tapquo.com
   Copyright (c) 2014 Tapquo S.L. - Licensed MIT */
(function(){var __path,__hasProp={}.hasOwnProperty,__extends=function(child,parent){function ctor(){this.constructor=child}for(var key in parent)__hasProp.call(parent,key)&&(child[key]=parent[key]);return ctor.prototype=parent.prototype,child.prototype=new ctor,child.__super__=parent.prototype,child},__bind=function(fn,me){return function(){return fn.apply(me,arguments)}},__slice=[].slice;window.__=Atoms.App={version:"0.04.16",Article:{},Aside:{},Modal:{},Extension:{},Url:null},Atoms.$(function(){return navigator.standalone?Atoms.$(document.body).addClass("standalone"):void 0}),Atoms.App.Url=function(a){var _activeSection,_addStepHistory,_article,_aside,_onChangeRoute,_options,_stepHistory;return _article=void 0,_aside=void 0,_options=Atoms.Url.options,_onChangeRoute=function(properties){var article;return article=a.App.Article[properties.article.toClassName()],article?(article.el||article.render(),setTimeout(function(){return _options.forward||_stepHistory(0),_activeSection(article,properties.section),_article!==article?(_options.forward?(_stepHistory(1),article.state("in"),_article&&_article.state("back-in")):(_article.state("out"),article.state("back-out")),_article=article):(null!=_article?_article.el.hasClass("aside"):void 0)?_article.aside(_aside):void 0},10)):void 0},_aside=function(id){return null==id&&(id=_aside),null!=_article?_article.aside(_aside=id):void 0},_activeSection=function(article,section){return _addStepHistory(),article.section(section)},_addStepHistory=function(){var state;return state=window.history.state||{steps:0},state.steps++,window.history.replaceState(state)},_stepHistory=function(value){return window.history.replaceState({steps:value})},Atoms.$(function(){var url;return url=Atoms.Url.path().split("/"),3===url.length&&_onChangeRoute({article:url[1],section:url[2]}),Atoms.Url.listen("/:article/:section",_onChangeRoute)}),{aside:_aside}}(Atoms),Atoms.Atom.Audio=function(_super){function Audio(){var event,_i,_len,_ref;for(Audio.__super__.constructor.apply(this,arguments),_ref=this.attributes.events||[],_i=0,_len=_ref.length;_len>_i;_i++)event=_ref[_i],"play"===event&&this._listen("play",event),"pause"===event&&this._listen("pause",event),"end"===event&&this._listen("ended",event),"progress"===event&&this._listen("progress",event)}return __extends(Audio,_super),Audio.template='<audio {{#if.autoplay}}autoplay="{{autoplay}}"{{/if.autoplay}} {{#if.controls}}controls="{{controls}}"{{/if.controls}} {{#if.preload}}preload="{{preload}}"{{/if.preload}} {{#if.loop}}loop="{{loop}}"{{/if.loop}} {{#if.src}}src="{{src}}"{{/if.src}}></audio>',Audio.base="Audio",Audio.events=["play","pause","end","progress"],Audio.prototype.src=function(url,type){return null==type&&(type="audio/mpeg"),this.el.attr("src",url),type?this.el.attr("type",type):void 0},Audio.prototype.play=function(){return this.el[0].play()},Audio.prototype.stop=function(){return this.el[0].load()},Audio.prototype.pause=function(){return this.el[0].pause()},Audio.prototype._listen=function(event,bubble){return this.el.bind(event,function(_this){return function(event){return _this.bubble(bubble,event)}}(this))},Audio}(Atoms.Class.Atom),Atoms.Atom.Button=function(_super){function Button(){return Button.__super__.constructor.apply(this,arguments)}return __extends(Button,_super),Button.template='<button class="{{style}}{{^if.text}} icon{{/if.text}}" {{#if.disabled}}disabled{{/if.disabled}}>\n  {{#if.icon}}<span class="icon {{icon}}"></span>{{/if.icon}}\n  {{#if.text}}<abbr>{{text}}</abbr>{{/if.text}}\n</button>',Button.base="Button",Button.events=["touch"],Button["default"]={events:["touch"]},Button}(Atoms.Class.Atom),Atoms.Atom.Figure=function(_super){function Figure(){return Figure.__super__.constructor.apply(this,arguments)}return __extends(Figure,_super),Figure.template='<figure {{#if.style}}class="{{style}}"{{/if.style}} {{#if.url}}style="background-image: url({{url}});"{{/if.url}}></figure>',Figure.base="Figure",Figure.events=["touch","tap","hold","swipe","rotate"],Figure}(Atoms.Class.Atom),Atoms.Atom.Heading=function(_super){function Heading(){return Heading.__super__.constructor.apply(this,arguments)}return __extends(Heading,_super),Heading.template='<{{size}} {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.image}}<img src="image" />{{/if.image}}\n  {{#if.text}}{{text}}{{/if.text}}\n</{{size}}>',Heading.base="Heading",Heading["default"]={size:"h1"},Heading}(Atoms.Class.Atom),Atoms.Atom.Icon=function(_super){function Icon(){return Icon.__super__.constructor.apply(this,arguments)}return __extends(Icon,_super),Icon.template='<span class="icon {{#if.icon}}{{icon}}{{/if.icon}} {{#if.style}}{{style}}{{/if.style}}"></span>',Icon.base="Icon",Icon}(Atoms.Class.Atom),Atoms.Atom.Image=function(_super){function Image(){return Image.__super__.constructor.apply(this,arguments)}return __extends(Image,_super),Image.template='<img src="{{url}}" {{#if.style}}class="{{style}}"{{/if.style}} {{#if.alt}}alt="{{alt}}"{{/if.alt}}/>',Image.base="Image",Image.events=["touch","tap","hold","swipe","rotate"],Image}(Atoms.Class.Atom),Atoms.Atom.Input=function(_super){function Input(){return Input.__super__.constructor.apply(this,arguments)}return __extends(Input,_super),Input.template='<input type="{{type}}" name="{{name}}" {{#if.placeholder}}placeholder="{{placeholder}}"{{/if.placeholder}} {{#if.style}}class="{{style}}"{{/if.style}} {{#if.value}}value="{{value}}"{{/if.value}} {{#required}}required{{/required}} {{#disabled}}disabled{{/disabled}} {{#if.maxlength}}maxlength={{maxlength}}{{/if.maxlength}} />',Input.base="Input",Input.events=["keypress","keyup","change"],Input["default"]={type:"text"},Input.prototype.value=function(value){return null!=value?this.el.val(value):this.el.val()},Input.prototype.error=function(value,focus){var method;return null==focus&&(focus=!0),method="removeClass",value&&(method="addClass",focus&&this.el[0].focus()),this.el[method]("error")},Input}(Atoms.Class.Atom),Atoms.Atom.Label=function(_super){function Label(){return Label.__super__.constructor.apply(this,arguments)}return __extends(Label,_super),Label.template='<label {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.icon}}<span class="icon {{icon}}"></span>{{/if.icon}}\n  {{text}}\n  {{#if.count}}<strong>{{count}}</strong>{{/if.count}}\n</label>',Label.base="Label",Label}(Atoms.Class.Atom),Atoms.Atom.Li=function(_super){function Li(){return Li.__super__.constructor.apply(this,arguments)}return __extends(Li,_super),Li.template='<li {{#if.style}}class="{{style}}"{{/if.style}}>\n  {{#if.image}}\n  <figure style="background-image: url({{image}});"></figure>\n  {{/if.image}}\n  <div>\n    {{#if.info}}\n      <span>{{info}}</span>\n    {{/if.info}}\n    {{#if.text}}\n      <strong>{{text}}</strong>\n    {{/if.text}}\n    {{#if.description}}\n      <small>{{description}}</small>\n    {{/if.description}}\n  </div>\n</li>',Li.base="Li",Li.events=["tap","singleTap","doubleTap","hold","swipeLeft","swipeRight"],Li}(Atoms.Class.Atom),Atoms.Atom.Link=function(_super){function Link(){return Link.__super__.constructor.apply(this,arguments)}return __extends(Link,_super),Link.template='<a href="{{href}}" {{#if.target}}target="{{target}}"{{/if.target}} {{#if.style}}class="{{style}}"{{/if.style}} >\n  {{#if.icon}}<span class="icon {{icon}}"></span>{{/if.icon}}\n  {{#if.text}}{{text}}{{/if.text}}\n</a>',Link.base="Link",Link.events=["touch"],Link}(Atoms.Class.Atom),Atoms.Atom.Select=function(_super){function Select(){Select.__super__.constructor.apply(this,arguments),null!=this.attributes.value&&this.value(this.attributes.value)}return __extends(Select,_super),Select.template='<select name="{{name}}" {{#if.style}}class="{{style}}"{{/if.style}} {{#required}}required{{/required}} {{#disabled}}disabled{{/disabled}}>\n  {{#options}}\n    <option value="{{value}}">{{label}}</option>\n  {{/options}}\n</select>',Select.base="Select",Select.events=["change"],Select.prototype.value=function(value){return null!=value?this.el.val(value):this.el.val()},Select}(Atoms.Class.Atom),Atoms.Atom.Switch=function(_super){function Switch(){this.onTap=__bind(this.onTap,this);var event_name;Switch.__super__.constructor.apply(this,arguments),null!=this.attributes.value&&this.value(this.attributes.value),event_name=("undefined"!=typeof $$&&null!==$$&&"function"==typeof $$.isMobile?$$.isMobile():void 0)?"tap":"change",this.el.bind(event_name,this.onTap)}return __extends(Switch,_super),Switch.template='<input type="checkbox" name="{{name}}" {{#if.style}}class="{{style}}"{{/if.style}} {{#required}}required{{/required}} {{#disabled}}disabled{{/disabled}} />',Switch.base="Switch",Switch.events=["change"],Switch.prototype.value=function(value){return value===!0?this.el.attr("checked","true"):value===!1?this.el.removeAttr("checked"):null!=this.el.attr("checked")},Switch.prototype.onTap=function(event){return event.preventDefault(),this.value(!this.el.attr("checked")),this.bubble("change",event)},Switch}(Atoms.Class.Atom),Atoms.Atom.Textarea=function(_super){function Textarea(){return Textarea.__super__.constructor.apply(this,arguments)}return __extends(Textarea,_super),Textarea.template='<textarea name="{{name}}" {{#if.placeholder}}placeholder="{{placeholder}}"{{/if.placeholder}} {{#if.style}}class="{{style}}"{{/if.style}} {{#required}}required{{/required}} {{#disabled}}disabled{{/disabled}}>{{#if.value}}{{value}}{{/if.value}}</textarea>',Textarea.base="Textarea",Textarea.events=["keypress","keyup","change"],Textarea.prototype.value=function(value){return null!=value?this.el.val(value):this.el.val()},Textarea}(Atoms.Class.Atom),Atoms.Molecule.Div=function(_super){function Div(){return Div.__super__.constructor.apply(this,arguments)}return __extends(Div,_super),Div.template='<div {{#if.style}}class="{{style}}"{{/if.style}}></div>',Div.base="Div",Div.events=["touch"],Div}(Atoms.Class.Molecule),Atoms.Molecule.Form=function(_super){function Form(){return this.onButtonTouch=__bind(this.onButtonTouch,this),this.onSwitchChange=__bind(this.onSwitchChange,this),this.onSelectChange=__bind(this.onSelectChange,this),this.onInputKeyup=__bind(this.onInputKeyup,this),this.onInputKeypress=__bind(this.onInputKeypress,this),Form.__super__.constructor.apply(this,arguments)}return __extends(Form,_super),Form.template='<form {{#if.style}}class="{{style}}"{{/if.style}}></form>',Form.available=["Atom.Label","Atom.Input","Atom.Textarea","Atom.Select","Atom.Switch","Atom.Button"],Form.events=["change","submit","error"],Form.base="Form",Form.defaults={events:["submit"]},Form.prototype.value=function(){var child,properties,_i,_len,_ref;for(properties={},_ref=this.children,_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],child.attributes.name&&null!=child.value&&(properties[child.attributes.name.toLowerCase()]=child.value());return properties},Form.prototype.clean=function(){var child,_i,_len,_ref;for(_ref=this.children,_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],child.attributes.name&&null!=child.value&&child.value("");return!0},Form.prototype.onInputKeypress=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onInputKeyup=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onSelectChange=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onSwitchChange=function(event,atom){return this._bubbleChange(event,atom)},Form.prototype.onButtonTouch=function(event){var child,method,required,_i,_len,_ref;for(event.preventDefault(),required=!0,_ref=this.children,_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],null!=child.value&&(child.attributes.required&&!child.value()?(child.el.addClass("error"),required=!1):child.el.removeClass("error"));return method=required?"submit":"error",this.bubble(method,event),!1},Form.prototype._bubbleChange=function(event,atom){return event.preventDefault(),atom.attributes.required&&!atom.value()?atom.el.addClass("error"):atom.el.removeClass("error"),this.bubble("change",event),!1},Form}(Atoms.Class.Molecule),Atoms.Molecule.List=function(_super){function List(){return this.onLiTap=__bind(this.onLiTap,this),this.onLiSingleTap=__bind(this.onLiSingleTap,this),this.select=__bind(this.select,this),this.findBy=__bind(this.findBy,this),List.__super__.constructor.apply(this,arguments)}return __extends(List,_super),List.template='<ul {{#if.style}}class="{{style}}"{{/if.style}}></ul>',List.available=["Atom.Li"],List.base="List",List.events=["select"],List.prototype.findBy=function(field,value){return this.select(function(entity){var _ref;return(null!=(_ref=entity[field])?_ref.toLowerCase().trim():void 0)===value.toLowerCase().trim()?entity:void 0})},List.prototype.select=function(callback){var record,records,_i,_len,_ref,_results;for(this.clean(),this.children=[],callback&&(records=function(){var _i,_len,_ref,_results;for(_ref=this._records,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)record=_ref[_i],callback(record.entity)&&_results.push(record);return _results}.call(this)),_ref=records||this._records,_results=[],_i=0,_len=_ref.length;_len>_i;_i++)record=_ref[_i],_results.push(this._addAtomEntity(record.entity,this.attributes.bind,record=!1));return _results},List.prototype.all=function(){return this.select()},List.prototype.clean=function(){return this.el.html("")},List.prototype.onLiSingleTap=function(event,atom){return this._bubbleSelect(event,atom)},List.prototype.onLiTap=function(event,atom){return this._bubbleSelect(event,atom)},List.prototype._bubbleSelect=function(event,atom){return event.preventDefault(),this.bubble("select",atom),!1},List}(Atoms.Class.Molecule),Atoms.Molecule.Navigation=function(_super){function Navigation(){return this.onButtonTouch=__bind(this.onButtonTouch,this),Navigation.__super__.constructor.apply(this,arguments)}return __extends(Navigation,_super),Navigation.template='<nav {{#if.style}}class="{{style}}"{{/if.style}}></nav>',Navigation.available=["Molecule.Form","Atom.Button","Atom.Link"],Navigation.base="Navigation",Navigation.events=["select"],Navigation.prototype.onButtonTouch=function(event,atom){return this._active(atom),this.bubble("select",event,atom),__path(atom.attributes.path),!1},Navigation.prototype.onLinkTouch=function(event,atom){return __path(atom.attributes.path),!1},Navigation.prototype.onArticleNavigation=function(){var article,child,event,hierarchy,path,_i,_len,_ref;for(event=arguments[0],article=arguments[1],hierarchy=3<=arguments.length?__slice.call(arguments,2):[],path=Atoms.Url.path().substr(1),_ref=this.children,_i=0,_len=_ref.length;_len>_i;_i++)if(child=_ref[_i],child.attributes.path===path){this._active(child);break}return!1},Navigation.prototype._active=function(atom){return atom.el.addClass("active").siblings().removeClass("active")},Navigation}(Atoms.Class.Molecule),__path=function(path){var parts;return null!=path&&(parts=path.split("/"),1===parts.length?"back"===parts[0]?Atoms.Url.back():Atoms.App.Url.aside(parts[0]):Atoms.Url.path()==="/"+path?Atoms.App.Url.aside():2===parts.length&&Atoms.Url.path(path)),!1},Atoms.Molecule.Search=function(_super){function Search(){return this.onButtonTouch=__bind(this.onButtonTouch,this),this.onInputKeyup=__bind(this.onInputKeyup,this),Search.__super__.constructor.apply(this,arguments)}return __extends(Search,_super),Search.available=["Atom.Input","Atom.Button"],Search.events=["change","submit"],Search["extends"]=!0,Search["default"]={events:["submit"],children:[{"Atom.Input":{id:"input",type:"search",placeholder:"Type your search...",events:["keyup"],required:!0}},{"Atom.Button":{icon:"search"}}]},Search.prototype.value=function(value){return this.input.value(value||null)},Search.prototype.onInputKeyup=function(event,atom){return event.preventDefault(),this.bubble("change",event.keyCode),13===event.keyCode&&this._bubbleSubmit(event,atom),!1},Search.prototype.onButtonTouch=function(event,atom){return event.preventDefault(),this._bubbleSubmit(event,atom),!1},Search.prototype._bubbleSubmit=function(event){var value;return value=this.input.value(),""!==value?this.bubble("submit",event):void 0},Search}(Atoms.Molecule.Form),Atoms.Organism.Article=function(_super){function Article(){this.onAnimationEnd=__bind(this.onAnimationEnd,this),Article.__super__.constructor.apply(this,arguments),Atoms.App.Article[this.constructor.name]=this}return __extends(Article,_super),Article.template='<article {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></article>',Article.available=["Organism.Header","Organism.Section","Organism.Footer","Molecule.Navigation"],Article.base="Article",Article.events=["show","hide"],Article.prototype.render=function(){var animation_end,_i,_len,_ref,_results;for(Article.__super__.render.apply(this,arguments),_ref=Atoms.Core.Constants.ANIMATION.END.split(" "),_results=[],_i=0,_len=_ref.length;_len>_i;_i++)animation_end=_ref[_i],_results.push(this.el.bind(animation_end,this.onAnimationEnd));return _results},Article.prototype.state=function(name){return this.el.addClass("active").attr("data-state",name)},Article.prototype.section=function(id){var child,_i,_len,_ref;for(this.tunnel("navigation",this),_ref=this.children,_i=0,_len=_ref.length;_len>_i;_i++)child=_ref[_i],"Section"===child.constructor.base&&(child.attributes.id===id?child.show():child.hide());return"aside-show"===this.el.attr("data-state")?this.aside():void 0},Article.prototype.aside=function(id){var method;return null!=Atoms.App.Aside[id.toClassName()]?(method=this.el.hasClass("aside")?"hide":"show",Atoms.App.Aside[id.toClassName()][method](),"hide"===method&&this.el.removeClass("aside"),this.state("aside-"+method)):void 0},Article.prototype.onAnimationEnd=function(){var state;return state=this.el.attr("data-state"),"in"===state||"back-out"===state?this.trigger("show"):("out"===state||"back-in"===state)&&this.trigger("hide"),"in"!==state&&"back-out"!==state&&"aside-show"!==state&&"aside-hide"!==state&&this.el.removeClass("active"),"aside-show"===state&&this.el.addClass("aside"),this.el.removeAttr("data-state")},Article}(Atoms.Class.Organism),Atoms.Organism.Aside=function(_super){function Aside(attributes){null==attributes&&(attributes={}),this.onAnimationEnd=__bind(this.onAnimationEnd,this),attributes.method="prepend",Aside.__super__.constructor.call(this,attributes),Atoms.App.Aside[this.constructor.name]=this}return __extends(Aside,_super),Aside.template='<aside {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></aside>',Aside.available=["Organism.Header","Organism.Section","Organism.Footer","Molecule.Navigation"],Aside.base="Aside",Aside.events=["show","hide"],Aside.prototype.render=function(){var animation_end,_i,_len,_ref,_results;for(Aside.__super__.render.apply(this,arguments),_ref=Atoms.Core.Constants.ANIMATION.END.split(" "),_results=[],_i=0,_len=_ref.length;_len>_i;_i++)animation_end=_ref[_i],_results.push(this.el.bind(animation_end,this.onAnimationEnd));return _results},Aside.prototype.show=function(){return this.el||this.render(),this.el.addClass("active"),this.el.attr("data-state","in")},Aside.prototype.hide=function(){var _ref;return(null!=(_ref=this.el)?_ref.hasClass("active"):void 0)?this.el.attr("data-state","out"):void 0},Aside.prototype.onAnimationEnd=function(){var state;return state=this.el.attr("data-state"),this.trigger("in"===state?"show":"hide"),this.el.removeAttr("data-state"),"out"===state?this.el.removeClass("active"):void 0},Aside}(Atoms.Class.Organism),Atoms.Organism.Footer=function(_super){function Footer(){Footer.__super__.constructor.apply(this,arguments),this.render()}return __extends(Footer,_super),Footer.template='<footer {{#if.style}}class="{{style}}"{{/if.style}}></footer>',Footer.available=["Molecule.Navigation"],Footer.base="Footer",Footer}(Atoms.Class.Organism),Atoms.Organism.Header=function(_super){function Header(){Header.__super__.constructor.apply(this,arguments),this.render()}return __extends(Header,_super),Header.template='<header {{#if.style}}class="{{style}}"{{/if.style}}></header>',Header.available=["Atom.Heading","Atom.Icon","Molecule.Navigation"],Header.base="Header",Header}(Atoms.Class.Organism),Atoms.Organism.Modal=function(_super){function Modal(attributes){var animation_end,block_el,_i,_len,_ref;for(null==attributes&&(attributes={}),this.onAnimationEnd=__bind(this.onAnimationEnd,this),Modal.__super__.constructor.call(this,attributes),block_el=Atoms.$(document.createElement("div")).attr("data-system","modal"),Atoms.$(this.attributes.container||document.body).prepend(block_el),this.attributes.container=block_el,this.render(),_ref=Atoms.Core.Constants.ANIMATION.END.split(" "),_i=0,_len=_ref.length;_len>_i;_i++)animation_end=_ref[_i],this.el.bind(animation_end,this.onAnimationEnd);Atoms.App.Modal[this.constructor.name]=this}return __extends(Modal,_super),Modal.template='<article {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></article>',Modal.available=["Organism.Header","Organism.Section","Organism.Footer"],Modal.base="Modal",Modal.events=["show","hide"],Modal.prototype.show=function(){return this.el.parent().addClass("active"),this.el.addClass("show"),this.trigger("show")},Modal.prototype.hide=function(){return this.el.addClass("hide"),this.trigger("hide")},Modal.prototype.onAnimationEnd=function(){return this.el.hasClass("show")&&this.el.removeClass("show"),this.el.hasClass("hide")?(this.el.removeClass("hide"),this.el.parent().removeClass("active")):void 0},Modal}(Atoms.Class.Organism),Atoms.Organism.Loading=function(_super){function Loading(){return Loading.__super__.constructor.apply(this,arguments)}return __extends(Loading,_super),Loading}(Atoms.Organism.Modal),new Atoms.Organism.Loading,Atoms.Organism.Section=function(_super){function Section(){Section.__super__.constructor.apply(this,arguments),this.render()}return __extends(Section,_super),Section.template='<section {{#if.id}}id="{{id}}"{{/if.id}} {{#if.style}}class="{{style}}"{{/if.style}}></section>',Section.available=["Molecule.Div","Molecule.Form","Molecule.List","Molecule.Navigation","Atom.Audio","Atom.Figure","Atom.Button","Atom.GMap","Atom.Heading","Atom.Icon","Atom.Image","Atom.Video"],Section.base="Section",Section.events=["show","hide"],Section.prototype.show=function(){return this.el.addClass("active"),this.bubble("show")},Section.prototype.hide=function(){return this.el.removeClass("active"),this.bubble("hide")},Section}(Atoms.Class.Organism)}).call(this);