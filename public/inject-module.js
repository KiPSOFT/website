console.log('INJECTED: http://www.partialjs.com/inject-module.js');

exports.hello = function() {
	return 'Hello world!';
};

framework.on('request-begin', function() {

	console.log('Module from URL address.');
	
});