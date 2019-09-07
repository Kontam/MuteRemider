import React from 'react';

import LoginConst from '../LoginConst';

const PageFooter = () => (
  <footer className="pageFooterContainer">
    <div className="pageFooterContainer__wrapper">
      <div className="footerOwnerInfo">
        <h2 className="footerOwnerInfo__head">制作</h2>
        <p className="footerOwnerInfo__ownerName">コンコンタ</p>
        <ul className="footerOwnerInfo__linkList">
          <li>
            <a href={LoginConst.OWNER_LINK} className="footerOwnerInfo__link" target="_blank" rel="noopener noreferrer">
              <img src="img/house_white_icon.svg" alt="home" className="footerOwnerInfo__homeIcon" />
            </a>
          </li>
          <li>
            <a href={LoginConst.OWNER_TWITTER_LINK} className="footerOwnerInfo__link" target="_blank" rel="noopener noreferrer">
              <img src="img/twitter_white_icon.svg" alt="twitter" className="footerOwnerInfo__twitterIcon" />
            </a>
          </li>
        </ul>
      </div>
      <p className="pageFooterContainer__copyRight">
        Copyright © Konkonta All right reserved
      </p>
    </div>
  </footer>
);

export default PageFooter;
