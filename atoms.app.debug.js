(function() {
  var _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  Atoms.App = {
    Article: {},
    Aside: {},
    Modal: {},
    Section: {},
    Extension: {},
    Url: null
  };

  /*
  HTML5 API History Wrapper
  
  @namespace Atoms
  @class Url
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.App.Url = (function(a) {
    var _activeSection, _addStepHistory, _article, _aside, _onChangeRoute, _options, _stepHistory;
    _article = void 0;
    _options = Atoms.Url.options;
    _onChangeRoute = function(properties) {
      var article;
      article = a.App.Article[properties.article.toClassName()];
      if (!article.el) {
        article.render();
      }
      return setTimeout(function() {
        if (!_options.forward) {
          _stepHistory(0);
        }
        _activeSection(article, properties.section);
        if (_article !== article) {
          if (_options.forward) {
            _stepHistory(1);
            article.state("in");
            if (_article) {
              _article.state("back-in");
            }
          } else {
            _article.state("out");
            article.state("back-out");
          }
          return _article = article;
        }
      }, 10);
    };
    _aside = function() {
      return _article.aside();
    };
    _activeSection = function(article, section) {
      _addStepHistory();
      return article.section(section);
    };
    _addStepHistory = function() {
      var state;
      state = window.history.state || {
        steps: 0
      };
      state.steps++;
      return window.history.replaceState(state);
    };
    _stepHistory = function(value) {
      return window.history.replaceState({
        steps: value
      });
    };
    (function() {
      return Atoms.Url.listen("/:article/:section", _onChangeRoute);
    })();
    return {
      aside: _aside
    };
  })(Atoms);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Button
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Button = (function(_super) {
    __extends(Button, _super);

    Button.template = "<button class=\"{{style}}{{^if.text}} icon{{/if.text}}\" {{#if.disabled}}disabled{{/if.disabled}}>\n  {{#if.icon}}<span class=\"icon {{icon}}\"></span>{{/if.icon}}\n  {{#if.text}}<abbr>{{text}}</abbr>{{/if.text}}\n</button>";

    Button.base = "Button";

    function Button(attributes) {
      this["default"] = {
        events: ["touch"]
      };
      Button.__super__.constructor.apply(this, arguments);
    }

    return Button;

  })(Atoms.Class.Atom);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Figure
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Figure = (function(_super) {
    __extends(Figure, _super);

    function Figure() {
      _ref = Figure.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Figure.template = "<figure {{#if.style}}class=\"{{style}}\"{{/if.style}} {{#if.url}}style=\"background-image: url({{url}});\"{{/if.url}}></figure>";

    Figure.base = "Figure";

    return Figure;

  })(Atoms.Class.Atom);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Heading
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Heading = (function(_super) {
    __extends(Heading, _super);

    Heading.template = "<{{size}} {{#if.style}}class=\"{{style}}\"{{/if.style}}>\n  {{#if.image}}<img src=\"image\" />{{/if.image}}\n  {{#if.text}}{{text}}{{/if.text}}\n</{{size}}>";

    Heading.base = "Heading";

    function Heading() {
      this["default"] = {
        size: "h1"
      };
      Heading.__super__.constructor.apply(this, arguments);
    }

    return Heading;

  })(Atoms.Class.Atom);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Icon
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Icon = (function(_super) {
    __extends(Icon, _super);

    function Icon() {
      _ref1 = Icon.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Icon.template = "<span class=\"icon {{#if.icon}}{{icon}}{{/if.icon}} {{#if.style}}{{style}}{{/if.style}}\"></span>";

    Icon.base = "Icon";

    return Icon;

  })(Atoms.Class.Atom);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Image
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Image = (function(_super) {
    __extends(Image, _super);

    function Image() {
      _ref2 = Image.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    Image.template = "<img src=\"{{url}}\" {{#if.style}}class=\"{{style}}\"{{/if.style}} {{#if.alt}}alt=\"{{alt}}\"{{/if.alt}}/>";

    Image.base = "Image";

    return Image;

  })(Atoms.Class.Atom);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Input
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Input = (function(_super) {
    __extends(Input, _super);

    Input.template = "<input type=\"{{type}}\" name=\"{{name}}\" placeholder=\"{{placeholder}}\" {{#if.style}}class=\"{{style}}\"{{/if.style}} {{#if.value}}value=\"{{value}}\"{{/if.value}} {{#required}}required{{/required}} {{#disabled}}disabled{{/disabled}} />";

    Input.base = "Input";

    function Input(attributes) {
      this["default"] = {
        type: "text"
      };
      Input.__super__.constructor.apply(this, arguments);
    }

    Input.prototype.value = function(value) {
      if (value != null) {
        return this.el.val(value);
      } else {
        return this.el.val();
      }
    };

    Input.prototype.error = function(value) {
      if (value != null) {
        return this.el.filter("input").addClass("error");
      } else {
        return this.el.filter("input").removeClass("error");
      }
    };

    return Input;

  })(Atoms.Class.Atom);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Label
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Label = (function(_super) {
    __extends(Label, _super);

    function Label() {
      _ref3 = Label.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    Label.template = "<label {{#if.style}}class=\"{{style}}\"{{/if.style}}>\n  {{#if.icon}}<span class=\"icon {{icon}}\"></span>{{/if.icon}}\n  {{text}}\n  {{#if.count}}<strong>{{count}}</strong>{{/if.count}}\n</label>";

    Label.base = "Label";

    return Label;

  })(Atoms.Class.Atom);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Li
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Li = (function(_super) {
    __extends(Li, _super);

    function Li() {
      _ref4 = Li.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    Li.template = "<li {{#if.style}}class=\"{{style}}\"{{/if.style}}>\n  {{#if.image}}\n  <figure style=\"background-image: url({{image}});\"></figure>\n  {{/if.image}}\n  <div>\n    {{#if.date}}\n      <span>{{date}}</span>\n    {{/if.date}}\n    {{#if.text}}\n      <strong>{{text}}</strong>\n    {{/if.text}}\n    {{#if.description}}\n      <small>{{description}}</small>\n    {{/if.description}}\n  </div>\n</li>";

    Li.base = "Li";

    return Li;

  })(Atoms.Class.Atom);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Link
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Link = (function(_super) {
    __extends(Link, _super);

    function Link() {
      _ref5 = Link.__super__.constructor.apply(this, arguments);
      return _ref5;
    }

    Link.template = "<a href=\"{{href}}\" {{#if.style}}class=\"{{style}}\"{{/if.style}}>\n  {{#if.icon}}<span class=\"icon {{icon}}\"></span>{{/if.icon}}\n  {{#if.text}}{{text}}{{/if.text}}\n</a>";

    Link.base = "Link";

    return Link;

  })(Atoms.Class.Atom);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Select
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Select = (function(_super) {
    __extends(Select, _super);

    Select.template = "<select name=\"{{name}}\" {{#if.style}}class=\"{{style}}\"{{/if.style}}>\n  {{#options}}\n    <option value=\"{{value}}\">{{label}}</option>\n  {{/options}}\n</select>";

    Select.base = "Select";

    function Select() {
      Select.__super__.constructor.apply(this, arguments);
      if (this.attributes.value != null) {
        this.value(this.attributes.value);
      }
    }

    Select.prototype.value = function(value) {
      if (value != null) {
        return this.el.val(value);
      } else {
        return this.el.val();
      }
    };

    return Select;

  })(Atoms.Class.Atom);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Switch
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Switch = (function(_super) {
    __extends(Switch, _super);

    Switch.template = "<input type=\"checkbox\"/>";

    Switch.base = "Switch";

    function Switch() {
      this.onTouch = __bind(this.onTouch, this);
      Switch.__super__.constructor.apply(this, arguments);
      if (this.attributes.value != null) {
        this.value(this.attributes.value);
      }
      this.el.bind("tap", this.onTouch);
    }

    Switch.prototype.value = function(value) {
      if (value === true) {
        return this.el.attr("checked", "true");
      } else if (value === false) {
        return this.el.removeAttr("checked");
      } else {
        return this.el.attr("checked") != null;
      }
    };

    Switch.prototype.error = function(value) {
      var method;
      method = value != null ? "addClass" : "removeClass";
      return this.el[method]("error");
    };

    Switch.prototype.onTouch = function(event) {
      this.value(!(this.el.attr("checked")));
      if (__indexOf.call(this.attributes.events, "change") >= 0) {
        return this.bubble("change", event);
      }
    };

    return Switch;

  })(Atoms.Class.Atom);

  /*
  @TODO
  
  @namespace Atoms.Atom
  @class Textarea
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Atom.Textarea = (function(_super) {
    __extends(Textarea, _super);

    function Textarea() {
      _ref6 = Textarea.__super__.constructor.apply(this, arguments);
      return _ref6;
    }

    Textarea.template = "<textarea name=\"{{name}}\" {{#if.placeholder}}placeholder=\"{{placeholder}}\"{{/if.placeholder}} {{#if.style}}class=\"{{style}}\"{{/if.style}}  {{#required}}required{{/required}}>{{#if.value}}{{value}}{{/if.value}}</textarea>";

    Textarea.base = "Textarea";

    Textarea.prototype.value = function(value) {
      if (value != null) {
        return this.el.val(value);
      } else {
        return this.el.val();
      }
    };

    Textarea.prototype.error = function(value) {
      if (value != null) {
        return this.el.addClass("error");
      } else {
        return this.el.removeClass("error");
      }
    };

    return Textarea;

  })(Atoms.Class.Atom);

  /*
  Basic fieldset for search
  
  @namespace Atoms.Molecule
  @class Form
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Molecule.Form = (function(_super) {
    __extends(Form, _super);

    Form.template = "<form {{#if.id}}id=\"{{id}}\"{{/if.id}} {{#if.style}}class=\"{{style}}\"{{/if.style}}></form>";

    Form.available = ["Atom.Label", "Atom.Input", "Atom.Textarea", "Atom.Select", "Atom.Switch", "Atom.Button"];

    Form.base = "Form";

    function Form() {
      this.onSwitchChange = __bind(this.onSwitchChange, this);
      this.onSelectChange = __bind(this.onSelectChange, this);
      this.onButtonTouch = __bind(this.onButtonTouch, this);
      this.onInputKeyup = __bind(this.onInputKeyup, this);
      this.onInputKeypress = __bind(this.onInputKeypress, this);
      Form.__super__.constructor.apply(this, arguments);
    }

    Form.prototype.value = function() {
      var child, properties, _i, _len, _ref7;
      properties = {};
      _ref7 = this.children;
      for (_i = 0, _len = _ref7.length; _i < _len; _i++) {
        child = _ref7[_i];
        if (child.value != null) {
          properties[child.attributes.name] = child.value();
        }
      }
      return properties;
    };

    Form.prototype.onInputKeypress = function(event, atom) {
      return this.bubble("keypress", event);
    };

    Form.prototype.onInputKeyup = function(event, atom) {
      return this.bubble("keyup", event);
    };

    Form.prototype.onButtonTouch = function(event, atom) {
      var child, required, _i, _len, _ref7;
      event.preventDefault();
      required = true;
      _ref7 = this.children;
      for (_i = 0, _len = _ref7.length; _i < _len; _i++) {
        child = _ref7[_i];
        if (child.value != null) {
          if (child.attributes.required && !child.value()) {
            child.el.addClass("error");
            required = false;
          } else {
            child.el.removeClass("error");
          }
        }
      }
      if (required && (this.attributes.events != null) && __indexOf.call(this.attributes.events, "submit") >= 0) {
        if (required) {
          this.bubble("submit", event);
        }
        return false;
      }
    };

    Form.prototype.onSelectChange = function(event, atom) {
      event.preventDefault();
      return this.bubble("change", event);
    };

    Form.prototype.onSwitchChange = function(event, atom) {
      event.preventDefault();
      return this.bubble("change", event);
    };

    return Form;

  })(Atoms.Class.Molecule);

  /*
  Base for lists
  
  @namespace Atoms.Molecule
  @class List
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Molecule.List = (function(_super) {
    __extends(List, _super);

    function List() {
      _ref7 = List.__super__.constructor.apply(this, arguments);
      return _ref7;
    }

    List.template = "<ul {{#if.id}}id=\"{{id}}\"{{/if.id}} {{#if.style}}class=\"{{style}}\"{{/if.style}}></ul>";

    List.available = ["Atom.Li"];

    List.base = "List";

    List.prototype.filter = function() {
      return this;
    };

    List.prototype.clean = function() {
      return this;
    };

    return List;

  })(Atoms.Class.Molecule);

  /*
  Basic fieldset for search
  
  @namespace Atoms.Molecule
  @class Navigation
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Molecule.Navigation = (function(_super) {
    __extends(Navigation, _super);

    Navigation.template = "<nav {{#if.id}}id=\"{{id}}\"{{/if.id}} {{#if.style}}class=\"{{style}}\"{{/if.style}}></nav>";

    Navigation.available = ["Atom.Button", "Atom.Link"];

    Navigation.base = "Navigation";

    function Navigation() {
      this.onButtonTouch = __bind(this.onButtonTouch, this);
      this["default"] = {
        style: "left"
      };
      Navigation.__super__.constructor.apply(this, arguments);
    }

    Navigation.prototype.onButtonTouch = function(event, atom) {
      var path;
      this.__activeChild(atom);
      if ((this.attributes.events != null) && __indexOf.call(this.attributes.events, "select") >= 0) {
        this.bubble("select", event);
      }
      path = atom.attributes.path;
      if (path) {
        if (path === "aside") {
          Atoms.App.Url.aside();
        } else if (path === "back") {
          Atoms.Url.back();
        } else if (path != null) {
          Atoms.Url.path(path);
        }
        return false;
      }
    };

    Navigation.prototype.onArticleNavigation = function() {
      var article, child, event, hierarchy, path, _i, _len, _ref8;
      event = arguments[0], article = arguments[1], hierarchy = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      path = Atoms.Url.path().substr(1);
      _ref8 = this.children;
      for (_i = 0, _len = _ref8.length; _i < _len; _i++) {
        child = _ref8[_i];
        if (!(child.attributes.path === path)) {
          continue;
        }
        this.__activeChild(child);
        break;
      }
      return false;
    };

    Navigation.prototype.__activeChild = function(atom) {
      this.el.parent().find("[data-atom=button]").removeClass("active");
      return atom.el.addClass("active");
    };

    return Navigation;

  })(Atoms.Class.Molecule);

  /*
  Basic fieldset for search
  
  @namespace Atoms.Molecule
  @class Search
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Molecule.Search = (function(_super) {
    __extends(Search, _super);

    Search.template = "<fieldset {{#if.id}}id=\"{{id}}\"{{/if.id}} {{#if.style}}class=\"{{style}}\"{{/if.style}}></fieldset>";

    Search.available = ["Atom.Input", "Atom.Button"];

    Search.base = "Search";

    function Search() {
      this.buttonTouch = __bind(this.buttonTouch, this);
      this.inputKeyup = __bind(this.inputKeyup, this);
      this["default"] = {
        children: [
          {
            "Atom.Input": {
              type: "search",
              placeholder: "Type your search...",
              events: ["keyup"]
            }
          }, {
            "Atom.Button": {
              icon: "Search"
            }
          }
        ]
      };
      Search.__super__.constructor.apply(this, arguments);
    }

    Search.prototype.inputKeyup = function(event, atom) {
      this.trigger("keyup", event.keyCode);
      if (event.keyCode === 13) {
        return this._search(event, atom);
      }
    };

    Search.prototype.buttonTouch = function(event, atom) {
      return this._search(event, atom);
    };

    Search.prototype._search = function(event, atom) {
      var value;
      value = this.input[0].el.val();
      if (value !== "") {
        return this.bubble("enter", value, atom);
      }
    };

    return Search;

  })(Atoms.Class.Molecule);

  /*
  ...
  
  @namespace Atoms.Organism
  @class Article
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Organism.Article = (function(_super) {
    __extends(Article, _super);

    Article.template = "<article {{#if.id}}id=\"{{id}}\"{{/if.id}} {{#if.style}}class=\"{{style}}\"{{/if.style}}></article>";

    Article.available = ["Organism.Header", "Organism.Section", "Organism.Footer", "Molecule.Navigation"];

    Article.base = "Article";

    function Article() {
      this.onAnimationEnd = __bind(this.onAnimationEnd, this);
      Article.__super__.constructor.apply(this, arguments);
      Atoms.App.Article[this.constructor.name] = this;
    }

    Article.prototype.render = function() {
      var animation_end, _i, _len, _ref8, _results;
      Article.__super__.render.apply(this, arguments);
      _ref8 = Atoms.Core.Constants.ANIMATION.END.split(" ");
      _results = [];
      for (_i = 0, _len = _ref8.length; _i < _len; _i++) {
        animation_end = _ref8[_i];
        _results.push(this.el.bind(animation_end, this.onAnimationEnd));
      }
      return _results;
    };

    Article.prototype["in"] = function() {
      return this.state("in");
    };

    Article.prototype.out = function() {
      return this.state("out");
    };

    Article.prototype.backIn = function() {
      return this.state("back-in");
    };

    Article.prototype.backOut = function() {
      return this.state("back-out");
    };

    Article.prototype.state = function(name) {
      return this.el.addClass("active").attr("data-state", name);
    };

    Article.prototype.section = function(id) {
      this.tunnel("navigation", this);
      this.el.children("#" + id).addClass("active").siblings("section").removeClass("active");
      if (this.el.attr("data-state") === "aside-in") {
        return this.aside();
      }
    };

    Article.prototype.aside = function() {
      var method;
      method = this.el.hasClass("aside") ? "out" : "in";
      if (this.attributes.aside != null) {
        Atoms.App.Aside[this.attributes.aside][method]();
      }
      if (method === "out") {
        this.el.removeClass("aside");
      }
      return this.state("aside-" + method);
    };

    Article.prototype.onAnimationEnd = function(event) {
      var state;
      state = this.el.attr("data-state");
      this.trigger(state);
      if (state === "in" || state === "back-out") {
        this.trigger("active");
      } else if (state === "out" || state === "back-in") {
        this.trigger("inactive");
      }
      if (state !== "in" && state !== "back-out" && state !== "aside-in" && state !== "aside-out") {
        this.el.removeClass("active");
      }
      if (state === "aside-in") {
        this.el.addClass("aside");
      }
      return this.el.removeAttr("data-state");
    };

    return Article;

  })(Atoms.Class.Organism);

  /*
  ...
  
  @namespace Atoms.Organism
  @class Aside
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Organism.Aside = (function(_super) {
    __extends(Aside, _super);

    Aside.template = "<aside {{#if.id}}id=\"{{id}}\"{{/if.id}} {{#if.style}}class=\"{{style}}\"{{/if.style}}></aside>";

    Aside.available = ["Organism.Header", "Organism.Section", "Organism.Footer", "Molecule.Navigation"];

    Aside.base = "Aside";

    function Aside(attributes) {
      if (attributes == null) {
        attributes = {};
      }
      this.onAnimationEnd = __bind(this.onAnimationEnd, this);
      attributes.method = "prepend";
      Aside.__super__.constructor.call(this, attributes);
      Atoms.App.Aside[this.constructor.name] = this;
    }

    Aside.prototype.render = function() {
      var animation_end, _i, _len, _ref8, _results;
      Aside.__super__.render.apply(this, arguments);
      _ref8 = Atoms.Core.Constants.ANIMATION.END.split(" ");
      _results = [];
      for (_i = 0, _len = _ref8.length; _i < _len; _i++) {
        animation_end = _ref8[_i];
        _results.push(this.el.bind(animation_end, this.onAnimationEnd));
      }
      return _results;
    };

    Aside.prototype["in"] = function() {
      if (!this.el) {
        this.render();
      }
      this.el.addClass("active");
      return this.el.attr("data-state", "in");
    };

    Aside.prototype.out = function() {
      var _ref8;
      if ((_ref8 = this.el) != null ? _ref8.hasClass("active") : void 0) {
        return this.el.attr("data-state", "out");
      }
    };

    Aside.prototype.onAnimationEnd = function(event) {
      var state;
      state = this.el.attr("data-state");
      this.trigger(state);
      this.el.removeAttr("data-state");
      if (state === "out") {
        return this.el.removeClass("active");
      }
    };

    return Aside;

  })(Atoms.Class.Organism);

  /*
  Basic fieldset for search
  
  @namespace Atoms.Organism
  @class Footer
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Organism.Footer = (function(_super) {
    __extends(Footer, _super);

    Footer.template = "<footer {{#if.style}}class=\"{{style}}\"{{/if.style}}></footer>";

    Footer.available = ["Molecule.Navigation"];

    Footer.base = "Footer";

    function Footer() {
      Footer.__super__.constructor.apply(this, arguments);
      this.render();
    }

    return Footer;

  })(Atoms.Class.Organism);

  /*
  Basic fieldset for search
  
  @namespace Atoms.Organism
  @class Header
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Organism.Header = (function(_super) {
    __extends(Header, _super);

    Header.template = "<header {{#if.style}}class=\"{{style}}\"{{/if.style}}></header>";

    Header.available = ["Atom.Heading", "Atom.Icon", "Molecule.Navigation"];

    Header.base = "Header";

    function Header() {
      Header.__super__.constructor.apply(this, arguments);
      this.render();
    }

    return Header;

  })(Atoms.Class.Organism);

  /*
  Base for Modals
  
  @namespace Atoms.Molecule
  @class Modal
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Organism.Modal = (function(_super) {
    __extends(Modal, _super);

    Modal.template = "<article {{#if.style}}class=\"{{style}}\"{{/if.style}}></article>";

    Modal.available = ["Organism.Header", "Organism.Section", "Organism.Footer"];

    Modal.base = "Modal";

    function Modal(attributes) {
      var animation_end, block_el, _i, _len, _ref8;
      if (attributes == null) {
        attributes = {};
      }
      this.onAnimationEnd = __bind(this.onAnimationEnd, this);
      Modal.__super__.constructor.call(this, attributes);
      block_el = Atoms.$(document.createElement("div")).data("system", "modal");
      Atoms.$(this.attributes.container || document.body).prepend(block_el);
      this.attributes.container = block_el;
      this.render();
      _ref8 = Atoms.Core.Constants.ANIMATION.END.split(" ");
      for (_i = 0, _len = _ref8.length; _i < _len; _i++) {
        animation_end = _ref8[_i];
        this.el.bind(animation_end, this.onAnimationEnd);
      }
      Atoms.App.Modal[this.constructor.name] = this;
    }

    Modal.prototype.show = function() {
      this.el.parent().addClass("active");
      this.el.addClass("show");
      return this.trigger("show");
    };

    Modal.prototype.hide = function() {
      this.el.addClass("hide");
      return this.trigger("hide");
    };

    Modal.prototype.onAnimationEnd = function() {
      if (this.el.hasClass("show")) {
        this.el.removeClass("show");
      }
      if (this.el.hasClass("hide")) {
        this.el.removeClass("hide");
        return this.el.parent().removeClass("active");
      }
    };

    return Modal;

  })(Atoms.Class.Organism);

  /*
  Base class for Organism
  
  @namespace Atoms.Organism
  @class Loading
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Organism.Loading = (function(_super) {
    __extends(Loading, _super);

    function Loading() {
      _ref8 = Loading.__super__.constructor.apply(this, arguments);
      return _ref8;
    }

    return Loading;

  })(Atoms.Organism.Modal);

  new Atoms.Organism.Loading();

  /*
  Basic fieldset for search
  
  @namespace Atoms.Organism
  @class Section
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Organism.Section = (function(_super) {
    __extends(Section, _super);

    Section.template = "<section {{#if.id}}id=\"{{id}}\"{{/if.id}} {{#if.style}}class=\"{{style}}\"{{/if.style}}></section>";

    Section.base = "Section";

    function Section() {
      Section.__super__.constructor.apply(this, arguments);
      this.render();
    }

    return Section;

  })(Atoms.Class.Organism);

}).call(this);
