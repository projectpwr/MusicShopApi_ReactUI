import React, { Component } from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (store) => {
  return {
    loggedIn: store.login.loggedIn,
    token: store.login.token,
  }
};


class BasketPage extends Component {

  render(){
    const { loggedIn } = this.props;
    var basketContent;
    if(loggedIn){
      basketContent = 'This is your shopping basket';
    }else{
      basketContent = 'Login to see your shopping basket';
    } 

    return (
      <div>
        <h3>{basketContent}</h3>
      </div>
    );
  }
}

export default connect(mapStateToProps)(BasketPage)