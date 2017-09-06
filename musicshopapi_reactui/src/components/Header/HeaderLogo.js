import React, { Component } from 'react';
import logo from '../../logo.svg'; 
import styled from 'styled-components'


const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  padding-top: 10px;
  display:inline-block;
  vertical-align: middle
`;

class HeaderLogo extends Component{

  render() {
    return (
      <Logo src={logo} alt="logo" />
    );
  };
}


export default HeaderLogo;
