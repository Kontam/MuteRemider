import $ from 'jquery';
import slick from 'slick-carousel';

import LoginConst from '../LoginConst.ts';


const setSlickCarousel = (containerSelector) => {
  $(`${containerSelector}`).slick({
    infinite: true,
    dots: true,
    arrows: true,
    dragable: true,
    nextArrow: '[data-js-slick="next"]',
    prevArrow: '[data-js-slick="prev"]',
    responsive: [{
      breakpoint: LoginConst.BREAKPOINT_TABLET,
      settings: {
        slideToShow: 1,
        slideToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: LoginConst.BREAKPOINT_SP,
      settings: {
        slideToShow: 1,
        slideToScroll: 1,
        fade: false,
        arrows: false,
      },
    }],
  });
};

export default setSlickCarousel;
