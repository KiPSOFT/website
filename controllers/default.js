exports.install = function(framework) {

    framework.route('/', view_homepage);
    framework.route('/download/', view_download);
    framework.route('/totalstack/', view_totalstack);
    framework.route('/benefits/', view_benefits);
    framework.route('/ide/', view_ide);
    framework.route('/webhosting/', view_webhosting);
    framework.route('/usage/', plain_usage);
    framework.route('/community/', view_community);
    framework.route('/news/', view_news);

    framework.file('counter for .zip files', static_filecounter);
};

function view_homepage() {
    var self = this;
    self.view('homepage');
}

function view_download() {
    var self = this;
    self.view('download');
}

function view_totalstack() {
    var self = this;
    self.view('totalstack');
}

function view_benefits() {
    var self = this;
    self.redirect('/');
}

function view_ide() {
    var self = this;
    self.view('ide');
}

function view_webhosting() {
    var self = this;
    self.view('webhosting');
}

function view_community() {
    var self = this;
    self.view('community');
}

function view_news() {
    var self = this;
    self.view('news');
}

function plain_usage() {
    var self = this;
    self.plain(self.framework.usage(true));
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