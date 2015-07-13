;(sharp = function() {

  // NOTE: This functions are implemented with NO ORDER

  this.microtime = function(getFloat) {
    var now = new Date().getTime() / 1000;
    var s = parseInt(now, 10);
    return (getFloat) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
  }

  this.today = function(glue) {
      glue = glue || "-"
      var date = new Date()
      return (date.getDate() < 10 ? '0' : '') + date.getDate() + glue + (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1) + glue + date.getFullYear()
  }

  this.random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  this.trim = function(str) {
    return str.replace(/^\s+|\s+$/g, '')
  }

  this.inArray = function(needle, haystack) {
    return haystack.indexOf(needle) !== -1 ? true : false
  }

  this.isBoolean = function(_var) {
    return (_var === true || _var === false)
  }

  this.isString = function(_var) {
    return (typeof _var === 'string')
  }

  this.isObject = function(_var) {
    if (Object.prototype.toString.call(_var) === '[object Array]') return false
    return (_var !== null && typeof _var === 'object')
  }

  this.isNull = function(_var) {
    return (_var === null)
  }

  this.escape = function(_var) {
    return (_var + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')
  }

  this.stripTags = function(_var, _allowed) {
    _allowed = (((_allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('')
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
    var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi
    return _var.replace(commentsAndPhpTags, '').replace(tags, function($0, $1) {
        return _allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
    })
  }

  this.capitalize = function(_str) {
    return _str.replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
        return p1 + p2.toUpperCase();
    });
  }

  this.inArray = function(_array, _item) {
    var i = _array.length
    while (i--) {
        if (_array[i] === _item) return true
    }
    return false
  }

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
  }

  this.functionExists = function(_functionName) {
    return (typeof window[_functionName] === 'function'))
  }

  this.merge = function(_obj1, _obj2){
    var res = {};
    for (var attrname in _obj1) {
      if(_obj1[attrname].constructor === Object){
        res[attrname] = this.merge(_obj1[attrname], _obj2[attrname])
      }else{
        res[attrname] = _obj1[attrname];
      }
    }
    for (var attrname in _obj2) {
      if(_obj2[attrname].constructor === Object){
        res[attrname] = merge(_obj1[attrname], _obj2[attrname])
      }else{
        res[attrname] = _obj2[attrname];
      }
    }
    return res;
  }

}());
