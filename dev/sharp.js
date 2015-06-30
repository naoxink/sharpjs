;(sharp = function(){

    var microtime = function(){
        return new Date().getTime()
    }

    var today = function(glue){
        glue = glue || "-"
        var date = new Date()
        return date.getDate() + glue + (date.getMonth()+1) + glue + date.getFullYear()
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

    return {
        microtime: microtime,
        today: today,
        random: random,
        trim: trim,
        inArray: inArray
    }

}());
