(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		
		$('.homepage-slides').owlCarousel({
			items: 1,
			nav: true,
			dots: true,
			loop: true,
			autoplay: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			animateOut: 'fadeOut'
		});
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	