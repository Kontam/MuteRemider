import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FatalMessage = ({ errMessage }) => (
  <div className="fatal-message-container">
    <h2 className="fatal-message">
      {errMessage}
    </h2>
  </div>
);

FatalMessage.propTypes = {
  errMessage: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    errMessage: state.errMessage,
  }),
)(FatalMessage);
