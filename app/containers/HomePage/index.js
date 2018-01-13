/* eslint-disable react/no-did-mount-set-state */
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
import TextSection from '../../components/TextSection';
import CvPart from '../../components/CvPart';
import Competencies from '../../components/Competencies';
import * as info from './TextConst';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const ImageWrapper = styled.div`
    max-width:100%;
    //width: 100vw;
    height: 91vh;
    overflow: hidden;
    margin:0;
    scroll:disabled;
    align-self: center;
    align-items: center;
`;

const StandardWrapper = styled.div`
    padding-top: 20px;
    width: 60vw;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    color: #95989A;
`;
const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
const CvWrapper = styled.div`
    width: 70vw;
    color: #95989A;
    display: flex;
    flex-wrap: wrap;
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
  constructor(props) {
    super(props);
    this.state = {
      comp: this.comp,
      exp: this.exp,
      me: this.me,
      cont: this.cont,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    this.setState({ comp: this.comp,
      me: this.me,
      cont: this.cont,
      exp: this.exp });
  }
  render() {
    return (
      <div ref={(input) => { this.me = input; }}>
        <Header comp={this.state.comp} me={this.state.me} exp={this.state.exp} cont={this.state.cont} />
        <Wrapper>
          <ImageWrapper>
            <Image src={bigpic} alt="Bild här" />
          </ImageWrapper>
          <StandardWrapper>
            <TextSection header={info.ME.header} text={info.ME.text} />
          </StandardWrapper>
          <CvWrapper>
            <h2 ref={(input) => { this.exp = input; }}>Experience</h2>
            {info.CV_LIST.map((x) =>
              <CvPart key={x.header} src={x.src} orient={x.orient} header={x.header} text={x.text} />
          )}
            <Line />
          </CvWrapper>
          <StandardWrapper>
            <h2 ref={(input) => { this.comp = input; }}>Competencies</h2>
            <Competencies
              list={info.COMP_LIST}
            />
            <Line />
          </StandardWrapper>
          <StandardWrapper>
            <h2 ref={(input) => { this.cont = input; }} >Contact</h2>
            <Contact />
          </StandardWrapper>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
