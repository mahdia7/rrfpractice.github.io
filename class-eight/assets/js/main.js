(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		$('.testimonial-carousel').owlCarousel({
			animateIn: 'zoomIn',
			animateOut: 'slideOutDown',
			items: 1,
			dots: true,
			nav: false,
			loop: true,
			autoplay: true,
			smartSpeed: 1000,
			autoplaySpeed: 2000
		});
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	