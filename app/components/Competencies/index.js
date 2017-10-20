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
background-color:black;
:hover{
opacity: 0.7;
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

`;
const TextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
transition:height 1s ease ;

`;

class Competencies extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      text: '',
      expand: false,
    };
    this.imageClicked = this.imageClicked.bind(this);
  }

  imageClicked(item) {
    console.log(item);
    // TODO: set text increase width of text etc...
    if (this.state.selected !== item.header) {
      this.setState({ selected: item.header, text: item.text, expand: true });
    } else {
      this.setState({ selected: '', text: '', expand: false });
    }
  }

  render() {
    const list = this.props.list.map((obj) =>
      (<ImageWrapper key={obj.header} onClick={() => this.imageClicked(obj)} value={obj} selected={this.state.selected === obj.header}>
        <Image src={obj.src} alt="Pic here" />
      </ImageWrapper>)
    );
    return (
      <Wrapper>
        <SkillWrapper>
          {list}
        </SkillWrapper>
        <TextWrapper>
          <h3>{this.state.selected}</h3>
          <div>{this.state.text}</div>
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
    src: PropTypes.object.isRequired,
  })),
};

export default Competencies;
