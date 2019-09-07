import slick from 'slick-carousel';
import $ from 'jquery';

import LoginConst from '../LoginConst';

const setSlickCarousel = (containerClass) => {
  $(`.${containerClass}`).slick({
    infinite: true,
    dots: true,
    arrows: true,
    dragable: true,
    nextArrow: '.slickArrows__nextArrow',
    prevArrow: '.slickArrows__prevArrow',
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
