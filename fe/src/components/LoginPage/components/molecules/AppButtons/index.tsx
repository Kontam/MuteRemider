import * as React from 'react';
import styled,{ css } from 'styled-components';
import { connect } from 'react-redux';
import Link from 'next/link';

import { setAppName } from '../../../../../actions';
import { LoginPageState } from '../../../../../reducers';
import StyleConst, { resetAnchor } from '../../../styles/define';
import LoginConst from '../../../LoginConst';

export type AppButtonsProps = {
  appName :string,
  setAppName :Function,
  store?: any,
};

const Button = (props :{ className :string, children :string, onClick: React.MouseEventHandler, linkTo :string }) => {
  const { className, children, linkTo, onClick } = props;
  return (
    <Link
      href={`${linkTo}`}
    >
      {children}
    </Link>
  );
};

const commonButton = styled(Button)`
  ${resetAnchor}
  width: 250px;
  height: 50px;
  color: ${StyleConst.basicWhite};
  font-weight: ${StyleConst.fwBold};
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 5px;
`;
export const MuterButton = styled(commonButton)<any>`
  background: ${StyleConst.muterLightGreen};
  opacity: ${(props) => props.appName !== LoginConst.APPNAME_MUTER ? 1 : .5};
`;
export const BlockerButton = styled(commonButton)<any>`
  background: ${StyleConst.blockerBlue};
  opacity: ${(props) => props.appName === LoginConst.APPNAME_MUTER ? 1 : .5};
  margin-top: 80px;
`;

export const List = styled.ul`
  margin-top: 80px;
`;

const AppButtons = ({ appName, setAppName } :AppButtonsProps) => {

  return (
    <List>
      <li>
        <MuterButton
          appName={appName}
          linkTo={`/${LoginConst.APPNAME_MUTER}`}
          onClick={() => { setAppName(LoginConst.APPNAME_MUTER); }}
        >ミュートリマインダー</MuterButton>
      </li>
      <li>
        <BlockerButton
          appName={appName}
          linkTo={`/${LoginConst.APPNAME_BLOCKER}`}
          onClick={() => { setAppName(LoginConst.APPNAME_BLOCKER); }}
        >
          ブロックリマインダー
        </BlockerButton>
      </li>
    </List>
  );
};

export default connect(
  (state :LoginPageState) => ({
    appName: state.appName,
  }),
  { setAppName },
)(AppButtons);
