console.log('INJECTED: http://www.totaljs.com/inject.js');

exports.install = function(framework) {
	framework.route('/', view_index);
};

function view_index() {
	this.plain('INJECTED');
};