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
		
		$('.video-play-btn').magnificPopup({
			type: 'video'
		});
		
		$('.homepage-slides').owlCarousel({
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			items: 1,
			dots: false,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			loop: true,
			autoplay: true,
			smartSpeed: 450
		});
    });

    jQuery(window).load(function(){

	
    });


}(jQuery));	