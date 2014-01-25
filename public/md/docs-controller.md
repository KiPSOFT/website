## Controller class

| Stability: __stable__

- Initialization
- Properties
- Methods
- Events
- _WebSocket Client_

### Initialization

=== javascript

exports.install = function(framework) {

	/*
		Add a new route to this controller
		@url {String}
		@funExecute {Function}
		@flags {String Array} :: optional, default empty array (flag options [get, post, put, delete, xhr, upload, json, debug, logged, unlogged, xss, +xhr, mmr, sse, proxy])
		@maximumSize {Number} :: optional, default framework.config['default-request-length']
		@partial {String Array} :: optional, default empty array
		@timeout {Number} :: optional, default framework.config['default-request-timeout'] - in milliseconds

		Example: https://github.com/petersirka/partial.js/tree/master/examples/routing
		Example: https://github.com/petersirka/partial.js/tree/master/examples/routing-flags
		Example: https://github.com/petersirka/partial.js/tree/master/examples/routing-subdomain
		Example: https://github.com/petersirka/partial.js/tree/master/examples/routing-partial
		Example: https://github.com/petersirka/partial.js/tree/master/examples/routing-timeout

		:: [proxy] flag
		Example: https://github.com/petersirka/partial.js/tree/master/examples/controller-proxy

		:: [sse] flag
		Example: https://github.com/petersirka/partial.js/tree/master/examples/server-sent-events

		:: [mmr] flag
		Example: https://github.com/petersirka/partial.js/tree/master/examples/live-streaming-upload

		:: [xss] flag
		Example: https://github.com/petersirka/partial.js/tree/master/examples/framework-xss-protection
	*/
	// framework.route(url, funExecute, [flags], [maximumSize], [partial], [timeout]);

	/*
		CUSTOM FLAGS: !administrator or !moderator

		framework.route('/user/', viewUser, ['!administrator', '!moderator']);

		if (controller.flags.indexOf('!administrator') !== -1)
			return controller.view('administrator');
	*/

	framework.route('/', view_homepage);
	framework.route('/form/', view_form, ['post', 'xhr']);
	framework.route('/user/', view_user, ['logged'], ['user']);

	framework.route('/category/', view_category);
	framework.route('/category/{subcategory}/', view_category);

	/*
		Add a new file route
		@description {String}
		@funcValidation {Function} :: params: {req}, {res}, return {Boolean};
		@funcExecute {Function} :: params: {req}, {res};
		return {Framework}

		this in funcExecute === {Framework}

		Example: https://github.com/petersirka/partial.js/tree/master/examples/routing
	*/
	framework.file('my dynamic generator of .TXT', funcValidation, funcExecute);

	/*
		Add a new websocket route
		@url {String}
		@funcInitialize {Function}
		@flags {String Array} :: optional
		@protocols {String Array} :: optional, websocket-allow-protocols
		@allow {String Array} :: optional, allow origin
		@maximumSize {Number} :: optional, maximum size length (default by the framework.config)
		return {Framework}

		Example: https://github.com/petersirka/partial.js/tree/master/examples/websocket

		flags: json, logged, unlogged
		[logged, unlogged] https://github.com/petersirka/partial.js/tree/master/examples/authorization

	*/

	framework.websocket('/', socket_homepage);
	// framework.websocket('/chat/', socket_homepage, ['json'], ['chat']);
	// framework.websocket('/chat/private/', socket_private_homepage, ['json'], ['privatechat'], ['*']);
	// framework.websocket('/chat/private/sex/', socket_sex_homepage, ['json'], ['privatechat', 'sexchat'], ['www.partialjs.com', 'eshop.partialjs.com', 'blog.partialjs.com']);

	// [@protocols, WTF???]

	// CLIENT SIDE DECLARATION:
	// new WebSocket('url', 'protocol');

	// SERVER SIDE DECLARATION:
	// framework.websocket('url', function, [], ['protocol']);

	// ================================
	// OTHERS
	// ================================

	// ALL FRAMEWORK / INTERNAL URL:
	// #401 - Unauthorized
	// #403 - Forbidden
	// #404 - Not Found
	// #408 - Request Timeout
	// #431 - Request Header Fields Too Large
	// #500 - Internal Server Error
};

