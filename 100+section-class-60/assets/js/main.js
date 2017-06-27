(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		var center = [23.739568, 90.4128583];
		$('.map')
			.gmap3({
				center: center,
				zoom: 15,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [
					{
						elementType: 'geometry',
						stylers: [{
							color: '#ffffff'
						}]
					},

					{
						featureType: 'road',
						elementType: 'geometry',
						stylers: [{
							color: '#cccccc'
						}]
									},
					{
						featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [{
							color: '#4c4c4c'
						}]
									},
					{
						featureType: 'road.highway',
						elementType: 'geometry',
						stylers: [{
							color: '#EDEDED'
						}]
									},
					{
						featureType: 'water',
						elementType: 'geometry',
						stylers: [{
							color: '#e9e9e9'
						}]
									},
					{
						featureType: 'poi',
						elementType: 'labels.text.fill',
						stylers: [{
							color: '#000'
						}]
									},
					{
						featureType: 'water',
						elementType: 'geometry',
						stylers: [{
							color: '#CECECE'
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
				animation: google.maps.Animation.BOUNCE,
				icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
			})
			.circle({
				center: center,
				radius: 450,
				fillColor: "#ddd",
				strokeColor: "#CECECE"
			})
			.on({
				click: function (circle, event) {
					circle.setOptions({
						fillColor: "#ddd"
					});
				},
				mouseover: function (circle, event) {
					circle.setOptions({
						strokeColor: "#4c4c4c"
					});
				},
				mouseout: [
          			function (circle, event) {
						circle.setOptions({
							strokeColor: "#CECECE"
						});
          			},
          			function (circle, event) {
						console.log('mouseout', circle, event);
          			}
        		]
			})
			.infowindow({
				content: "We Are Here!!"
			})
			.then(function (infowindow) {
				var info = this.get(0);
				var marker = this.get(1);
				infowindow.open(info, marker);
			})


	});


	jQuery(window).load(function () {


	});


}(jQuery));
