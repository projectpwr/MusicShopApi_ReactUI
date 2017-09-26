import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as genericHelpers from '../helpers/genericHelpers' 
import AdminHomePage from './admin/AdminHomePage'

const AdminLink = styled(Link)`
  text-decoration:none;
  font-weight:bold;

`;

const AdminLinkItem = styled.li`
  display:inline;
  padding-top:20px;
  padding-bottom:20px;
`;



const mapStateToProps = (store) => {
  return {
    userRoles: store.user.roles,
  }
};



class AdminPage extends Component {



  render(){
    const { userRoles } = this.props;
    
    if( !genericHelpers.userHasAdminRole(userRoles) ){
      return <p>Access Denied</p>
    }

    return (
      <div>
        <h1> Welcome to the Admin page </h1>
        <ul>
          <AdminLinkItem><AdminLink to="/RolesAdmin">Roles Admin </AdminLink></AdminLinkItem>
        </ul>
        <AdminHomePage />
      </div>   

    )

  }
}

export default connect(mapStateToProps)(AdminPage)