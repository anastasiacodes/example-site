(function ($) {
	'use strict';

	$('.lazy').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1
	  });

	// hero-slider
    $('.hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
		mobileFirst: true,
		adaptiveHeight: true,
    });

	// Showroom slider
	$('.showroom-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

})(jQuery);