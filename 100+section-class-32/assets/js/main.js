(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').on('click', function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	