(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		$('#clock').countdown('2019/05/12', function (event) {
			$(this).html(event.strftime('<span class="countdown-timer"><span class="single-countdown-inner">%w <br><span>weeks</span></span> <span class="single-countdown-inner">%d <br><span>days</span></span> <span class="single-countdown-inner">%H <br><span>Hours</span></span> <span class="single-countdown-inner">%M <br><span>minutes</span></span> <span class="single-countdown-inner">%S <br><span>seconds</span></span></span>'));
		});

	});


	jQuery(window).load(function () {


	});


}(jQuery));
