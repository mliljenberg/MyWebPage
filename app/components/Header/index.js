/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import jump from 'jump.js';

const Wrapper = styled.div`
position: fixed;
top:0;
width: 100%;
display: flex;
padding-top: 20px;
flex-direction: row;
justify-content: center;
flex-wrap: nowrap;
padding-left: 20px;
height: 60px;
background: white;
opacity: 0.9;

`;
const Option = styled.a`
margin: 0 20px 0 20px;
height:25px;
:hover {
border-bottom: solid;
border-color:#2098D1;
cursor: pointer;

}
`;


const smoothScroll = (oldPos, newPos) => {
  const pos = newPos - oldPos;
  jump(pos);
};

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.itemClicked = this.itemClicked.bind(this);
  }
  itemClicked(item) {
    smoothScroll(window.pageYOffset, item.offsetTop - 100);
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Option onClick={() => { this.itemClicked(this.props.me); }}>
            Me
          </Option>
          <Option onClick={() => { this.itemClicked(this.props.exp); }}>
            Experience
          </Option>
          <Option onClick={() => { this.itemClicked(this.props.comp); }}>
            Competencies
          </Option>
          <Option onClick={() => { this.itemClicked(this.props.cont); }}>
            Contact
          </Option>
        </Wrapper>
      </div>
    );
  }
}

Header.propTypes = {
  comp: PropTypes.object,
  me: PropTypes.object,
  exp: PropTypes.object,
  cont: PropTypes.object,

};

export default Header;
