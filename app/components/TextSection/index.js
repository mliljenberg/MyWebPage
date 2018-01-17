/**
*
* TextSection
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h2`
color: #95989A;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
color: #95989A;
align-items: center;

`;

const Text = styled.div`
width: 90%;
text-align: left;
margin-top: 1em;

`;

const Line = styled.hr`
    //border-bottom: 2px  #95989A;
    width: 80%;
    border-color: #e5e5e5;
    border-left: 0px;
    border-right: 0px;
    border-style: solid;
    margin-top: 4em;
`;


function TextSection(props) {
  return (
    <Wrapper>
      <H1>{props.header}</H1>
      <Text>{props.text}</Text>
      <Line />
    </Wrapper>
  );
}

TextSection.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};


export default TextSection;
