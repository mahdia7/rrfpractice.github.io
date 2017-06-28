(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		$('.project-filter li').on('click', function () {

			$('.project-filter li').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$('.project-list').isotope({
				filter: selector
			});
		});
	});

	$('.image-popup').magnificPopup({
		type: 'image',
	});
	
	
	
	jQuery(window).load(function () {
		jQuery('.project-list').isotope();
	});


}(jQuery));
