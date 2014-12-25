exports.install = function(framework) {
    framework.route('/');
    framework.route('/download/');
    framework.route('/benefits/');
    framework.route('/tools/');
    framework.route('/features/');
    framework.route('/community/');
    framework.route('/important/');
    framework.route('/news/');
    framework.route('/usage/', plain_usage);
    framework.file('counter for .zip files', static_filecounter);
    framework.route('/*', redirect);
};

function redirect() {
    var self = this;
    switch (self.req.path[0]) {
        case 'news':
        case 'benefits':
            self.redirect('/features/', true);
            break;
        case 'download':
            self.redirect('http://docs.totaljs.com');
            break;
        case 'totalstack':
            self.redirect('https://github.com/totaljs/modules/tree/master/Helpers/angular.js', true);
            break;
        case 'ide':
        case 'webhosting':
            self.redirect('/tools/', true);
            break;
    }
    self.throw404();
}

function plain_usage() {
    var self = this;
    self.plain(framework.usage(true));
}

function static_filecounter(req, res, isValidation) {

    if (isValidation)
        return req.url.contains(['.zip', '/download/'], true);

    var self = this;
    var db = self.database('counter');

    var index = req.url.lastIndexOf('/');
    if (index === -1)
        return self.return404(req, res);

    db.insert({ name: req.url.substring(index + 1), ip: req.ip, date: new Date().format('yyyy-MM-dd HH:mm:ss') });
    self.responseFile(req, res, self.path.public(req.url));
}