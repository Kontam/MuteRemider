import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import { setBasePath } from '../../actions';
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
      <Container>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/MuteReminder" />} />
          <Route path="/:appName" component={ApplicationTop} />
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default connect(
  () => ({}),
  { setBasePath }
)(LoginPage);

const Container = styled.div`
    overflow-x: hidden;
`;
