(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		$('#clock').countdown('2019/05/12', function (event) {
			$(this).html(event.strftime('<span class="countdown-timer"><span class="single-countdown-inner">%w <br><span>weeks</span></span> <span class="single-countdown-inner">%d <br><span>days</span></span> <span class="single-countdown-inner">%H <br><span>Hours</span></span> <span class="single-countdown-inner">%M <br><span>minutes</span></span> <span class="single-countdown-inner">%S <br><span>seconds</span></span></span>'));
		});
		
		$('.email-subscribe-form').ajaxChimp({
			url: 'http://facebook.us16.list-manage.com/subscribe/post?u=043f5d35fda3d185875fc2b8f&amp;id=6da7c80da0'
		});

	});


	jQuery(window).load(function () {


	});


}(jQuery));
