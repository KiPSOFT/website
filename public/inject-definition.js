console.log('INJECTED: http://www.partialjs.com/inject-definition.js');

framework.on('request-begin', function() {
	
	console.log('Definition from URL address.');

});