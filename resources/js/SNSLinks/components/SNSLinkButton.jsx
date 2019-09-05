import React, { Component } from 'react';
import PropTypes from 'prop-types';

import sendLogData from '../../commonModules/sendLogData';
import SNSLinksConst from '../SNSLinksConst';

class SNSLinkButton extends Component {
  constructor(props) {
    super(props);
    this.width = 800;
    this.height = 470;
    const { origin, pathname } = window.location;
    this.shareURL = origin + pathname;
    this.href = '';
    this.text = '';
    this.className = '';
  }

  makeLogParams() {
    const logParams = {};
    logParams[SNSLinksConst.LOG_FILENAME_KEY] = SNSLinksConst.LOG_SNS_FILENAME;
    logParams[SNSLinksConst.LOG_SNS_KEY_NAME] = this.sns_name;
    logParams[SNSLinksConst.LOG_SNS_KEY_SHARE_URL] = this.shareURL;

    return logParams;
  }

  handleClick() {
    const { logEndPoint } = this.props;
    window.open(
      encodeURI(decodeURI(this.href)),
      'sns-window',
      `width=${this.width},`
      + `height=${this.height},`
      + 'personalbar=0,'
      + 'toolbar=0,'
      + 'scrollbars=1,'
      + 'sizable=1',
    );
    // ログ送信先があればログ送信
    if (logEndPoint) {
      sendLogData(logEndPoint, this.makeLogParams());
    }
  }

  render() {
    return (
      <button
        className={this.className}
        type="button"
        onClick={() => { this.handleClick(); }}
      >
        {this.text}
      </button>
    );
  }
}

SNSLinkButton.propTypes = {
  logEndPoint: PropTypes.string,
};

SNSLinkButton.defaultProps = {
  logEndPoint: '',
};

export default SNSLinkButton;
