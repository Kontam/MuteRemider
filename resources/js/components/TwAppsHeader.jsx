import React, { Component } from 'react';

import TwAppsConst from '../TwAppsConst';

class TwAppsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: TwAppsConst.HEADER_MENU_INITIAL,
    };
  }

  render() {
    return (
      <header className="twapps-header"></header>
    );
  }
}

export default TwAppsHeader;
