import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';
import StyleConst from '../../styles/define';
import arrow_down from '../../../../img/arrow_down.svg';

const ReadMore = () => (
  <Container >
    <Message>何のためのツール？</Message>
    <Arrow />
  </Container>
);

const Container = styled.div`
  background-color: ${StyleConst.muterGreen};
  text-align: center;
  ${media.pc`
    height: ${StyleConst.pcHeaderHeight};
    padding: 20px;
  `}
`;
const Message = styled.div`
  color: ${StyleConst.basicWhite};
  font-size: .875rem;
  ${media.pc`
    font-size: 1.5rem;
  `}
`;
const Arrow = styled.div`
    background: url(${arrow_down}) center / contain no-repeat;
    height: 7px;
    margin-top: 5px;

    ${media.pc`
      height: 15px;
      margin-top: 15px;
    `}
`;

export default ReadMore;
