import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router-dom';

import { LoginPageState } from '../../../reducers';
import { setAppName } from '../../../actions';

import PageHeader from './auganisms/PageHeader';
import LoginSection from './auganisms/LoginSection';
import ReadMore from './molecules/ReadMore';
import Carousel from './auganisms/Carousel';
import SwitchSection from './auganisms/SwitchSection';
import SNSAdSection from './auganisms/SNSAdSection';
import PageFooter from './auganisms/PageFooter';

interface LoginRouterParams {
  appName: string,
}

interface AppicationTopProps {
  basePath :string;
  // match: match<LoginRouterParams>;
  setAppName: Function;
}

const ApplicationTop = ({ basePath, setAppName }: AppicationTopProps) :JSX.Element => {
  useEffect(() :void => {
    setAppName("MuteReminder");
  }, []);

  return (
    <>
      <PageHeader />
      <LoginSection
        basePath={basePath}
      />
      <ReadMore />
      <Carousel />
      {/* <SwitchSection /> */}
      <SNSAdSection />
      <PageFooter />
    </>
  );
};

export default connect(
  (state :LoginPageState) => ({
    basePath: state.basePath,
  }),
  {
    setAppName,
  }
)(ApplicationTop);
