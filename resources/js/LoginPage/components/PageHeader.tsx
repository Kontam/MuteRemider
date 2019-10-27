import React from 'react';
import styled from 'styled-components';

import media from '../styles/media';
import StyleConst from '../styles/define';

const PageHeader = () => (
  <PageHeadContainer>
    <PageHead>
      <div className="pageHeadContainer__headLine1"> あの人は今？</div>
      <div className="pageHeadContainer__headLine2"> チェッカー</div>
    </PageHead>
    <p className="pageHeadContainer__engHead">Mute Reminder</p>
  </PageHeadContainer>
);

const PageHeadContainer = styled.div`
  color: #fff;
  background: linear-gradient(to bottom right, #84FAB1, #8FD3F4);
  height: 200px;
  padding: 30px 35px 15px;
  width: 100%;
  ${media.pc`
    height: ${StyleConst.pcHeaderHeight};
    padding: 25px 0;
  `}
`;

const PageHead = styled.h1`
    font-size: 2.125rem;
    font-weight: ${StyleConst.fwBold};
    margin: 0 auto;
    max-width: 350px;
    ${media.pc`
      display: flex;
      font-size: 5.25rem;
      justify-content: center;
      line-height: 140px;
      max-width: none;
    `}
    ${media.tablet`
      font-size: 4rem;
    `}
`;

export default PageHeader;
