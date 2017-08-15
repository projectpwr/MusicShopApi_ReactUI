import React, { Component } from 'react';
import styled from 'styled-components';
import Label from '../components/common/Label';

 
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

class LoginPage extends Component {
  constructor(){
      super();
  }

loginAction = () => {
   this.state.loggedIn = true;
}

/*
  login = () => {
    this.state.loggedIn = true;
  }

  logout = () => {
    this.state.loggedIn = false;
  }  
*/
  render(){
    return (
      <form>
        <PaddingDiv />
        <h1>Login</h1>
        <RowDiv>
          <Label>Username</Label>
          <Input name="username" />
        </RowDiv>
        <RowDiv>
          <Label>Password</Label>
          <Input name="password" type="password" />
        </RowDiv>
        <RowDiv>
          <SubmitBtn onClick={this.loginAction}>Login</SubmitBtn>
        </RowDiv>        
      </form>
    );
  }
}

export default LoginPage;