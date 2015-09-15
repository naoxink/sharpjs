;(sharp = function() {

  // NOTE: This functions are implemented with NO ORDER

  this.microtime = function(getFloat) {
    var now = new Date().getTime() / 1000;
    var s = parseInt(now, 10);
    return (getFloat) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
  } // End this.microtime

  this.today = function(glue) {
      glue = glue || "-"
      var date = new Date()
      return (date.getDate() < 10 ? '0' : '') + date.getDate() + glue + (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1) + glue + date.getFullYear()
  } // End this.today

  this.random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  } // End this.random

  this.trim = function(str) {
    return str.replace(/^\s+|\s+$/g, '')
  } // End this.trim

  this.inArray = function(needle, haystack) {
    return haystack.indexOf(needle) !== -1 ? true : false
  } // End this.inArray

  this.isBoolean = function(_var) {
    return (_var === true || _var === false)
  } // End this.isBoolean

  this.isString = function(_var) {
    return (typeof _var === 'string')
  } // End this.isString

  this.isObject = function(_var) {
    if (Object.prototype.toString.call(_var) === '[object Array]') return false
    return (_var !== null && typeof _var === 'object')
  } // End this.isObject

  this.isNull = function(_var) {
    return (_var === null)
  } // End this.isNull

  this.escape = function(_var) {
    return (_var + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')
  } // End this.escape

  this.stripTags = function(_var, _allowed) {
    _allowed = (((_allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('')
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi
    return _var.replace(commentsAndPhpTags, '').replace(tags, function($0, $1) {
        return _allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
    })
  } // End this.stripTags

  this.capitalize = function(_str) {
    return _str.replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
        return p1 + p2.toUpperCase();
    });
  } // End this.capitalize

  this.inArray = function(_array, _item) {
    var i = _array.length
    while (i--) {
        if (_array[i] === _item) return true
    }
    return false
  } // End this.inArray

  this.dump = function(_arr, _level) {
    var dumped_text = ""
    if (!_level) _level = 0
    var level_padding = ""
    for (var j = 0; j < _level + 1; j++) level_padding += "    "
      if (typeof(_arr) == 'object') {
        for (var item in _arr) {
          var value = _arr[item]
          if (typeof(value) == 'object') {
            dumped_text += level_padding + "'" + item + "' ...\n"
            dumped_text += dump(value, _level + 1)
          } else {
            dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n"
          }
        }
      } else {
          dumped_text = "===>" + _arr + "<===(" + typeof(_arr) + ")"
      }
      return dumped_text
  } // End this.dump

  this.functionExists = function(_functionName) {
    return (typeof window[_functionName] === 'function')
  } // End this.functionExists

  this.merge = function(_obj1, _obj2){
    var res = {};
    for (var attrname in _obj1) {
      if(this.isObject(_obj1[attrname])){
        res[attrname] = this.merge(_obj1[attrname], _obj2[attrname])
      }else{
        res[attrname] = _obj1[attrname];
      }
    }
    for (var attrname in _obj2) {
      if(this.isObject(_obj2[attrname])){
        res[attrname] = merge(_obj1[attrname], _obj2[attrname])
      }else{
        res[attrname] = _obj2[attrname];
      }
    }
    return res;
  } // End this.merge
  
  this.escapeHTML = function(_text) {  
    var replacements = {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"": "&quot;"};
    return _text.replace(/[<>&"]/g, function(character) {
      return replacements[character];
    }); 
  } // End this.escapeHTML
  
  this.fade = function(selector, duration, type){
    duration = parseInt(duration, 10) || 1000
    var interval = duration / 100
    type = type || 'out';
    var e = null;
    var selector_type = selector.substr(0, 1);
    selector = selector.substr(1, selector.length);
    
    var apply_fade = function(element){
        var style = element.style;
        switch(type){
            case 'in':
                fade_in(style);
                break;
            case 'out':
                fade_out(style);
                break;                
        }
    }
    
    var fade_out = function(style){
        var op = 1;
        style.opacity = op;
        var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
                style.display = 'none';
            }
            style.opacity = op;
            style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, interval);
    }
    
    var fade_in = function(style){
        var op = 0.1;
        style.display = 'block';
        style.opacity = op;
        var timer = setInterval(function () {
            if (op >= 1){ clearInterval(timer); }
            style.opacity = op;
            style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, interval);
    }
    
    switch(selector_type){
        case '.':
            // Applies to all elements with the class
            var elements = document.getElementsByClassName(selector)
            for(var i = 0; i < elements.length; i++){
                apply_fade(elements[i])
            }
            break;
        case '#':
            // Applies to the first element found
            e = document.getElementById(selector);
            var style = e.style;
            apply_fade(e);
            break;
    }
  } // End this.fade
  
  this.map = function(array, iteratee){
    var n = array.length || 0;
    var i = 0;
    var results = [];
    for(i = 0; i < n; i++){
        var res = iteratee.call(3, array[i], i, array);
        results.push(res);
    }
    return results;
  } // End this.map
  
  this.select = function(selector){
    var sel_type = selector.substr(0, 1);
    var sel = selector.substr(1, selector.length);
    switch(sel_type){
        case '.':
            return document.getElementsByClassName(sel);
            break;
        case '#':
            return document.getElementById(sel);
            break;
        default:
            return null;
            break;
    }
  } // End this.select
  
  this.diffDays: function(date1, date2){
		d1 = date1.getTime() / 86400000;
		d2 = date2.getTime() / 86400000;
		return parseInt(d1 - d2);
	} // End this.diffDays

}());
