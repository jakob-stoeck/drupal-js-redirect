jQuery(document).ready(function($) {
	// redirect javascript clients to a richer page
	if(Drupal.settings.js_redirect.mapping.length > 0) {
		var equalOp = '';
		$.each(Drupal.settings.js_redirect.mapping, function(index, link) {
			var type = link['type'] || 'is equal';
			switch(type) {
				case 'is equal':
					equalOp = '=';
					break;
				case 'not equal':
					equalOp = '!=';
					break;
				case 'starts with':
					equalOp = '^=';
					break;
				case 'ends with':
					equalOp = '$=';
					break;
				case 'contains':
					equalOp = '*=';
					break;
				default:
					equalOp = '=';
			};
				
			$('a[href' + equalOp + '"' + link.noscript + '"' + ']').click(function(e) {
				window.location = link.enhanced;
				e.preventDefault();
			});
			if(window.location.pathname == link.noscript) {
				window.location = link.enhanced;
			}
		});
	}
});