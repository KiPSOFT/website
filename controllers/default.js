exports.install = function(framework) {
    framework.route('/');
    framework.route('/download/');
    framework.route('/totalstack/');
    framework.route('/benefits/');
    framework.route('/ide/');
    framework.route('/webhosting/');
    framework.route('/database/');
    framework.route('/explore/');
    framework.route('/community/');
    framework.route('/news/');
    framework.route('/usage/', plain_usage);
    framework.file('counter for .zip files', static_filecounter);
};

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