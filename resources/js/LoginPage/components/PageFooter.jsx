import React from 'react';

import LoginConst from '../LoginConst';

const PageFooter = () => (
  <footer className="pageFooterContainer">
    <h2 className="pageFooterContainer__head">制作</h2>
    <p className="pageFooterContainer__ownerName">コンコンタ</p>
    <ul className="pageFooterContainer__linkList">
      <li>
        <a href={LoginConst.OWNER_LINK} className="pageFooterContainer__link">
          <img src="img/house_white_icon.svg" alt="home" className="pageFooterContainer__homeIcon" />
        </a>
      </li>
      <li>
        <a href={LoginConst.OWNER_TWITTER_LINK} className="pageFooterContainer__link">
          <img src="img/twitter_white_icon.svg" alt="twitter" className="pageFooterContainer__twitterIcon" />
        </a>
      </li>
    </ul>
    <p className="pageFooterContainer__copyRight">
      Copyright © Konkonta All right reserved
    </p>
  </footer>
);

export default PageFooter;
