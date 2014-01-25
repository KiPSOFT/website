![NoSQL embedded database](http://partialjs.com/exports/nosql-logo.png#267x145)

---


## NoSQL embedded database

| Stability: __unstable__

For more information about NoSQL embedded database, please visit the project page on GitHub <https://github.com/petersirka/nosql>.

## partial.js NoSQL examples

- [Contact form](https://github.com/petersirka/partial.js/tree/master/examples/contact-form)
- [Authorization](https://github.com/petersirka/partial.js/tree/master/examples/authorization)
- [NoSQL binary files](https://github.com/petersirka/partial.js/tree/master/examples/download-file-database-nosql)
- [E-shop via partial.js and NoSQL embedded database](http://eshop.partialjs.com).
- [Blog via partial.js and NoSQL embedded database](http://blog.partialjs.com).


=== javascript
var nosql = framework.database('filename');

// Get database filename
// return {String}
nosql.filename;

// Get database directory
// return {String}
nosql.directory;

// Get database name
// return {String}
nosql.name;

// Enable/Disable changelog (SET, GET)
// return {Boolean}
nosql.changes;

/*
	Insert data into database
	@arr {Array of Object}
	@fnCallback {Function} :: optional, params: @count {Number}
	@changes {String} :: optional, insert description
	return {Database}
*/
nosql.insert(doc, [fnCallback], [changes]);

/*
	Update multiple documents
	@fnUpdate {Function} :: params: @doc {Object} and IMPORTANT: you must return updated @doc;
	@fnCallback {Function} :: optional, params: @count {Number}
	@changes {String} :: optional, update description
	return {Database}
*/
nosql.update(fnUpdate, [fnCallback], [changes]);

/*
	Update multiple documents
	@fnUpdate {Function} :: params: @doc {Object} and IMPORTANT: you must return updated @doc;
	@fnCallback {Function} :: optional, params: @count {Number}
	@changes {String} :: optional, update description
	return {Database}
*/
nosql.prepare(fnUpdate, [fnCallback], [changes]);

// EXAMPLE:
nosql.prepare(fnUpdate, fnCallback);
nosql.prepare(fnUpdate, fnCallback);
nosql.prepare(fnUpdate, fnCallback);
nosql.prepare(fnUpdate, fnCallback);
nosql.prepare(fnUpdate, fnCallback);
nosql.update();

/*
	Remove data from database
	@fnFilter {Function} :: params: @obj {Object}, IMPORTANT: you must return {Boolean}
	@fnCallback {Function} :: params: @count {Number}
	@changes {String} :: optional, remove description	
	return {Database}
*/
nosql.remove(fnFilter, [fnCallback], [changes]);

/*
	Read each document from database
	@fnDocument {Function} :: params: @doc {Object}, @offset {Number}
	@fnCallback {Function} :: optional
	return {Database}
*/
nosql.each(fnDocument, fnCallback);

/*
	Read all documents from database
	@fnFilter {Function} :: IMPORTANT: you must return {Boolean}
	@fnCallback {Function} :: params: @doc {Array of Object}
	@itemSkip {Number} :: optional, default 0
	@itemTake {Number} :: optional, default 0
	return {Database}
*/
nosql.all(fnFilter, fnCallback, itemSkip, itemTake);

/*
	Read one document from database
	@fnFilter {Function} :: must return {Boolean}
	@fnCallback {Function} :: params: @doc {Object}
	return {Database}
*/
nosql.one(fnFilter, fnCallback);

/*
	Read TOP "x" documents from database
	@fnFilter {Function} :: IMPORTANT: you must return {Boolean}
	@fnCallback {Function} :: params: @doc {Object}
	return {Database}
*/
nosql.top(max, fnFilter, fnCallback);

/*
	Count documents
	@fnFilter {Function} :: params: @doc {Object}, IMPORTANT: you must return {Boolean}
	@fnCallback {Function} :: params: @count {Number}
	return {Database}
*/
nosql.count(fnFilter, fnCallback);

/*
	Read and sort documents from database (SLOWLY)
	@fnFilter {Function} :: IMPORTANT: you must return {Boolean}
	@fnSort {Function} :: ---> array.sort()
	@itemSkip {Number}, default 0 (if itemSkip = 0 and itemTake = 0 then return all documents)
	@itemTake {Number}, default 0 (if itemSkip = 0 and itemTake = 0 then return all documents)
	@fnCallback {Function} :: params: @doc {Object}, @count {Number}
	return {Database}
*/
nosql.sort(fnFilter, fnSort, itemSkip, itemTake, fnCallback);

/*
	Drop database
	@fnCallback {Function} :: optional, params: @dropped {Boolean}
	return {Database}
*/
nosql.drop([fnCallback]);

/*
	Pause all operation
*/
nosql.pause();

/*
	Resume all operation
*/
nosql.resume();
===

### Views

=== javascript
var nosql = framework.database('filename');

/*
	Create view
	@name {String}
	@fnFilter {Function} :: IMPORTANT: you must return {Boolean}
	@fnSort {Function} :: ---> array.sort()
	@fnCallback {Function} :: params: @count {Number}
	@fnUpdate {Function} :: optional, IMPORTANT: you must return updated document
	@changes {String} :: optional, create description
	return {Database}
*/
nosql.view.create(name, fnFilter, fnSort, [fnCallback], [fnUpdate], [changes]);

/*
	Drop view
	@name {String}
	@fnCallback {Function} :: params: @dropped {Boolean}
	@changes {String} :: optional, drop description
	return {Database}
*/
nosql.view.drop(name, [fnCallback], [changes]);

/*
	Read documents from view
	@name {String}
	@fnCallback {Function} :: params: @doc {Array of Object}, @count {Number}
	@itemSkip {Number} :: optional, default 0
	@itemTake {Number} :: optional, default 0
	@fnFilter {Function} :: optional, IMPORTANT: you must return {Boolean}
*/
nosql.view.all(name, fnCallback, itemSkip, itemTake, fnFilter);

/*
	Read documents from view
	@name {String}
	@top {Number}
	@fnCallback {Function} :: params: @doc {Array of Object}
	@fnFilter {Function} :: optional, IMPORTANT: you must return {Boolean}
	return {Database}
*/
nosql.view.top(name, top, fnCallback, fnFilter);

/*
	Read one document from view
	@name {String}
	@fnFilter {Function} :: optional, IMPORTANT: you must return {Boolean}
	@fnCallback {Function} :: params: @doc {Object}
	return {Database}
*/
nosql.view.one(name, fnFilter, fnCallback);

/*
	Get filename of view
	@name {String}
	return {String}
*/
nosql.view.getFileName(name);
===

### Stored functions

NoSQL version: +1.0.3-0
partial.js version: +1.2.4-4

=== javascript
var nosql = framework.database('filename');

/*
	Create a new stored function
	@name {String}
	@fn {Function}
	@fnCallback {Function} :: optional
	@changes {String} :: optional
	return {Database}
*/
nosql.stored.create(name, fn, [fnCallback], [changes])

/*
	Remove a stored function
	@name {String}
	@fnCallback {Function} :: optional
	@changes {String} :: optional
	return {Database}
*/
nosql.stored.remove(name, [fnCallback], [changes]);

/*
	Clear all stored functions
	@fnCallback {Function} :: optional
	@changes {String} :: optional
	return {Database}
*/
nosql.stored.clear([fnCallback], [changes]);

/*
	Execute a stored function
	@name {String}
	@params {Object} :: optional
	@fnCallback {Function} :: optional
	@changes {String} :: optional
	return {Database}
*/
nosql.stored.execute(name, [params], [fnCallback], [changes]);
===

### Binary files

NoSQL version: +1.0.0-9
partial.js version: +1.2.2-7

=== javascript
var nosql = framework.database('filename', 'binary-directory');

/*
	Create binary file
	@name {String} :: filename without path
	@type {String} :: content type
	@buffer {Buffer} :: binary data or base64
	@callback {Function} :: optional, params: @id {String}, @header {Object}
	@changes {String} :: optional, insert description
	return {String} :: return ID - identificator
*/
var id = nosql.binary.insert(name, type, buffer, [callback], [changes]);

/*
	Read binary file
	@id {String} :: identificator
	@callback {Function} :: params: @err {Error}, @readStream {Stream}, @header {Object} / header.name {String}, header.size {Number}, header.type {String}
	return {Database}
*/
nosql.binary.read(id, callback);

/*
	Remove binary file
	@id {String} :: identificator
	@callback {Function} :: params: @removed {Boolean}
	@changes {String} :: optional, remove description
	return {Database}
*/
nosql.binary.remove(id, [callback], [changes]);
===

### Events

=== javascript

/*
	@err {Error}
	@source {String}
*/
nosql.on('error', function(err, source) {});

/*
	@paused {Boolean} :: TRUE - paused, FALSE - resume
*/
nosql.on('pause/resume', function(paused) {});

/*
	@begin {Boolean} :: TRUE - beg, FALSE - complete
	@count {Number} :: documents
*/
nosql.on('insert', function(begin, count) {});

/*	
	@countUpdate {Number}
	@countRemove {Number}
*/
nosql.on('update/remove', function(countUpdate, countRemove) {});

/*	
	@begin {Boolean} :: TRUE - beg, FALSE - complete
	@count {Number} :: documents
*/
nosql.on('all', function(begin, count) {});
nosql.on('one', function(begin, count) {});
nosql.on('top', function(begin, count) {});
nosql.on('each', function(begin, count) {});

/*
	@begin {Boolean} :: TRUE - beg, FALSE - complete
	@name {String} :: name of view
	@count {Number} :: documents
*/
nosql.on('view', function(begin, name, count) {});

/*
	@begin {Boolean} :: TRUE - beg, FALSE - complete
	@name {String} :: name of view
	@count {Number} :: documents
*/
nosql.on('view/create', function(begin, name, count) {});

/*
	@begin {Boolean} :: TRUE - beg, FALSE - complete
	@name {String} :: name of view
*/
nosql.on('view/drop', function(begin, name) {});

/*
	STATUS_UNKNOWN = 0;
	STATUS_READING = 1;
	STATUS_WRITING = 2;
	STATUS_LOCKING = 3;
	STATUS_PENDING = 4;
*/
nosql.on('complete', function(status) {});

/*
	Execute a stored function
	@name {String}
*/
nosql.on('stored', function(name) {});

/*
	Save stored function to file
	@name {String}
*/
nosql.on('stored/save', function(name) {});

// Load stored functions
nosql.on('stored/load', function() {});
===

