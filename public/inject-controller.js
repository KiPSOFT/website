console.log('INJECTED: http://www.partialjs.com/inject-controller.js');

exports.install = function(framework) {	
	framework.route('/', view_index);
};

function view_index() {
	this.plain('INJECTED.');
};