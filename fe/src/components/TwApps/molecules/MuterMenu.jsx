import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import ToggleMuterMenuButton from '../MuteReminder/containers/ToggleMuterMenuButton';

const MuterMenu = ({ isMuterMenuOpened }) => (
  <div className={`muter-menu ${isMuterMenuOpened ? 'muter-menu-opened' : 'muter-menu-closed'}`}>
    {/* <ToggleMuterMenuButton /> */}
    <button type="button" className="tweets-count-button">
      <span className="tweets-count">3</span>
    </button>
  </div>
);

MuterMenu.propTypes = {
  isMuterMenuOpened: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    isMuterMenuOpened: state.isMuterMenuOpened,
  }),
)(MuterMenu);
