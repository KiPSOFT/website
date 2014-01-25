## Builders

| Stability: __stable__

- ErrorBuilder
- PageBuilder
- UrlBuilder
- SchemaBuilder

### ErrorBuilder

ErrorBuilder is designed for form validation.

=== javascript

/*
	Contructor
    @onResource {Function} :: function(name, key) return {String}
*/
ErrorBuilder(onResource)

/*
	Add a new error
	@name {String or ErrorBuilder}
	@error {String} :: default value @ (for resources)
    return {ErrorBuilder}
*/
ErrorBuilder.add(name, error);

/*
	Remove error
	@name {String}
    return {ErrorBuilder}
*/
ErrorBuilder.remove(name);

/*
    return {Boolean}
*/
ErrorBuilder.hasError();

/*
	Clear ErrorBuilder
    return {ErrorBuilder}
*/
ErrorBuilder.clear();

/*
	Serialize ErrorBuilder to JSON format
    return {String}
*/
ErrorBuilder.json();

/*
	Prepare builder with Resources (ErrorBuilder.json() call this function automatically)
    return {ErrorBuilder}
*/
ErrorBuilder.prepare();

/*
    Replace
    @search {String}
    @value {String}
    return {ErrorBuilder}
*/
ErrorBuilder.replace(search, value);
===

### PageBuilder

By PageBuilder you can create pagination for Framework Views.

=== javascript
/*
	Contructor
    @items {Number}
    @page {Number}
    @max {Number}
*/
PageBuilder(items, page, max);

/*
	Refresh PageBuilder
	@items {Number}
	@page {Number}
	@max {Number}
    return {PageBuilder}
*/
PageBuilder.refresh(items, page, max);

/*
    Render PageBuilder
    @fn {Function} :: function(pageIndex, selected) :: return {What you want}
    @max {Number} :: optional, default undefined
    return {Array}
*/
PageBuilder.render(fn, max);
===

### UrlBuilder

=== javascript

/*
	Add parameter to UrlBuilder
	@name {String}
	@value {String}
    return {UrlBuilder}
*/
UrlBuilder.add(name, value);

/*
	Remove parameter from UrlBuilder
	@name {String}
    return {UrlBuilder}
*/
UrlBuilder.remove(name);

/*
	Read parameter
	@name {String}
    return {Object}
*/
UrlBuilder.read(name);

/*
	Create URL
    return {String}
*/
UrlBuilder.toString();

/*
	Has UrlBuilder values?
	@keys {String or String array}
    return {Boolean}
*/
UrlBuilder.hasValue(keys);

/*
	Render parameter
	@keys {String array} :: what parameter
	@divider {String}
    return {String}
*/
UrlBuilder.toOne(keys, divider);
===

### SchemaBuilder

 SchemaBuilder is designed for databases. Usage with [RDBMS]: http://partialjs.com/documentation/rdbms/.

=== javascript
/*
	Create object schema
    @name {String} :: name == table name or view name
    @obj {Number}
    @primaryKey {Boolean}
    @insert {Boolean} :: optional (insert primary key?), default false
    return {Object}
*/
Builders.schema(name, obj, primaryKey, insert);

/*
	Set primary key
    @schema {String}
    @name {String}
    @insert {Boolean} :: optional (insert primary key?)
    return {Exports}
*/
Builders.primaryKey(schema, name, insert);

/*
    Create new schema object with defaults values
    @schema {String}
    return {Object}
*/
Builders.defaults(schema);

/*
    Prepare model to schema
    @name {String}
    @model {Object}
    return {Object}
*/
Builders.prepare(schema, model);
===