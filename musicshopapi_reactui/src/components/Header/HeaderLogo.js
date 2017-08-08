import React, { Component } from 'react';
import logo from '../../logo.svg'; 


var styles =  {
  animation: 'App-logo-spin infinite 20s linear',
  height: '80px',
  paddingTop: '10px'
};

class HeaderLogo extends Component{

  render() {
    return (
      <img src={logo} style={styles} alt="logo" />
    );
  };
}


export default HeaderLogo;
