import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as RolesActions from '../actions/rolesActions'

const mapStateToProps = (store) => {
  return {
    loggedIn: store.login.loggedIn,
    token: store.login.token,
    roles: store.roles.roles,
  }
};


class BasketPage extends Component {
    constructor(props){
    super(props);
    this.getRoles = this.getRoles.bind(this);
  }
  getRoles(){
    this.props.dispatch( RolesActions.getRoles(this.props.token) );
  }

  render(){
    const { loggedIn, token, roles } = this.props;
    var basketContent;
    if(loggedIn){
      basketContent = 'This is your shopping basket';
    }else{
      basketContent = 'Login to see your shopping basket';
    } 

    return (
      <div>
        <h3>{basketContent}</h3>
        <div>{ loggedIn ? <p>Here is your token {token}</p> : null }</div>
        <div> <button onClick={this.getRoles}>Get some roles dude</button></div>

      </div>
    );
  }
}

export default connect(mapStateToProps)(BasketPage)