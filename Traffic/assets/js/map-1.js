(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		
	});


	jQuery(window).load(function () {

		  var location = {
            lat: 41.3969328,
            lng: -73.1190786
        };
        $('#map-1')
            .gmap3({
                zoom: 15,
                scrollwheel: false,
                center: location,
                styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#06d6a0"
                                    }, {
                        "lightness": 17
                                    }]
                                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                                    }, {
                        "lightness": 20
                                    }]
                                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                                    }, {
                        "lightness": 17
                                    }]
                                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                                    }, {
                        "lightness": 29
                                    }, {
                        "weight": 0.2
                                    }]
                                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                                    }, {
                        "lightness": 18
                                    }]
                                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                                    }, {
                        "lightness": 16
                                    }]
                                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                                    }, {
                        "lightness": 21
                                    }]
                                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dedede"
                                    }, {
                        "lightness": 21
                                    }]
                                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                                    }, {
                        "color": "#ffffff"
                                    }, {
                        "lightness": 16
                                    }]
                                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                                    }, {
                        "color": "#333333"
                                    }, {
                        "lightness": 40
                                    }]
                                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                                    }]
                                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f2f2f2"
                                    }, {
                        "lightness": 19
                                    }]
                                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fefefe"
                                    }, {
                        "lightness": 20
                                    }]
                                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#fefefe"
                                    }, {
                        "lightness": 17
                                    }, {
                        "weight": 1.2
                                    }]
                                }]
            })
         
        .infowindow({
        position: location,
        content: "<h6>Address</h6><p>470 Lucy Forks, Patriciafurt, YC7B 3UT</p><h6>Phone Number</h6><p>+0123456789,01298765432</p>"
      })
      .then(function (infowindow) {
        infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
      });
	});


}(jQuery));
