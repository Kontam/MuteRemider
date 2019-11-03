import React from 'react';
import styled from 'styled-components';

import media from '../../../commonModules/media';
// import StyleConst from '../styles/define';
import LoginConst from '../../LoginConst';


const OwnerInfo = () => (
  <Container>
    <OwnerHead>制作</OwnerHead>
    <OwnerName>コンコンタ</OwnerName>
    <List>
      <li>
        <OwnerLink href={LoginConst.OWNER_LINK} target="_blank" rel="noopener noreferrer">
          <HomeIcon src="img/house_white_icon.svg" alt="home" className="footerOwnerInfo__homeIcon" />
        </OwnerLink>
      </li>
      <li>
        <OwnerLink href={LoginConst.OWNER_TWITTER_LINK} target="_blank" rel="noopener noreferrer">
          <TwitterIcon src="img/twitter_white_icon.svg" alt="twitter" className="footerOwnerInfo__twitterIcon" />
        </OwnerLink>
      </li>
    </List>
  </Container>
);

export default OwnerInfo;

const Container = styled.div`
  ${media.pc`
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
  `}
`;
const OwnerHead = styled.h2`
  font-size: 1.125rem;
  ${media.pc`
    font-size: 1.375rem;
    margin-right: 25px;
  `}
`;
const OwnerName = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 10px;
  ${media.pc`
    font-size: 1.375rem;
    margin-top: 0;
  `}
`;
const List = styled.ul`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    ${media.pc`
      margin-top: 0;
    `}
`;
const OwnerLink = styled.a`
    margin: 0 12px;
    ${media.pc`
      margin: 0 0 0 15px;
    `}
`;

const HomeIcon = styled.img`
    width: 26px;
`;
const TwitterIcon = styled.img`
    width: 26px;
`;
