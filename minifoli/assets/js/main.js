(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		
		// menu bar open and close
		$('.menu-trigger').on('click', function () {
			$('.toggle-menu .main-menu').slideToggle(400, function () {
				$(this).toggleClass('expand');
				return false;
			});
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
		
		// Sticky Header
		$(window).scroll(function () {
			if ($(document).scrollTop() > 100) {
				$('.header-area').addClass('change');
				$('.header-area').addClass('shrink');
			} else {
				$('.header-area').removeClass('change');
				$('.header-area').removeClass('shrink');
			}
		});


		// video play button for magnific popup
		$('.video-play-btn').magnificPopup({
			type: 'video'
		});

		// popup images
		$('.image-popup').magnificPopup({
			type: 'image'
		});

		// services carousel 
		$('.service-carousel').owlCarousel({
			loop: true,
			dots: true,
			nav: false,
			autoplay: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1200: {
					items: 3,
				}
			}
		});

		$('.service-carousel-2').owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: false,
			autoplay: false
		});
		// testimonial carousel
		$('.testimonial-carousel').owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: false,
			autoplay: true,
			animateIn: 'slideInDown',
			animateOut: 'fadeOutDown',
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				}
			}
		});
		// Brand logo carousel
		$('.logo-carousel').owlCarousel({
			items: 3,
			loop: true,
			dots: true,
			nav: false,
			autoplay: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				480: {
					items: 2,
				},
				600: {
					items: 3,
				},
				1000: {
					items: 3,
				}
			}
		});
		// Blog Content carousel
		$('.blog-carousel').owlCarousel({
			loop: true,
			dots: true,
			nav: false,
			autoplay: false,
			margin: 30,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3,
				}
			}
		});

		// project filter
		$('.project-filter li').on('click', function () {

			$('.project-filter li').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$('.projects-list').isotope({
				filter: selector
			});
		});


		// progress bar
		$('#bar1').barfiller({

			// color of bar
			barColor: '#333333',

			// shows a tooltip
			tooltip: true,

			// duration in ms
			duration: 1000,

			// re-animate on resize
			animateOnResize: true,

			// custom symbol
			symbol: "%"

		});
		$('#bar2').barfiller({

			// color of bar
			barColor: '#333333',

			// shows a tooltip
			tooltip: true,

			// duration in ms
			duration: 2000,

			// re-animate on resize
			animateOnResize: true,

			// custom symbol
			symbol: "%"

		});
		$('#bar3').barfiller({

			// color of bar
			barColor: '#333333',

			// shows a tooltip
			tooltip: true,

			// duration in ms
			duration: 1000,

			// re-animate on resize
			animateOnResize: true,

			// custom symbol
			symbol: "%"

		});
		$('#bar4').barfiller({

			// color of bar
			barColor: '#333333',

			// shows a tooltip
			tooltip: true,

			// duration in ms
			duration: 1000,

			// re-animate on resize
			animateOnResize: true,

			// custom symbol
			symbol: "%"

		});
		$('#bar5').barfiller({

			// color of bar
			barColor: '#333333',

			// shows a tooltip
			tooltip: true,

			// duration in ms
			duration: 1000,

			// re-animate on resize
			animateOnResize: true,

			// custom symbol
			symbol: "%"

		});

		//Check to see if the window is top if not then display button
		$(window).scroll(function () {
			if ($(this).scrollTop() > 800) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});

		//Click event to scroll to top
		$('.scrollToTop').on('click', function () {
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	});


	jQuery(window).load(function () {
		// project filter call
		jQuery('.projects-list').isotope();
	});


}(jQuery));
