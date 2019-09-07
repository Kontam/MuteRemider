import React from 'react';

import LoginConst from '../LoginConst';

const LoginSection = ({ basePath }) => (
  <div className="LoginSection">
    <div className="LoginSection__head">
      <p className="LoginSection__Paragraph">{LoginConst.DESCRIPTION_FIRST_MUTER}</p>
      <p className="LoginSection__Paragraph LoginSection__Paragraph--second">{LoginConst.DESCRIPTION_SECOND_MUTER}</p>
    </div>
    <div className="LoginRightColumn">
      <div className="ownerLink">
        <img className="ownerLink__icon" src="img/house_icon.svg" alt="home" />
        <a href={LoginConst.OWNER_LINK} className="ownerLink__Link" target="_blank" rel="noopener noreferrer">制作者ホームページ</a>
      </div>
      <div className="LoginForm">
        <a className="LoginForm__loginLink" href={`${basePath}${LoginConst.LOGIN_SLAG}`}>
          ログイン
          <img className="LoginForm__icon" src="img/twitter_white_icon.svg" alt="twitter" />
        </a>
        <p className="LoginForm__description">{LoginConst.DESCRIPTION_LOGIN_TWITTER}</p>
      </div>
    </div>
  </div>
);

export default LoginSection;
