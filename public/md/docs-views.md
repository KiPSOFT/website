## Views

| Stability: __stable__

=== html
<!DOCTYPE html>
<html>
<head>
    @{meta}
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=10" />
    <meta name="format-detection" content="telephone=no"/>
    <meta name="viewport" content="width=1024, user-scalable=yes" />
    <meta name="robots" content="all,follow" />
    @{head}
    @{css('default.css')}
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    @{js('default.js')}
</head>
<body>
	// controller.meta();
	@{meta('Title', 'Description', 'Keywords')}

    // load image from config['static-url-image']
    // partial.js +v1.2.1-4
    // return <img> TAG
    @{image('logo.png', 200, 100, 'Web site logo')}
    @{image(filename, [width:{Number}], [height:{Number}], [alt:{String}], [className:{String}])}

    // load style from config['static-url-css']
    // partial.js +v1.2.1-4
    // return <link> TAG
    @{css(filename)}

    // load script from config['static-url-js']
    // partial.js +v1.2.1-4
    // return <script> TAG
    @{js(filename)}

    // load favicon from config['static-url']
    // partial.js +v1.2.1-4
    // return <link> TAG
    @{favicon(filename)}

	// controller.settings();
	@{settings('AA', 'BB', 'CC', 'DD', 'EE')}

    // <link rel="dns-prefetch" href="
    // render to @{head}
    // partial.js +v1.2.4-0
    @{dns('//fonts.googleapis.com', '//google-analytics.com')}

    // <link rel="prefetch" href="
    // render to @{head}
    // partial.js +v1.2.4-0
    @{prefetch('http://daker.me/2013/05/hello-world.html')}

    // <link rel="prerender" href="
    // render to @{head}
    // partial.js +v1.2.4-0
    @{prerender('http://daker.me/2013/05/hello-world.html')}

    // <link rel="next" href="
    // render to @{head}
    // partial.js +v1.2.4-0
    @{next('/page/3/')}
    
    // <link rel="prev" href="
    // render to @{head}
    // partial.js +v1.2.4-0
    @{prev('/page/1/')}

    // <link rel="canonical" href="
    // render to @{head}
    // partial.js +v1.2.4-0
    @{canonical('/product/12345-shoes/')}

    // Append tag to HTML head
    // render to @{head}
    // partial.js +v1.2.4-0
    @{head('//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js')}
    @{head('<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>')}

    // Set response header
    // partial.js +v1.2.4-5
    @{header('X-Frame-Options', 'SAMEORIGIN')}

	// controller.setModified();
	@{modified(new Date().add('hour', 1))}

	// controller.setModified();
	@{etag('123456')}

    // controller.routeJS()
    @{routeJS('name')}

    // controller.routeCSS()
    @{routeCSS('name')}

    // controller.routeFont()
    @{routeFont('name')}

    // controller.routeUpload()
    @{routeUpload('name')}

    // controller.routeImage()
    @{routeImage('name')}

    // controller.routeVideo()
    @{routeVideo('name')}

    // controller.routeStatic()
    @{routeStatic('filename')}

    // controller.currentJS()
    @{currentJS('path')}

    // controller.currentCSS()
    @{currentCSS('path')}

    // controller.currentUpload()
    @{currentUpload('path')}

    // controller.currentImage()
    @{currentImage('path')}

    // controller.currentVideo()
    @{currentVideo('path')}

    // read value from controller.repository (HTML encoded)
    @{repository.title}
    @{repository.description}
    ...

    // read value from controller.repository (raw)
    @{!repository.title}
    @{!repository.description}
    ...

    // read value from model (HTML encoded)
    @{model.message}
    @{model.warning}
    ...

    // Model example:
    // this.view(name, { message: 'test', warning: 'warning' });

    // read value from model (raw)
    @{!model.message}
    @{!model.warning}
    ...

    // Request readonly data POST (HTML encoded)
    @{post.FirstName}
    @{post.LastName}
    @{post.Age}
    ...

    // Request readonly data POST (raw)
    @{!post.FirstName}
    @{!post.LastName}
    @{!post.Age}
    ...

    // Request readonly data GET (HTML encoded)
    @{get.FirstName}
    @{get.LastName}
    @{get.Age}
    ...

    // Request readonly data GET (raw)
    @{!get.FirstName}
    @{!get.LastName}
    @{!get.Age}
    ...

    // framework.global (HTML encoded)
    @{global.hello}
    ...

    // framework.global (raw)
    @{!global.hello}
    ...

    // Read value from framework configuration (HTML encoded)
    @{config.name}
    @{config.urlFacebook}
    @{config.urlTwitter}
    ...

    // Read value from framework configuration (raw)
    @{!config.name}
    @{!config.urlFacebook}
    @{!config.urlTwitter}
    ...

    // Read value from user (HTML encoded)
    @{user.name}
    ...

    // Read value from user (raw)
    @{!user.name}
    ...

    // Read value from session (HTML encoded)
    @{session.name}
    ...

    // Read value from session (raw)
    @{!session.name}
    ...

    // Read value from resources (HTML encoded)
    @{resource('en', 'title', 'default')}
    ...

    // Read value from resources (raw)
    @{!resource('en', 'title')}
    ...

    // Read value from default.resource (HTML encoded)
    @{resource('title')}
    ...

    // Render meta tags (framework.onMeta)
    @{meta}

    // Render all head tags
    // partial.js +v1.2.4-0
    @{head}

    // Render settings (framework.onSettings)
    @{settings}

    // This Tag is allowed in layout view
    @{body}

    // Change layout
    @{layout('new-layout-name')}

    // Add url to sitemap
    @{sitemap(name, url, [index]);

    // ------------------------------------------------------------------
    // IMPORTANT TAGS
    // ------------------------------------------------------------------

    // Render multiple options TAG
    <select name="">
        @{options(Array | Object Array, [selectValue], [propertyText], [propertyValue]);
    </select>

    // Render partial view in this view
    @{view('name', [model]);
    @{viewToggle(bool, 'name', [model])}

    // Load content from contents
    @{content('name')}
    @{contentToggle(bool, 'name')}

    // Render: checked="checked"
    @{checked(bool, [charBeg:{String}], [charEnd:{String}]);

    // Render: disabled="disabled"
    @{disabled(bool, [charBeg:{String}], [charEnd:{String}]);

    // Render: readonly="readonly"
    @{readonly(bool, [charBeg:{String}], [charEnd:{String}]);

    // Render: selected="selected"
    @{selected(bool, [charBeg:{String}], [charEnd:{String}]);

    // Render template
    @{template('file-name-template', model, [file-name-content], [repository])}
    @{templateToggle(bool, 'file-name-template', model, [file-name-empty-content], [repository])}

    // Render: JSON
    // Render (id != ''): <script type="application/json" ...
    @{json(object, [id:{String}])}

    // FORMS / partial.js +v1.2.1-4
    // ======= THIS TAGS LOAD VALUES FROM VIEW MODEL =======

    // Render: <input type="checkbox"
    @{checkbox(name, [label:{String} or attr:{Object}])};
    @{checkbox(name, 'I agree')};
    @{checkbox(name, { label: 'I agree', disabled: true })};

    // Render: <input type="radio"
    @{radio(name, value, [label:{String} or attr:{Object}]);
    @{radio(name, 'value 1', 'Value 1')};
    @{radio(name, 'value 1', '{ label: 'Value 1', disabled: true })};

    // Render: <input type="text"
    @{text(name, [attr:{Object}]);
    @{text(name, { class: 'modern', maxlength: 30, required: true, placeholder: 'enter your name', style: 'font-weight:bold' })}

    // Render: <input type="hidden"
    @{hidden(name, [attr:{Object}])}

    // Render: <textare
    @{textarea(name, [attr:{Object}])}
    @{textarea(name, { class: 'modern', maxlength: 30, required: true, cols: 30, rows: 10 })}

    // ==============

    // ------------------------------------------------------------------
    // CONDITION / partial.js +v1.2.1-1
    // ------------------------------------------------------------------

    @{if condition}
        OK
    @{endif}

    @{if condition}
        TRUE
        <b>HTML</b>
    @{else}
        FALSE
        <div>HTML</div>
    @{endif}

    @{if condition}
        A
        @{content('condition-true')}
        A
    @{else}
        B
        @{content('condition-false')}
        B
    @{endif}

</body>
</html>
===