console.log('INJECTED: http://www.totaljs.com/inject-definition.js');

framework.on('request-begin', function() {

	console.log('Definition from URL address.');

});