/**
*
* CvPart
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from '../Image';

const ImageWrapper = styled.div`
width: 250px;
height: 250px;
align-self: center;
`;
const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
color: #95989A;
margin: 20px;
padding: 20px;
`;
const Header = styled.h3`
color: #95989A;
`;
const Text = styled.div`
text-align: center;
margin: 0;
`;

const TextWrapper = styled.div`
width: 50%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
`;


function CvPart(props) {
  if (props.orient) {
    return (
      <Wrapper>
        <ImageWrapper>
          <Image src={props.src} alt="Pic here" />
        </ImageWrapper>
        <TextWrapper>
          <Header>{props.header}</Header>
          <Text>{props.text}</Text>
        </TextWrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <TextWrapper>
        <Header>{props.header}</Header>
        <Text>{props.text}</Text>
      </TextWrapper>
      <ImageWrapper>
        <Image src={props.src} alt="Pic here" />
      </ImageWrapper>
    </Wrapper>
  );
}

CvPart.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  orient: PropTypes.bool.isRequired,
};

export default CvPart;
