(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		// testimonial Carousel activation
		$('.testimonial-carousel').owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			animateIn: 'slideInDown',
			animateOut: 'fadeOutDown'
		});
		
		// video type magnific popup activation
		$('.video-play-btn').magnificPopup({
			type: 'video'
		});
		
		// off canvas menu open and close script (homepage 4)
		$('.menu-trigger').on('click', function () {
			$('.off-canvas-menu, .off-canvas-overlay').addClass('active');
			return false;
		});
		
		$('.menu-close, .off-canvas-overlay').on('click', function () {
			$('.off-canvas-menu, .off-canvas-overlay').removeClass('active');
		});
		
		
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


	jQuery(window).load(function () {


	});


}(jQuery));
