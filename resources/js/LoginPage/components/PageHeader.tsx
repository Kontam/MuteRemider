import React from 'react';
import styled from 'styled-components';

import media from '../../commonModules/media';
import StyleConst from '../styles/define';

const PageHeader = () => (
  <PageHeadContainer>
    <PageHead>
      <HeadLine1> あの人は今？</HeadLine1>
      <HeadLine2> チェッカー</HeadLine2>
    </PageHead>
    <EnglishHead>Mute Reminder</EnglishHead>
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

const HeadLine1 = styled.div`
`;

const HeadLine2 = styled.div`
    margin-top: 17px;
    text-align: right;
    ${media.pc`
      margin: 0;
    `}
`;

const EnglishHead = styled.div`
    font-family: ${StyleConst.engHeadFont};
    font-size: 2.5rem;
    font-weight: ${StyleConst.fwMedium};
    text-align: center;
    margin-top: 25px;
    ${media.pc`
      font-size: 5.25rem;
      margin: 0;
    `}
`;

export default PageHeader;
