import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (store) => {
  return {
    loggedIn: store.login.loggedIn,
    token: store.login.token,
    error: store.login.error,
    username: store.user.name,
    userRoles: store.user.roles,
  }
};


class HomePage extends Component {

  render() {
    return (
        <div>
          <div>
            <h2>Welcome to Music Shop Api..</h2>
          </div>
          <p>Try searching for products via the product link in the top right menu</p>
          <p>You may also wish to log in</p>
        </div> 
    );
  }
}


export default connect(mapStateToProps)(HomePage)






