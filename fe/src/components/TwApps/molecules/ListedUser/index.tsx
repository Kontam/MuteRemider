import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { mediaQ } from '../../../../modules/styles/media';
import UnmuteButton from '../../atoms/UnmuteButton';
import ShowTweetsButton from '../../atoms/ShowTweetsButton';
import MutedTweetList from '../../MuteReminder/components/MutedTweetList';
import TwAppsConst from '../../TwAppsConst';
import { requestUnmuteUser, MutedUser } from '../../../../redux/reducers/resource/mutedUsers';
import { MyThemeProps } from '../../../../modules/styles/theme';
import { MutedUserInfo } from '../../../../../bff/controllers/muterController';
import { RootState } from '../../../../redux/reducers';

const Item = styled.li`
  list-style: none;
  width: 100%;
`;

const createTopContainer = (isMuted) => styled.div`
  align-items: center;
  background: ${isMuted
  ? ({ theme } : MyThemeProps<{}>) => theme.colors.basicWhite
  : ({ theme } : MyThemeProps<{}>) => theme.colors.unmutedUserBg
  };
  display: flex;
  height: 95px;
  transition: .5s;
  ${mediaQ.pc} {
    height: 190px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
`;

const Icon = styled.img`
  border-radius: 50%;
  height: 70px;
  margin: 0 40px 0 10px;
  width: 70px;
  ${mediaQ.pc} {
    height: 140px;
    width: 140px;
    margin: 0 70px 0 40px;
  }
`;

const UserNameContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  max-width: 70%;
  padding-top: 8px;
  ${mediaQ.pc} {
    width: 420px;
  }
`;

const UserName = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  ${mediaQ.pc} {
    font-size: 1.5rem;
    margin-bottom: 17px;
    line-height: 1.9rem;
    padding-right: 30px;
  }
`;

type ListedUserProps = {
  mutedUserInfo: MutedUser
  index: number
  isUserMuted: boolean
};

const stateSelector = (state: RootState) => state.basePath;

const ListedUser = ({ mutedUserInfo, index, isUserMuted } :ListedUserProps) => {
  const [showTweets, setShowTweets] = useState(TwAppsConst.SHOW_TWEETS_INITIAL);
  const [listHeight, setListHeight] = useState(0);
  const baseUrl = useSelector(stateSelector);
  const mutedUser = mutedUserInfo.muted_user;
  const dispatch = useDispatch();

  const userClassName = `user-${mutedUser.screen_name}`;
  const listClassName = `list-${mutedUser.screen_name}`;
  const itemClassName = `item-${mutedUser.screen_name}`;
  let itemElems;
  let userElems;

  useEffect(() => {
    itemElems = document.getElementsByClassName(itemClassName);
    userElems = document.getElementsByClassName(userClassName);
  },[])

  const handleUnmuteClicked = () => {
    const {
      index, mutedUserInfo, baseUrl, isUserMuted
    } = this.props;
    const accessPath = isUserMuted ?
      TwAppsConst.UNMUTE_USER_ENDPOINT : TwAppsConst.MUTE_USER_ENDPOINT;

    // 対象ユーザーがミュートか非ミュートかでエンドポイントが変わる
    const endpoint = `${baseUrl}${accessPath}/${mutedUserInfo.muted_user.screen_name}`;
    requestUnmuteUser(endpoint, mutedUserInfo.muted_user.screen_name, index, dispatch);
  }

  /**
   * ユーザーのツイート数とツイートリストの高さをステートに保存する
   */
  const handleShowTweetsClicked = () => {
    const { showTweets } = this.state;
    if (showTweets === TwAppsConst.SHOW_TWEETS_OPENED) {
      this.setState({ showTweets: TwAppsConst.SHOW_TWEETS_CLOSED });
      // 固定ヘッダで隠れる分を考慮してスクロールする
      window.scrollTo(0, this.userElems[0].offsetTop - 50);
      return;
    }
    // アニメーション用にツイートリストの高さを計算する
    // ListのComponentDidMountでは画像ロード前の高さになってしまうためズレる
    let listHeight = 0;
    for (let i = 0; i < this.itemElems.length; i += 1) {
      // border-bottomの分1pxを加算する
      listHeight += this.itemElems[i].clientHeight + 1;
    }
    this.setState({ listHeight });
    this.setState({ showTweets: TwAppsConst.SHOW_TWEETS_OPENED });
  }
    const TopContainer = createTopContainer(isUserMuted);

    return (
      <Item>
        <TopContainer>
          <Icon src={mutedUser.profile_image_url_https} alt="icon" />
          <UserNameContainer>
            <UserName>{mutedUser.user_name}</UserName>
            <UserName>
              @
              {mutedUser.screen_name}
            </UserName>
          </UserNameContainer>
          <UnmuteButton
            isForMobile={false}
            muted={isUserMuted}
            onClick={() => { this.handleUnmuteClicked(); }}
          />
        </TopContainer>
        {/* <MutedTweetList
          showTweets={showTweets}
          listClassName={this.listClassName}
          itemClassName={this.itemClassName}
          listHeight={listHeight}
          mutedTweets={mutedUserInfo.tweets_info}
        /> */}
        <BottomContainer>
          <UnmuteButton
            muted={isUserMuted}
            onClick={() => { this.handleUnmuteClicked(); }}
          />
          <ShowTweetsButton
            showTweets={showTweets}
            onClick={() => { this.handleShowTweetsClicked(); }}
          />
        </BottomContainer>
      </Item>
    );
}

export default ListedUser;
