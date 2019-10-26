import React, { useState } from 'react';
import { connect } from 'react-redux';

import { LoginPageState } from '../reducers';

import PageHeader from './PageHeader';
import LoginSection from './LoginSection';
import ReadMore from './ReadMore';
import Carousel from './Carousel';
import SNSAdSection from './SNSAdSection';
import PageFooter from './PageFooter';

interface AppicationTopProps {
  basePath :string;
}

const ApplicationTop = (props) :JSX.Element => {
  const [appName, setAppName] = useState("");
  const { basePath } :AppicationTopProps = props;
  console.log(props);

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
)(ApplicationTop);
