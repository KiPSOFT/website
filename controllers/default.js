exports.init = function() {
	var self = this;

	self.route('/', view_homepage);
	self.route('/download/', view_download);
	self.route('/ide/', view_ide);
	self.route('/benefits/', view_benefits);
	self.route('/webhosting/', view_webhosting);
	self.route('/usage/', view_usage);
	self.route('/forum/', view_forum);

	// File routes
	self.file('counter for .zip files', static_filecounter);

	// Error routes
	self.route('#404', error404);
	self.route('#500', error500);

};

/*
    Description: Homepage
    Output: view
    Method: GET
*/
function view_homepage() {
	var self = this;
	self.view('homepage');
}

/*
    Description: Forum on Google
    Output: redirect
    Method: GET
*/
function view_forum() {
	var self = this;
	self.redirect('https://groups.google.com/forum/#!forum/totaljs');
}

/*
    Description: Benefits
    Output: view
    Method: GET
*/
function view_benefits() {
	var self = this;
	self.view('benefits');
}

/*
    Description: IDE
    Output: view
    Method: GET
*/
function view_ide() {
	var self = this;
	self.view('ide');
}

/*
    Description: Webhosting
    Output: view
    Method: GET
*/
function view_webhosting() {
	var self = this;
	self.view('webhosting');
}

/*
    Description: Download
    Output: view
    Method: GET
*/
function view_download() {
	var self = this;
	self.view('download');
}

/*
    Description: Usage
    Output: plain
    Method: GET
*/
function view_usage() {
	var self = this;
	self.plain(self.framework.usage(true));
}

/*
    Description: 404
    Output: view
    Method: GET
*/
function error404() {
	var self = this;
	self.meta('Not Found (404)');
	self.statusCode = 404;
	self.view('404');
}

/*
    Description: 500
    Output: view
    Method: GET
*/
function error500() {
	var self = this;
	self.meta('Internal Server Error (500)');
	self.statusCode = 500;
	self.view('500');
}

/*
    Description: File handler
    Output: file
    Method: GET
*/
function static_filecounter(req, res, isValidation) {

	if (isValidation)
		return req.url.contains(['.zip', '/upload/'], true);

	var self = this;
	var db = self.database('counter');

	var index = req.url.lastIndexOf('/');
	if (index === -1)
		return self.return404(req, res);

	db.insert({ name: req.url.substring(index + 1), ip: req.ip, date: new Date().format('yyyy-MM-dd HH:mm:ss') });
	self.responseFile(req, res, self.path.public(req.url));
}