/* OPTIONAL */
exports.usage = function() {
	return 'A few description of controller usage';
};

/*
	OPTIONAL
	@controller {Controller}
*/
exports.onRequest = function(controller) {
	// this === controller
};

===

### Properties

=== javascript

// ==================================================
// WORKS IN WEBSOCKET
// ==================================================

// ONLINE users
// return {Number}
controller.online;

// ==================================================
// WORKS BETWEEN WEB AND WEBSOCKET
// ==================================================

// Cache
// return {FrameworkCache}
// [!!! also works in websocket !!!]
controller.cache;

// name of controller
// return {String}
// [!!! also works in websocket !!!]
controller.name;

// HttpRequest
// return {Object}
controller.req;

// HttpResponse
// return {Object}
controller.res;

// Framework
// return {Framework}
// [!!! also works in websocket !!!]
controller.framework;

// Return framework.global variable
// return {Object}
// Example: https://github.com/petersirka/partial.js/tree/master/examples/framework-global
// [!!! also works in websocket !!!]
controller.global;

// Current session
// return {Object}
controller.session;

// Current user
// return {Object}
controller.user;

// Async === Utils.Async
controller.async;

// is proxy?
// return {Boolean}
// [partial.js v +1244]
controller.isProxy;

// is XHR?
// return {Boolean}
controller.xhr;

// Framework configuration
// return {Object}
// [!!! also works in websocket !!!]
controller.config;

// Controller custom repository
// return {Object}
// [!!! also works in websocket !!!]
controller.repository;

// Prefix for mobile devices
// return {String}
controller.prefix;

// Is assertion testing?
// return {Boolean}
controller.isTest;

// Is debug mode?
// return {Boolean}
// [!!! also works in websocket !!!]
controller.isDebug;

// return {String} :: return current user host IP
controller.ip;

// return {String} :: return current realive url
// [!!! also works in websocket !!!]
controller.url;

// Request readonly data (GET)
// return {Object}
controller.get;

// Request readonly data (POST)
// return {Object}
controller.post;

// Request readonly data (FILES)
// return {Array object}
controller.files;

// Input name
// return {String}
controller.files[0].name;

// File name
// return {String}
controller.files[0].filename;

// File size
// return {Number}
controller.files[0].size;

// Content type
// return {String}
controller.files[0].contentType;

// Request flags
// return {String Array}
controller.flags;

// return {Boolean}
// [partial.js v +1238]
controller.isCanceled;

// return {Boolean}
// [partial.js v +1243]
controller.isConnected;

// return {String} :: Server sent events - Last-Event-ID header
// [partial.js v +1242]
// Example: https://github.com/petersirka/partial.js/tree/master/examples/server-sent-events
controller.lastEventID;

// return {Object}
// [partial.js v +1241]
// [!!! also works in websocket !!!]
controller.fs;

/*
	Create a file
	@filename {String} :: without path
	@content {String}
	return {Boolean}
*/
controller.fs.create.css(filename, content);
controller.fs.create.js(filename, content);
controller.fs.create.view(filename, content);
controller.fs.create.template(filename, content);
controller.fs.create.resource(filename, content);
controller.fs.create.content(filename, content);

/*
	Remove a file
	@filename {String} :: without path
	return {Boolean}
*/
controller.fs.rm.css(filename);
controller.fs.rm.js(filename);
controller.fs.rm.view(filename);
controller.fs.rm.template(filename);
controller.fs.rm.resource(filename);
controller.fs.rm.content(filename);

// return {Object}
// [partial.js v +1241]
// [!!! also works in websocket !!!]
controller.path;

/*
	Return path to file
	@filename {String} :: optional, default empty
	return {String}
*/
controller.path.public([filename]);
controller.path.logs([filename]);
controller.path.temp([filename]);
controller.path.backup([filename]);
controller.path.root([filename]);

// ---------------------------------
// HTTP FILE METHODS
// ---------------------------------

// Copy file
// @newFileName {String}
// return {HttpFile}
controller.files[0].copy(newFileName);

/*
	Read file to buffer (SYNC)
	return {Buffer}
*/
controller.files[0].readSync();

