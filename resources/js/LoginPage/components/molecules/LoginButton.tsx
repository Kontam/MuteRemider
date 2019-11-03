import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import LoginState, { LoginPageState } from '../../reducers';

import LoginConst from '../../LoginConst';
import StyleConst, { resetAnchor } from '../../styles/define';
import media from '../../../commonModules/media';

interface StateByProps {
  basePath: string,
}

const LoginButton = ({ basePath } :StateByProps):JSX.Element => {
  return (
    <LoginLink href={`${basePath}${LoginConst.LOGIN_SLAG}`}>
      ログイン
      <TwitterIcon src="img/twitter_white_icon.svg" alt="twitter" />
    </LoginLink>
  );
};

const LoginLink = styled.a`
  ${resetAnchor}
  align-items: center;
  background-color: ${StyleConst.twitterBlue};
  border-radius: 5px;
  box-shadow: 0 5px ${StyleConst.twitterShadowBlue};
  color: ${StyleConst.basicWhite};
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  height: 55px;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  transition: .2s;
  width: 280px;
  &:active {
      box-shadow: 0 0 ${StyleConst.twitterShadowBlue};
      transform: translateY(5px);
  }
  ${media.pc`
    margin: 60px auto 0;
  `}
`;

const TwitterIcon = styled.img`
    margin-left: 15px;
    width: 40px;
`;

export default connect(
  (state :LoginPageState) :StateByProps => ({ basePath: state.basePath, }),
  {})(LoginButton);
