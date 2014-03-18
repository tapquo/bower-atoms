/*
Basic Quo Module

@namespace Quo
@class Base

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {
  "use strict";
  var Atoms, MODULE_KEYWORDS, Quo, _guid, _mustache,
    __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Quo = (function() {
    var $$, CLASS_SELECTOR, ELEMENT_TYPES, EMPTY_ARRAY, HTML_CONTAINERS, ID_SELECTOR, IS_HTML_FRAGMENT, OBJECT_PROTOTYPE, TABLE, TABLE_ROW, TAG_SELECTOR, _compact, _flatten, _fragment, _getDOMObject, _instance, _isOwnProperty;
    EMPTY_ARRAY = [];
    OBJECT_PROTOTYPE = Object.prototype;
    IS_HTML_FRAGMENT = /^\s*<(\w+|!)[^>]*>/;
    ELEMENT_TYPES = [1, 9, 11];
    CLASS_SELECTOR = /^\.([\w-]+)$/;
    ID_SELECTOR = /^#[\w\d-]+$/;
    TAG_SELECTOR = /^[\w-]+$/;
    TABLE = document.createElement('table');
    TABLE_ROW = document.createElement('tr');
    HTML_CONTAINERS = {
      "tr": document.createElement("tbody"),
      "tbody": TABLE,
      "thead": TABLE,
      "tfoot": TABLE,
      "td": TABLE_ROW,
      "th": TABLE_ROW,
      "*": document.createElement("div")
    };
    /*
    Basic Instance of QuoJS
    @method $$
    @param  {string/instance} [OPTIONAL] Selector for handler
    @param  {string} [OPTIONAL] Children in selector
    */

    $$ = function(selector, children) {
      var dom;
      if (!selector) {
        return _instance();
      } else if ($$.toType(selector) === "function") {
        return $$(document).ready(selector);
      } else {
        dom = _getDOMObject(selector, children);
        return _instance(dom, selector);
      }
    };
    /*
    Basic Instance of QuoJS
    @method query
    @param  {string/instance} [OPTIONAL] Selector for handler
    @param  {string} [OPTIONAL] Children in selector
    */

    $$.query = function(domain, selector) {
      var elements;
      if (CLASS_SELECTOR.test(selector)) {
        elements = domain.getElementsByClassName(selector.replace(".", ""));
      } else if (TAG_SELECTOR.test(selector)) {
        elements = domain.getElementsByTagName(selector);
      } else if (ID_SELECTOR.test(selector) && domain === document) {
        elements = domain.getElementById(selector.replace("#", ""));
        if (!elements) {
          elements = [];
        }
      } else {
        elements = domain.querySelectorAll(selector);
      }
      if (elements.nodeType) {
        return [elements];
      } else {
        return Array.prototype.slice.call(elements);
      }
    };
    $$.extend = function(target) {
      Array.prototype.slice.call(arguments, 1).forEach(function(source) {
        var key, _results;
        _results = [];
        for (key in source) {
          _results.push(target[key] = source[key]);
        }
        return _results;
      });
      return target;
    };
    $$.toType = function(obj) {
      return OBJECT_PROTOTYPE.toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
    };
    $$.each = function(elements, callback) {
      var element, i, key, _i, _len;
      i = void 0;
      key = void 0;
      if ($$.toType(elements) === "array") {
        for (i = _i = 0, _len = elements.length; _i < _len; i = ++_i) {
          element = elements[i];
          if (callback.call(element, i, element) === false) {
            elements;
          }
        }
      } else {
        for (key in elements) {
          if (callback.call(elements[key], key, elements[key]) === false) {
            elements;
          }
        }
      }
      return elements;
    };
    $$.map = function(elements, callback) {
      var i, key, value, values;
      values = [];
      i = void 0;
      key = void 0;
      if ($$.toType(elements) === "array") {
        i = 0;
        while (i < elements.length) {
          value = callback(elements[i], i);
          if (value != null) {
            values.push(value);
          }
          i++;
        }
      } else {
        for (key in elements) {
          value = callback(elements[key], key);
          if (value != null) {
            values.push(value);
          }
        }
      }
      return _flatten(values);
    };
    $$.mix = function() {
      var arg, argument, child, len, prop;
      child = {};
      arg = 0;
      len = arguments.length;
      while (arg < len) {
        argument = arguments[arg];
        for (prop in argument) {
          if (_isOwnProperty(argument, prop) && argument[prop] !== undefined) {
            child[prop] = argument[prop];
          }
        }
        arg++;
      }
      return child;
    };
    _instance = function(dom, selector) {
      if (selector == null) {
        selector = "";
      }
      dom = dom || EMPTY_ARRAY;
      dom.selector = selector;
      dom.__proto__ = _instance.prototype;
      return dom;
    };
    _getDOMObject = function(selector, children) {
      var domain, type;
      domain = null;
      type = $$.toType(selector);
      if (type === "array") {
        domain = _compact(selector);
      } else if (type === "string" && IS_HTML_FRAGMENT.test(selector)) {
        domain = _fragment(selector.trim(), RegExp.$1);
        selector = null;
      } else if (type === "string") {
        domain = $$.query(document, selector);
        if (children) {
          if (domain.length === 1) {
            domain = $$.query(domain[0], children);
          } else {
            domain = $$.map(function() {
              return $$.query(domain, children);
            });
          }
        }
      } else if (ELEMENT_TYPES.indexOf(selector.nodeType) >= 0 || selector === window) {
        domain = [selector];
        selector = null;
      }
      return domain;
    };
    _fragment = function(markup, tag) {
      var container;
      if (tag == null) {
        tag = "*";
      }
      if (!(tag in HTML_CONTAINERS)) {
        tag = "*";
      }
      container = HTML_CONTAINERS[tag];
      container.innerHTML = "" + markup;
      return $$.each(Array.prototype.slice.call(container.childNodes), function() {
        return container.removeChild(this);
      });
    };
    _compact = function(items) {
      return items.filter(function(item) {
        if (item != null) {
          return item;
        }
      });
    };
    _flatten = function(array) {
      if (array.length > 0) {
        return EMPTY_ARRAY.concat.apply(EMPTY_ARRAY, array);
      } else {
        return array;
      }
    };
    _isOwnProperty = function(object, property) {
      return OBJECT_PROTOTYPE.hasOwnProperty.call(object, property);
    };
    _instance.prototype = $$.fn = {};
    $$.fn.each = function(callback) {
      this.forEach(function(element, index) {
        return callback.call(element, index, element);
      });
      return this;
    };
    $$.fn.filter = function(selector) {
      return $$(EMPTY_ARRAY.filter.call(this, function(el) {
        return el.parentNode && $$.query(el.parentNode, selector).indexOf(el) >= 0;
      }));
    };
    $$.fn.forEach = EMPTY_ARRAY.forEach;
    $$.fn.indexOf = EMPTY_ARRAY.indexOf;
    return $$;
  })();

  this.Quo = this.$$ = Quo;

  /*
  Basic Quo Module
  
  @namespace Quo
  @class Ajax
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  (function($$) {
    var DEFAULT, JSONP_ID, MIME_TYPES, _isJsonP, _jsonp, _xhrError, _xhrForm, _xhrHeaders, _xhrStatus, _xhrSuccess, _xhrTimeout;
    DEFAULT = {
      TYPE: "GET",
      MIME: "json"
    };
    MIME_TYPES = {
      script: "text/javascript, application/javascript",
      json: "application/json",
      xml: "application/xml, text/xml",
      html: "text/html",
      text: "text/plain"
    };
    JSONP_ID = 0;
    $$.ajaxSettings = {
      type: DEFAULT.TYPE,
      async: true,
      success: {},
      error: {},
      context: null,
      dataType: DEFAULT.MIME,
      headers: {},
      xhr: function() {
        return new window.XMLHttpRequest();
      },
      crossDomain: false,
      timeout: 0
    };
    /*
    Perform an asynchronous HTTP (Ajax) request.
    @method ajax
    @param  {object} A set of key/value pairs that configure the Ajax request
    */

    $$.ajax = function(options) {
      var abortTimeout, error, settings, xhr;
      settings = $$.mix($$.ajaxSettings, options);
      if (settings.type === DEFAULT.TYPE) {
        settings.url += $$.serialize(settings.data, "?");
      } else {
        settings.data = $$.serialize(settings.data);
      }
      if (_isJsonP(settings.url)) {
        return _jsonp(settings);
      }
      xhr = settings.xhr();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          clearTimeout(abortTimeout);
          return _xhrStatus(xhr, settings);
        }
      };
      xhr.open(settings.type, settings.url, settings.async);
      _xhrHeaders(xhr, settings);
      if (settings.timeout > 0) {
        abortTimeout = setTimeout((function() {
          return _xhrTimeout(xhr, settings);
        }), settings.timeout);
      }
      try {
        xhr.send(settings.data);
      } catch (_error) {
        error = _error;
        xhr = error;
        _xhrError("Resource not found", xhr, settings);
      }
      return xhr;
    };
    /*
    Load data from the server using a HTTP GET request.
    @method get
    @param  {string} A string containing the URL to which the request is sent.
    @param  {string} [OPTIONAL] A plain object or string that is sent to the server with the request.
    @param  {string} [OPTIONAL] A callback function that is executed if the request succeeds.
    @param  {string} [OPTIONAL] The type of data expected from the server
    */

    $$.get = function(url, data, success, dataType) {
      return $$.ajax({
        url: url,
        data: data,
        success: success,
        dataType: dataType
      });
    };
    /*
    Load data from the server using a HTTP POST request.
    @method post
    @param  {string} A string containing the URL to which the request is sent.
    @param  {string} [OPTIONAL] A plain object or string that is sent to the server with the request.
    @param  {string} [OPTIONAL] A callback function that is executed if the request succeeds.
    @param  {string} [OPTIONAL] The type of data expected from the server
    */

    $$.post = function(url, data, success, dataType) {
      return _xhrForm("POST", url, data, success, dataType);
    };
    /*
    Load data from the server using a HTTP PPUTOST request.
    @method put
    @param  {string} A string containing the URL to which the request is sent.
    @param  {string} [OPTIONAL] A plain object or string that is sent to the server with the request.
    @param  {string} [OPTIONAL] A callback function that is executed if the request succeeds.
    @param  {string} [OPTIONAL] The type of data expected from the server
    */

    $$.put = function(url, data, success, dataType) {
      return _xhrForm("PUT", url, data, success, dataType);
    };
    /*
    Load data from the server using a HTTP DELETE request.
    @method delete
    @param  {string} A string containing the URL to which the request is sent.
    @param  {string} [OPTIONAL] A plain object or string that is sent to the server with the request.
    @param  {string} [OPTIONAL] A callback function that is executed if the request succeeds.
    @param  {string} [OPTIONAL] The type of data expected from the server
    */

    $$["delete"] = function(url, data, success, dataType) {
      return _xhrForm("DELETE", url, data, success, dataType);
    };
    /*
    Load JSON-encoded data from the server using a GET HTTP request.
    @method json
    @param  {string} A string containing the URL to which the request is sent.
    @param  {string} [OPTIONAL] A plain object or string that is sent to the server with the request.
    @param  {string} [OPTIONAL] A callback function that is executed if the request succeeds.
    */

    $$.json = function(url, data, success) {
      return $$.ajax({
        url: url,
        data: data,
        success: success
      });
    };
    /*
    Encode a set of form elements as a string for submission.
    @method serialize
    @param  {object}
    */

    $$.serialize = function(parameters, character) {
      var parameter, serialize;
      if (character == null) {
        character = "";
      }
      serialize = character;
      for (parameter in parameters) {
        if (parameters.hasOwnProperty(parameter)) {
          if (serialize !== character) {
            serialize += "&";
          }
          serialize += "" + (encodeURIComponent(parameter)) + "=" + (encodeURIComponent(parameters[parameter]));
        }
      }
      if (serialize === character) {
        return "";
      } else {
        return serialize;
      }
    };
    _jsonp = function(settings) {
      var abortTimeout, callbackName, script, xhr;
      if (settings.async) {
        callbackName = "jsonp" + (++JSONP_ID);
        script = document.createElement("script");
        xhr = {
          abort: function() {
            $$(script).remove();
            if (callbackName in window) {
              return window[callbackName] = {};
            }
          }
        };
        abortTimeout = void 0;
        window[callbackName] = function(response) {
          clearTimeout(abortTimeout);
          $$(script).remove();
          delete window[callbackName];
          return _xhrSuccess(response, settings);
        };
        script.src = settings.url.replace(RegExp("=\\?"), "=" + callbackName);
        $$("head").append(script);
        if (settings.timeout > 0) {
          abortTimeout = setTimeout((function() {
            return _xhrTimeout(xhr, settings);
          }), settings.timeout);
        }
        return xhr;
      } else {
        return console.error("QuoJS.ajax: Unable to make jsonp synchronous call.");
      }
    };
    _xhrStatus = function(xhr, settings) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) {
        if (settings.async) {
          _xhrSuccess(xhr, settings);
        }
      } else {
        _xhrError("QuoJS.ajax: Unsuccesful request", xhr, settings);
      }
    };
    _xhrSuccess = function(xhr, settings) {
      settings.success.call(settings.context, xhr);
    };
    _xhrError = function(type, xhr, settings) {
      settings.error.call(settings.context, type, xhr, settings);
    };
    _xhrHeaders = function(xhr, settings) {
      var header;
      if (settings.contentType) {
        settings.headers["Content-Type"] = settings.contentType;
      }
      if (settings.dataType) {
        settings.headers["Accept"] = MIME_TYPES[settings.dataType];
      }
      for (header in settings.headers) {
        xhr.setRequestHeader(header, settings.headers[header]);
      }
    };
    _xhrTimeout = function(xhr, settings) {
      xhr.onreadystatechange = {};
      xhr.abort();
      _xhrError("QuoJS.ajax: Timeout exceeded", xhr, settings);
    };
    _xhrForm = function(method, url, data, success, dataType) {
      return $$.ajax({
        type: method,
        url: url,
        data: data,
        success: success,
        dataType: dataType,
        contentType: "application/x-www-form-urlencoded"
      });
    };
    return _isJsonP = function(url) {
      return RegExp("=\\?").test(url);
    };
  })(Quo);

  /*
  Basic Quo Module
  
  @namespace Quo
  @class css
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  (function($$) {
    var VENDORS, _computedStyle;
    VENDORS = ["-webkit-", "-moz-", "-ms-", "-o-", ""];
    /*
    Add class to a given instance element
    @method addClass
    @param  {string} Name of stylesheet class
    */

    $$.fn.addClass = function(name) {
      return this.each(function() {
        return this.classList.add(name);
      });
    };
    /*
    Remove stylesheet class to a given instance element
    @method addClass
    @param  {string} Name of stylesheet class
    */

    $$.fn.removeClass = function(name) {
      return this.each(function() {
        return this.classList.remove(name);
      });
    };
    /*
    Toggle stylesheet class to a given instance element
    @method addClass
    @param  {string} Name of stylesheet class
    */

    $$.fn.toggleClass = function(name) {
      return this.each(function() {
        var method;
        method = this.classList.contains(name) ? "remove" : "add";
        return this.classList[method](name);
      });
    };
    /*
    Test if a stylesheet class is in the giben instance element
    @method hasClass
    @param  {string} Name of stylesheet class
    */

    $$.fn.hasClass = function(name) {
      return this.length > 0 && this[0].classList.contains(name);
    };
    /*
    List a object with all classes in a given instance element
    @method listClass
    @param  {string} Name of stylesheet class
    */

    $$.fn.listClass = function() {
      if (this.length > 0) {
        return this[0].classList;
      }
    };
    /*
    Set/Get a stylesheet property in a given instance element
    @method style
    @param  {string} Name of property
    @param  {string} [OPTIONAL] Value for property
    */

    $$.fn.style = $$.fn.css = function(property, value) {
      var el;
      if (value != null) {
        return this.each(function() {
          return this.style[property] = value;
        });
      } else {
        el = this[0];
        return el.style[property] || _computedStyle(el, property);
      }
    };
    /*
    Set/Get a stylesheet vendor-prefix property in a given instance element
    @method vendor
    @param  {string} Name of property
    @param  {string} Value for property
    */

    $$.fn.vendor = function(property, value) {
      var prefix, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = VENDORS.length; _i < _len; _i++) {
        prefix = VENDORS[_i];
        _results.push(this.style("" + prefix + property, value));
      }
      return _results;
    };
    return _computedStyle = function(element, property) {
      return document.defaultView.getComputedStyle(element, "")[property];
    };
  })(Quo);

  /*
  Basic Quo Module
  
  @namespace Quo
  @class Element
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  (function($$) {
    /*
    Get/Set attribute to a given instance element
    @method attr
    @param  {string} Name of attribute
    @param  {string} [OPTIONAL] Value of attribute
    */

    $$.fn.attr = function(name, value) {
      if (this.length > 0 && $$.toType(name) === "string") {
        if (value) {
          return this.each(function() {
            return this.setAttribute(name, value);
          });
        } else {
          return this[0].getAttribute(name);
        }
      }
    };
    /*
    Remove attribute to a given instance element
    @method removeAttr
    @param  {string} Name of attribute
    */

    $$.fn.removeAttr = function(name) {
      if (this.length > 0 && $$.toType(name) === "string") {
        return this.each(function() {
          return this.removeAttribute(name);
        });
      }
    };
    /*
    Get/Set data attribute to a given instance element
    @method data
    @param  {string} Name of data attribute
    @param  {string} [OPTIONAL] Value of data atribbute
    */

    $$.fn.data = function(name, value) {
      return this.attr("data-" + name, value);
    };
    /*
    Remove data attribute to a given instance element
    @method removeAttr
    @param  {string} Name of data attribute
    */

    $$.fn.removeData = function(name) {
      return this.removeAttr("data-" + name);
    };
    /*
    Remove data attribute to a given instance element
    @method val
    @param  {string} Name of data attribute
    */

    $$.fn.val = function(value) {
      if (value) {
        return this.each(function() {
          return this.value = value.toString();
        });
      } else {
        if (this.length > 0) {
          return this[0].value;
        } else {
          return null;
        }
      }
    };
    /*
    Shows a given instance element
    @method show
    */

    $$.fn.show = function() {
      return this.style("display", "block");
    };
    /*
    Hides a given instance element
    @method hide
    */

    $$.fn.hide = function() {
      return this.style("display", "none");
    };
    /*
    Get a offset of a given instance element
    @method offset
    */

    return $$.fn.offset = function() {
      var bounding, offset;
      if (this.length > 0) {
        bounding = this[0].getBoundingClientRect();
        offset = {
          left: bounding.left + window.pageXOffset,
          top: bounding.top + window.pageYOffset,
          width: bounding.width,
          height: bounding.height
        };
      }
      return offset;
    };
  })(Quo);

  /*
  Basic Quo Module
  
  @namespace Quo
  @class Environment
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  (function($$) {
    var IS_WEBKIT, SUPPORTED_OS, _current, _detectBrowser, _detectOS, _detectScreen;
    _current = null;
    IS_WEBKIT = /WebKit\/([\d.]+)/;
    SUPPORTED_OS = {
      Android: /(Android)\s+([\d.]+)/,
      ipad: /(iPad).*OS\s([\d_]+)/,
      iphone: /(iPhone\sOS)\s([\d_]+)/,
      Blackberry: /(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,
      FirefoxOS: /(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,
      webOS: /(webOS|hpwOS)[\s\/]([\d.]+)/
    };
    /*
    Remove attribute to a given instance element
    @method isMobile
    @return {boolean} True if it's mobile, False if not.
    */

    $$.isMobile = function() {
      this.environment();
      return _current.isMobile;
    };
    /*
    Remove attribute to a given instance element
    @method environment
    @return {object} Environment attributes
    */

    $$.environment = function() {
      var os, user_agent;
      if (!_current) {
        user_agent = navigator.userAgent;
        os = _detectOS(user_agent);
        _current = {
          browser: _detectBrowser(user_agent),
          isMobile: !!os,
          screen: _detectScreen(),
          os: os
        };
      }
      return _current;
    };
    _detectBrowser = function(user_agent) {
      var webkit;
      webkit = user_agent.match(IS_WEBKIT);
      if (webkit) {
        return webkit[0];
      } else {
        return user_agent;
      }
    };
    _detectOS = function(user_agent) {
      var detected_os, os, supported;
      for (os in SUPPORTED_OS) {
        supported = user_agent.match(SUPPORTED_OS[os]);
        if (supported) {
          detected_os = {
            name: os === "iphone" || os === "ipad" || os === "ipod" ? "ios" : os,
            version: supported[2].replace("_", ".")
          };
          break;
        }
      }
      return detected_os;
    };
    return _detectScreen = function() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };
  })(Quo);

  /*
  Basic Quo Module
  
  @namespace Quo
  @class Events
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  (function($$) {
    var ELEMENT_ID, EVENTS_DESKTOP, EVENT_METHODS, HANDLERS, READY_EXPRESSION, _createProxy, _createProxyCallback, _environmentEvent, _event, _findHandlers, _getElementId, _subscribe, _unsubscribe;
    ELEMENT_ID = 1;
    HANDLERS = {};
    EVENT_METHODS = {
      preventDefault: "isDefaultPrevented",
      stopImmediatePropagation: "isImmediatePropagationStopped",
      stopPropagation: "isPropagationStopped"
    };
    EVENTS_DESKTOP = {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
      touch: "click",
      orientationchange: "resize"
    };
    READY_EXPRESSION = /complete|loaded|interactive/;
    /*
    Attach an event handler function for one or more events to a given instance element
    @method on
    @param  {string} One or more space-separated event types
    @param  {string} A selector string to filter the descendants of the selected elements that trigger the event
    @param  {function} A function to execute when the event is triggered
    */

    $$.fn.on = function(event, selector, callback) {
      if ((selector == null) || $$.toType(selector) === "function") {
        return this.bind(event, selector);
      } else {
        return this.delegate(selector, event, callback);
      }
    };
    /*
    Remove an event handler.
    @method off
    @param  {string} One or more space-separated event types
    @param  {string} [OPTIONAL] A selector string to filter the descendants of the selected elements that trigger the event
    @param  {function} [OPTIONAL] A function to execute when the event is triggered
    */

    $$.fn.off = function(event, selector, callback) {
      if ((selector == null) || $$.toType(selector) === "function") {
        return this.unbind(event, selector);
      } else {
        return this.undelegate(selector, event, callback);
      }
    };
    /*
    Specify a function to execute when the DOM is fully loaded.
    @method ready
    @param  {function} A function to execute after the DOM is ready.
    */

    $$.fn.ready = function(callback) {
      if (READY_EXPRESSION.test(document.readyState)) {
        return callback.call(this, $$);
      } else {
        return $$.fn.addEvent(document, "DOMContentLoaded", function() {
          return callback.call(this, $$);
        });
      }
    };
    /*
    Attach a handler to an event for the elements.
    @method bind
    @param  {string} One or more space-separated event types
    @param  {function} A function to execute when the event is triggered
    */

    $$.fn.bind = function(event, callback) {
      return this.each(function() {
        return _subscribe(this, event, callback);
      });
    };
    /*
    Remove a previously-attached event handler from the elements.
    @method unbind
    @param  {string} One or more space-separated event types
    @param  {function} [OPTIONAL] A function to execute when the event is triggered
    */

    $$.fn.unbind = function(event, callback) {
      return this.each(function() {
        return _unsubscribe(this, event, callback);
      });
    };
    /*
    Attach a handler to one or more events for all elements that match the selector
    @method delegate
    */

    $$.fn.delegate = function(selector, event, callback) {
      return this.each(function(i, element) {
        return _subscribe(element, event, callback, selector, function(fn) {
          return function(e) {
            var evt, match;
            match = $$(e.target).closest(selector, element).get(0);
            if (match) {
              evt = $$.extend(_createProxy(e), {
                currentTarget: match,
                liveFired: element
              });
              return fn.apply(match, [evt].concat([].slice.call(arguments, 1)));
            }
          };
        });
      });
    };
    /*
    Remove a handler from the event for all elements which match the current selector
    @method undelegate
    */

    $$.fn.undelegate = function(selector, event, callback) {
      return this.each(function() {
        return _unsubscribe(this, event, callback, selector);
      });
    };
    /*
    Execute all handlers and behaviors attached to the matched elements for the given event type.
    @method trigger
    */

    $$.fn.trigger = function(event, touch, originalEvent) {
      if ($$.toType(event) === "string") {
        event = _event(event, touch);
      }
      if (originalEvent != null) {
        event.originalEvent = originalEvent;
      }
      return this.each(function() {
        return this.dispatchEvent(event);
      });
    };
    $$.fn.addEvent = function(element, event_name, callback) {
      if (element.addEventListener) {
        return element.addEventListener(event_name, callback, false);
      } else if (element.attachEvent) {
        return element.attachEvent("on" + event_name, callback);
      } else {
        return element["on" + event_name] = callback;
      }
    };
    $$.fn.removeEvent = function(element, event_name, callback) {
      if (element.removeEventListener) {
        return element.removeEventListener(event_name, callback, false);
      } else if (element.detachEvent) {
        return element.detachEvent("on" + event_name, callback);
      } else {
        return element["on" + event_name] = null;
      }
    };
    _event = function(type, touch) {
      var event;
      event = document.createEvent("Events");
      event.initEvent(type, true, true, null, null, null, null, null, null, null, null, null, null, null, null);
      if (touch) {
        event.quoData = touch;
      }
      return event;
    };
    _subscribe = function(element, event, callback, selector, delegate_callback) {
      var delegate, element_handlers, element_id, handler;
      event = _environmentEvent(event);
      element_id = _getElementId(element);
      element_handlers = HANDLERS[element_id] || (HANDLERS[element_id] = []);
      delegate = delegate_callback && delegate_callback(callback, event);
      handler = {
        event: event,
        callback: callback,
        selector: selector,
        proxy: _createProxyCallback(delegate, callback, element),
        delegate: delegate,
        index: element_handlers.length
      };
      element_handlers.push(handler);
      return $$.fn.addEvent(element, handler.event, handler.proxy);
    };
    _unsubscribe = function(element, event, callback, selector) {
      var element_id;
      event = _environmentEvent(event);
      element_id = _getElementId(element);
      return _findHandlers(element_id, event, callback, selector).forEach(function(handler) {
        delete HANDLERS[element_id][handler.index];
        return $$.fn.removeEvent(element, handler.event, handler.proxy);
      });
    };
    _getElementId = function(element) {
      return element._id || (element._id = ELEMENT_ID++);
    };
    _environmentEvent = function(event) {
      var environment_event;
      environment_event = (typeof $$.isMobile === "function" ? $$.isMobile() : void 0) ? event : EVENTS_DESKTOP[event];
      return environment_event || event;
    };
    _createProxyCallback = function(delegate, callback, element) {
      var proxy;
      callback = delegate || callback;
      proxy = function(event) {
        var result;
        result = callback.apply(element, [event].concat(event.data));
        if (result === false) {
          event.preventDefault();
        }
        return result;
      };
      return proxy;
    };
    _findHandlers = function(element_id, event, fn, selector) {
      return (HANDLERS[element_id] || []).filter(function(handler) {
        return handler && (!event || handler.event === event) && (!fn || handler.callback === fn) && (!selector || handler.selector === selector);
      });
    };
    return _createProxy = function(event) {
      var proxy;
      proxy = $$.extend({
        originalEvent: event
      }, event);
      $$.each(EVENT_METHODS, function(name, method) {
        proxy[name] = function() {
          this[method] = function() {
            return true;
          };
          return event[name].apply(event, arguments);
        };
        return proxy[method] = function() {
          return false;
        };
      });
      return proxy;
    };
  })(Quo);

  /*
  Quo Gestures manager
  
  @namespace Quo
  @class Gestures
  
  @author Ignacio Olalde Ramos <ina@tapquo.com> || @piniphone
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Quo.Gestures = (function($$) {
    var add, trigger, _addDelegations, _cancel, _data, _end, _getFingersData, _handle, _handlers, _move, _originalEvent, _start, _started;
    _started = false;
    _handlers = {};
    _data = null;
    _originalEvent = null;
    $$(document).ready(function() {
      var environment;
      environment = $$(document.body);
      environment.bind("touchstart", _start);
      environment.bind("touchmove", _move);
      environment.bind("touchend", _end);
      return environment.bind("touchcancel", _cancel);
    });
    add = function(gesture) {
      _handlers[gesture.name] = gesture.handler;
      return _addDelegations(gesture.events);
    };
    trigger = function(target, eventName, gestureData) {
      return $$(target).trigger(eventName, gestureData, _originalEvent);
    };
    _start = function(ev) {
      _started = true;
      _originalEvent = ev || event;
      _data = _getFingersData(ev);
      return _handle("start", ev.target, _data);
    };
    _move = function(ev) {
      if (!_started) {
        return;
      }
      _originalEvent = ev || event;
      _data = _getFingersData(ev);
      return _handle("move", ev.target, _data);
    };
    _end = function(ev) {
      if (!_started) {
        return;
      }
      _originalEvent = ev || event;
      _handle("end", ev.target, _data);
      return _started = false;
    };
    _cancel = function(ev) {
      _started = false;
      return _handle("cancel");
    };
    _addDelegations = function(events) {
      events.forEach(function(event_name) {
        return $$.fn[event_name] = function(callback) {
          return $$(document.body).delegate(this.selector, event_name, callback);
        };
      });
      return this;
    };
    _handle = function(eventName, target, data) {
      var handler, name, _results;
      _results = [];
      for (name in _handlers) {
        handler = _handlers[name];
        if (handler[eventName]) {
          _results.push(handler[eventName].call(handler, target, data));
        }
      }
      return _results;
    };
    _getFingersData = function(event) {
      var t, touches;
      touches = $$.isMobile() ? event.touches : [event];
      return (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = touches.length; _i < _len; _i++) {
          t = touches[_i];
          _results.push({
            x: t.pageX,
            y: t.pageY
          });
        }
        return _results;
      })();
    };
    return {
      add: add,
      trigger: trigger
    };
  })(Quo);

  /*
  Quo Basic Gestures: tap, hold, singleTap, doubleTap
  
  @namespace Quo.Gestures
  @class Basic
  
  @author Ignacio Olalde Ramos <ina@tapquo.com> || @piniphone
  */


  "use strict";

  Quo.Gestures.add({
    name: "basic",
    events: ["tap", "hold", "singleTap", "doubleTap", "touch"],
    handler: (function(base) {
      var DELAY, GAP, cancel, end, move, start, _hold_timeout, _last_tap, _simpletap_timeout, _start, _target, _valid;
      GAP = 15;
      DELAY = {
        TAP: 250,
        DOUBLE_TAP: 400,
        HOLD: 400
      };
      _hold_timeout = null;
      _simpletap_timeout = null;
      _valid = true;
      _target = null;
      _start = null;
      _last_tap = null;
      start = function(target, data) {
        if (data.length === 1) {
          _start = {
            time: new Date(),
            x: data[0].x,
            y: data[0].y
          };
          _target = target;
          return _hold_timeout = setTimeout(function() {
            return base.trigger(target, "hold", data[0]);
          }, DELAY.HOLD);
        } else {
          return cancel();
        }
      };
      move = function(target, data) {
        var xDiff, yDiff;
        if (_start !== null) {
          xDiff = data[0].x - _start.x;
          yDiff = data[0].y - _start.y;
          if (xDiff > GAP || yDiff > GAP || data.length > 1) {
            return cancel();
          }
        }
      };
      end = function(target, data) {
        var now;
        base.trigger(target, "touch", data[0]);
        if (!_start) {
          return;
        }
        clearTimeout(_hold_timeout);
        now = new Date();
        if ((now - _start.time) < DELAY.TAP) {
          if ((now - _last_tap) < DELAY.DOUBLE_TAP) {
            clearTimeout(_simpletap_timeout);
            base.trigger(target, "doubleTap", data[0]);
            return _last_tap = null;
          } else {
            _last_tap = now;
            base.trigger(target, "tap", data[0]);
            return _simpletap_timeout = setTimeout(function() {
              return base.trigger(target, "singleTap", data[0]);
            }, DELAY.DOUBLE_TAP + 5);
          }
        }
      };
      cancel = function() {
        _start = null;
        _valid = false;
        clearTimeout(_hold_timeout);
        return clearTimeout(_simpletap_timeout);
      };
      return {
        start: start,
        move: move,
        end: end,
        cancel: cancel
      };
    })(Quo.Gestures)
  });

  /*
  Quo Drag Gestures: drag, dragging
  
  @namespace Quo.Gestures
  @class Drag
  
  @author Ignacio Olalde Ramos <ina@tapquo.com> || @piniphone
  */


  "use strict";

  Quo.Gestures.add({
    name: "drag",
    events: ["drag", "dragging"],
    handler: (function(base) {
      var GAP, end, move, start, _average, _calcDelta, _check, _last, _num_fingers, _start, _target;
      GAP = 20;
      _target = null;
      _num_fingers = null;
      _start = null;
      _last = null;
      start = function(target, data) {
        if (data.length >= 2) {
          _target = target;
          _num_fingers = data.length;
          return _start = _average(data);
        }
      };
      move = function(target, data) {
        var delta;
        if (data.length === _num_fingers) {
          delta = _calcDelta(data);
          _last = {
            touches: data,
            delta: delta
          };
          return _check(true);
        }
      };
      end = function(target, data) {
        if (_start && _last) {
          _check(false);
          _num_fingers = null;
          _start = null;
          return _last = null;
        }
      };
      _calcDelta = function(touches) {
        var average;
        average = _average(touches);
        return {
          x: average.x - _start.x,
          y: average.y - _start.y
        };
      };
      _average = function(touches) {
        var touch, x, y, _i, _len;
        x = 0;
        y = 0;
        for (_i = 0, _len = touches.length; _i < _len; _i++) {
          touch = touches[_i];
          x += parseInt(touch.x);
          y += parseInt(touch.y);
        }
        return {
          x: x / touches.length,
          y: y / touches.length
        };
      };
      _check = function(moving) {
        if (moving) {
          return base.trigger(_target, "dragging", _last);
        } else if (Math.abs(_last.delta.x) > GAP || Math.abs(_last.delta.y) > GAP) {
          return base.trigger(_target, "drag", _last);
        }
      };
      return {
        start: start,
        move: move,
        end: end
      };
    })(Quo.Gestures)
  });

  /*
  Quo Pinch Gestures: pinch, pinching, pinchIn, pinchOut
  
  @namespace Quo.Gestures
  @class Pinch
  
  @author Ignacio Olalde Ramos <ina@tapquo.com> || @piniphone
  */


  "use strict";

  Quo.Gestures.add({
    name: "pinch",
    events: ["pinch", "pinching", "pinchIn", "pinchOut"],
    handler: (function(base) {
      var GAP, end, move, start, _check, _distance, _last, _start, _target;
      GAP = 20;
      _target = null;
      _start = null;
      _last = null;
      start = function(target, data) {
        if (data.length === 2) {
          _target = target;
          return _start = _distance(data[0], data[1]);
        }
      };
      move = function(target, data) {
        var distance;
        if (_start && data.length === 2) {
          distance = _distance(data[0], data[1]);
          _last = {
            touches: data,
            delta: distance - _start
          };
          return _check(true);
        }
      };
      end = function(target, data) {
        if (_start && _last) {
          _check(false);
          _start = null;
          return _last = null;
        }
      };
      _distance = function(A, B) {
        return Math.sqrt((B.x - A.x) * (B.x - A.x) + (B.y - A.y) * (B.y - A.y));
      };
      _check = function(moving) {
        var ev;
        if (moving) {
          return base.trigger(_target, "pinching", _last);
        } else if (Math.abs(_last.delta) > GAP) {
          base.trigger(_target, "pinch", _last);
          ev = _last.delta > 0 ? "pinchOut" : "pinchIn";
          return base.trigger(_target, ev, _last);
        }
      };
      return {
        start: start,
        move: move,
        end: end
      };
    })(Quo.Gestures)
  });

  /*
  Quo Rotation Gestures: rotate, rotating, rotateLeft, rotateRight
  
  @namespace Quo.Gestures
  @class Rotation
  
  @author Ignacio Olalde Ramos <ina@tapquo.com> || @piniphone
  */


  "use strict";

  Quo.Gestures.add({
    name: "rotation",
    events: ["rotate", "rotating", "rotateLeft", "rotateRight"],
    handler: (function(base) {
      var GAP, ROTATION_LIMIT, end, move, start, _check, _last, _num_rotations, _rotation, _sign, _start, _target;
      GAP = 5;
      ROTATION_LIMIT = 20;
      _target = null;
      _num_rotations = 0;
      _start = null;
      _last = null;
      start = function(target, data) {
        if (data.length === 2) {
          _target = target;
          _num_rotations = 0;
          return _start = _rotation(data[0], data[1]);
        }
      };
      move = function(target, data) {
        var delta;
        if (_start && data.length === 2) {
          delta = _rotation(data[0], data[1]) - _start;
          if (_last && Math.abs(_last.delta - delta) > ROTATION_LIMIT) {
            delta += 360 * _sign(_last.delta);
          }
          if (Math.abs(delta) > 360) {
            _num_rotations++;
            delta -= 360 * _sign(_last.delta);
          }
          _last = {
            touches: data,
            delta: delta,
            rotationsCount: _num_rotations
          };
          return _check(true);
        }
      };
      end = function(target, data) {
        if (_start && _last) {
          _check(false);
          _target = null;
          _num_rotations = 0;
          _start = null;
          _last = null;
          return _start = null;
        }
      };
      _sign = function(num) {
        if (num < 0) {
          return -1;
        } else {
          return 1;
        }
      };
      _rotation = function(A, B) {
        var theta;
        theta = Math.atan2(A.y - B.y, A.x - B.x);
        return (theta < 0 ? theta + 2 * Math.PI : theta) * 180 / Math.PI;
      };
      _check = function(moving) {
        var ev;
        if (moving) {
          return base.trigger(_target, "rotating", _last);
        } else if (Math.abs(_last.delta) > GAP) {
          base.trigger(_target, "rotate", _last);
          ev = _last.delta > 0 ? "rotateRight" : "rotateLeft";
          return base.trigger(_target, ev, _last);
        }
      };
      return {
        start: start,
        move: move,
        end: end
      };
    })(Quo.Gestures)
  });

  /*
  Quo Swipe Gestures: swipe, swiping, swipeLeft, swipeRight, swipeUp, swipeDown
  New gestures added: swipingHorizontal, swipingVertical
  
  @namespace Quo.Gestures
  @class Swipe
  
  @author Ignacio Olalde Ramos <ina@tapquo.com> || @piniphone
  */


  "use strict";

  Quo.Gestures.add({
    name: "swipe",
    events: ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "swiping", "swipingHorizontal", "swipingVertical"],
    handler: (function(base) {
      var GAP, end, move, start, _check, _getInitialAxis, _last, _start, _start_axis, _target;
      GAP = 20;
      _target = null;
      _start = null;
      _start_axis = null;
      _last = null;
      start = function(target, data) {
        if (data.length === 1) {
          _target = target;
          _start = data[0];
          return _last = null;
        }
      };
      move = function(target, data) {
        var delta, is_first;
        if (data.length === 1) {
          delta = {
            x: data[0].x - _start.x,
            y: data[0].y - _start.y
          };
          is_first = _last === null;
          _last = {
            x: data[0].x,
            y: data[0].y,
            delta: delta
          };
          return _check(true, is_first);
        } else {
          return _last = null;
        }
      };
      end = function(target, data) {
        if (_last) {
          _check(false);
          return _last = null;
        }
      };
      _check = function(moving, first_move) {
        var direction, directions, _i, _len, _results;
        if (first_move == null) {
          first_move = false;
        }
        if (moving) {
          if (first_move) {
            _start_axis = _getInitialAxis(_last.delta.x, _last.delta.y);
          }
          if (_start_axis !== null) {
            base.trigger(_target, "swiping" + _start_axis, _last);
          }
          return base.trigger(_target, "swiping", _last);
        } else {
          directions = [];
          if (Math.abs(_last.delta.y) > GAP) {
            directions.push(_last.delta.y < 0 ? "Up" : "Down");
          }
          if (Math.abs(_last.delta.x) > GAP) {
            directions.push(_last.delta.x < 0 ? "Left" : "Right");
          }
          if (directions.length) {
            base.trigger(_target, "swipe", _last);
            _results = [];
            for (_i = 0, _len = directions.length; _i < _len; _i++) {
              direction = directions[_i];
              _results.push(base.trigger(_target, "swipe" + direction, _last));
            }
            return _results;
          }
        }
      };
      _getInitialAxis = function(x, y) {
        var axis;
        axis = null;
        if (Math.round(Math.abs(x / y)) >= 2) {
          axis = "Horizontal";
        } else if (Math.round(Math.abs(y / x)) >= 2) {
          axis = "Vertical";
        }
        return axis;
      };
      return {
        start: start,
        move: move,
        end: end
      };
    })(Quo.Gestures)
  });

  /*
  Basic Quo Module
  
  @namespace Quo
  @class Output
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  (function($$) {
    /*
    Get/Set text to a given instance element
    @method text
    @param  {string} [OPTIONAL] Value of text
    */

    $$.fn.text = function(value) {
      if (value != null) {
        return this.each(function() {
          return this.textContent = value;
        });
      } else {
        if (this.length > 0) {
          return this[0].textContent;
        } else {
          return "";
        }
      }
    };
    /*
    Get/Set html to a given instance element
    @method html
    @param  {variable} [OPTIONAL] Value of html
    */

    $$.fn.html = function(value) {
      var type;
      if (value != null) {
        type = $$.toType(value);
        return this.each(function() {
          var _this = this;
          if (type === "string") {
            return this.innerHTML = value;
          } else if (type === "array") {
            return value.forEach(function(slice) {
              return $$(_this).html(slice);
            });
          } else {
            return this.innerHTML += $$(value).html();
          }
        });
      } else {
        if (this.length > 0) {
          return this[0].innerHTML;
        } else {
          return "";
        }
      }
    };
    /*
    Remove the set of matched elements to a given instance element
    @method remove
    */

    $$.fn.remove = function() {
      return this.each(function() {
        if (this.parentNode != null) {
          return this.parentNode.removeChild(this);
        }
      });
    };
    /*
    Remove all child nodes of the set of matched elements to a given instance element
    @method remove
    */

    $$.fn.empty = function() {
      return this.each(function() {
        return this.innerHTML = null;
      });
    };
    /*
    Append a html to a given instance element
    @method append
    @param  {html} Value of html
    */

    $$.fn.append = function(value) {
      var type;
      type = $$.toType(value);
      return this.each(function() {
        var _this = this;
        if (type === "string") {
          return this.insertAdjacentHTML("beforeend", value);
        } else if (type === "array") {
          return value.forEach(function(slice) {
            return $$(_this).append(slice);
          });
        } else {
          return this.appendChild(value);
        }
      });
    };
    /*
    Prepend a html to a given instance element
    @method prepend
    @param  {html} Value of html
    */

    $$.fn.prepend = function(value) {
      var type;
      type = $$.toType(value);
      return this.each(function() {
        var _this = this;
        if (type === "string") {
          return this.insertAdjacentHTML("afterbegin", value);
        } else if (type === "array") {
          return value.each(function(index, value) {
            return _this.insertBefore(value, _this.firstChild);
          });
        } else {
          return this.insertBefore(value, this.firstChild);
        }
      });
    };
    /*
    Replace each element in the set of matched elements with the provided new
    content and return the set of elements that was removed.
    @method replaceWith
    @param  {html} The content to insert (HTML string, DOMelement, array of DOMelements)
    */

    return $$.fn.replaceWith = function(value) {
      var type;
      type = $$.toType(value);
      this.each(function() {
        var _this = this;
        if (this.parentNode) {
          if (type === "string") {
            return this.insertAdjacentHTML("beforeBegin", value);
          } else if (type === "array") {
            return value.each(function(index, value) {
              return _this.parentNode.insertBefore(value, _this);
            });
          } else {
            return this.parentNode.insertBefore(value, this);
          }
        }
      });
      return this.remove();
    };
  })(Quo);

  /*
  Basic Quo Module
  
  @namespace Quo
  @class Query
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  (function($$) {
    var PARENT_NODE, _filtered, _findAncestors, _getSibling;
    PARENT_NODE = "parentNode";
    /*
    Get the descendants of each element in the current instance
    @method find
    @param  {string} A string containing a selector expression to match elements against.
    */

    $$.fn.find = function(selector) {
      var result;
      if (this.length === 1) {
        result = Quo.query(this[0], selector);
      } else {
        result = this.map(function() {
          return Quo.query(this, selector);
        });
      }
      return $$(result);
    };
    /*
    Get the parent of each element in the current instance
    @method parent
    @param  {string} A string containing a selector expression to match elements against.
    */

    $$.fn.parent = function(selector) {
      var ancestors;
      ancestors = selector ? _findAncestors(this) : this.instance(PARENT_NODE);
      return _filtered(ancestors, selector);
    };
    /*
    Get the children of each element in the current instance
    @method children
    @param  {string} A string containing a selector expression to match elements against.
    */

    $$.fn.children = function(selector) {
      var elements;
      elements = this.map(function() {
        return Array.prototype.slice.call(this.children);
      });
      return _filtered(elements, selector);
    };
    /*
    Get the siblings of each element in the current instance
    @method siblings
    @param  {string} A string containing a selector expression to match elements against.
    */

    $$.fn.siblings = function(selector) {
      var elements;
      elements = this.map(function(index, element) {
        return Array.prototype.slice.call(element.parentNode.children).filter(function(child) {
          return child !== element;
        });
      });
      return _filtered(elements, selector);
    };
    /*
    Retrieve the DOM elements matched by the QuoJS object.
    @method get
    @param  {number} [OPTIONAL] A zero-based integer indicating which element to retrieve
    */

    $$.fn.get = function(index) {
      return this[index] || null;
    };
    /*
    Reduce the set of matched elements to the first in the set.
    @method first
    */

    $$.fn.first = function() {
      return $$(this[0]);
    };
    /*
    Reduce the set of matched elements to the final one in the set.
    @method last
    */

    $$.fn.last = function() {
      return $$(this[this.length - 1]);
    };
    /*
    Reduce the set of matched elements to the final one in the set.
    @method closest
    @param  {string} A string containing a selector expression to match elements against.
    @param  {instance} [OPTIONAL] A DOM element within which a matching element may be found.
    */

    $$.fn.closest = function(selector, context) {
      var candidates, node;
      node = this[0];
      candidates = $$(selector);
      if (!candidates.length) {
        node = null;
      }
      while (node && candidates.indexOf(node) < 0) {
        node = node !== context && node !== document && node.parentNode;
      }
      return $$(node);
    };
    /*
    Get the immediately following sibling of each element in the instance.
    @method next
    */

    $$.fn.next = function() {
      return _getSibling.call(this, "nextSibling");
    };
    /*
    Get the immediately preceding sibling of each element in the instance.
    @method prev
    */

    $$.fn.prev = function() {
      return _getSibling.call(this, "previousSibling");
    };
    $$.fn.instance = function(property) {
      return this.map(function() {
        return this[property];
      });
    };
    $$.fn.map = function(callback) {
      return $$.map(this, function(el, i) {
        return callback.call(el, i, el);
      });
    };
    _findAncestors = function(nodes) {
      var ancestors;
      ancestors = [];
      while (nodes.length > 0) {
        nodes = $$.map(nodes, function(node) {
          node = node.parentNode;
          if (node !== document && ancestors.indexOf(node) < 0) {
            ancestors.push(node);
            return node;
          }
        });
      }
      return ancestors;
    };
    _filtered = function(nodes, selector) {
      if (selector != null) {
        return $$(nodes).filter(selector);
      } else {
        return $$(nodes);
      }
    };
    return _getSibling = function(command) {
      var element;
      element = this[0][command];
      while (element && element.nodeType !== 1) {
        element = element[command];
      }
      return $$(element);
    };
  })(Quo);

  Atoms = this.Atoms = {
    version: "0.03.13",
    Core: {},
    Class: {},
    Atom: {},
    Molecule: {},
    Organism: {},
    Entity: {},
    $: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (typeof $$ !== "undefined" && $$ !== null) {
        return $$.apply(null, args);
      } else {
        return $.apply(null, args);
      }
    }
  };

  /*
  HTML Renderer
  
  @namespace Atoms.Core
  @class Attributes
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Core.Attributes = {
    /*
    Set the parent instance to current instance.
    @method setParent
    */

    scaffold: function() {
      var _ref, _ref1;
      this.parent = {};
      if (((_ref = this.attributes) != null ? _ref.parent : void 0) != null) {
        this.parent = this.attributes.parent;
        delete this.attributes.parent;
      }
      this.container = this.attributes.container || this.parent.el || document.body;
      delete this.attributes.container;
      if (((_ref1 = this.attributes) != null ? _ref1.entity : void 0) != null) {
        this.entity = this.attributes.entity;
        return delete this.attributes.entity;
      }
    },
    chemistry: function(children) {
      var attributes, base, class_name, index, item, key, type, _i, _len, _results;
      children = this.attributes.children || this["default"].children || [];
      _results = [];
      for (index = _i = 0, _len = children.length; _i < _len; index = ++_i) {
        item = children[index];
        _results.push((function() {
          var _ref, _ref1, _ref2, _ref3, _ref4, _results1;
          _results1 = [];
          for (key in item) {
            base = key.split(".");
            type = base[0];
            class_name = base[1];
            if (Atoms[type][class_name] != null) {
              attributes = item[key];
              if (((_ref = this["default"]) != null ? (_ref1 = _ref.children) != null ? (_ref2 = _ref1[index]) != null ? _ref2[key] : void 0 : void 0 : void 0) != null) {
                attributes = Atoms.Core.Helper.mix(item[key], (_ref3 = this["default"].children) != null ? (_ref4 = _ref3[index]) != null ? _ref4[key] : void 0 : void 0);
              }
              _results1.push(this.appendChild(type, class_name, attributes));
            } else {
              _results1.push(void 0);
            }
          }
          return _results1;
        }).call(this));
      }
      return _results;
    },
    appendChild: function(type, class_name, attributes) {
      var child;
      if (attributes == null) {
        attributes = {};
      }
      if (this.__available(type, class_name)) {
        attributes.parent = attributes.parent || this;
        child = new Atoms[type][class_name](attributes);
        this.children.push(child);
        if (attributes.id) {
          this[attributes.id] = child;
        }
        return child;
      } else {
        return console.error("Instance " + type + "." + class_name + " no available in " + constructor.name + " (" + constructor.base + ")");
      }
    },
    __available: function(type, class_name) {
      var instance, _ref;
      instance = Atoms[type][class_name];
      instance = instance.base || instance.name;
      return !this.constructor.available || (_ref = "" + type + "." + instance, __indexOf.call(this.constructor.available, _ref) >= 0);
    }
  };

  /*
  Constants
  
  @namespace Atoms.Core
  @class Constants
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Core.Constants = {
    ANIMATION: {
      END: "webkitAnimationEnd mozAnimationEnd animationend"
    },
    APPEND: "append",
    EXCLUDED_IF_KEYS: ["class", "entity", "events", "if", "parent"],
    ENTITY: {
      EVENT: {
        CREATE: "create",
        UPDATE: "update",
        DESTROY: "destroy"
      }
    }
  };

  /*
  Event emitter which provides the pub/sub pattern to Atoms classes.
  
  @namespace Atoms.Core
  @class Event
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Core.Event = {
    bindings: null,
    /*
    Attach a handler to an event for the class.
    @method bind
    @param  {string}    A string containing one or more event/custom types.
    @param  {function}  A function to execute each time the event is triggered.
    */

    bind: function(events, callback) {
      var calls, event, _i, _len, _results;
      events = events.split(' ');
      calls = this.hasOwnProperty('events') && this.events || (this.events = {});
      _results = [];
      for (_i = 0, _len = events.length; _i < _len; _i++) {
        event = events[_i];
        event = this._customEventName(event);
        calls[event] || (calls[event] = []);
        _results.push(calls[event].push(callback));
      }
      return _results;
    },
    /*
    Remove a previously-attached event handler from the class.
    @method unbind
    @param  {string}    A string containing one or more event/custom types.
    @param  {function}  The function that is to be no longer executed.
    */

    unbind: function(event, callback) {
      var _ref;
      event = this._customEventName(event);
      if (this.hasOwnProperty('events') && ((_ref = this.events) != null ? _ref[event] : void 0)) {
        return this.events[event].splice(this.events[event].indexOf(callback), 1);
      }
    },
    /*
    Execute all handlers and behaviors attached to the matched class for the given
    event type.
    @method trigger
    @param  {string}    A string containing one or more event/custom types.
    @param  {array}     [OPTIONAL] Additional parameters to pass along to the event
                        handler.
    */

    trigger: function() {
      var args, event, events, _i, _len, _ref, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      event = this._customEventName(event);
      events = this.hasOwnProperty('events') && ((_ref = this.events) != null ? _ref[event] : void 0);
      if (!events) {
        return;
      }
      args.push(this);
      _results = [];
      for (_i = 0, _len = events.length; _i < _len; _i++) {
        event = events[_i];
        if (event.apply(this, args) === false) {
          break;
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    },
    /*
    @TODO: Comment method
    @method bubble
    @param  {string}    A string containing one or more event/custom types.
    @param  {array}     [OPTIONAL] Additional parameters to pass along to the event
                        handler.
    */

    bubble: function() {
      var args, event, _ref;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (((_ref = this.parent) != null ? _ref.uid : void 0) != null) {
        args.push(this);
        return this._state(this.parent, event, args, "bubble");
      }
    },
    /*
    @TODO: Comment method
    @method tunnel
    @param  {string}    A string containing one or more event/custom types.
    @param  {array}     [OPTIONAL] Additional parameters to pass along to the event
                        handler.
    */

    tunnel: function() {
      var args, child, event, _i, _len, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (((_ref = this.children) != null ? _ref.length : void 0) > 0) {
        args.push(this);
        _ref1 = this.children;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          child = _ref1[_i];
          _results.push(this._state(child, event, args, "tunnel"));
        }
        return _results;
      }
    },
    _customEventName: function(event) {
      var class_base;
      class_base = this._classBase(this.constructor);
      return ("" + this.constructor.type + ":" + class_base + ":" + event).toLowerCase();
    },
    _classBase: function(constructor) {
      return constructor.base || constructor.name;
    },
    _state: function(instance, event, args, type) {
      var callback, class_base, constructor, indexEvent, _ref, _ref1, _ref2;
      if (type == null) {
        type = "bubble";
      }
      indexEvent = (_ref = this.attributes.events) != null ? _ref.indexOf(event) : void 0;
      if (indexEvent > -1) {
        callback = (_ref1 = this.attributes.callbacks) != null ? _ref1[indexEvent] : void 0;
        if (callback) {
          args[0].eventCustomCallback = callback;
        }
      }
      if (!callback) {
        callback = args[0].eventCustomCallback;
      }
      if (!callback) {
        constructor = args.length === 1 ? this.constructor : args[1].constructor;
        class_base = this._classBase(constructor);
        callback = "on" + (class_base.toClassName()) + (event.toClassName());
      }
      args[0].eventType = type;
      if (((_ref2 = instance[callback]) != null ? _ref2.apply(instance, args) : void 0) !== false) {
        return instance[type].apply(instance, [event].concat(args));
      }
    }
  };

  /*
  @TODO
  
  @namespace Atoms.Core
  @class Helper
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Core.Helper = (function() {
    /*
    Copy from any number of objects and mix them all into a new object.
    @method mix
    @param  {object} arguments to mix them all into a new object.
    @return {object} child a new object with all the objects from the arguments
                     mixed.
    */

    var isArray, mix;
    mix = function(extend, base) {
      var clone, property;
      clone = this._clone(base);
      if (clone != null) {
        for (property in extend) {
          if (typeof extend[property] === "object") {
            clone[property] = this.mix(extend[property], clone[property]);
          } else {
            clone[property] = extend[property];
          }
        }
      } else {
        clone = extend;
      }
      return clone;
    };
    /*
    Test if a given value it's a array type.
    @method isArray
    @param  {value}     Value to test.
    @return {boolean}   True if it's, false if not.
    */

    isArray = function(value) {
      return {}.toString.call(value) === '[object Array]';
    };
    return {
      _clone: function(obj) {
        var flags, key, newInstance;
        if ((obj == null) || typeof obj !== 'object') {
          return obj;
        }
        if (obj instanceof Date) {
          return new Date(obj.getTime());
        }
        if (obj instanceof RegExp) {
          flags = '';
          if (obj.global != null) {
            flags += 'g';
          }
          if (obj.ignoreCase != null) {
            flags += 'i';
          }
          if (obj.multiline != null) {
            flags += 'm';
          }
          if (obj.sticky != null) {
            flags += 'y';
          }
          return new RegExp(obj.source, flags);
        }
        newInstance = new obj.constructor();
        for (key in obj) {
          newInstance[key] = this._clone(obj[key]);
        }
        return newInstance;
      },
      mix: mix,
      isArray: isArray
    };
  })();

  /*
  String prototype: capitalize first letter of a String
  @method className
  @return {string}    String capitalizated.
  */


  String.prototype.toClassName = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };

  /*
  Basic Module with extend/include methods
  
  @namespace Atoms.Core
  @class Module
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  MODULE_KEYWORDS = ['included', 'extended'];

  Atoms.Core.Module = (function() {
    function Module() {
      this.uid = _guid();
    }

    /*
    Extends the contents of an object onto the class to provide new static methods.
    @method extend
    @param  {value}    Contents
    */


    Module.extend = function(obj) {
      var key, value, _ref;
      if (!obj) {
        throw new Error('extend(obj) requires obj');
      }
      for (key in obj) {
        value = obj[key];
        if (__indexOf.call(MODULE_KEYWORDS, key) < 0) {
          this[key] = value;
        }
      }
      if ((_ref = obj.extended) != null) {
        _ref.apply(this);
      }
      return this;
    };

    /*
    Include the contents of an object onto the class prototype to provide new
    instance methods.
    @method include
    @param  {value}    Contents
    */


    Module.include = function(obj) {
      var included, key, value;
      if (!obj) {
        throw new Error('include(obj) requires obj');
      }
      for (key in obj) {
        value = obj[key];
        if (__indexOf.call(MODULE_KEYWORDS, key) < 0) {
          this.prototype[key] = value;
        }
      }
      included = obj.included;
      if (included) {
        included.apply(this);
      }
      return this;
    };

    /*
    ...
    @method create
    @param  {value}    Instance extend contents
    @param  {value}    Static extend contents
    */


    Module.create = function(instances, statics) {
      var cls, _ref;
      cls = (function(_super) {
        __extends(cls, _super);

        function cls() {
          _ref = cls.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        return cls;

      })(this);
      if (instances) {
        cls.include(instances);
      }
      if (statics) {
        cls.extend(statics);
      }
      return cls;
    };

    return Module;

  })();

  _guid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r, v;
      r = Math.random() * 16 | 0;
      v = c === 'x' ? r : r & 3 | 8;
      return v.toString(16);
    }).toUpperCase();
  };

  /*
  HTML Renderer
  
  @namespace Atoms.Core
  @class Output
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Core.Output = {
    /*
    Insert content to the end of each element in the set of matched elements.
    @method append
    */

    append: function() {
      return this.output("append");
    },
    /*
    Insert content to the beginning of each element in the set of matched elements.
    @method prepend
    */

    prepend: function() {
      return this.output("prepend");
    },
    /*
    Set the HTML contents of each element in the set of matched elements.
    @method html
    */

    html: function() {
      return this.output("html");
    },
    /*
    Render element with the instance @template and @attributes.
    @method output
    */

    output: function() {
      if (this.constructor.template == null) {
        throw "No template defined.";
      }
      if (this.container == null) {
        throw "No container assigned.";
      }
      this._render();
      this.constructor.method = this.attributes.method || Atoms.Core.Constants.APPEND;
      if (typeof this.container === "string" || (this.container.length == null)) {
        this.container = Atoms.$(this.container);
      }
      return this.container.first()[this.constructor.method](this.el);
    },
    /*
    Refresh element with the new @attributes.
    @method refresh
    */

    refresh: function() {
      var current_el;
      current_el = this.el;
      this._render();
      if (typeof this.bindEvents === "function") {
        this.bindEvents();
      }
      return current_el.replaceWith(this.el);
    },
    /*
    Remove element from DOM
    @method destroy
    */

    destroy: function() {
      return this.el.remove();
    },
    _render: function() {
      this._createIfBindings();
      this.el = Atoms.$(_mustache(this.constructor.template)(this.attributes));
      this.el.attr("data-" + this.constructor.type, this.constructor.name.toLowerCase());
      return this.el;
    },
    _createIfBindings: function() {
      var key, _results;
      this.attributes["if"] = {};
      _results = [];
      for (key in this.attributes) {
        if (__indexOf.call(Atoms.Core.Constants.EXCLUDED_IF_KEYS, key) < 0) {
          if (this.attributes[key]) {
            _results.push(this.attributes["if"][key] = true);
          } else {
            _results.push(void 0);
          }
        }
      }
      return _results;
    }
  };

  /*
  The fastest and smallest Mustache compliant Javascript templating library
  templayed.js 0.2.1 - (c) 2012 Paul Engel
  http://archan937.github.io/templayed.js/
  */


  _mustache = function(template, data) {
    var block, get, inc, tag;
    get = function(path, i) {
      var index, js, keys;
      i = 1;
      path = path.replace(/\.\.\//g, function() {
        i++;
        return "";
      });
      js = ["data[data.length - ", i, "]"];
      keys = (path === "." ? [] : path.split("."));
      index = 0;
      while (index < keys.length) {
        js.push("." + keys[index]);
        index++;
      }
      return js.join("");
    };
    tag = function(template) {
      return template.replace(/\{\{(!|&|\{)?\s*(.*?)\s*}}+/g, function(match, operator, context) {
        var i;
        if (operator === "!") {
          return "";
        }
        i = inc++;
        return ["\"; var o", i, " = ", get(context), ", s", i, " = (((typeof(o", i, ") == \"function\" ? o", i, ".call(data[data.length - 1]) : o", i, ") || \"\") + \"\"); s += ", (operator ? "s" + i : "(/[&\"><]/.test(s" + i + ") ? s" + i + ".replace(/&/g,\"&amp;\").replace(/\"/g,\"&quot;\").replace(/>/g,\"&gt;\").replace(/</g,\"&lt;\") : s" + i + ")"), " + \""].join("");
      });
    };
    block = function(template) {
      return tag(template.replace(/\{\{(\^|#)(.*?)}}(.*?)\{\{\/\2}}/g, function(match, operator, key, context) {
        var i;
        i = inc++;
        return ["\"; var o", i, " = ", get(key), "; ", (operator === "^" ? ["if ((o", i, " instanceof Array) ? !o", i, ".length : !o", i, ") { s += \"", block(context), "\"; } "] : ["if (typeof(o", i, ") == \"boolean\" && o", i, ") { s += \"", block(context), "\"; } else if (o", i, ") { for (var i", i, " = 0; i", i, " < o", i, ".length; i", i, "++) { data.push(o", i, "[i", i, "]); s += \"", block(context), "\"; data.pop(); }}"]).join(""), "; s += \""].join("");
      }));
    };
    inc = 0;
    return new Function("data", "data = [data], s = \"" + block(template.replace(/"/g, "\\\"").replace(/\n/g, "\\n")) + "\"; return s;");
  };

  /*
  HTML5 API History Wrapper
  
  @namespace Atoms
  @class Url
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Url = (function(a) {
    var _back, _getFragment, _getPath, _listen, _matchRoute, _onPopState, _options, _path, _regexp;
    _regexp = {
      attributes: /:([\w\d]+)/g,
      splat: /\*([\w\d]+)/g,
      escape: /[-[\]{}()+?.,\\^$|#\s]/g,
      hash: /^#*/
    };
    _options = {
      path: null,
      forward: true,
      history: false,
      routes: {}
    };
    /*
    @TODO
    @method path
    @param  {value}    Array of urls with callbacks
    */

    _path = function() {
      var args, path, state;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (args.length > 0) {
        _options.forward = true;
        path = "/" + args.join("/");
        if (path !== _options.path) {
          if (!_options.history) {
            path = "#" + path;
          }
          state = window.history.state || null;
          window.history.pushState(state, document.title, path.toLowerCase());
          return _onPopState();
        }
      } else {
        if (_options.history) {
          return _getPath();
        } else {
          return _getFragment();
        }
      }
    };
    /*
    @TODO
    @method back
    */

    _back = function() {
      var steps;
      _options.forward = false;
      steps = window.history.state.steps != null ? window.history.state.steps : 1;
      return window.history.go(-steps);
    };
    /*
    @TODO
    @method listen
    */

    _listen = function(path, callback) {
      var attributes, match;
      attributes = ["url"];
      _regexp.attributes.lastIndex = 0;
      while ((match = _regexp.attributes.exec(path)) !== null) {
        attributes.push(match[1]);
      }
      _regexp.splat.lastIndex = 0;
      while ((match = _regexp.splat.exec(path)) !== null) {
        attributes.push(match[1]);
      }
      path = path.replace(_regexp.escape, '\\$&').replace(_regexp.attributes, '([^\/]*)').replace(_regexp.splat, '(.*?)');
      return _options.routes[path] = {
        attributes: attributes,
        callback: callback,
        regexp: new RegExp('^' + path + '$')
      };
    };
    _onPopState = function(event) {
      var path;
      if (event) {
        event.preventDefault();
      }
      path = _options.history ? _getPath() : _getFragment();
      if (path !== _options.path) {
        _options.path = path;
        return _matchRoute(path);
      }
    };
    _getPath = function() {
      var path;
      path = window.location.pathname;
      if (path.substr(0, 1) !== '/') {
        path = '/' + path;
      }
      return path;
    };
    _getFragment = function() {
      return window.location.hash.replace(_regexp.hash, '');
    };
    _matchRoute = function(path, options) {
      var attribute, exec, index, key, obj, route, _i, _len, _ref, _ref1, _results;
      _results = [];
      for (key in _options.routes) {
        route = _options.routes[key];
        exec = route.regexp.exec(path);
        if (exec) {
          obj = {};
          _ref = route.attributes;
          for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
            attribute = _ref[index];
            obj[attribute] = exec[index];
          }
          if ((_ref1 = route.callback) != null) {
            _ref1.call(this, obj);
          }
          break;
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
    (function() {
      return Atoms.$(window).on("popstate", _onPopState);
    })();
    return {
      path: _path,
      back: _back,
      listen: _listen,
      options: _options
    };
  })(Atoms);

  /*
  Base class for Atom
  
  @namespace Atoms.Class
  @class Atom
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Class.Atom = (function(_super) {
    __extends(Atom, _super);

    Atom.include(Atoms.Core.Attributes);

    Atom.include(Atoms.Core.Event);

    Atom.include(Atoms.Core.Output);

    function Atom(attributes) {
      var EVENT, _base;
      this.attributes = attributes;
      this.bindEntityDestroy = __bind(this.bindEntityDestroy, this);
      this.bindEntityUpdate = __bind(this.bindEntityUpdate, this);
      Atom.__super__.constructor.apply(this, arguments);
      if (!this["default"]) {
        this["default"] = {
          events: []
        };
      }
      this.attributes = Atoms.Core.Helper.mix(this.attributes, this["default"]);
      this.constructor.type = "Atom";
      this.scaffold();
      if (this.entity) {
        attributes = (typeof (_base = this.entity).parse === "function" ? _base.parse() : void 0) || this.entity.attributes();
        this.attributes = Atoms.Core.Helper.mix(this.attributes, attributes);
        EVENT = Atoms.Core.Constants.ENTITY.EVENT;
        Atoms.Entity[this.entity.className].bind(EVENT.UPDATE, this.bindEntityUpdate);
        Atoms.Entity[this.entity.className].bind(EVENT.DESTROY, this.bindEntityDestroy);
      }
      this.output();
      this.bindEvents();
    }

    Atom.prototype.bindEntityUpdate = function(model) {
      var attribute, attributes, _base;
      if (model.uid === this.entity.uid) {
        attributes = (typeof (_base = this.entity).parse === "function" ? _base.parse() : void 0) || this.entity.attributes();
        for (attribute in attributes) {
          this.attributes[attribute] = attributes[attribute];
        }
        return this.refresh();
      }
    };

    Atom.prototype.bindEntityDestroy = function(model) {
      if (model.uid === this.entity.uid) {
        return this.destroy();
      }
    };

    Atom.prototype.bindEvents = function() {
      var evt, _i, _len, _ref, _results,
        _this = this;
      if (this.attributes.events) {
        _ref = this.attributes.events;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          evt = _ref[_i];
          _results.push(this.el.on(evt, (function(evt) {
            return function(event) {
              return _this.bubble(evt, event);
            };
          })(evt)));
        }
        return _results;
      }
    };

    return Atom;

  })(Atoms.Core.Module);

  /*
  Entity Namespace
  
  @namespace Atoms.Core.Class
  @class Entity
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Class.Entity = (function(_super) {
    __extends(Entity, _super);

    Entity.extend(Atoms.Core.Event);

    Entity.records = {};

    Entity.attributes = [];

    Entity.fields = function() {
      var attributes;
      attributes = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      this.records = {};
      this.attributes = attributes || [];
      this.unbind();
      return this;
    };

    Entity.create = function(attributes) {
      var record;
      record = new this(attributes);
      return record.save();
    };

    Entity.exists = function(uid) {
      var e;
      try {
        this.find(uid);
        return true;
      } catch (_error) {
        e = _error;
        return false;
      }
    };

    Entity.find = function(uid) {
      var record;
      record = this.records[uid];
      if (!record) {
        throw new Error('Unknown UID record');
      }
      return record.clone();
    };

    Entity.findBy = function(name, value) {
      var record, uid, _ref;
      _ref = this.records;
      for (uid in _ref) {
        record = _ref[uid];
        if (record[name] === value) {
          return record.clone();
        }
      }
      throw new Error('Unknown record');
    };

    Entity.select = function(callback) {
      var record, uid;
      return this.cloneArray((function() {
        var _ref, _results;
        _ref = this.records;
        _results = [];
        for (uid in _ref) {
          record = _ref[uid];
          if (callback(record)) {
            _results.push(record);
          }
        }
        return _results;
      }).call(this));
    };

    Entity.each = function(callback) {
      var key, value, _ref, _results;
      _ref = this.records;
      _results = [];
      for (key in _ref) {
        value = _ref[key];
        _results.push(callback(value.clone()));
      }
      return _results;
    };

    Entity.all = function() {
      return this.cloneArray(this.recordsValues());
    };

    Entity.count = function() {
      return this.recordsValues().length;
    };

    Entity.cloneArray = function(array) {
      var value, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        value = array[_i];
        _results.push(value.clone());
      }
      return _results;
    };

    Entity.recordsValues = function() {
      var key, result, value, _ref;
      result = [];
      _ref = this.records;
      for (key in _ref) {
        value = _ref[key];
        result.push(value);
      }
      return result;
    };

    Entity.destroyAll = function() {
      return this.records = {};
    };

    function Entity(attributes) {
      Entity.__super__.constructor.apply(this, arguments);
      this.constructor.constructor.type = "Entity";
      this.constructor.constructor.base = this.constructor.name;
      this.className = this.constructor.name;
      if (attributes) {
        this.load(attributes);
      }
    }

    Entity.prototype.isNew = function() {
      return !this.exists();
    };

    Entity.prototype.exists = function() {
      return this.uid && this.uid in this.constructor.records;
    };

    Entity.prototype.load = function(attributes) {
      var key, value;
      for (key in attributes) {
        value = attributes[key];
        if (typeof this[key] === 'function') {
          this[key](value);
        } else {
          this[key] = value;
        }
      }
      return this;
    };

    Entity.prototype.attributes = function() {
      var key, result, _i, _len, _ref;
      result = {};
      _ref = this.constructor.attributes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        if (key in this) {
          if (typeof this[key] === 'function') {
            result[key] = this[key]();
          } else {
            result[key] = this[key];
          }
        }
      }
      return result;
    };

    Entity.prototype.equal = function(record) {
      return !!((record != null ? record.constructor : void 0) === this.constructor && record.uid === this.uid);
    };

    Entity.prototype.save = function() {
      var error, record;
      if (this.validate != null) {
        error = this.validate();
      }
      if (error) {
        return this.trigger('error', error);
      } else {
        record = this.isNew() ? this.create() : this.update();
        this.trigger('save');
        return record;
      }
    };

    Entity.prototype.updateAttributes = function(attributes) {
      this.load(attributes);
      return this.save();
    };

    Entity.prototype.create = function() {
      var record;
      record = new this.constructor(this.attributes());
      record.uid = this.uid;
      this.constructor.records[this.uid] = record;
      this.trigger('create');
      this.trigger('change');
      return record.clone();
    };

    Entity.prototype.update = function() {
      var records;
      records = this.constructor.records;
      records[this.uid].load(this.attributes());
      this.trigger('update');
      this.trigger('change');
      return records[this.uid].clone();
    };

    Entity.prototype.destroy = function() {
      delete this.constructor.records[this.uid];
      this.trigger('destroy');
      this.trigger('change');
      return this.unbind();
    };

    Entity.prototype.clone = function() {
      return Object.create(this);
    };

    Entity.prototype.unbind = function() {
      return this.trigger('unbind');
    };

    Entity.prototype.trigger = function() {
      var args, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      args.splice(1, 0, this);
      return (_ref = this.constructor).trigger.apply(_ref, args);
    };

    return Entity;

  })(Atoms.Core.Module);

  if (typeof Object.create !== 'function') {
    Object.create = function(o) {
      var Func;
      Func = function() {};
      Func.prototype = o;
      return new Func();
    };
  }

  /*
  Base class for Molecule
  
  @namespace Atoms.Class
  @class Molecule
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Class.Molecule = (function(_super) {
    __extends(Molecule, _super);

    Molecule.include(Atoms.Core.Attributes);

    Molecule.include(Atoms.Core.Event);

    Molecule.include(Atoms.Core.Output);

    Molecule.prototype._entities = [];

    function Molecule(attributes) {
      var _ref;
      this.attributes = attributes;
      this._addAtomEntity = __bind(this._addAtomEntity, this);
      Molecule.__super__.constructor.apply(this, arguments);
      if (!this["default"]) {
        this["default"] = {
          children: []
        };
      }
      this.children = [];
      this.constructor.type = "Molecule";
      this.scaffold();
      this.output();
      this.chemistry();
      if ((((_ref = this.attributes.bind) != null ? _ref.entity : void 0) != null) && (this.attributes.bind.atom != null) && this.attributes.bind.auto) {
        this._bindEntityEvents();
      }
    }

    Molecule.prototype.entity = function(entities) {
      var entity, _i, _len, _ref, _results;
      this._removeAtomsEntities();
      if ((((_ref = this.attributes.bind) != null ? _ref.entity : void 0) != null) && (this.attributes.bind.atom != null) && (Atoms.Atom[this.attributes.bind.atom] != null)) {
        _results = [];
        for (_i = 0, _len = entities.length; _i < _len; _i++) {
          entity = entities[_i];
          _results.push(this._addAtomEntity(entity));
        }
        return _results;
      }
    };

    Molecule.prototype._addAtomEntity = function(entity) {
      var attributes, property, _i, _len, _ref, _ref1;
      attributes = {
        entity: entity
      };
      _ref = ["events", "callbacks"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        property = _ref[_i];
        if (this.attributes.bind[property] != null) {
          attributes[property] = this.attributes.bind[property];
        }
      }
      attributes = Atoms.Core.Helper.mix(attributes, (_ref1 = this["default"].children) != null ? _ref1[this.attributes.entityAtom] : void 0);
      return this._entities.push(this.appendChild("Atom", this.attributes.bind.atom, attributes));
    };

    Molecule.prototype._removeAtomsEntities = function() {
      var entity, _i, _len, _ref;
      _ref = this._entities;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        entity = _ref[_i];
        entity.el.remove();
      }
      return this._entities = [];
    };

    Molecule.prototype._bindEntityEvents = function() {
      var entity;
      entity = Atoms.Entity[this.attributes.bind.entity];
      new entity();
      return entity.bind(Atoms.Core.Constants.ENTITY.EVENT.CREATE, this._addAtomEntity);
    };

    return Molecule;

  })(Atoms.Core.Module);

  /*
  Base class for Organism
  
  @namespace Atoms.Class
  @class Organism
  
  @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
  */


  "use strict";

  Atoms.Class.Organism = (function(_super) {
    var _file;

    __extends(Organism, _super);

    Organism.include(Atoms.Core.Attributes);

    Organism.include(Atoms.Core.Event);

    Organism.include(Atoms.Core.Output);

    _file = void 0;

    function Organism(attributes, scaffold) {
      this.attributes = attributes;
      Organism.__super__.constructor.apply(this, arguments);
      if (!this["default"]) {
        this["default"] = {
          children: []
        };
      }
      this.children = [];
      this.constructor.type = this.constructor.type || "Organism";
      if (scaffold) {
        _file = this._getScaffold(scaffold);
      }
      this.attributes = Atoms.Core.Helper.mix(this.attributes, _file);
      _file = void 0;
    }

    Organism.scaffold = function(url) {
      var loader, scaffold;
      loader = typeof $$ !== "undefined" && $$ !== null ? $$ : $;
      scaffold = loader.ajax({
        url: url,
        async: false,
        dataType: "text",
        error: function() {
          throw "Error loading scaffold in " + url;
        }
      });
      return _file = JSON.parse(scaffold.responseText);
    };

    Organism.prototype.render = function() {
      this.scaffold();
      this.output();
      return this.chemistry();
    };

    Organism.prototype._getScaffold = function(url) {
      var loader, scaffold;
      loader = typeof $$ !== "undefined" && $$ !== null ? $$ : $;
      scaffold = loader.ajax({
        url: url,
        async: false,
        dataType: "text",
        error: function() {
          throw "Error loading scaffold in " + url;
        }
      });
      return _file = JSON.parse(scaffold.responseText);
    };

    return Organism;

  })(Atoms.Core.Module);

}).call(this);