/*
	Read file to buffer (ASYNC)
	@callback {Function} :: function(error, data);
	return {HttpFile}
*/
controller.files[0].read(callback);

// return {Boolean}
controller.files[0].isImage();
controller.files[0].isAudio();
controller.files[0].isVideo();

/*
	@imageMagick {Boolean} :: optional - default false
	return {Image} :: look at example - image-resize
*/
controller.files[0].image(imageMagick);
===

### Methods

=== javascript

// ==================================================
// WORKS IN WEBSOCKET
// ==================================================

/*
    Send message
    @message {String or Object} :: by the route flag
    @names {String Array}, optional, default empty and framework send message to all users
    @blacklist {String Array}, optional, default empty
    return {WebSocket}

    @names and @blacklist must contains client.id. You can change client.id by yourself.
*/
controller.send(message, [names], [blacklist]);

/*
    Close connection
    @names {String Array} :: optional, default null and close all users
    return {WebSocket}

    @names must contains client.id. You can change client.id by yourself.
*/
controller.close([names]);

/*
    Find connection
    @name {String}
    return {Client}

    @name must contain client.id. You can change client.id by yourself.
*/
controller.find(name);

/*
    All connections (forEach)
    @fn {Function} :: function(client, index) {}
    return {Controller};
*/
controller.all(fn);

/*
    Destroy websocket controller
*/
controller.destroy();

// ==================================================
// WORKS BETWEEN WEB AND WEBSOCKET
// ==================================================

/*
	Log
	@arguments {Object array}
	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/logs

	[!!! also works in websocket !!!]
*/
controller.log();

/*
	Get host name
	@path {String} :: optional
	return {String}
*/
controller.host([path]);

/*
	Basic access authentication (baa)
	@name {String} :: optional, default Administration
	return {Object} :: if null then user is not authenticated else return { name: {String}, password: {String} };

	Example: https://github.com/petersirka/partial.js/tree/master/examples/authorization-www-basic

	[partial.js v +1244]
*/
controller.baa(name);

/*
	Cross-origin resource sharing
	@allow {String Array}
	@method {String Array} :: optional, default null
	@header {String Array} :: optional, default null
	@credentials {Boolean} :: optional, default false
	return {Boolean}

	https://github.com/petersirka/partial.js/tree/master/examples/cors

	[partial.js v +1245]
*/
controller.cors(allow, [method], [header], [credentials]);

/*
	Set response header
	@name {String}
	@value {String}
	return {Controller}

	https://github.com/petersirka/partial.js/tree/master/examples/custom-headers

	[partial.js v +1245]
*/
controller.header(name, value);

/*
	Send proxy request
	@url {String}
	@obj {Object}
	@fnCallback {Function} :: optional
	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/controller-proxy

	[partial.js v +1244]
*/
controller.proxy(url, data, [fnCallback]);

/*
	Report a error
	@error {Error}
	return {Controller}

	[partial.js v +1244]
	!!! also works in websocket !!!]
*/
controller.error(error);

/*
	META Tags for views
	@arguments {String}
	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/views-meta
*/
controller.meta();

/*
	Head Tags
	@arguments {String}
	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/views-head
*/
controller.head();

/*
	Settings for views
	@arguments {String}
	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/views-settings
*/
controller.settings();

/*
	Sitemap generator, sitemap is generated to repository.sitemap
	@name {String}
	@url {String}
	@index {Number} :: optional
	return {Controller or Array} :: if call this function without arguments, function return Array

	Example: https://github.com/petersirka/partial.js/blob/master/examples/navigation-sitemap
*/
controller.sitemap(name, url, index);

/*
	Module caller
	@name {String}
	return {Module}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/framework-modules

	[!!! also works in websocket !!!]
*/
controller.module(name);

/*
	Layout setter
	@name {String} :: layout filename
	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/views
*/
controller.layout(name);

/*
	Controller models reader
	@name {String} :: name of controller
	return {Object}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/controller-sharing

	[!!! also works in websocket !!!]
*/
controller.models(name);

/*
	Controller functions reader
	@name {String} :: name of controller
	return {Object}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/controller-sharing

	[!!! also works in websocket !!!]
*/
controller.functions(name);

