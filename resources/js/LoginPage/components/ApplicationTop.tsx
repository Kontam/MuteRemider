import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router-dom';

import { LoginPageState } from '../reducers';
import { setAppName } from '../Actions';

import PageHeader from './PageHeader';
import LoginSection from './LoginSection';
import ReadMore from './ReadMore';
import Carousel from './Carousel';
import SNSAdSection from './SNSAdSection';
import PageFooter from './PageFooter';

interface LoginRouterParams {
  appName: string,
}

interface AppicationTopProps {
  basePath :string;
  match: match<LoginRouterParams>;
  setAppName: Function;
}

const ApplicationTop = ({ basePath, match, setAppName }: AppicationTopProps) :JSX.Element => {
  console.log(match);

  useEffect(() :void => {
    setAppName(match.params.appName);
  }, []);

  return (
    <>
      <PageHeader />
      <LoginSection
        basePath={basePath}
      />
      <ReadMore />
      <Carousel />
      <SNSAdSection />
      <PageFooter />
    </>
  );
};

export default connect(
  (state :LoginPageState) :LoginPageState => ({
    appName: state.appName,
  }),
  {
    setAppName,
  }
)(ApplicationTop);
