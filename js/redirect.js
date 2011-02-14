jQuery(document).ready(function() {
	// redirect javascript clients to a richer page
	if(Drupal.settings.js_redirect.mapping.length > 0) {
		$.each(Drupal.settings.js_redirect.mapping, function(index, link) {
			console.log([link.noscript, link.enhanced]);
			$('a[href=' + link.noscript + ']').click(function(e) {
				window.location = link.enhanced;
				e.preventDefault();
			});
			if(window.location.pathname == link.noscript) {
				window.location = link.enhanced;
			}
		});
	}
});