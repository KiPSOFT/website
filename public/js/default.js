var _gaq = _gaq || [];

$(document).ready(function() {
	$('.menu').find('a[href="' + url(1) + '"]').parent().addClass('selected');
	initSource();

	if ($('#fb-root').length > 0)
		social.facebook('en_US');

	if ($('.twitter-share-button').length > 0)
		social.twitter();

	if ($('.g-follow').length > 0) {
		window.___gcfg = {lang: 'en-GB'};
		(function() {
			var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			po.src = 'https://apis.google.com/js/plusone.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		})();
	}
	
});

function initSource() {
	if ($('pre').length > 0) {
    	SyntaxHighlighter.defaults['toolbar'] = false;
	    SyntaxHighlighter.defaults['auto-links'] = false;
	    SyntaxHighlighter.all();
    }
}

function url(b) {

	var path = window.location.pathname;
	if (path.substring(path.length - 1, path.length) !== '/')
		path += '/';

	return path;
}

var social = {
  facebook: function(b, a) {
    b = b || "sk_SK";
    a = a || "346088855483095";
    (function(h, e, i) {
      var g, f = h.getElementsByTagName(e)[0];
      if (h.getElementById(i)) {
        return
      }
      g = h.createElement(e);
      g.id = i;
      g.src = "//connect.facebook.net/" + b + "/all.js#xfbml=1&appId=" + a;
      f.parentNode.insertBefore(g, f)
    }(document, "script", "facebook-jssdk"))
  },
  google: function() {
    (function() {
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.async = true;
      a.src = "https://apis.google.com/js/plusone.js";
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a, b)
    })()
  },
  twitter: function() {
    (function() {
      var a = document.createElement("script");
      a.type = "text/javascript";
      a.async = true;
      a.src = "http://platform.twitter.com/widgets.js";
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a, b)
    })()
  }
};