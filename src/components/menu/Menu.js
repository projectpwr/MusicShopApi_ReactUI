import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as LogoutActions from '../../actions/logoutActions'
import * as genericHelpers from '../../helpers/genericHelpers'

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

const MenuItemNoTopPad = styled(MenuItem)`
  padding-top:10px;
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
  padding:10px 20px;
  &:hover { cursor:hand; color:black; background-color:#ccc;}
`;

const LogoutButton = styled.button`
  text-size:16px;
  font-weight:normal;
  text-decoration: none;
  color:white;
  border: solid 1px #ccc;
  border-radius:8px;
  padding:10px 20px;
  background-color:inherit;
  text-align: -webkit-match-parent;
  &:hover { cursor:hand; color:black; background-color:#ccc;}
`;

const mapStateToProps = (store) => {
  return {
    loggedIn: store.login.loggedIn,
    username: store.user.user_name,
    userRoles: store.user.roles,
  }
};



class Menu extends Component{
  constructor(props){
    super(props);
    this.tryLogout = this.tryLogout.bind(this);
  }

  

  tryLogout(){
    this.props.dispatch( LogoutActions.logout() );
  }


  render() {
    const { loggedIn, basketItems, userRoles } = this.props;
    
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
        { genericHelpers.userHasAdminRole(userRoles) ? <PaddedMenuItem><MenuItemLink to="/Admin">Admin</MenuItemLink></PaddedMenuItem> : null }
        { loggedIn ? null : <MenuItem><LoginLink to="/Login" >Login</LoginLink></MenuItem> }
        { loggedIn ? <MenuItemNoTopPad><LogoutButton onClick={ this.tryLogout } >Logout</LogoutButton></MenuItemNoTopPad> : null }
        
      </LeftFloatUL>
    );
  };
}


export default connect(mapStateToProps)(Menu)
