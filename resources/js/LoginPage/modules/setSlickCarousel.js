import slick from 'slick-carousel';
import $ from 'jquery';

import LoginConst from '../LoginConst';


const setSlickCarousel = (containerSelector) => {
  const test = $(`${containerSelector}`);
  $(`${containerSelector}`).slick({
    infinite: true,
    dots: true,
    arrows: true,
    dragable: true,
    nextArrow: '[js_slick="next"]',
    prevArrow: '[js_slick="prev"]',
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
