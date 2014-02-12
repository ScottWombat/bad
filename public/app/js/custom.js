define(["jquery"], function ($) {
	
		  //alert('custom');
			/******** Language and Currency Dropdowns ********/
			$('#currency, #language').mouseover(function() {
				$(this).find('> ul').slideDown('fast');
				$(this).bind('mouseleave', function() {
					$(this).find('> ul').slideUp('fast');
				});
			});

	//});
});