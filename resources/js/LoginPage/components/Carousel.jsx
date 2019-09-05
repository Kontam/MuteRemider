import React, { Component } from 'react';

import setSlickCarousel from '../modules/setSlickCarousel';

class Carousel extends Component {
  componentDidMount() {
    setSlickCarousel('loginCarousel');
  }

  render() {
    return (
      <div className="loginCarousel">
        <div className="loginCarousel__page">
          <img
            src="img/slides/muter-slide1.jpg"
            alt="Twitterのミュートを有効活用しましょう"
            className="loginCarousel__slideImg"
          />
        </div>
        <div className="loginCarousel__page">
          <img
            src="img/slides/muter-slide2.jpg"
            alt="あなたがミュートしたユーザーを一覧表示 その場でミュート解除もできます"
            className="loginCarousel__slideImg"
          />
        </div>
        <div className="loginCarousel__page">
          <img
            src="img/slides/muter-slide3.jpg"
            alt="「チラ見」機能で、その人のツイートをいくつか見ることができます"
            className="loginCarousel__slideImg"
          />
        </div>
        <div className="loginCarousel__page">
          <img
            src="img/slides/muter-slide4.jpg"
            alt="安全なアプリです。あなたのアカウントからツイートすることは決してありません"
            className="loginCarousel__slideImg"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
