import React from 'react';
import styled,{ css } from 'styled-components';

import media from '../../styles/media';
import StyleConst from '../../styles/define';
import LoginConst from '../../LoginConst';
import LoginButton from '../molecules/LoginButton';
import OwnerLink from '../molecules/OwnerLink';


const LoginForm = () => (
  <>
    <OwnerLink />
    <LoginContainer>
      <LoginButton />
      <LoginDescription>{LoginConst.DESCRIPTION_LOGIN_TWITTER}</LoginDescription>
    </LoginContainer>
  </>
);

const LoginContainer = styled.div`
  background-color: ${StyleConst.muterGreen};
  color: ${StyleConst.basicWhite};
  padding: 70px 0 45px;
  width: 100%;

  ${media.pc`
    display: flex;
    flex-direction: column-reverse;
    height: 340px;
    justify-content: flex-end;
    padding: 48px;
    max-width: 500px;
  `}
`;

const LoginDescription = styled.p`
  color: ${StyleConst.basicWhite};
  font-size: 1.25rem;
  font-weight: ${StyleConst.fwBold};
  line-height: 2.5;
  margin-top: 50px;
  text-align: center;
  white-space: pre;
  ${media.pc`
    font-size: 1.5rem;
    margin-top: 0;
  `}
  ${media.tablet`
    font-size: 1.25rem;
    min-width: 340px;
  `}
`;

export default LoginForm;
