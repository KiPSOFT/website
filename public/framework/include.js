exports.name = 'include';
exports.version = '1.01';

exports.install = function(framework, options) {
    console.log(options);
    framework.install('view', 'precompile._layout', 'https://www.totaljs.com/framework/_layout.html');
    framework.install('view', 'precompile.homepage', 'https://www.totaljs.com/framework/homepage.html');
};

exports.uninstall = function(framework, options) {
    console.log(options);
};