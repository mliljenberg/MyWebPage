/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import bigpic from '../../images/bigpic.jpg';
import Image from '../../components/Image';
import Header from '../../components/Header';

const ImageWrapper = styled.div`
width:100%;
height: 91vh;
overflow: hidden;
margin:0;
scroll:disabled;
`;


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <ImageWrapper>
          <Image src={bigpic} alt="Bild här" />
        </ImageWrapper>
        <h1>Testar en text här</h1>


      </div>
    );
  }
}
