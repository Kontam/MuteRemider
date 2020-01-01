import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { setIsMuterMenuOpened } from '../../../../redux/reducers/page/isMuterMenuOpened';
import { resetButton } from '../../../../modules/styles/theme';
import { mediaQ } from '../../../../modules/styles/media';
import { RootState } from '../../../../redux/reducers';
const cross_icon = require('../../../../../img/cross_icon.svg');
const hambargar_icon = require('../../../../../img/hambargar_icon.svg');

export const Container = styled.div`
  display: none;
  ${mediaQ.pc} {
    display: block;
    text-align: right;
  }
`;

export const Icon = styled.img`
  ${mediaQ.pc} {
    font-size: 20px;
    height: 40px;
    width: 40px;
  }
`;

export const Button = styled.button`
  ${mediaQ.pc} {
    cursor: pointer;
    font-size: 20px;
    ${resetButton}
  }
`;

const isOpenedSelector = (state: RootState):boolean => state.isMuterMenuOpened;

/**
 * メニュー開閉状態をトグルするボタン
 * 状態に応じてアイコン画像を変える
 * @param {boolean} isOpened 開いてるときはtrue
 */
const ToggleMuterMenuButton = () => {
  const isOpened = useSelector(isOpenedSelector);
  const dispatch = useDispatch();
  const imgUrl = isOpened ? `${cross_icon}` : `${hambargar_icon}`;
  const handleToggleClicked = () => {
    if (isOpened) {
      dispatch(setIsMuterMenuOpened(false));
      return;
    }
      dispatch(setIsMuterMenuOpened(true));
  }
  return (
    <Container>
      <Button
        onClick={() => { handleToggleClicked(); }}
      >
        <Icon className="menu-toggle-icon" src={imgUrl} alt="close"/>
      </Button>
    </Container>
  );
}



export default ToggleMuterMenuButton;
