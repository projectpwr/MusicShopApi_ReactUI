import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductSearch from '../components/product/ProductSearch'

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
          <ProductSearch />
          <p>OUr user state is: {this.props.user}</p>
        </div> 
    );
  }
}


export default connect(mapStateToProps)(HomePage)






