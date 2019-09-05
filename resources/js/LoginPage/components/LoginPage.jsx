import React, { Component } from 'react';

import LoginConst from '../LoginConst';
import PageHeader from './PageHeader';
import LoginContainer from './LoginContainer';
import Carousel from './Carousel';
import SNSAdSection from './SNSAdSection';
import PageFooter from './PageFooter';

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
        <SNSAdSection />
        <PageFooter />
      </div>
    );
  }
}

export default LoginPage;
