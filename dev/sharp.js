;(sharp = function(){

    var microtime = function(getFloat){
        var now = new Date().getTime() / 1000;
        var s = parseInt(now, 10);
        return (getFloat) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
    }

    var today = function(glue){
        glue = glue || "-"
        var date = new Date()
        return (date.getDate() < 10 ? '0' : '') + date.getDate() + glue + (date.getMonth() < 10 ? '0' : '') + (date.getMonth()+1) + glue + date.getFullYear()
    }

    var random = function(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    var trim = function(str){
        return str.replace(/^\s+|\s+$/g, '')
    }

    var inArray = function(needle, haystack){
        return haystack.indexOf(needle) !== -1 ? true : false
    }

    var isBoolean = function(_var){
        return (_var === true || _var === false)
    }

    var isString = function(_var){
        return (typeof _var === 'string')
    }

    var isObject = function(_var){
        if (Object.prototype.toString.call(_var) === '[object Array]')
            return false
        return (_var !== null && typeof _var === 'object')
    }

    var isNull = function(_var){
        return (_var === null)
    }

    var escape = function(_var){
        return (_var + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')
    }
    
    var stripTags = function(_var, _allowed){
        allowed = (((allowed || '') + '')
			.toLowerCase()
			.match(/<[a-z][a-z0-9]*>/g) || [])
			.join('')
		var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
		var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi
	  	return _var
	  		.replace(commentsAndPhpTags, '')
	  		.replace(tags, function($0, $1) {
	      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
	    })
    }

    return {
        microtime: microtime,
        today: today,
        random: random,
        trim: trim,
        inArray: inArray,
        isBoolean: isBoolean,
        isString: isString,
        isObject: isObject,
        isNull: isNull,
        escape: escape,
        stripTags: stripTags
    }

}());
