// IMPORTANT:
exports.name = 'Test';

console.log('INJECTED: http://www.totaljs.com/inject-module.js (name: Test)');

exports.hello = function() {
	return 'Hello world!';
};

framework.on('request-begin', function() {

	console.log('Module from URL address.');

});