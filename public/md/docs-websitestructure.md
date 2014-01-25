## Documentation / web application framework for node.js

=== embed
<div><iframe width="670" height="503" src="http://www.youtube.com/embed/3GMQJki82Lo" frameborder="0" allowfullscreen></iframe></div>
<br />
===

## Website structure

| Stability: __stable__

=== plain
|---- [backup]
|---- [contents]
|---- [controllers]
|---- [databases]
|---- [logs]
|---- [modules]
|---- [public]
|---- [resources]
|---- [templates]
|---- [tests]
|---- [tmp]
|---- [views]
|
|---- config-debug
|---- config-release
|---- index.js
===


_IMPORTANT FOR WINDOWS USERS_: path to file or directory must be in this format: __/aaa-directory/myfile.txt__

### backup

{OPTIONAL} This directory contains all web site backup files. You can restore and run any backup. Framework contains 2x functions: backup &amp; restore.

---

### contents

{OPTIONAL} This directory contains plain HTML. HTML can be inserted into views. Example: if you insert repeated content (Google adverts, Likebox, ect.), use "content" insert.

---

### controllers

This directory contains all controllers. Controllers define the different actions that your users can interact with. In each controller you can define routes, flags, functions, models, etc..

---

### databases

{OPTIONAL} This directory is optional and contains all NoSQL embed databases. If you don't use NoSQL embed database, remove this directory. NoSQL embed database is implemented in partial.js core.

---

### logs

{OPTIONAL} Is optional directory. If you use log writer - this directory contains all logs from web application. Log writer is available in all controllers.

---

### modules

{OPTIONAL} Is optional directory. Modules directory contains web application modules. The module may contain classes, functions or constants. Each controller may call module or module may create own route.

---

### public

{OPTIONAL} This directory is published to internet and directory must contain all static files (JavaScripts, CSS files, Pictures, Fonts, Documents, Videos, etc.).

---

### resources

{OPTIONAL} If you create Web pages that will be read by speakers of different languages, you must provide a way for readers to view the page in their own language. This way are resources. A resource file is an plain text file that contains the strings.

---

### templates

{OPTIONAL} This directory contains templates. Template is a HTML file with special tags. Templates are suitable for repeating data (such as list of products, comments, etc.).

---

### tests

{OPTIONAL} Test directory contains scripts for assertion testing. In assertion test you can test every controller and his routes in your web application. Tests are independents of your web application in release mode.

---

### tmp

Tmp is a temporary directory. Framework stored in this directory compiled files, internal cache or form uploads. This directory is often cleaning.

---

### views

{OPTIONAL} Views are used when rendering a response to a request. View is HTML file with special framework tags. In views is defined layout of web page.

---

### files: config-debug / config-release

This files configure framework. Debug config is for testing and release config is for production. In both files, you can write custom and different values.

---

### index.js

This is main script of web application, this script run web application.

=== plain

cd yourapplication
$ node index.js

===