/*
	Validation object
	@model {Object} :: object to validate
	@properties {String array} : what properties?
	@prefix {String} :: prefix for resource = prefix + model name
	@name {String} :: name of resource
	@resource {Function} :: function(key) return {String}
	return {ErrorBuilder}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/validation

	[!!! also works in websocket !!!]
*/
controller.validate(model, properties, prefix, name);

/*
	Check if ETag or Last Modified has modified
	@compare {String or Date}
	@strict {Boolean} :: if strict then use equal date else use great then date (default: false)

	if @compare === {String} compare if-none-match
	if @compare === {Date} compare if-modified-since

	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/cache-http
*/
controller.notModified(compare, strict);

/*
	Set last modified header or Etag
	@value {String or Date}

	if @value === {String} set ETag
	if @value === {Date} set LastModified

	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/cache-http
*/
controller.setModified(value);

/*
	Set Expires header
	@date {Date}

	return {Controller}
*/
controller.setExpires(date);

/*
	Static file routing
	@name {String} :: filename
	@tag {Boolean} :: optional, append tag? default: false
	return {String}
*/
controller.routeJS(name, tag);
controller.routeCSS(name, tag);

/*
	Static file routing
	@name {String} :: filename
	@tag {Boolean} :: optional, append tag? default: false
	@width {Number} :: optional
	@height {Number} :: optional
	@alt {String} :: optional
	@className {String} :: optional
	return {String}
*/
controller.routeImage(name, width, height, alt, className);

/*
	Static file routing
	@name {String} :: filename
	return {String}
*/
controller.routeVideo(name);
controller.routeFont(name);
controller.routeUpload(name);
controller.routeStatic(name);

/*
	Add path to route path
	@path {String}
	return {Controller};

	Example: https://github.com/petersirka/partial.js/tree/master/examples/views-route-file
*/
controller.currentJS(path);
controller.currentCSS(path);
controller.currentVideo(path);
controller.currentFont(path);
controller.currentUpload(path);

/*
	Resource reader
	@name {String} :: filename
	@key {String}
	return {String}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/localization-resources

	[!!! also works in websocket !!!]
*/
controller.resource(name, key);

/*
	Return NoSQL database
	@name {String}
	return {Controller};

	Example: https://www.partialjs.com/upload/eshop.zip

	[!!! also works in websocket !!!]
*/
controller.database(name);

/*
	Response JSON
	@obj {Object}
	@headers {Object} :: optional
	return {Controller}
*/
controller.json(obj, [headers]);

/*
	Response JSON ASYNC
	@obj {Object}
	@headers {Object} :: optional
	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/async
*/
controller.jsonAsync(obj, [headers]);

/*
	!!! pell-mell
	Response custom content or Return content from Contents
	@contentBody {String}
	@contentType {String} :: optional
	@headers {Object} :: optional
	return {Controller or String}; :: return String when contentType is undefined
*/
controller.content(contentBody, contentType, [headers]);

/*
	Response raw content
	@contentType {String}
	@onWrite {Function} :: function(fn) { fn.write('CONTENT'); }
	@headers {Object}
	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/xml
*/
controller.raw(contentType, onWrite, [headers]);

/*
	Response plain text
	@contentBody {String}
	@headers {Object} :: optional
	return {Controller}
*/
controller.plain(contentBody, [headers]);

/*
	Response empty
	@headers {Object} :: optional
	return {Controller}
*/
controller.empty([headers]);

/*
	Response file
	@fileName {String}
	@downloadName {String} :: optional
	@headers {Object} :: optional
	return {Controller}
*/
controller.file(fileName, downloadName, [headers]);

/*
	Response Async file
	@fileName {String}
	@downloadName {String} :: optional
	@headers {Object} :: optional
	return {Controller}
*/
controller.fileAsync(fileName, [downloadName], [headers]);

/*
	Response stream
	@contentType {String}
	@stream {ReadStream}
	@downloadName {String} :: optional
	@headers {Object} :: optional key/value
	return {Controller}
*/
controller.stream(contentType, stream, [downloadName], [headers]);

/*
	Response 404
	return {Controller}
*/
controller.view404();

/*
	Response 403
	return {Controller}
*/
controller.view403();

