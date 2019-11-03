import React from 'react';
import styled from 'styled-components';

import media from '../../../commonModules/media';
import { CarouselInfo } from "../auganisms/Carousel";

interface CarouselPageProps {
  carouselInfo :CarouselInfo;
}

const CarouselPage = ({carouselInfo} :CarouselPageProps) => (
  <div>
    <Img
      src={carouselInfo.src}
      alt={carouselInfo.alt}
      className="loginCarousel__slideImg"
    />
  </div>
);

export default CarouselPage;

const Img = styled.img`
    max-height: 90vh;
    width: 100vw;
    ${media.pc`
      margin: 0 auto;
      max-width: 1200px;
      width: auto;
    `}
    ${media.tablet`
      max-width: 90%;
    `}
`;
