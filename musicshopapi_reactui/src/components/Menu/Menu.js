import React, { Component } from 'react';
import styled from 'styled-components';

const LeftFloatUL = styled.ul`
  float:right;
  margin-right:20px;
  > li { float:left;}
`;

const MenuItem = styled.li`
  display:inline;
  padding:20px 60px;
  border:solid 1px red;
`;

class Menu extends React.Component{
  constructor(){
    super();
    this.state = {
      hello: 'hello everyone'
    };
  }

  render() {
    return (
      <LeftFloatUL>
        <MenuItem>{this.state.hello}</MenuItem>
        <MenuItem>item B</MenuItem>
        <MenuItem>item C</MenuItem>
      </LeftFloatUL>
    );
  };
}


export default Menu;
