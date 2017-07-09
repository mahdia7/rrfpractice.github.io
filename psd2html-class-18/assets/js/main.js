(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
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
		
		$('#map-2')
			.gmap3({
				center: [41.4018668, -73.1396181],
				zoom: 15,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [
					{
						elementType: 'geometry',
						stylers: [{
							color: '#F2F2F2'
							}]
						},

					{
						featureType: 'road',
						elementType: 'geometry',
						stylers: [{
							color: '#ffffff'
							}]
										},
					{
						featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [{
							color: '#999999'
							}]
										},
					{
						featureType: 'road.highway',
						elementType: 'geometry',
						stylers: [{
							color: '#ffffff'
							}]
										},
					{
						featureType: 'poi',
						elementType: 'labels.text.fill',
						stylers: [{
							color: '#28AE5F'
							}]
										},
					{
						featureType: 'water',
						elementType: 'geometry',
						stylers: [{
							color: '#28AE5F'
							}]
										},
					{
						featureType: 'water',
						elementType: 'labels.text.fill',
						stylers: [{
							color: '#28AE5F'
							}]
										},
					{
						featureType: "road.arterial",
						elementType: "geometry",
						stylers: [{
							color: "#ffffff"
							}]
										},
					{
						elementType: "labels.icon",
						stylers: [{
							"visibility": "off"
							}]
										}
							],
			})
			.marker({
				position: center,
				icon: 'assets/img/map-marker.png'
			});


	});

	jQuery(window).load(function () {
		
		var content = '<div id="iw_container">' +
      '<div class="iw_title"><h3>Address</h3></div>' +
      '<div class="iw_content">470 Lucy Forks, Patriciafurt, YC7B 3UT</div>' +
	  '<div class="iw_title"><h4>Phone Number</h4></div>' +
      '<div class="iw_content"><p>(0161) 347 8854</p> <p>(0117) 900 9463</p></div>' + '</div>'
		
		var center = [41.4018668, -73.1396181]
		$('#map-1')
			.gmap3({
				center: center,
				zoom: 15,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [
					{
						elementType: 'geometry',
						stylers: [{
							color: '#F2F2F2'
						}]
					},

					{
						featureType: 'road',
						elementType: 'geometry',
						stylers: [{
							color: '#ffffff'
						}]
									},
					{
						featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [{
							color: '#999999'
						}]
									},
					{
						featureType: 'road.highway',
						elementType: 'geometry',
						stylers: [{
							color: '#ffffff'
						}]
									},
					{
						featureType: 'poi',
						elementType: 'labels.text.fill',
						stylers: [{
							color: '#28AE5F'
						}]
									},
					{
						featureType: 'water',
						elementType: 'geometry',
						stylers: [{
							color: '#28AE5F'
						}]
									},
					{
						featureType: 'water',
						elementType: 'labels.text.fill',
						stylers: [{
							color: '#28AE5F'
						}]
									},
					{
						featureType: "road.arterial",
						elementType: "geometry",
						stylers: [{
							color: "#ffffff"
						}]
									},
					{
						elementType: "labels.icon",
						stylers: [{
							"visibility": "off"
						}]
                                	}
						],
			})
			.infowindow({
				position: center,
				content: content,
			})
			.then(function (infowindow) {
				infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
			});


		


	});


}(jQuery));
