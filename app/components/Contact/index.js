/**
*
* Contact
*
*/

import React from 'react';
import styled from 'styled-components';

import Image from '../Image';
import mail from '../../images/mail.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';

const ImageWrapper = styled.div`
width: 75px;
height: 75px;
margin:20px;
padding: -2px;
background-color:#2F8BFF;
:hover{
opacity: 0.5;
}

`;
const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;


`;
const A = styled.a`
width: inherit;
height: inherit;
`;

class Contact extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  mailClicked() {
    const email = 'mliljenberg@gmail.com';
    const subject = 'From Your Website';
    const emailBody = 'Hi';
    document.location = `mailto:${email}?subject=${subject}&body=${emailBody}`;
  }


  render() {
    return (
      <Wrapper>
        <ImageWrapper onClick={this.mailClicked} >
          <Image src={mail} alt="Pic here" />
        </ImageWrapper>
        <ImageWrapper >
          <A href="https://www.linkedin.com/in/marcus-liljenberg-91852b8b/">
            <Image src={linkedin} alt="Pic here" />
          </A>
        </ImageWrapper>
        <ImageWrapper >
          <A href="https://github.com/mliljenberg">
            <Image src={github} alt="Pic here" />
          </A>
        </ImageWrapper>
      </Wrapper>
    );
  }
}


export default Contact;
