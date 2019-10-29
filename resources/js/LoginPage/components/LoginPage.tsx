import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import LoginConst from '../LoginConst';
import { setBasePath } from '../actions';
import { LoginPageState } from '../reducers';
import ApplicationTop from './ApplicationTop';

interface LoginPageProps {
  basePath :string;
  setBasePath: Function;
}

const LoginPage = ({ basePath, setBasePath } :LoginPageProps) :JSX.Element  => {
  useEffect(() :void => {
    setBasePath(basePath);
  },[]);

  return (
    <HashRouter>
      <div className="loginPage">
        <Route exact path="/" render={() => <Redirect to="/MuteReminder" />} />
        <Route path="/:appName" component={ApplicationTop} />
      </div>
    </HashRouter>
  );
}

export default connect(
  () => ({}),
  { setBasePath }
  )(LoginPage);
