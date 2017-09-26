import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as genericHelpers from '../helpers/genericHelpers' 

const mapStateToProps = (store) => {
  return {
    username: store.user.name,
    userRoles: store.user.roles,
  }
};

class ProfilePage extends Component {

  render(){
    const { username } = this.props;
    return (
      <div>
        <h1> Welcome: {username} </h1>
      </div>   
    )

  }
}

export default connect(mapStateToProps)(ProfilePage)