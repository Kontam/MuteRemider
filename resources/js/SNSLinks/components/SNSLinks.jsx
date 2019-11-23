import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { mediaQ } from '../../commonModules/media.ts';
import TwitterLinkButton from './TwitterLinkButton';
import LineLinkButton from './LineLinkButton';
import FacebookLinkButton from './FacebookLinkButton';

const SNSLinks = ({ logEndPoint }) => (
  <Container>
    <TwitterLinkButton
      logEndPoint={logEndPoint}
    />
    <LineLinkButton
      logEndPoint={logEndPoint}
    />
    <FacebookLinkButton
      logEndPoint={logEndPoint}
    />
  </Container>
);

SNSLinks.propTypes = {
  logEndPoint: PropTypes.string,
};

SNSLinks.defaultProps = {
  logEndPoint: '',
};

export default SNSLinks;

const Container = styled.div`
    margin-top: 50px;
    ${mediaQ.pc}{
      margin-top: 130px;
    }
`;
