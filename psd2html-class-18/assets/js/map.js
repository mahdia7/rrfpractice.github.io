(function ($) {
	'use strict';
	
	jQuery(window).load(function () {
	$('#map2')
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

}(jQuery));
});