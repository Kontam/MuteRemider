import React from 'react';

import SNSLinks from '../../SNSLinks/components/SNSLinks';

const SNSAdSection = () => (
  <div className="snsAdSection">
    <h2 className="snsAdSection__head">気に入ってくださいましたら</h2>
    <p className="snsAdSection__paragraph snsAdSection__paragraph--first">{'「あの人は今？チェッカー」は\r\n個人で開発されました'}</p>
    <p className="snsAdSection__paragraph snsAdSection__paragraph--second">{'たくさんのユーザーに利用されることが\r\n開発者の励みになります'}</p>
    <p className="snsAdSection__paragraph snsAdSection__paragraph--third">{'あなたのお友達にもこのアプリを\r\nぜひご紹介ください'}</p>
    <SNSLinks />
  </div>
);

export default SNSAdSection;
