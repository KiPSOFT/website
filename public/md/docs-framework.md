## Framework class

| Stability: __stable__

- Release and debug mode
- Properties
- Methods
- Delegates
- Events

_IMPORTANT FOR WINDOWS USERS_: path to file or directory must be in this format: __/aaa-directory/myfile.txt__
---

### Release mode

- Every 20 minutes the internal service clears resources and reconfigures framework
- Every 5 minutes the internal service clears static cache
- Every 10 minutes the internal service resets framework.stats
- Framework has enabled caching the views (5 min.), templates (5 min.), contents (5 min.) and all static files (5 min.)

### Debug mode

- Every 1 minute the internal service clears resource cache
- Framework has disabled caching

### Properties

=== javascript
// version
// return {Number}
framework.version;

// node.js version
// return {Number} :: (v0.10.5) = return 105
framework.versionNode;

// configuration
// return {Object}
framework.config;

// http or https
// return {Object}
framework.server;

// port
// return {Number}
framework.port;

// IP
// return {String}
framework.ip;

// your global framework variables
// return {Object}
framework.global;

// custom helpers
// default declaration: helpers = {};
// return {Object}
// Example: https://github.com/petersirka/partial.js/tree/master/examples/views-custom-helper
framework.helpers;

// all registered controllers
// return {Object}
framework.controllers;

// cache for server static files
// default declaration: static = {};
// return {Object}
framework.static;

// Last 50 errors
// return {Error Array}
// [partial.js v +1237]
framework.errors;

// All WebSocket connections
// return {Object}
// [partial.js v +1237]
framework.connections;

// Request stats (Stats are reseted every 10 minutes)
// return { request: {}, response: {} }
// [partial.js v +1237]
framework.stats;

// cache
// return {Object}
framework.cache;

/*
	Add to cache
	@key {String}
	@value {Object}
	@expire {Date}
	return {Object};

	Example: https://github.com/petersirka/partial.js/tree/master/examples/cache-partial
*/
framework.cache.add(key, value, expire);

/*
	Read from cache
	@key {String}
	return {Object} :: default return null

	Example: https://github.com/petersirka/partial.js/tree/master/examples/cache-partial
*/
framework.cache.read(key);

/*
	Remove from cache
	@key {String}
	return {Object} :: default return null

	Example: https://github.com/petersirka/partial.js/tree/master/examples/cache-partial
*/
framework.cache.remove(key);

/*
	Remove all keys from cache
	@search {String}
	return {Number} :: removed count
*/
framework.cache.removeAll(search);

/*
	Write to cache
	@key {String}
	@fn {Function} :: params, @save {Function} (params: @value {Object}, expire {Date})
	@fnCallback {Function} :: params, @value {Object}
	return {Cache};

	Example: https://github.com/petersirka/partial.js/tree/master/examples/cache-partial
*/
framework.cache.write(key, value, expire);

/*
	Update cache item expiration
	@key {String}
	@expire {Date}
	return {Cache}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/cache-partial
*/
framework.cache.setExpire(key, expire);


// Framework file system
// return {Object}
// [partial.js v +1241]
framework.fs;

/*
	Create file
	@filename {String} :: without path
	@content {String}
	return {Boolean}
*/
framework.fs.create.css(filename, content);
framework.fs.create.js(filename, content);
framework.fs.create.view(filename, content);
framework.fs.create.template(filename, content);
framework.fs.create.resource(filename, content);
framework.fs.create.content(filename, content);

/*
	Remove file
	@filename {String} :: without path
	return {Boolean}
*/
framework.fs.rm.css(filename);
framework.fs.rm.js(filename);
framework.fs.rm.view(filename);
framework.fs.rm.template(filename);
framework.fs.rm.resource(filename);
framework.fs.rm.content(filename);

// Framework paths
// return {Object}
// [partial.js v +1241]
framework.path;

/*
	Return path to file
	@filename {String} :: optional, default empty
	return {String}
*/
framework.path.public([filename]);
framework.path.logs([filename]);
framework.path.temp([filename]);
framework.path.backup([filename]);
framework.path.root([filename]);
===

### Methods

=== javascript

/*
	Initialization
	@http {HTTP or HTTPS}
	@config {Boolean or Object}
	@port {Number}
	@ip {String} :: optional, default 127.0.0.1
	return {Framework}
*/
framework.init(http, config, port, [ip]);

/* OR */

framework.run(http, config, port, [ip]);

/*
	Refresh framework internal information
	@clear {Boolean} || optional, default true - clear TMP direcotry
	return {Framework}
*/
framework.refresh([clear]);

/*
	Backup website directory
	@callback {Function} :: optional, param: param: @err {Error}, @filename {String}
	return {Framework}
*/
framework.backup(callback);

