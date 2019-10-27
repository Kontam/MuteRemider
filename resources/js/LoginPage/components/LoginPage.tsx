import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route } from 'react-router-dom';

import LoginConst from '../LoginConst';
import ApplicationTop from './ApplicationTop';

interface LoginPageProps {
  basePath :string;
}

const LoginPage = ({ basePath } :LoginPageProps) :JSX.Element  => (
    <HashRouter>
      <div className="loginPage">
        <Route exact path="/" component={ApplicationTop} />
        <Route path="/:appName" component={ApplicationTop} />
      </div>
    </HashRouter>
);


LoginPage.propTypes = {
  basePath: PropTypes.string.isRequired,
};

export default LoginPage;
