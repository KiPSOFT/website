## MongoDB via MongoLab.com

[MongoDB-as-a-Service / 500 MB FREE via www.mongolab.com]: http://www.mongolab.com

| Stability: __experimental__

=== javascript

/*
	MongoDB constructor
	@database {String}
	@key {String} :: get your key from https://mongolab.com/user?username=[username]
*/
MongoDB(database, key);

/*
	Usage / Constructor
	@database {String}
	@key {String} :: get your key from https://mongolab.com/user?username=[username]
	return {MongoDB};
*/
require('partial.js/mongodb').init(database, key);

/*
	All collection in database
	@cb {Function} :: function(error, object)
	return {MongoDB}
*/
mongodb.collections(cb);

/*
	Get all documents
	@collection {String}
	@params {Object}
	@cb {Function} :: function(error, object)
	return {MongoDB}
*/
mongodb.documents(collection, params, cb);

// Params options
// REST API www.mongolab.com documentation: https://support.mongolab.com/entries/20433053-rest-api-for-mongodb

// q<query> :: restrict results by the specified JSON query
// q = {} :: object
// where = {} :: object
// query = {} :: object

// s<sort> :: specify the order in which to sort each specified field (1- ascending; -1 - descending)
// s = {} :: object
// sort = {} :: object
// asc = ['name', 'age'] :: array
// desc = ['name', 'age'] :: array

// f<set of fields> :: specify the set of fields to include or exclude in each document (1 - include; 0 - exclude)
// f = {} :: object
// include = ['name', 'age'] :: array
// exclude = ['name', 'age'] :: array

// c<boolean> :: return the result count for this query
// c = true :: boolean
// count = true :: boolean

// fo<boolean> :: return a single document from the result set (same as findOne() using the mongo shell
// fo = true :: boolean
// first = true :: boolean

// sk<num results to skip> :: specify the number of results to skip in the result set; useful for paging
// sk = 10 :: number
// skip = 10 :: number

// l<limit> :: specify the limit for the number of results (default is 1000)
// l = 10 :: number
// take = 10 :: number
// max = 10 :: number
// top = 10 :: number
// limit = 10 :: number

// --------
// UPDATING
// --------

// m<boolean> :: update all documents
// m = true :: boolean
// all = true :: boolean
// update-all = true :: boolean

// u<boolean> :: insert the document defined in the request body if none match the specified query
// u = true :: boolean
// upsert = true :: boolean

var params = { where: { age: 28 }, asc: ['age'] };

mongodb.documents('users', params, function(err, data) {
	
});

/*
	Insert document / documents
	@collection {String}
	@documents {Object or Object array}
	@cb {Function} :: function(error, object)
	return {MongoDB}
*/
mongodb.insert(collection, documents, cb);

/*
	Update document / documents
	@collection {String}
	@condition {Object or Object array}
	@params {Object}
	@cb {Function} :: function(error, object)
	return {MongoDB}
*/
mongodb.update(collection, condition, params, cb);

/*
	Find document by Id
	@collection {String}
	@id {String or Number}
	@cb {Function} :: function(error, object)
	return {MongoDB}
*/
mongodb.findId(collection, id, cb);

/*
	Update document by Id
	@collection {String}
	@id {String or Number}
	@document {Object}
	@cb {Function} :: function(error, object)
	return {MongoDB}
*/
mongodb.updateId(collection, id, document, cb);

/*
	Delete document by Id
	@collection {String}
	@id {String or Number}
	@cb {Function} :: function(error, object)
	return {MongoDB}
*/
mongodb.deleteId(collection, id, cb);

/*
	Run command
	@command {Object}
	@cb {Function} :: function(error, object)
	return {MongoDB}
*/
mongodb.command(command, cb);
===

---

## REST API MongoLab.com

<https://support.mongolab.com/entries/20433053-REST-API-for-MongoDB>