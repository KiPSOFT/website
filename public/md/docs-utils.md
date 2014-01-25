## Utils

| Stability: __stable__

- Methods
- Prototypes

### Methods

=== javascript

/*
	Expression method		
	return {Function} :: called function must return {Boolean}
*/
expression(query, names, [valueA], [valueB], [valueC], [...]);

// EXAMPLE:

var obj = { name: 'A' };
var fn = expression('user.name === obj.name', ['user', 'obj'], obj);

var user = { name: 'B' };
console.log(fn(user)); // false
console.log(fn({ name: 'A' })); // true

// CREATED FOR DATABASES:
// EXAMPLE:
nosql.all(expression('doc.email === user.email', ['doc', 'user'], { email: 'petersirka@gmail.com' }), callback);

/*
	return empty {Function}
*/
utils.noop();

/*
	Is empty object?
	@obj {Object}
	return {Boolean}
*/
utils.isEmpty(obj);

/*	
	Send request to URL and retrieve response
	@url {String}
	@method {String}
    @data {String}
    @callback {Function} :: function(error, data, statusCode, headers)
    @headers {Object} :: optional, default {}
    @encoding {String} :: optional, default utf8
    @timeout {Number} :: optional, default 10000
*/
utils.request(url, method, data, callback, headers, encoding, timeout);

/*
	Extend object
	@target {Object}
	@source {Object}
	@rewrite {Boolean} :: option, default false
	return @source
*/
utils.extend(target, source, rewrite);

/*
	Copy properties and values
	@target {Object}
	@source {Object}
	@rewrite {Boolean} :: option, default true

	version: +1.2.4-4
*/
utils.copy(target, source, rewrite);

/*
	Reduce object properties
	@source {Object}
	@prop {String array or Object} :: property name
	return @source
*/
utils.reduce(source, prop);

/*
	TRIM string properties
	@obj {Object}
	return {Object}
*/
utils.trim(obj);

/*
	Is relative URL?
	@url {String}
	return {Boolean}
*/
utils.isRelative(url);

/*
	Return HTTP code description
	@code {Number}
	@addCode {Boolean} :: added code number to description - optional, default true
	return {String}
*/
utils.httpStatus(code, [addCode]);

/*
	Encode HTML
	@str {String}
	return {String}
*/
utils.htmlEncode(str);

/*
	Decode HTML
	@str {String}
	return {String}
*/
utils.htmlDecode(str);

/*
	Is static file?
	@url {String}
	return {Boolean}
*/
utils.isStaticFile(url);

/*
	@str {String}
	return {Boolean}
*/
utils.isNullOrEmpty(str);

/*
	parseInt
	@obj {Object}
	@def {Number}
	return {Number}
*/
utils.parseInt(obj, def);

/*
	parseFloat
	@obj {Object}
	@def {Number}
	return {Number}
*/
utils.parseFloat(obj, def);

/*
	Get Content type by extension
	@str {String}
	return {String}
*/
utils.getContentType(ext);

/*
	Create ETag from string
	@text {String} :: filename
	return {String}
*/
utils.etag(text);

/*
	Add @c to end of @path
	@path {String} :: filename
	@c {String} :: optional, default /
	return {String}
*/
utils.path(path, c);

/*
	Random number between 0 and @max;
	@max {Number}
	return {Number}
*/
utils.random(max);

/*
	Create unique identifier
	@max {Number} :: optional, default 40
	return {String}
*/
utils.GUID(max)

/*
	Validation function
	@obj {Object} :: object to validate
	@properties {String array} : what properties?
	@prepare {Function} : return utils.isValid() OR {Boolean} :: true is valid
	@builder {ErrorBuilder}
	@resource {Function} :: function(key) return {String}
	return {ErrorBuilder}
*/
utils.validate(obj, properties, prepare, builder, resource);

/*
	Validation object
	@isValid {Boolean}
	@error {String} :: optional, default @
	return {Object}
*/
utils.isValid(valid, error);

/*
	Email address validation
	@str {String}
	return {Boolean}
*/
utils.isEmail(str);

/*
	URL address validation
	@str {String}
	return {Boolean}
*/
utils.isURL(str);

/*
	Combine path
	@arguments {String array}
	return {String}
*/
utils.combine();

/*
	Is array?
	@obj {Object}
	return {Boolean}
*/
utils.isArray(obj);

/*
	Is date?
	@obj {Object}
	return {Boolean}
*/
utils.isDate(obj);

/*
	@str {String}
	return {String}
*/
removeDiacritics(str);
===

### Prototypes

=== javascript
/*	
	@type {String} :: [s, ss, second, seconds], [m, mm, minute, minutes], [h, hh, hour, hours], [d, dd, day, days], [M, MM, month, months], [y, yyyy, year, years]
	@value {Number}
	return {Date}
*/
Date.add(type, value);

/*	
	@format {String} :: d or DD - day, M or MM - month, yyyy - year, H or h - hour, m or mm - minute, s or ss - seconds, a - AM/PM
	return {String}

	example: new Date().format('dd.MM.yyyy HH:mm:ss')
*/
Date.format(format);

String.htmlEncode();
String.htmlDecode();
String.urlEncode();
String.UrlDecode();
String.isEmail();
String.isURL();
String.trim();
String.toUnicode();
String.fromUnicode();
String.sha1();
String.md5();
String.removeDiacritics();
String.parseDate();

