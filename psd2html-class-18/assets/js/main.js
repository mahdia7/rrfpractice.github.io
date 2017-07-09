(function ($) {
	"use strict";

	jQuery(document).ready(function($){
    	$('.case-studies-carousel').owlCarousel({
			items: 3,
			margin: 30,
			nav: false,
			dots: true,
			loop: true,
			autoplay: true,
			smartSpeed: 2000
		});
		
		$('.testimonial-carousel').owlCarousel({
			animateIn: 'fadeOutDown',
			animateOut: 'fadeInUp',
			items: 1,
			dots: true,
			nav: false,
			loop: true,
			autoplay: true,
			smartSpeed: 450
		});
		$('.logo-carousel').owlCarousel({
			items: 6,
			dots: false,
			nav: false,
			loop: true,
			autoplay: true,
			smartSpeed: 450
		});
		
		$('.video-play-btn').magnificPopup({
			type: 'video'
		});
		
		$('.homepage-slides').owlCarousel({
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			items: 1,
			dots: false,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			loop: true,
			autoplay: true,
			smartSpeed: 450
		});
		
		
		
		// off canvas menu open and close script (homepage 4)
		$('.menu-trigger').on('click', function () {
			$('.off-canvas-menu, .off-canvas-overlay').addClass('active');
			return false;
		});
		
		$('.menu-close, .off-canvas-overlay').on('click', function () {
			$('.off-canvas-menu, .off-canvas-overlay').removeClass('active');
		});
		
		// search bar expand and close script (homepage 4)
		$("#search-trigger").click(function (e) {

			e.preventDefault();
			if ($("#search").hasClass("expandIn")) {
				
				$("#search").removeClass("expandIn");
								
			} else {
				$("#search").addClass("expandIn");
			}
		});
		
		$('.single-testimonial-item').hover(function () {
			$('.single-testimonial-item').removeClass('active');
			$(this).addClass('active');
		});
		


		$('.map')
			.gmap3({
				   address:"Paris, France",
					zoom: 10,
					mapTypeId: google.maps.MapTypeId.HYBRID,
					mapTypeControl: true,
					mapTypeControlOptions: {
					  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
					},
					navigationControl: true,
					scrollwheel: true,
					streetViewControl: true,
				    styles: [
					{	elementType: 'geometry',
						stylers: [{color: '#ffffff'}]},
					{	featureType: 'road',
						elementType: 'geometry',
						stylers: [{color: '#cccccc'}]},
					{	featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [{color: '#4c4c4c'}]},
					{	featureType: 'road.highway',
						elementType: 'geometry',
						stylers: [{color: '#EDEDED'}]},
					{	featureType: 'water',
						elementType: 'geometry',
						stylers: [{color: '#e9e9e9'}]},
					{	featureType: 'poi',
						elementType: 'labels.text.fill',
						stylers: [{color: '#000'}]},
					{	featureType: 'water',
						elementType: 'geometry',
						stylers: [{color: '#CECECE'}]},
					{	featureType: "road.arterial",
						elementType: "geometry",
						stylers: [{color: "#ffffff"}]},
					{	elementType: "labels.icon",
						stylers: [{"visibility": "off"}]}
					]
			})
	});
	
    jQuery(window).load(function () {

	
    });


}(jQuery));