/*
	Restore website directory
	@date {String} :: yyyy-MM-dd
	@callback {Function} :: optional, param: @err {Error}, @path {String}
	@restorePath {String} :: optional, path to restore website
	return {Framework}
*/
framework.restore(date, callback, restorePath);

/*
	Stop the server and exit
	@code {Number} :: optional / exit code
	return {Framework}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/framework-stop
*/
framework.stop(code);

/*
	Module caller
	@name {String}
	return {Object} :: framework return require() from modules directory (if not exists return null);

	Example: https://github.com/petersirka/partial.js/tree/master/examples/framework-modules
*/
framework.module(name);

/*
	Inject module / script
	@name {String}
	@url {String}
	return {Framework}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/framework-inject
*/
framework.inject(name, url);

/*
	Simple log writer
	@arguments {Object params}
	return {Framework}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/logs
*/
framework.log();

/*
	Return string of framework usage information
	@detailed {Boolean} :: optional default (false)
	return {String}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/framework-usage
*/
framework.usage(detailed);

/*
	Automatic serve static files
	@req {ServerRequest}
	@res {ServerResponse}
	return {Framework}
*/
framework.responseStatic(req, res);

/*
	Response 401
	@req {ServerRequest}
	@res {ServerResponse}
	return {Framework}
*/
framework.response401(req, res);

/*
	Response 403
	@req {ServerRequest}
	@res {ServerResponse}
	return {Framework}
*/
framework.response403(req, res);

/*
	Response 404
	@req {ServerRequest}
	@res {ServerResponse}
	return {Framework}
*/
framework.response404(req, res);

/*
	Response file
	@req {ServerRequest}
	@res {ServerResponse}
	@fileName {String}
	@downloadName {String} :: optional
	@headers {Object} :: optional key/value
	return {Framework}
*/
framework.responseFile(req, res, fileName, [downloadName], [headers]);

/*
	Response stream
	@req {ServerRequest}
	@res {ServerResponse}
	@contentType {String}
	@stream {ReadStream}
	@downloadName {String} :: optional
	@headers {Object} :: optional key/value
	return {Framework}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/download-file-database-nosql
*/
framework.responseStream(req, res, contentType, stream, [downloadName], [headers]);

/*
	Response content
	@req {ServerRequest}
	@res {ServerResponse}
	@code {Number}
	@contentBody {String}
	@contentType {String}
	@compress {Boolean}
	@headers {Object} :: optional key/value
	return {Framework}
*/
framework.responseContent(req, res, code, contentBody, contentType, compress, headers);

/*
	Response redirect
	@req {ServerRequest}
	@res {ServerResponse}
	@url {String}
	@permament {Boolean} :: optional
	return {Subscribe}
*/
framework.responseRedirect(req, res, url, permament);

/*
	Test request to controller

	@url {String}
	@callback {Functions} :: function(error, data, statusCode, headers);
	@method {String} :: default GET
	@data {String} :: default empty string
	@headers {Object}

	return {Framework}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/assertion-testing
*/
framework.assert(name, url, callback, method, data, headers);

/*
	Make a tests
	@stop {Boolean} :: stop framework (default true)
	@names {String array} :: only tests in names (optional)
	@callback {Functions} :: on complete test handler (optional)
	return {Framework}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/assertion-testing
*/
framework.test(stop, names, callback);

/*
	Return SQLite database
	@name {String}
	@mode {String} :: optional
	return {Controller};

	Example: https://www.partialjs.com/upload/eshop.zip
*/
framework.database(name, mode);

/*
	Clear temporary directory
	return {Framework}
*/
framework.clear();

/*
	Cryptography (encode)
	@value {String}
	@key {String}
	@isUniqe {Boolean} :: optional
	return {Framework}
*/
framework.decode(value, key, jsonConvert);

/*
	Cryptography (decode)
	@value {String}
	@key {String}
	@jsonConvert {Boolean} :: optional default true (convert string to JSON)
	return {String or Object}
*/
framework.encode(value, key, jsonConvert);

/*
	Resource reader
	@name {String} :: filename of resource
	@key {String}
	return {String}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/localization-resources
*/
framework.resource(name, key);

/*
	Verification (check functionality)
	@cb {Function} :: function(err) {} :: @err {String Array}
	return {Framework}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/framework-verification
*/
framework.verification(cb);

/*
	Check if ETag or Last Modified has modified
	@req {ServerRequest}
	@res {ServerResponse}
	@compare {String or Date}
	@strict {Boolean} :: optional, if strict then use equal date else use great then date (default: false)

	if @compare === {String} compare if-none-match
	if @compare === {Date} compare if-modified-since

	this method automatically flush response (if not modified)
	--> response 304

	return {Framework}
*/
controller.notModified(req, res, compare, strict);

