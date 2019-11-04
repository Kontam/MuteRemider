import React from 'react';
import styled,{ css } from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setAppName } from '../../actions';
import { LoginPageState } from '../../reducers';
import media from '../../../commonModules/media';
import StyleConst, { resetAnchor } from '../../styles/define';
import LoginConst from '../../LoginConst';

interface PropsByState {
  appName :string;
}

interface PropsByDispath {
  setAppName :Function;
}

interface AppButtonsProps extends PropsByState, PropsByState{};

const AppButtons = ({ appName, setAppName } :AppButtonsProps) => {
  const List = styled.ul`
    margin-top: 80px;
  `;

  // const linkTo = appName === LoginConst.APPNAME_MUTER ?
  //   LoginConst.APPNAME_BLOCKER : LoginConst.APPNAME_MUTER;
  const Button = (props :{ className :string, children :string, onClick: Function, linkTo :string }) :JSX.Element => {
    const { className, children, linkTo, onClick } = props;
    return (
      <Link
        to={`${linkTo}`}
        className={className}
        type="button"
        onClick={onClick}
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
  `;
  const MuterButton = styled(commonButton)`
    background: ${StyleConst.muterLightGreen};
    opacity: ${appName !== LoginConst.APPNAME_MUTER ? 1 : .5};
  `;
  const BlockerButton = styled(commonButton)`
    background: ${StyleConst.blockerBlue};
    opacity: ${appName === LoginConst.APPNAME_MUTER ? 1 : .5};
    margin-top: 80px;
  `;

  return (
    <List>
      <li>
        <MuterButton
          linkTo={`/${LoginConst.APPNAME_MUTER}`}
          onClick={() => { setAppName(LoginConst.APPNAME_MUTER); }}
        >ミュートリマインダー</MuterButton>
      </li>
      <li>
        <BlockerButton
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
  (state :LoginPageState) :PropsByState => ({
    appName: state.appName,
  }),
  { setAppName },
)(AppButtons);
