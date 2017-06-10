(function ($) {
	"use strict";

	jQuery(document).ready(function($){
    	$('.case-studies-carousel').owlCarousel({
			items: 3,
			margin: 30,
			nav: false,
			dots: true,
			loop: true,
			autoplay: true,
			smartSpeed: 2000
		});
		
		$('.testimonial-carousel').owlCarousel({
			animateIn: 'fadeOutDown',
			animateOut: 'fadeInUp',
			items: 1,
			dots: true,
			nav: false,
			loop: true,
			autoplay: true,
			smartSpeed: 450
		});
		$('.logo-carousel').owlCarousel({
			items: 6,
			dots: false,
			nav: false,
			loop: true,
			autoplay: true,
			smartSpeed: 450
		});
    });

    jQuery(window).load(function(){

	
    });


}(jQuery));	