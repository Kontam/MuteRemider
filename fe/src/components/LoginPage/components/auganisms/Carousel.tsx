import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
// import "../../../../scss/slick-theme.scss";
// import "../../../../scss/slick.scss";

import CarouselPage from '../atoms/CarouselPage';
import CarouselArrows from '../molecules/CrouselArrows';
import StyleConst, { resetButton } from '../../styles/define';
import { mediaQ } from '../../../../commonModules/media';
const firstSlide = require('../../../../../img/slides/muter-slide1.jpg');
const scondSlide = require('../../../../../img/slides/muter-slide2.jpg');
const thirdSlide = require('../../../../../img/slides/muter-slide3.jpg');
const fourthSlide = require('../../../../../img/slides/muter-slide4.jpg');


export interface CarouselInfo {
  src: string;
  alt: string;
};

// =============================================
// slick-carouselを使用しているためstyled-component化できない部分がある
// 後の課題として、ひとまずscssファイルとクラス名付きのjsxを残す
// =============================================
const Carousel = () => {
    const [hidden, setHidden] = useState(true);

    // slickのカルーセル化の処理が終わるまで隠す
    useEffect(() => {
      // if( window != undefined ) {
      //   import('../../modules/setSlickCarousel').then(
      //     module => {
      //       module.setSlickCarousel('[data-js-slick="container"]');
      //     });
      // }
      setHidden(false);
    },[]);

    // カルーセルの情報
    const carouselInfos :CarouselInfo[]= [
      {
        src: firstSlide,
        alt: "Twitterのミュートを有効活用しましょう",
      },
      {
        src: scondSlide,
        alt: "あなたがミュートしたユーザーを一覧表示 その場でミュート解除もできます",
      },
      {
        src: thirdSlide,
        alt: "「チラ見」機能で、その人のツイートをいくつか見ることができます",
      },
      {
        src: fourthSlide,
        alt: "安全なアプリです。あなたのアカウントからツイートすることは決してありません",
      },
    ];

    return (
      <Container>
        <Slider>
          {carouselInfos.map((carouselInfo :CarouselInfo, index) =>
            <CarouselPage carouselInfo={carouselInfo} key={index} />
          )}
        </Slider>
        <CarouselArrows />
      </Container>
    );
}

const Container = styled.div`
  background-color: ${StyleConst.muterGreen};
  padding: 50px 0 120px;
  position: relative;
`;

const Slick = ({className, children} :{className: string, children: JSX.Element}) :JSX.Element => (
  <div className={className} data-js-slick="container">
    {children}
  </div>
);

const CarouselBody = styled(Slick)<any>`
  opacity: ${props => props.hidden ? 1 : 0};
  width: 120%;
  ${mediaQ.pc}{
    margin: 0 auto;
    width: 1400px;
    max-width: 95%;
    min-height: 620px;
  }
`;

export default Carousel;