/*
	Response 500
	@errorMessage {String}
	return {Controller}
*/
controller.view500(errorMessage);

/*
	Response redirect
	@url {String}
	@permament {Boolean} :: optional default false
	return {Controller}
*/
controller.redirect(url, [permament]);

/*
	Response Async View
	@name {String}
	@model {Object} :: optional
	@headers {Object} :: optional
	return {Controller}
*/
controller.redirectAsync(url, [permament]);

/*
	Response view | Render view
	@name {String}
	@model {Object} :: optional
	@headers {Object} :: optional
	@returnString {Boolean} :: optional, default false (render view to string)
	return {Controller or String}
*/
controller.view(name, [model], [headers], [returnString]);

/*
	Response Async View
	@name {String}
	@model {Object} :: optional
	@headers {Object} :: optional
	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/async
*/
controller.viewAsync(name, [model], [headers]);

/*
	Render template to string
	@name {String} :: filename
	@model {Object}
	@nameEmpty {String} :: filename for empty Contents
	@repository {Object}
	return {String};
*/
controller.template(name, model, [nameEmpty], [repository]);

/*
	Add function to async wait list
	@name {String}
	@waitingFor {String} :: name of async function
	@fn {Function}
	return {Async}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/async

	[!!! also works in websocket !!!]
*/
controller.wait(name, waitingFor, fn);

/*
	Add function to async list
	@name {String}
	@fn {Function}
	return {Async}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/async

	[!!! also works in websocket !!!]
*/
controller.await(name, fn);

/*
	Run async functions
	@fn {Function}
	return {Async}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/async

	[!!! also works in websocket !!!]
*/
controller.complete(fn, run);

/*
	Send data via [S]erver-[s]ent [e]vents (server sent events)
	@data {String or Object}
	@eventname {String} :: optional
	@id {String} :: optional
	@retry {Number} :: optional, reconnection in milliseconds
	return {Controller};

	Example: https://github.com/petersirka/partial.js/tree/master/examples/server-sent-events
*/
controller.sse(data, [eventname], [id], [retry]);

/*
	Send a file or stream via [m]ultipart/x-[m]ixed-[r]eplace (multipart mixed replace)
	@filename {String}
	@contentType {String}
	@{stream} {Stream} :: optional, if undefined then framework reads by the filename file from disk
	@callback {Function} :: callback if stream is sent
	return {Controller}

	Example: https://github.com/petersirka/partial.js/tree/master/examples/live-streaming
*/
controller.mmr(filename, [stream], [callback]);

/*
	Close HTTP connection
	return {Controller}

	[!!! WebSocket has a similar method !!!]
*/
controller.close();

===

### Events

=== javascript

// ==================================================
// WORKS IN WEBSOCKET
// ==================================================

// @client {WebSocketClient}
controller.on('open', function(client) {
	// new connection
});

// @client {WebSocketClient}
controller.on('close', function(client) {
	// close connection
});

// @error {Error}
// @client {WebSocketClient}
controller.on('error', function(error, client) {
	// error
});

// @client {WebSocketClient}
// @message {Object or String}
controller.on('message', function(client, message) {

});

===

### WebSocket Client

=== javascript

	// Get client id/name (you can modify this property by yourself)
	// return {String}
	client.id;

	// Client Request
	// return {HttpRequest}
	client.req;

	// Client GET (QueryString params)
	// return {Object}
	client.get;

	// Client Session (you can modify this property in framework.OnAuthorization)
	// return {Object}
	client.session;

	// Client IP
	// return {String}
	client.ip;

	// Client Procotol (CLIENTSIDE: new WebSocket('url', 'procotol1,protocol2'))
	// return {String Array}
	client.protocol;

	// ==========================================
	// METHODS
	// ==========================================

	// Client cookies
	// @name {String}
	// return {String}
	client.cookie(name);

	// Send a message
	// @message {String or Object}
	client.send(message);

	// Close connection
	// response 403
	client.close();

	// ==========================================
	// INTERNAL PROPERTY
	// ==========================================

	// return {net.Socket}
	client.socket;

	// return {WebSocket}
	client.container;

	// internal client ID
	// return {String}
	client._id;
===
