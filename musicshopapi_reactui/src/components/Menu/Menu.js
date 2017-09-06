import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as LogoutActions from '../../actions/logoutActions'

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

const mapStateToProps = (store) => {
  return {
    loggedIn: store.login.loggedIn,
    username: store.user.user_name
  }
};



class Menu extends Component{

  componentWillMount(){
    
  }


  render() {
    const { loggedIn, basketItems } = this.props;

    return (
      <LeftFloatUL>
        <PaddedMenuItem><MenuItemLink to="/">Home</MenuItemLink></PaddedMenuItem>
        <PaddedMenuItem><MenuItemLink to="/About">About</MenuItemLink></PaddedMenuItem>
        <PaddedMenuItem><MenuItemLink to="/Products">Products</MenuItemLink></PaddedMenuItem>
        <PaddedMenuItem>
          <MenuItemLink to="/Basket">
            Basket{ basketItems }
          </MenuItemLink>
        </PaddedMenuItem>
        <MenuItem>
          { loggedIn ? <LoginLink onClick={ LogoutActions.logout() } >Logout</LoginLink> : <LoginLink to="/Login" >Login</LoginLink> }
        </MenuItem>
      </LeftFloatUL>
    );
  };
}


export default connect(mapStateToProps)(Menu)
