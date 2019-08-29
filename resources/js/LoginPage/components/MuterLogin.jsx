import React, { Component } from 'react';
import PageHeader from './PageHeader';

import LoginConst from '../LoginConst';

class MuterLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: LoginConst.APPNAME_MUTER,
    };
  }

  render() {
    return (
      <PageHeader />
    );
  }
}

export default MuterLogin;
