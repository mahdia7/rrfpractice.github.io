(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		$(".menu-area .navbar-nav .nav-item").on('click', function () {
			$(".menu-area .navbar-nav .nav-item").removeClass("active");
			$(this).addClass("active");
			
		});
		$('.homepage-slides').owlCarousel({
			items: 1,
			nav: true,
			dots: true,
			loop: true,
			autoplay: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			animateOut: 'fadeOut'
		});
		
		$('.homepage-slides').on('translate.owl.carousel', function(){
			$('.single-homepage-slider .slider-effect').removeClass('fadeInDown animated').hide();
			$('.single-homepage-slider .slider-effect span').removeClass('rotateInDownRight animated').hide();
			$('.single-homepage-slider .absolute-slider-img').removeClass('fadeInUp animated').hide();
			$('.single-homepage-slider .productNameShadow').removeClass('zoomIn animated').hide();
			$('.single-homepage-slider .product-style').removeClass('slideInUp animated').hide();
		});
		
		$('.homepage-slides').on('translated.owl.carousel', function(){
			$('.single-homepage-slider .slider-effect').addClass('fadeInDown animated').show();
			$('.single-homepage-slider .slider-effect span').addClass('rotateInDownRight animated').show();
			$('.single-homepage-slider .absolute-slider-img').addClass('fadeInUp animated').show();
			$('.single-homepage-slider .productNameShadow').addClass('zoomIn animated').show();
			$('.single-homepage-slider .product-style').addClass('slideInUp animated').show();
		});
	});


	jQuery(window).load(function () {


	});


}(jQuery));
