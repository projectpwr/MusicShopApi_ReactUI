import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import * as genericHelpers from '../helpers/genericHelpers' 




const mapStateToProps = (store) => {
  return {
    userRoles: store.user.roles,
  }
};



class AdminPage extends Component {
  constructor(props){
    super(props);

  }






  render(){
    const { userRoles } = this.props;
    
    if( genericHelpers.userHasAdminRole(userRoles) ){
      return (
        <h1> Welcome to the Admin page </h1>
      )
    }else{
      return <p>Access Denied</p>
    }
  }
}

export default connect(mapStateToProps)(AdminPage)