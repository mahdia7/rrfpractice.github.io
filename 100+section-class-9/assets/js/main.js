(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


		$('.client-testimonial-carousel').owlCarousel({
			items: 3,
			autoplay: true,
			margin: 30,
			nav: false,
			dots: true,
			loop: true
		});
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	













