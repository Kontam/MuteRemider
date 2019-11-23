import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import StyleConst, { resetButton } from '../../styles/define';
import { mediaQ } from '../../../commonModules/media';

const CarouselArrows = () => {
  return (
    <Arrows>
      <Arrow js_slick="prev">
        <ArrowImg src="img/slick/slick-arrow-left.svg" alt="prev" />
      </Arrow>
      <Arrow js_slick="next">
        <ArrowImg src="img/slick/slick-arrow-right.svg" alt="next" />
      </Arrow>
    </Arrows>
  );
}

export default CarouselArrows;

const Arrows = styled.div`
  display: none;
  ${mediaQ.pc}{
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    left: 50%;
    margin: 0 auto;
    width: 1400px;
    position: absolute;
    top: 45%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    min-width: 1000px;
  }
  ${mediaQ.tablet}{
    display: none;
  }
`;

const ArrowImg = styled.img`
  max-width: 50px;
`;

const SlickArrow = ({className, js_slick, children} :{className: string, js_slick: string, children: JSX.Element}) => (
  <button js_slick={js_slick} className={className}>
    {children}
  </button>
);

const Arrow = styled(SlickArrow)`
 ${mediaQ.pc}{
     ${resetButton};
     cursor: pointer;
 }
`;
