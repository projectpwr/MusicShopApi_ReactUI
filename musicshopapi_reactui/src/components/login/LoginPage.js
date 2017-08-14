import React, { Component } from 'react';
import styled from 'styled-components';
import Label from '../common/Label';

 
const PaddingDiv = styled.div`
  padding:30px;
`;

const RowDiv = styled.div`
  margin: 10px;
`;

const Input = styled.input`
  border-radius:8px;
  border solid 1px #ccc;
  padding:10px;
`;

class LoginPage extends Component {
  constructor(){
      super();
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
          <Input name="password" />
        </RowDiv>
      </form>
    );
  }
}

export default LoginPage;