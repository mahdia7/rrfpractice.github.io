(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		// Smooth Scrolling
		$(".off-canvas-menu ul li a[href^='#']").on('click', function (event) {
			var target;
			target = this.hash;

			event.preventDefault();

			var navOffset;
			navOffset = $('#navbar').height();

			return $('html, body').animate({
				scrollTop: $(this.hash).offset().top - navOffset
			}, 900, function () {
				return window.history.pushState(null, null, target);
			});
		});

		// off canvas menu open and close script
		$('.menu-trigger').on('click', function () {
			$('.off-canvas-menu, .off-canvas-overlay').addClass('active');
			return false;
		});

		$('.menu-close, .off-canvas-overlay').on('click', function () {
			$('.off-canvas-menu, .off-canvas-overlay').removeClass('active');
		});
		$('.about-carousel').owlCarousel({
			items: 1,
			nav: false,
			dots: true,
			loop: true
		});
		$('.testimonial-carousel').owlCarousel({
			items: 1,
			nav: false,
			dots: true,
			loop: true
		});
		
		$('.project-titles li').on('click', function () {
			
			$('.project-titles li').removeClass('active');
			$(this).addClass('active');
			
			var selector = $(this).attr('data-filter');
			$('.projects-list').isotope({
				filter: selector
			});
		});
	});


	jQuery(window).load(function () {
		jQuery('.projects-list').isotope();

	});


}(jQuery));
