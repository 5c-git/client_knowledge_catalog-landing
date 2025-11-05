import './slider.scss';

import Swiper from 'swiper';
import {
  Navigation, Pagination, Autoplay
} from 'swiper/modules';

const sliderInit = (container) => {
  const slider = container;
  if (!slider) return;

  const swiper = slider.querySelector('.swiper');
  const buttonPrev = slider.querySelector('.slider__button--prev');
  const buttonNext = slider.querySelector('.slider__button--next');

  new Swiper(swiper, {
    modules: [Navigation, Pagination, Autoplay],
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
      disabledClass: 'slider__button--disabled',
      lockClass: 'slider__button--lock',
    },
    // Pagination
    pagination: {
      el: '.slider__pagination',
      clickable: true,
      bulletClass: 'slider__bullet',
      bulletActiveClass: 'slider__bullet--active',
      type: 'bullets',
    },
    // Responsive breakpoints
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
    },
  });
};

const sliders = document.querySelectorAll('.slider');
sliders.forEach((el) => {
  sliderInit(el);
});
