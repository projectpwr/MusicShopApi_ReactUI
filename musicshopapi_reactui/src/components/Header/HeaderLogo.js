import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg'; //not sure im a fan of reletive paths..perhaps there is a way to reference root src folder directly?


var styles =  {
  animation: 'App-logo-spin infinite 20s linear',
  height: '80px',
  'padding-top': '10px'
};

class HeaderLogo extends React.Component{

  render() {
    return (
      <img src={logo} style={styles} alt="logo" />
    );
  };
}


export default HeaderLogo;
