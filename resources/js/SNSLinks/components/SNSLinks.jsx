import React from 'react';
import PropTypes from 'prop-types';

import TwitterLinkButton from './TwitterLinkButton';
import LineLinkButton from './LineLinkButton';
import FacebookLinkButton from './FacebookLinkButton';

const SNSLinks = ({ logEndPoint }) => (
  <div className="snsAdSection__SNSList">
    <TwitterLinkButton
      logEndPoint={logEndPoint}
    />
    <LineLinkButton
      logEndPoint={logEndPoint}
    />
    <FacebookLinkButton
      logEndPoint={logEndPoint}
    />
  </div>
);

SNSLinks.propTypes = {
  logEndPoint: PropTypes.string,
};

SNSLinks.defaultProps = {
  logEndPoint: '',
};

export default SNSLinks;
