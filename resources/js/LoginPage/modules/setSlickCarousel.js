import slick from 'slick-carousel';
import $ from 'jquery';

import LoginConst from '../LoginConst';

const setSlickCarousel = (containerClass) => {
  $(`.${containerClass}`).slick({
    infinite: true,
    responsive: [{
      breakpoint: LoginConst.BREAKPOINT_PC,
      settings: {
        slideToShow: 1,
        slideToScroll: 1,
        fade: true,
        dots: true,
      },
    }],
  });
};

export default setSlickCarousel;
