## Mail SMTP sender

| Stability: __stable__

=== javascript
var mail = require('partial.js/mail');

// Debug information (console.log)
// return {Boolean} :: default false
mail.debug;

/*
	Mail Message
	@subject {String} :: optional
	@body {String} :: optional
	return {Message}
*/
new mail.Mail([subject], [body]);
new mail.Message([subject], [body]);
mail.create([subject], [body]);
===

## Mail Events

=== javascript
mail.on('sending', function(message) {});
mail.on('success', function(message) {});
mail.on('error', function(error, message) {});
===

## Mail Message

=== javascript

var message = new mail.Message();

message.subject = 'Subject';
message.body = 'Body';

// Add a recipient
// @email {String}
// return {Message}
message.to('yourmail1@mail.com');
message.to('yourmail2@mail.com');

// Add a CC recipient
// @email {String}
// return {Message}
message.cc('yourmail3@mail.com');

// Add a BCC recipient
// @email {String}
// return {Message}
message.bcc('yourmail4@mail.com');

// Add a ReplyTo address
// @email {String}
// return {Message}
message.reply('yourmail@mail.com');

/*
	Set sender
	@email {String}
	@name {String} :: optional, default email address
	return {Message}
*/
message.sender(email, [name]);

/*
	Add a attachment
	@filename {String}
	@name {String} :: name of file with an extension
*/
message.attachment(filename, [name]);

/*
	Send a e-mail
	@smtp {String} :: optional, SMTP server
	@options {Object} :: @user {String}, @password {String}, @port {Number} :: default 25, secure: {Boolean} :: default false, @timeout {Number} :: default 10000 (10 seconds)
	return {Message}
*/
message.send('your.smtp.server.com', [options]);


// internal properties

// {String Array}
message.addressTo;
message.addressCC;
message.addressBCC;
message.addressReply;
===