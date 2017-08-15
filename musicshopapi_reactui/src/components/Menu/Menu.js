import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import basketLogo from '../../assets/basket2.png';

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
`;

const LoginLink = styled(MenuItemLink)`
  border: solid 1px #ccc;
  border-radius:8px;
  padding:10px;
  &:hover { background-color:#eee; color:black; cursor:hand; }
`;

const BasketHolder = styled.div`
  margin-right:40px;
  &:hover { color:black; cursor:hand; }
`;

class Menu extends Component{
  constructor(){
    super();
    this.state = this.getInitialState();
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
        <MenuItem>
          <MenuItemLink to="/Basket">
            <BasketHolder>
              Basket{ this.props.basketItems }
            </BasketHolder>
          </MenuItemLink>
        </MenuItem>
        <MenuItem>{ this.props.loggedIn ? <LoginLink to="/Logout">Logout</LoginLink> : <LoginLink to="/Login">Login</LoginLink> }</MenuItem>
      </LeftFloatUL>
    );
  };
}


export default Menu;
