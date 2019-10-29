import React from 'react';
import styled,{ css } from 'styled-components';

import media from '../../styles/media';
import StyleConst, { resetAnchor } from '../../styles/define';
import LoginConst from '../../LoginConst';

const OwnerLink = () => (
  <OwnerLinkText>
      <OwnerIcon src="img/house_icon.svg" alt="home" />
      <Link href={LoginConst.OWNER_LINK} target="_blank" rel="noopener noreferrer">制作者ホームページ</OwnerLink>
    </OwnerLinkText>
);

const OwnerLinkText = styled.div`
  text-align: right;
  padding: 0 10px;
  margin-bottom: 3px;
  cursor: pointer;
`;

const OwnerIcon = styled.img`
  margin-right: 3px;
  width: 12px;
`;

const Link = styled.a`
  ${resetAnchor}
  color: ${StyleConst.twitterBlue};
  font-size: 0.66rem;
  vertical-align: 1px;
`;


export default OwnerLink;
