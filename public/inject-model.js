// IMPORTANT:
exports.name = 'user';

console.log('INJECTED: http://www.totaljs.com/inject-model.js (name: user)');

exports.user = function() {
	return 'USER MODEL';
};