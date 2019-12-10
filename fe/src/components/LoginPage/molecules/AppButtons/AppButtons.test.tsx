import { shallow } from 'enzyme';
import * as React from 'react';

import AppButtons, {AppButtonsProps, List, MuterButton, BlockerButton} from '../AppButtons';
import Carousel, { CarouselInfo } from '../../auganisms/Carousel';

import { storeFactory, commonInitialState, adapter } from '../../../../modules/testUtils';
import LoginConst from '../../LoginConst';
adapter();

describe('アプリ切り替えボタンのテスト項目',() => {
  const store = storeFactory(commonInitialState);
  const wrapper = shallow(<AppButtons store={store} />).dive().dive();

  const StyledList = wrapper.find(List);
  const StyledMuterButton = wrapper.find(MuterButton);
  const StyledBlockerButton = wrapper.find(BlockerButton);


  test('エラー無く必要なコンポーネントが描画されている',()=>{
    expect(StyledList.length).toBe(1);
    expect(StyledMuterButton.length).toBe(1);
    expect(StyledBlockerButton.length).toBe(1);
  });

  test('ボタンを押すとステートが切り替わる',()=>{
    StyledBlockerButton.simulate('click');
    const afterProps :any = shallow(<AppButtons store={store}/>).dive().props();
    expect(afterProps.appName).toEqual(LoginConst.APPNAME_BLOCKER);
  });

  test('ボタンを押すとステートが切り替わる',()=>{
    StyledMuterButton.simulate('click');
    const afterProps :any = shallow(<AppButtons store={store}/>).dive().props();
    expect(afterProps.appName).toEqual(LoginConst.APPNAME_MUTER);
  });

});
