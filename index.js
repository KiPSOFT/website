var framework = require('total.js');
var http = require('http');
var os = require('os');
var port = parseInt(process.argv[2] || '8001');
var debug = os.platform() !== 'linux';

framework.run(http, debug, port);