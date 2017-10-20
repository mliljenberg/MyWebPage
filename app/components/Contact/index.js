/**
*
* Contact
*
*/

import React from 'react';
import styled from 'styled-components';

import Image from '../Image';

const ImageWrapper = styled.div`
width: 100px;
height: 100px;
margin:20px;
background-color: #333333;
:hover{
opacity: 0.5;
}

`;
const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`;

class Contact extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  mailClicked() {
    // TODO: Add open mail thingy

  }
  linkedInClicked() {
    // TODO: Redirect to my likedIn
  }
  gitHubClicked() {
    // TODO: Redirect to my likedIn
  }

  render() {
    return (
      <Wrapper>
        <ImageWrapper onClick={this.mailClicked} >
          <Image src={''} alt="Pic here" />
        </ImageWrapper>
        <ImageWrapper onClick={this.linkedInClicked} >
          <Image src={''} alt="Pic here" />
        </ImageWrapper>
        <ImageWrapper onClick={this.gitHubClicked} >
          <Image src={''} alt="Pic here" />
        </ImageWrapper>
      </Wrapper>
    );
  }
}


export default Contact;
