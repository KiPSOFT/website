## CouchDB

| Stability: __stable__

=== javascript

/*
	Constructor
	@connectionString {String} :: url address
*/
CouchDB(connectionString);

/*
	Usage / Constructor
	@connectionString {String} :: url address
	return {CouchDB};
*/
require('partial.js/couchdb').init(connectionString);

/*
	CouchDB command
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.compactDatabase(cb);
couchdb.compactViews(cb);
couchdb.cleanupViews(cb);

/*
	CouchDB command
	@namespace {String}
	@name {String}
	@params {Object}
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.view(namespace, name, params, cb);
couchdb.list(namespace, name, params, cb);
couchdb.show(namespace, name, params, cb);

/*
	CouchDB command
	@id {String}
	@revs {String} :: optional
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
CouchDB.find(id, revs, cb);

/*
	CouchDB command
	@params {Object}
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.all(params, cb);
couchdb.changes(params, cb);

/*
	CouchDB command
	@funcMap {Function}
	@funcMfuncReduceap {Function}
	@params {Object}
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.query(funcMap, funcReduce, params, cb);

/*
	CouchDB command
	@doc {Object}
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.insert(doc, cb);

/*
	CouchDB command
	@doc {Object}
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.update(doc, cb);

/*
	CouchDB command
	@namespace {String}
	@view {Object} :: view = { map: { name: 'function... ', reduce: 'function...'}}
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.insertView(namespace, view, cb);

/*
	CouchDB command
	@rev {String} :: old revision
	@namespace {String}
	@view {Object} :: view = { map: { name: 'function... ', reduce: 'function...'}}
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.updateView(rev, namespace, view, cb);

/*
	CouchDB command
	@path {String}
	@method {String}
	@obj {Object}
	@params {Object}
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.request(path, method, obj, params, cb);

/*
	CouchDB command
	@doc {Object or String}
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.delete(doc, cb);

/*
	CouchDB command
	@doc {Object}
	@fileName {String}
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.deleteAttachment(doc, fileName, cb);

/*
	CouchDB command
	@arr {Object array}
	@cb {Function} :: function(error, object)
	return {CouchDB}
*/
couchdb.bulk(arr, cb);

/*
	CouchDB command
	@docOrId {String or Object}
	@fileName {String}
	@response {Function or ServerResponse} :: function(data)
	return {CouchDB}
*/
couchdb.attachment(docOrId, fileName, response);

/*
	CouchDB command
	@docOrId {String or Object}
	@fileName {String}
	@fileSave {String}
	@cb {Function} :: optional function(error, object)
	return {CouchDB}
*/
couchdb.upload(docOrId, fileName, fileSave, cb);

/*
	CouchDB command
	@max {Number}
	@cb {Function} :: optional function(error, object)
	return {CouchDB}
*/
couchdb.uuids(max, cb);
===