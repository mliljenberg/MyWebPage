/**
*
* Lägg till varje kompetens med deras logga bakom och när man trycker på en av dem
 * så visas det en text om hur jag har fått kompetensen och var den har använts
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import Image from '../Image';

// TODO:hur skickar man in/kommer åt props på denna? //background-color: ${this.props.selected ? 'black' : '#006600'};
const ImageWrapper = styled.div`
opacity: ${(props) => props.selected ? '0.7' : '1'};
width: 100px;
height: 100px;
margin:20px;
:hover{
opacity: 0.7;
cursor: pointer;
}
`;

const SkillWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;


`;
const TextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: ${(props) => props.selected ? 'auto' : '0'};
transition:flex 2s ease ;
flex-wrap: wrap;

`;
const Text = styled.div`
text-align: left;
margin: 0;
`;

class Competencies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.list[0].header,
      text: props.list[0].text,
      expand: false,
    };
    this.imageClicked = this.imageClicked.bind(this);
    this.getHeight = this.getHeight.bind(this);
  }
  getHeight() {
    if (this.state.selected !== '') {
      return 'auto';
    }
    return '0';
  }
  imageClicked(item) {
    // TODO: set text increase width of text etc...
    if (this.state.selected !== item.header) {
      this.setState({ selected: item.header, text: item.text, expand: true });
    } else {
      this.setState({ selected: '', text: '', expand: false });
    }
  }
  render() {
    const style = { height: this.getHeight() };
    const list = this.props.list.map((obj) =>
      (<ImageWrapper key={obj.header} onClick={() => this.imageClicked(obj)} value={obj} selected={this.state.selected === obj.header}>
        <Image src={obj.src} alt="Pic here" />
      </ImageWrapper>)
    );
    return (
      <Wrapper id="competencies">
        <div></div>
        <SkillWrapper>
          {list}
        </SkillWrapper>
        <TextWrapper style={style}>
          <h3>{this.state.selected}</h3>
          <Text dangerouslySetInnerHTML={{ __html: this.state.text }}></Text>
        </TextWrapper>
      </Wrapper>
    );
  }
}

Competencies.propTypes = {
  list: PropTypes.arrayOf(React.PropTypes.shape({
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    proficency: PropTypes.string.isRequired,
    src: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
  })),
};

export default Competencies;
