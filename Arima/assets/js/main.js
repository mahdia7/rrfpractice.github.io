(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		$('.homepage-slides-carousel').on('initialized.owl.carousel changed.owl.carousel', function (e) {
			if (!e.namespace) {
				return;
			}
			var carousel = e.relatedTarget;
			$('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
		}).owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true
		});
		$('.homepage-slides-carousel').on('translate.owl.carousel', function () {
			$('.slide-content').removeClass('zoomIn animated').hide();
			$('.slide-img img').removeClass('slideInRight animated').hide();
		});

		$('.homepage-slides-carousel').on('translated.owl.carousel', function () {
			$('.slide-content').addClass('zoomIn animated').show();
			$('.slide-img img').addClass('slideInRight animated').show();
		});

		$('.products-carousel').on('initialized.owl.carousel changed.owl.carousel', function (e) {
			if (!e.namespace) {
				return;
			}
			var carousel = e.relatedTarget;
			$('.slider-counter-2').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
		}).owlCarousel({
			items: 4,
			loop: true,
			dots: false,
			nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			margin: 20,
			autoplay: true
		});
	});


	jQuery(window).load(function () {


	});


}(jQuery));
