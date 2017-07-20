(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		$(".header-area ul li a[href^='#']").on('click', function () {
			$(".header-area ul li a[href^='#']").removeClass("menu-active");
			$(this).addClass("menu-active");
			
		});
		$('.blog-image-gallery').owlCarousel({
			items: 1,
			dots: false,
			nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			autoplay: false
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
			if ($(document).scrollTop() > 650) {
				$('.header-area').addClass('stick');
			} else {
				$('.header-area').removeClass('stick');
			}
		});
		
		$('.video-play-btn').magnificPopup({
			type: 'video'
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
		
		$('#map')
			.gmap3({
				center: [41.4018668, -73.1396181],
				zoom: 15,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});
		
		var options = {  
			useEasing: true,
			useGrouping: true,
			separator: '',
			decimal: '.',
			prefix: '',
			suffix: ''
		};
		var projects = new CountUp("projects", 0, 7533, 0, 7, options);
		projects.start();

		var options = {  
			useEasing: true,
			useGrouping: true,
			separator: '',
			decimal: '.',
			prefix: '',
			suffix: ''
		};
		var projects_ongoing = new CountUp("projects-ongoing", 0, 4222, 0, 7, options);
		projects_ongoing.start();

		var options = {  
			useEasing: true,
			useGrouping: true,
			separator: '',
			decimal: '.',
			prefix: '',
			suffix: '+'
		};
		var clients = new CountUp("clients", 0, 6980, 0, 7, options);
		clients.start();

		var options = {  
			useEasing: true,
			useGrouping: true,
			separator: '',
			decimal: '.',
			prefix: '',
			suffix: '%'
		};
		var feedback = new CountUp("feedback", 0, 100, 0, 7, options);
		feedback.start();
		
		jQuery('.projects-list').isotope();
		
		
	});


}(jQuery));
