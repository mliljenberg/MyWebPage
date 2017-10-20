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
import bigpic from '../../images/MePic.jpg';
import Image from '../../components/Image';
import Header from '../../components/Header';
import TextSection from '../../components/TextSection';
import CvPart from '../../components/CvPart';
import Competencies from '../../components/Competencies';
import * as info from './TextConst';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const ImageWrapper = styled.div`
width:100%;
height: 91vh;
overflow: hidden;
margin:0;
scroll:disabled;
`;

const StandardWrapper = styled.div`
padding-top: 20px;
width: 60vw;
align-items: center;
display: flex;
flex-direction: column;
`;
const Wrapper = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`;
const CvWrapper = styled.div`
width: 70vw;
color: #95989A;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2em;
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

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          <ImageWrapper>
            <Image src={bigpic} alt="Bild här" />
          </ImageWrapper>
          <StandardWrapper>
            <TextSection header={info.ME.header} text={info.ME.text} />
          </StandardWrapper>
          <CvWrapper>
            <h2>Experience</h2>
            {info.CV_LIST.map((x) =>
              <CvPart key={x.header} src={x.src} orient={x.orient} header={x.header} text={x.text} />
          )}
            <Line />
          </CvWrapper>
          <StandardWrapper>
            <Competencies
              list={info.COMP_LIST}
            />
            <Line />
          </StandardWrapper>
          <StandardWrapper>
            <Contact />
          </StandardWrapper>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
