import React, { Component } from 'react';
import styled from 'styled-components';
import Label from '../components/common/Label';
import { connect } from 'react-redux'
import * as LoginActions from '../actions/loginActions'
 
const PaddingDiv = styled.div`
  padding:0px 30px;
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
    token: store.login.token,
    error: store.login.error
  }
};

/*
const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: () => dispatch( LoginActions.setLoggedInOrOut(true) ),
    setLoggedOut: () => dispatch( LoginActions.setLoggedInOrOut(false) )
  }
}
*/

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.tryLogin = this.tryLogin.bind(this);
  }

  componentWillMount(){

  }
  componentWillUnmount(){
    this.props.dispatch( LoginActions.clearLoginErrorMessage() )    
  }


  /** need to try rework this to use redux forms as has to be a cleaner way */
  tryLogin(e) {
    e.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      console.log(this.refs[field]);
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);

    this.props.dispatch( LoginActions.getUserToken(formData) )
  }




  render(){
    const { loggedIn, token, error } = this.props;

    return (
      <form onSubmit={ this.tryLogin } >
        <PaddingDiv />
        <h1>Login</h1>
        { error !== undefined ? <p> {error} </p> : null }
        <h2>Are you logged in?: {loggedIn ? 'YES' : 'NO' }</h2>
        {loggedIn ? <h3> Your login token is: { token }</h3> : null }
        <RowDiv>
          <Label>Username</Label>
          <input ref="Email" name="username" defaultValue="admin@musicshop.com" />
        </RowDiv>
        <RowDiv>
          <Label>Password</Label>
          <input ref="Password" name="password" type="password" defaultValue="Password9!" />
        </RowDiv>
        <RowDiv>

          { loggedIn ? null : <SubmitBtn type="submit" >Login</SubmitBtn> }
        </RowDiv>        
      </form>
    )
  }
}

export default connect(mapStateToProps)(LoginPage)