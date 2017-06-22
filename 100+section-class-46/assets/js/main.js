(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		$('.featured-trailer-carousel').owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true
		})

		$(".featured-trailer-carousel").on("translated.owl.carousel", function() {
            $(".trailer-content h2").addClass("animated slideInDown",).css("opacity, 1");
            $(".trailer-content .bordered-btn, .trailer-content p, .price-box p, .price-box p.price-amount").addClass("animated fadeInUp").css("opacity, 1");
            
        });

        $(".featured-trailer-carousel").on("translate.owl.carousel", function() {
            $(".trailer-content h2").removeClass("animated slideInDown").css("opacity, 0");
            $(".trailer-content .bordered-btn, .trailer-content p, .price-box p, .price-box p.price-amount").removeClass("animated fadeInUp").css("opacity, 0");
            
        });
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	