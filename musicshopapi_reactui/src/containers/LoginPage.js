import React, { Component } from 'react';
import styled from 'styled-components';
import Label from '../components/common/Label';
import { connect } from 'react-redux'
import * as LoginActions from '../actions/loginActions'
 
const PaddingDiv = styled.div`
  padding:30px;
`;

const RowDiv = styled.div`
  width:320px;
  margin-left:auto;
  margin-right:auto;
  margin-top:10px;
  text-align:right;
`;

const Input = styled.input`
  border-radius:8px;
  border solid 1px #ccc;
  padding:10px;
`;

const SubmitBtn = styled.button`
  border-radius:8px;
  border solid 1px #ccc;
  background-color:#eee;
  padding:10px;
  font-weight:bold;
  &:hover { background-color:#ccc;  cursor:pointer; }
`;





 
const mapStateToProps = (store) => {
  return {
    loggedIn: store.login.loggedIn,
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: () => dispatch( LoginActions.setLoggedInOrOut(true) ),
    setLoggedOut: () => dispatch( LoginActions.setLoggedInOrOut(false) )
  }
}


class LoginPage extends Component {
  componentWillMount(){
    console.log(this.props);
    //this.props.dispatch( LoginActions.setLoggedInOrOut(true) );
    //this.props.setLoggedIn();
  }

  setLoggedIn() {
    this.props.dispatch( LoginActions.setLoggedInOrOut(true) )
  }

  setLoggedOut() {
    this.props.dispatch( LoginActions.setLoggedInOrOut(false) )
  }

  render(){
    const { loggedIn } = this.props;

    return (
      <form>
        <PaddingDiv />
        <h1>Login</h1>
        <h2>Are you logged in?: {loggedIn ? 'YES' : 'NO' }</h2>
        <RowDiv>
          <Label>Username</Label>
          <Input name="username" />
        </RowDiv>
        <RowDiv>
          <Label>Password</Label>
          <Input name="password" type="password" />
        </RowDiv>
        <RowDiv>
          { loggedIn ? <SubmitBtn type="button" onClick={this.setLoggedOut.bind(this)}>LogOut</SubmitBtn> : null }
          { loggedIn ? null : <SubmitBtn type="button" onClick={this.setLoggedIn.bind(this)}>Login</SubmitBtn> }
        </RowDiv>        
      </form>
    )
  }
}

export default connect(mapStateToProps)(LoginPage)