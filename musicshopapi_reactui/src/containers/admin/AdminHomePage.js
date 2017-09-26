import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'


const PaddingDiv = styled.div`
padding:0px 30px;
`;

 
const mapStateToProps = (store) => {
  return {
    loggedIn: store.login.loggedIn,
    token: store.login.token,
    error: store.login.error,
    username: store.user.name,
    userRoles: store.user.roles,
  }
};



class AdminHomePage extends Component {


  render(){
    const { token, username, userRoles } = this.props;
 
      return(
        <div>
          <PaddingDiv />
          <div>
            <h3>Hello there:{ username }</h3>
            <h4>You have the following roles:</h4>
            {userRoles != null ? <ul>{ userRoles.map((element, index) => {return (<li key={index}>{element}</li>) } ) }</ul> : null }  
            <h3>Your login token is: { token }</h3>      
            <p>Use the Logout button on the top right to log out</p>
          </div>
        </div>
      )
  }
}

export default connect(mapStateToProps)(AdminHomePage)