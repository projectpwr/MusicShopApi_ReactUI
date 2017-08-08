import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const LeftFloatUL = styled.ul`
  float:right;
  margin-right:20px;
  > li { float:left;}
`;

const MenuItem = styled.li`
  display:inline;
  padding:20px 60px;
  text-decoration: none;
`;

const MenuItemLink = styled(Link)`
  text-size:16px;
  font-weight:normal;
  text-decoration: none;
  color:white;
`;

class Menu extends Component{
  constructor(){
    super();
    this.state = {
      home: 'Home',
      strange: 'Strange Page',
      random: 'Random Page'
    };
  }

  render() {
    return (
      <LeftFloatUL>
        <MenuItem><MenuItemLink to="/">{this.state.home}</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink to="/Strange">{this.state.strange}</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink to="/Random">{this.state.random}</MenuItemLink></MenuItem>
      </LeftFloatUL>
    );
  };
}


export default Menu;
