# sharpjs
Util library with basic functions. Everybody is a little bit lazy :)

# Methods

|Method|Basic Call|Description
| --- | --- | --- |
|microtime| `sharp.microtime()` | Returns microtime
|today| `sharp.today()` | Returns a `String` formatted date
|random| `sharp.random(1, 5)` | Returns a random number between range
|trim| `sharp.trim(' hello  ')` | Returns the trimmed `String`
|inArray| `sharp.inArray('apple', ['lemon', 'orange', 'apple'])` | Returns true if exists and false if not
|isBoolean| `sharp.isBoolean(myVar)` | Checks if a variable is boolean
|isString| `sharp.isString(myVar)` | Checks if a variable is string
|isObject| `sharp.isObject(myVar)` | Checks if a variable is object
|isNull| `sharp.isNull(myVar)` | Checks if a variable is null
|escape| `sharp.escape(myText)` | Replace sensible characters
|stripTags| `sharp.stripTags(myText)` | Strips all HTML tags (allowed tags in the second parameter)
|capitalize| `sharp.capitalize(myText)` | Capitalizes a string
|dump| `sharp.dump(myArray)` | Similar to `var_dump` from PHP
|functionExists| `sharp.functionExists('myFunction')` | Checks if a function exists
|merge| `sharp.merge(obj1, obj2)` | Merges two objects
|escapeHTML| `sharp.escapeHTML('<b>Hi!</b>')` | Escapes HTML characters (Ex: `<`)
|fade| `sharp.fade('#someDiv', 2000, 'in')` | Fade selected elements
|map| `sharp.map([1, 2, 3], function(e){ return e*e; })` | Map an array
|select| `sharp.select('.myClass')` | Selection of DOM elements
|diffDays| `sharp.diffDays(date1, date2)` | Difference in days between two dates
|uniqueArray| `sharp.uniqueArray(myArray)` | Remove duplicate entries in an array
|highlight| `sharp.highlight(text, words)` | Highlights words in a text
|size| `sharp.size(object)` | Size of an object
|cloneObject| `sharp.cloneObject(object)` | Clones an object
|htmlentities| `sharp.htmlentities(text)` | PHP htmlentities like
