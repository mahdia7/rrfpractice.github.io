(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		$('#mobile-menu').slicknav({
			prependTo: '#mobile-menu-wrap'
		});

		$(".header-area ul li").on('click', function () {
			$(".header-area ul li").removeClass("active");
			$(this).addClass("active");

		});
		// Smooth Scrolling
		$(".header-area ul li a[href^='#']").on('click', function (event) {
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
		$('.testimonial-carousel').owlCarousel({
			items: 1,
			loop: true,
			dots: false,
			nav: false,
			autoplay: true,
			animateOut: 'fadeOut',
			animateIn: 'slideInDown'
		});
		$('.logo-carousel').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			autoplay: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				576: {
					items: 2,
				},
				768: {
					items: 3,
				},
				991: {
					items: 4,
				},
				1200: {
					items: 5,
				}
			}
		});

		$('.project-titles li').on('click', function () {

			$('.project-titles li').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$('.projects-list').isotope({
				filter: selector
			});
			return false;
		});

		$('.pricing-titles li').on('click', function () {

			$('.pricing-titles li').removeClass('open');
			$(this).addClass('open');

			var selector = $(this).attr('data-filter');
			$('.pricing-list').isotope({
				filter: selector
			});
		});
	});


	jQuery(window).load(function () {
		jQuery('.projects-list').isotope();

		jQuery('.projects-list2').isotope();
	});


}(jQuery));
