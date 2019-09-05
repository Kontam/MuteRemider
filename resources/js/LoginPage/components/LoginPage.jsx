import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginConst from '../LoginConst';
import PageHeader from './PageHeader';
import LoginSection from './LoginSection';
import ReadMore from './ReadMore';
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
    const { basePath } = this.props;
    return (
      <div className="loginPage">
        <PageHeader />
        <LoginSection
          basePath={basePath}
        />
        <ReadMore />
        <div className="carouselContainer">
          <Carousel />
        </div>
        <SNSAdSection />
        <PageFooter />
      </div>
    );
  }
}

LoginPage.propTypes = {
  basePath: PropTypes.string.isRequired,
};

export default LoginPage;
