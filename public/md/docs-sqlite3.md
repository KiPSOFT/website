## SQLite3

| Stability: __unstable__

This module works with [Builders]: http://partailjs.com/documentation/builders/ (SchemaBuilder, QueryBuilder, ParameterBuilder, OrderBuilder). To use SQLite you must install the module [node-sqlite3]: https://github.com/developmentseed/node-sqlite3.

__Example of [SQLite]: http://www.sqlite.org use in partial.js:__ [download eshop source code]: /upload/eshop.zip

=== javascript

/*	
	Constructor
	@fileName {String}
	@mode {String} :: optional, 'OPEN_READONLY', 'OPEN_READWRITE', 'OPEN_CREATE', default: OPEN_READWRITE | OPEN_CREATE
	@debug {Boolean} :: optional, default false (if true sqlite3 use verbose())
*/
SQLite(fileName, debug, mode);


/*
	https://github.com/developmentseed/node-sqlite3/wiki/Control-Flow
	@fn {Function}
	return {SQLite}
*/
sqlite.serialize(fn);

/*
	https://github.com/developmentseed/node-sqlite3/wiki/Control-Flow
	@fn {Function}
	return {SQLite}
*/
sqlite.parallelize(fn);

/*
	https://github.com/developmentseed/node-sqlite3/wiki/API
	@sql {String}
	@params {Object}
	@cb {Function}
	return {SQLite}
*/
sqlite.prepare(sql, params, cb);

/*
	Debug mode events
	@name {String}
	@fn {Function}
	return {SQLite}

	sqlite.on('trace');
	sqlite.on('profile');
*/
sqlite.on(name, fn);

/*
	Set transaction
	@begin {Boolean or String} :: if true - BEGIN, if end COMMINT
	return {SQLite}
*/
sqlite.transaction(begin);

/*
	Set pragma journal mode
	@type {String} :: DELETE | TRUNCATE | PERSIST | MEMORY | WAL | OFF, default MEMORY
	return {SQLite}
*/
sqlite.setJournal(type);

/*
	Set pragma journal mode
	@type {String} :: WAL, MEMORY
	@default {Boolean} :: optional, default true
	return {SQLite}
*/
sqlite.setCache(type, default);

/*
	Get SQLite database object
*/
sqlite.database();

/*
	Close SQLite database
    return {SQLite}
*/
sqlite.close();

/*
	Execute
	@sql {String}
    @params {Object}
    @callback {Function} :: function(err, data)
    return {SQLite}
*/
sqlite.(sql, params, callback);

/*
	SQLite run command
	@sql {String}
    @params {Object}
    return {SQLite}
*/
sqlite.run(sql, params);

/*
	Get single row result
	@sql {String}
    @params {Object}
    @callback {Function} :: function(err, data)
    return {SQLite}
*/
sqlite.scalar(sql, params, callback);
sqlite.get(sql, params, callback);

/*
	Reader
	@sql {String}
    @params {Object}
    @callback {Function} :: function(err, data)
    return {SQLite}
*/
sqlite.reader(sql, params, callback);
===

## ORM functions

=== javascript

/*
	Create table
	@schema {String}
	@callback {Function} :: @callback(boolean)	
    return {SQLite}
*/
sqlite.createTable(schema, callback);

/*
	Count
	@sql {String}
	@builder {QueryBuilder}
    @callback {Function} :: function(err, count)
    return {SQLite}
*/
sqlite.count(schema, builder, callback);

/*
	Find all
	@schema {String}
	@builder {QueryBuilder}
	@order {OrderBuilder}
	@take {Number}
	@skip {Number}
    @callback {Function} :: function(err, data)
    @without {String array} :: Without columns name
    return {SQLServer}
*/
sqlite.findAll(schema, builder, order, take, skip, callback, without);

