(function ($) {
	"use strict";

    jQuery(document).ready(function ($) {
		
		
		$('.project-titles li').on('click', function () {
			
			$('.project-titles li').removeClass('active');
			$(this).addClass('active');
			
			var selector = $(this).attr('data-filter');
			$('.projects-list').isotope({
				filter: selector
			});
		});
    });


    jQuery(window).load(function () {
		jQuery('.projects-list').isotope();
    });


}(jQuery));