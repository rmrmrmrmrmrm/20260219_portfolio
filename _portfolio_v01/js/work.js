//スライダー
var slider = new Swiper('.slider', {
	loop: true,
	autoplay: {
		delay: 5000,
	},
	speed: 1000,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});