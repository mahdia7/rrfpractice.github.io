(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		$('.listing-carousel').owlCarousel({
			items: 3,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			margin: 30,
			smartSpeed: 1000,
			autoplayTimeout: 3000
		})
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	