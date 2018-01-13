/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.div`
background: black;
opacity: 0.7;
height: 70px;
color:#dddddd;
text-align: center;
padding-top:25px;
margin-top: 40px;

`;

function Footer() {
  return (
    <Wrapper>
      <FormattedMessage {...messages.header} />
    </Wrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
