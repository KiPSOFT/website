## Configuration (config-debug, config-release)

| Stability: __stable__

_IMPORTANT FOR WINDOWS USERS_: path to file or directory must be in this format: __/aaa-directory/myfile.txt__
---

All values in configuration file is optional. You can add custom values.

=== plain

key 							   : value

// custom optional values
aa 								   : aa
bb								   : <div>VALUE</div>
cc 								   : ::::::

// framework options
name							   : partial.js
version 						   : 1.01
secret							   : secret-key-for-web

// framework internal options
etag-version					   :
directory-contents				   : /contents/
directory-controllers			   : /controllers/
directory-views					   : /views/
directory-temp					   : /tmp/
directory-templates				   : /templates/
directory-resources				   : /resources/
directory-public				   : /public/
directory-modules				   : /modules/
directory-logs					   : /logs/
directory-tests					   : /tests/
static-url						   :
static-url-js					   : /js/
static-url-css					   : /css/
static-url-image				   : /img/
static-url-video				   : /video/
static-url-font					   : /font/
static-url-upload				   : /upload/

// static-accepts-custom: add own values to static-accepts
static-accepts-custom			   : .mp3,.flv

default-layout					   : _layout

// default maximum request size / length
// default 5 kB
default-request-length			   : 5120
default-websocket-request-length   : 5120

// in milliseconds
default-request-timeout            : 3000

// if you will use nginx, set allow-gzip to false
allow-gzip						   : true

// if you will use Socket.io, set allow-websocket to false
allow-websocket					   : true
allow-compile-js			       : true
allow-compile-css			       : true
===

## Run framework

=== javascript
var framework = require('partial.js');
var http = require('http');

var port = 8004;
var debug = true;

/*
	Listen HTTP or HTTPS server
	@http {HTTP or HTTPS}
	@debug {Boolean}
	@port {Number}
	@ip {String} :: optional, default 127.0.0.1
*/
framework.run(http, debug, port);

// Auto backup website
// framework.backup();

// Assertion testing
// framework.test(true);

console.log('http://{0}:{1}/'.format(framework.ip, framework.port));
===