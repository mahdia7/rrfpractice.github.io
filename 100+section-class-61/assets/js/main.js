(function ($) {
	"use strict";

    jQuery(document).ready(function($){

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
							color: '#8E99AD'
						}]
					},

					{
						featureType: 'road',
						elementType: 'geometry',
						stylers: [{
							color: '#CB9336'
						}]
									},
					{
						featureType: 'road',
						elementType: 'labels.text.fill',
						stylers: [{
							color: '#000000'
						}]
									},
					{
						featureType: 'road.highway',
						elementType: 'geometry',
						stylers: [{
							color: '#425478'
						}]
									},
					{
						featureType: 'water',
						elementType: 'geometry',
						stylers: [{
							color: '#156AA1'
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
				icon: 'assets/img/map-marker.png'
			})
			
			
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	