/*
	Create link (URL) from string
*/
String.link();

/*
	Prepare string for replacing double dollar
*/
String.dollar();

/*
	Format string
	@arguments {Object array}
	return {String}
*/
String.format();

/*
	Simple templating :: Hellow {name}, your score: {score} 
	@obj {Object}
	return {String}
*/
String.params(obj);

/*
	Set max length of string
	@max {Number}
	@chars {String} :: optional, default ...
	return {String}
*/
String.maxLength(max, chars)

/*
	@def {Number} :: optional, default 0
	return {Number}
*/
String.parseInt(def);

/*
	@def {Number} :: optional, default 0
	return {Number}
*/
String.parseFloat(def);

/*
	String simple cryptography (encode)
	Author: Jozef Gula

	@key {String}
	@isUnique {Boolean}
	return {String}
*/
String.encode(key, isUnique)

/*
	String simple cryptography (decode)
	Author: Jozef Gula

	@key {String}
	return {String}
*/
String.decode(key);

/*
	Calculate searched text
	return {Number}
*/
String.count(text)

/*
	Get content type from base64
	return {String}
*/
String.base64ContentType();

/*
	Indent
	@max {Number}
	@c {String} : optional, default SPACE
	return {String}
*/
String.indent(max, c);

/*
	is JSON?
	return {Boolean};	
*/
String.isJSON();

/*
	isNumber?
	@isDecimal {Boolean} :: optional, default false
	return {Boolean}
*/
String.isNumber(isDecimal);

/*
	@max {Number}
	@char {String} :: optional, default ' '
	return {String}
*/
String.padLeft(max, char);
String.padRight(max, char);

/*
	Contains string some value from array?
	@arr {String array}
	@mustAll {Boolean} :: optional, default false
*/
String.contains(arr, mustAll);

/*
	@decimals {Number}
	return {Number}
*/
Number.floor(decimals);
Number.round(decimals);

/*
	@max {Number}
	@char {String} :: optional, default '0'
	return {String}
*/
Number.padLeft(max, char);
Number.padRight(max, char);

/*
	Format number
	@format {String} :: char # represent number, example: ## ###.## (1000.343 = 1 000.34, 10000.343 = 10 000.34, 1000000.343 = 1000 000.34)
	return {String}
*/
Number.format(format);

/*
	Number to HEX
	@length {Number}
	return {String}
*/
Number.hex(length);

/*
	@cb {Function} :: return item if is finded else return null
	return {Array item}
*/
Array.find(cb);

/*
	@cb {Function} :: return true / false
	return {Array}

	version: +1.2.4-4
*/
Array.where(cb);

/*
    @count {Number}
	return {Array}
*/
Array.take(count);

/*
    @count {Number}
	return {Array}
*/
Array.skip(count);

/*
	@cb {Function} :: return true if is removed
*/
Array.remove(cb);

/*
	Return random item
	Return {Object}
*/
Array.random();

/*
	return {Array}
	version: +1.2.4-4
*/
Array.randomize()

/*
	Read cookie value
	@name {String}
	return {String}
*/
Request.cookie(name);

/*
	Clear all uploaded files
	return {ServerRequest}
*/
Request.clear();

/*
	Return hostname with protocol and port
	@path {String} :: optional - path combine with hostname
	return {String}
*/
Request.hostname(path);

/*
	Is XHR request?
	return {Boolean}
*/
Request.isXHR;

/*
	User host address
	return {String}
*/
Request.ip;

/*
	URI
	return {Object}
*/
Request.uri;

/*
	Subdomain
	return {Array}
*/
Request.subdomain;

/*
	Current prefix
	return {String}
*/
Request.prefix;

/*
	GET data
	return {Object}
*/
Request.data.get;

/*
	POST/PUT data
	return {Object}
*/
Request.data.post;

/*
	Uploaded files
	return {Array}
*/
Request.data.files;

// -------
// METHODS
// -------

// Copy file
// @newFileName {String}
// return {HttpFile}
Request.data.files[0].copy(newFileName);

/*
	Read file to buffer (SYNC)
	return {Buffer}
*/
Request.data.files[0].readSync();

/*
	Read file to buffer (ASYNC)
	@callback {Function} :: function(error, data);
	return {HttpFile}
*/
Request.data.files[0].read(callback);

// return {Boolean}
Request.data.files[0].isImage();
Request.data.files[0].isAudio();
Request.data.files[0].isVideo();

/*
	@imageMagick {Boolean} :: optional - default false
	return {Image} :: look at example - image-resize
*/
Request.data.files[0].image(imageMagick);

/*
	Request flags
	return {Array}
*/
Request.flags;
===

### Utils.Async

=== javascript

var async = new utils.Async();

/*
	Add function to async list
	@name {String}
	@fn {Function} :: params: @complete {Function}
	return {Async}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/async
*/
async.await(name, fn);

/*
	Add function to async wait list
	@name {String}
	@waitingFor {String} :: name of async function
	@fn {Function}
	return {Async}
*/
async.wait(name, waitingFor, fn);

/*
	Run async functions
	@callback {Function}
	return {Controller}
*/
async.complete(callback);

// -------------------------------------------------
// EVENTS
// -------------------------------------------------

async.on('begin', function(name) {});
async.on('end', function(name) {});
async.on('complete', function() {});
===