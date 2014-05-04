exports.install = function(framework) {
    framework.route('/', view_homepage);
    framework.route('/download/', view_download);
    framework.route('/totalstack/', view_totalstack);
    framework.route('/benefits/', view_benefits);
    framework.route('/ide/', view_ide);
    framework.route('/webhosting/', view_webhosting);
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