(function ($) {
	"use strict";

    jQuery(document).ready(function($){


		// Sticky Header
		$(window).scroll(function () {
			if ($(document).scrollTop() > 200) {
				$('.main-menu').addClass('stick');
			} else {
				$('.main-menu').removeClass('stick');
			}
		});

		$('.main-menu-3').sticky();
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	