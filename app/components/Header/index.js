/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';

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

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Wrapper>
          <Option>
            About
          </Option>
          <Option>
            CV
          </Option>
          <Option>
            Contact
          </Option>
        </Wrapper>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
