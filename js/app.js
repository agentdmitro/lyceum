console.log(123);
// JS fragment import example
import * as functions from './modules/functions.js';
functions.isWebp();
functions.spollers();

// БАЗОВІ СКРИПТИ
import './modules/base.js';

// ТАБИ
// import './modules/tabs.js';

//  СЛАЙДЕР
// import './modules/slider.js';

// import './modules/popup.js';

//  2 варіант табу на чистому js
// import './modules/tabs2.js';

// import Bound from './libs/bounds.js'

// const boundary = Bound({
// 	margins: {bottom: 100}
// })

// const image = document.querySelectorAll('img[data-src]')

// const whenImageEnters = (image) => {
// 	return () => {
// 		image.src = image.dataset.src
// 	}
// }

// image.forEach(img => {
// 	boundary.watch(img, whenImageEnters(img))
// })

// Динамический адаптив
// Документация: https://github.com/FreelancerLifeStyle/dynamic_adapt#readme
//import './libs/dynamicAdapt.js';

// NPM Swiper installation example
/*
import Swiper, { Navigation, Pagination } from 'swiper';

// init Swiper:
const swiper = new Swiper('.swiper', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
	...
});
*/

// const story_stats = document.querySelectorAll('.story__stats-item h5 span');

// gsap.from(story_stats, {
//   textContent: 0,
//   duration: 2,
//   ease: 'power1.in',
//   snap: { textContent: 1 },
//   stagger: {
//     each: 1.0,
//     onUpdate: function () {
//       this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
//     },
//   },
// });

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
// }

$('.menu-item-has-child').click(function (e) {
  $(this).toggleClass('active');
  $(this).children('ul').toggleClass('active');
});
