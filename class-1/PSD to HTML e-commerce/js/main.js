/*jslint browser: true*/
/*global $, jQuery*/
$(document).ready(function () {
    'use strict';
	
	
    $('.product-list').masonry();
	
	$('.homepage-slides').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		smartSpeed: 2000,
		dots: false,
		nav: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
	});
	
	$('.product-promotions').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		smartSpeed: 6000,
		dots: true,
		nav: false
	});
	
	$(".menu-trigger").on("click", function () {
		$(".off-canvas-menu, .off-canvas-overlay").addClass("active");
	});
	
	$(".menu-close, .off-canvas-overlay").on("click", function () {
		$(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
	});
});