/*
	All
	@schema {String}
	@builder {QueryBuilder}
	@order {OrderBuilder}
    @callback {Function} :: function(err, data)
    @without {String array} :: Without columns name
    return {SQLServer}
*/
sqlite.all(schema, order, callback, without);

/*
	Find top
	@schema {String}
	@builder {QueryBuilder}
	@order {OrderBuilder}
	@take {Number}
	@skip {Number}
    @callback {Function} :: function(err, data)
    @without {String array} :: Without columns name
    return {SQLServer}
*/
sqlite.findTop(top, schema, builder, order, callback, without);

/*
	Find one
	@schema {String}
	@builder {QueryBuilder}
	@order {OrderBuilder}
	@take {Number}
	@skip {Number}
    @callback {Function} :: function(err, data)
    @without {String array} :: Without columns name
    return {SQLServer}
*/
sqlite.findOne(schema, builder, order, callback, without);

/*	
	Find by primary key
	@schema {String}
	@value {Object}
    @callback {Function} :: function(err, data)
    @without {String array} :: Without columns name
    return {SQLite}
*/
sqlite.findPK(schema, value, callback, without);

/*
	Insert record
	@schema {String}
	@value {Object}
    @callback {Function} :: function(err, data, changes)
    @without {String array} :: Without columns name
    return {SQLite}
*/
sqlite.insert(schema, value, callback, without);

/*
	Update record
	@schema {String}
	@value {Object}
    @callback {Function} :: function(err, data, changes)
    @without {String array} :: Without columns name
    return {SQLite}
*/
sqlite.update(schema, value, callback, without);

/*
	Delete record
	@schema {String}
	@value {Object}
    @callback {Function} :: function(err, isDeleted), @isDeleted {Boolean}
    return {SQLite}
*/
sqlite.delete(schema, value, callback);

/*
	Create table
	@schema {String}
	@callback {Function} :: @callback(boolean)
	@temporary {Boolean} :: optional, default false
    return {SQLite}
*/
sqlite.createSchema(schema, callback, temporary);

/*
	Delete table
	@schema {String}
	@callback {Function} :: @callback(boolean)	
    return {SQLite}
*/
sqlite.deleteSchema(schema, callback);
===

### EXAMPLE

Documentation: [SchemaBuilder, QueryBuilder, OrderBuilder]: http://127.0.0.1:8000/documentation/builders/

=== javascript

var builders = new requiere('partial.js/builders');
var sqlite = new requiere('partial.js/sqlite');

var db = new sqlite.init('/users/petersirka/desktop/test.sqlite');

builders.schema('tbl_user', {
	Id: 'int',
	FirstName: 'string(50)',
	LastName: 'string(50)',
	Age: 'int'
}, 'Id');

var newUser = {
	FirstName: 'Peter',
	LastName: 'Sirka',
	Age: 28
};

db.insert('tbl_user', newUser, function(err, user) {

	console.log(user.Id);
	db.delete('tbl_user', user);

});

var where = new builders.QueryBuilder();
var order = new builders.OrderBuilder();

order.asc('Id').desc('FistName');

// Parametrized query
where.addValue('Id', '>', 10).addOperator('AND').addValue('FistName', '=', 'Peter');

// Raw value
where.addOperator('AND').addValue('Id', '>', 10, true);

db.findTop(10, 'tbl_user', where, order, function(users) {
	console.log(users);
});

// Parametrized query
db.execute('UPDATE tbl_user SET Price=20 WHERE Id BETWEEN {a} AND {b}', { a: 10, b: 20 });

db.scalar('SELECT COUNT(*) As Count FROM tbl_user', null, null, function(err, data) {
	console.log(data.Count);
});

db.reader('SELECT Id, LastName FORM tbl_user', function(err, data) {
	// data[0] == []
	// data[1] == []
});

db.count('tbl_user', function(err, count) {
	// count = {Number}
});

db.count('tbl_user', where, function(err, count) {
	// count = {Number}
});

===