/*
	Set last modified header or Etag
	@value {String or Date}

	if @value === {String} set ETag
	if @value === {Date} set LastModified

	return {Framework}
*/
controller.setModified(req, res, value);

/*
	Add a new partial route
	@name {String or Function} :: if @name is function, route will be a global partial content
	@funcExecute {Function} :: optional
	return {Framework}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/routing-partial
*/
// [partial.js v +1238]
framework.partial(name, [fnExecute]);

/*
	Static file routing
	@name {String} :: filename
	return {String};
*/
framework.routeJS(name);
framework.routeCSS(name);
framework.routeImage(name);
framework.routeVideo(name);
framework.routeFont(name);
framework.routeUpload(name);
framework.routeStatic(name);
===

### Delegates

=== javascript

/*
	Error delegate
	@err {Error}
	@name {String} :: name of Controller
	@uri {Uri}
*/
framework.onError = function(err, name, uri) {};

/*
	Authorize handler
	@req {ServerRequest}
	@res {ServerResponse}
	@flags {String array}
	@callback {Function} - @callback(Boolean), true if logged and false if unlogged

	Example: https://github.com/petersirka/partial.js/tree/master/examples/authorization
*/
framework.onAuthorization = function(req, res, flags, callback) {};

/*
	Prefix handler
	@req {ServerRequest}
	return {String} :: return prefix (default return empty string)

	Example: https://github.com/petersirka/partial.js/tree/master/examples/mobile
*/
framework.onPrefix = function(req) {};

/*
	Versioning static files
	@name {String} :: name of static file (style.css or script.js)
	return {String} :: return new name of static file (style-new.css or script-new.js)

	Example: https://github.com/petersirka/partial.js/tree/master/examples/static-version
*/
framework.onVersion = function(name) {};

/*
	Route validator / Request restriction
	@req {ServerRequest}
	@res {ServerResponse}
	return {Boolean};

	Example: https://github.com/petersirka/partial.js/tree/master/examples/restrictions-ip
*/
framework.onRoute = function(req, res) {};

/*
	Render HTML for views
	@argument {String params}
	return {String}

	this === controller

	Example: https://github.com/petersirka/partial.js/tree/master/examples/views-settings
*/
framework.onSettings = function() {};

/*
	Render HTML for views
	@argument {String params}
	return {String}

	this === controller

	Example: https://github.com/petersirka/partial.js/tree/master/examples/views-meta
*/
framework.onMeta = function() {};

/*
	Framework call this delegate when is framework loaded
	@framework {Framework}
	return {String}
*/
framework.onLoad = function(framework) {};

/*
	Global framework validation
	@name {String}
	@value {String}
	return {Boolean or utils.isValid() or StringErrorDescription};

	Example: https://github.com/petersirka/partial.js/tree/master/examples/validation
*/
framework.onValidation = function(name, value) {};

/*
	Backup Filter
	@path {String}
	return {Boolean}
*/
framework.onFilterBackup(path);

/*
	Restore Filter
	@path {String}
	return {Boolean}
*/
framework.onFilterRestore(path);

/*
	CSS compilation
	@filename {String}
	@content {String}
	return {String} :: you must return a compiled content

	Example: https://github.com/petersirka/partial.js/tree/master/examples/external-compile-sass

	[partial.js v +1244]
*/
framework.onCompileCSS(filename, content);

/*
	JS compilation
	@filename {String}
	@content {String}
	return {String} :: you must return a compiled content

	Example: https://github.com/petersirka/partial.js/tree/master/examples/external-compile-uglifyjs

	[partial.js v +1244]
*/
framework.onCompileJS(filename, content);
===

### Events

=== javascript
/*
	This event is triggered every 60 seconds
	@runnerCount {Number}
*/
framework.on('service', function(runnerCount) {});

/*
	This event is triggered when framework clears internal information
	@name {String}
	@value {Object} :: optional

	name = "stats", value = stats
	name = "resources", value = undefined
	name = "temporary", value = temporary
*/
framework.on('clear', function(name, [value]) {});

/*
	This event is triggered when expired item in cache 
	@name {String}
	@value {Object}
*/
framework.on('expire', function(name, value) {});

/*
	This event is triggered when framework is stopped
*/
framework.on('exit');

// This event is triggered when begin request
framework.on('request-begin', function(req, res) {});

// This event is triggered when end request
framework.on('request-end', function(req, res) {});

/*
	Occurs after loaded Controllers, Modules, etc.
	@framework {Framework}
*/
framework.on('load', function(framework) {});

/*
	This event is called every Request to Controller
	@controller {Controller}
	@name {String} :: name of Controller
*/
framework.on('controller', function(controller, name) {});
===