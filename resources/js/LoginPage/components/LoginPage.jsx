import React, { Component } from 'react';


import LoginConst from '../LoginConst';
import PageHeader from './PageHeader';
import LoginContainer from './LoginContainer';
import Carousel from './Carousel';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: LoginConst.APPNAME_MUTER,
    };
  }

  render() {
    return (
      <div className="loginPage">
        <PageHeader />
        <LoginContainer />
        <div className="carouselContainer">
          <Carousel />
        </div>
      </div>
    );
  }
}

export default LoginPage;
