import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import setSlickCarousel from '../../modules/setSlickCarousel.js';
import CarouselPage from '../atoms/CarouselPage';
import CarouselArrows from '../molecules/CarouselArrows';
import StyleConst, { resetButton } from '../../styles/define';
import { mediaQ } from '../../../commonModules/media';

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
      setSlickCarousel('[js_slick="container"]');
      setHidden(false);
    },[]);

    // カルーセルの情報
    const carouselInfos :CarouselInfo[] = [
      {
        src: "img/slides/muter-slide1.jpg",
        alt: "Twitterのミュートを有効活用しましょう",
      },
      {
        src: "img/slides/muter-slide2.jpg",
        alt: "あなたがミュートしたユーザーを一覧表示 その場でミュート解除もできます",
      },
      {
        src: "img/slides/muter-slide3.jpg",
        alt: "「チラ見」機能で、その人のツイートをいくつか見ることができます",
      },
      {
        src: "img/slides/muter-slide4.jpg",
        alt: "安全なアプリです。あなたのアカウントからツイートすることは決してありません",
      },
    ];

    return (
      <Container>
        <CarouselBody style={hidden ? {opacity: 0} : {opacity: 1}}>
          {carouselInfos.map((carouselInfo, index) :JSX.Element =>(
            <CarouselPage carouselInfo={carouselInfo} key={index} />
          ))}
        </CarouselBody>
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
  <div className={className} js_slick="container">
    {children}
  </div>
);

const CarouselBody = styled(Slick)`
  width: 120%;
  ${mediaQ.pc}{
    margin: 0 auto;
    width: 1400px;
    max-width: 95%;
    min-height: 620px;
  }
`;

export default Carousel;
