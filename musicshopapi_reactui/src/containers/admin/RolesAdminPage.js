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
  }
};



class RolesAdminPage extends Component {
  constructor(props){
    super(props);
    this.getRoles = this.getRoles.bind(this);
  }
  getRoles(){
    this.props.dispatch( RolesActions.getRoles(this.props.token) );
  }

  render(){
    const { userRoles, allRoles } = this.props;
    
    genericHelpers.authenticateUserIsAdmin(userRoles);
    


      return (
        <section>
          <h1>Roles Admin</h1>
          <div> 
            <button onClick={this.getRoles}>Get All Roles</button>
          </div> 
          <div> 
            <RolesDataTable roles={ allRoles } /> 
           </div>
        </section>
      )


 
  }
}

export default connect(mapStateToProps)(RolesAdminPage)