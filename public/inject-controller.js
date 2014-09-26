// IMPORTANT:
exports.name = 'MyController';

console.log('INJECTED: http://www.totaljs.com/inject-controller.js (name: MyController)');

exports.install = function(framework) {
	framework.route('/', view_index);
};

function view_index() {
	this.plain('INJECTED.');
};