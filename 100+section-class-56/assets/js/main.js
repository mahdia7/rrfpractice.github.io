(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		
		$('.select-theme-1').on('click', function(){
			$('body').addClass('theme-1').removeClass('theme-2');
			
			$('html').css('height', '100%');
			
			return false;
		});
		
		$('.select-theme-2').on('click', function(){
			$('body').addClass('theme-2').removeClass('theme-1');
			
			$('html').css('height', 'auto');
			
			return false;
		});
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	