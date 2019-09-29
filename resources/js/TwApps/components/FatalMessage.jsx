import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FatalMessage = ({ errMessage, baseUrl }) => (
  <div className="fatal-message-container">
    <div className="fatal-message-content">
      <h2 className="fatal-message">{errMessage}</h2>
      <a href={baseUrl} className="fatalLink">Topへ戻る</a>
    </div>
  </div>
);

FatalMessage.propTypes = {
  errMessage: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    errMessage: state.errMessage,
    baseUrl: state.baseUrl,
  }),
)(FatalMessage);
