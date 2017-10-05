import React, { Component } from 'react';
//import styled from 'styled-components';
import { connect } from 'react-redux'
import * as genericHelpers from '../../helpers/genericHelpers' 
import * as RolesActions from '../../actions/rolesActions'
import RolesDataTable from '../../components/roles/RolesDataTable'


const mapStateToProps = (store) => {
  return {
    userRoles: store.user.roles,
    allRoles: store.roles.roles,
    rolesError: store.roles.error,
    token: store.login.token,
  }
};



class RolesAdminPage extends Component {
  constructor(props){
    super(props);
    this.getRoles = this.getRoles.bind(this);
  }
  getRoles(){
    this.props.dispatch( RolesActions.resetErrorMessage() );
    this.props.dispatch( RolesActions.getRoles(this.props.token) );
  }

  render(){
    const { userRoles, allRoles, rolesError } = this.props;
    console.log(rolesError);

    if( !genericHelpers.userHasAdminRole(userRoles) ){
      return <p>Access Denied</p>
    }

 
    return (
      <section>
        <h1>Roles Admin</h1>
        <div> 
          {allRoles === undefined || allRoles.length === 0 ? <button onClick={this.getRoles}>Get All Roles</button> : null }
        </div> 
        <div> 
          { rolesError !== undefined ? <p>{ rolesError.status } {rolesError.statusText}</p> : null }
          <RolesDataTable roles={ allRoles } /> 
        </div>
      </section>
    )
 
  }
}

export default connect(mapStateToProps)(RolesAdminPage)