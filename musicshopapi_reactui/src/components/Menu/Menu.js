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
  text-decoration: none;
  padding-top:20px;
  padding-bottom:20px;
`;

const PaddedMenuItem = styled(MenuItem)`
  margin-right:60px;
`;

const MenuItemLink = styled(Link)`
  text-size:16px;
  font-weight:normal;
  text-decoration: none;
  color:white;
  &:hover { cursor:pointer; color:#61dafb; }  
`;

const LoginLink = styled(MenuItemLink)`
  border: solid 1px #ccc;
  border-radius:8px;
  padding:10px;
  &:hover { cursor:hand; color:black; background-color:#ccc;}
`;


class Menu extends Component{
  constructor(){
    super();
    this.state = this.getInitialState();
    console.log(this);
  }

  componentWillMount(){
    console.log(this.state);
  }

  getInitialState = () =>{
    return {
      home: 'Home',
      about: 'About',
      product: 'Products'
    };
  }


  render() {
    return (
      <LeftFloatUL>
        <PaddedMenuItem><MenuItemLink to="/">{this.state.home}</MenuItemLink></PaddedMenuItem>
        <PaddedMenuItem><MenuItemLink to="/About">{this.state.about}</MenuItemLink></PaddedMenuItem>
        <PaddedMenuItem><MenuItemLink to="/Products">{this.state.product}</MenuItemLink></PaddedMenuItem>
        <PaddedMenuItem>
          <MenuItemLink to="/Basket">
            Basket{ this.props.basketItems }
          </MenuItemLink>
        </PaddedMenuItem>
        <MenuItem>{ this.props.loggedIn ? <LoginLink to="/Logout">Logout</LoginLink> : <LoginLink to="/Login">Login</LoginLink> }</MenuItem>
      </LeftFloatUL>
    );
  };
}


export default Menu;
