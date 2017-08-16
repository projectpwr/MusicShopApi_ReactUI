import React, { Component } from 'react'
import Helmet from 'react-helmet'
import HeaderLogo from './components/header/HeaderLogo'
import Menu from './components/menu/Menu'
import styled from 'styled-components'
/*
import { connect } from 'react-redux'
import * as LoginActions from './actions/loginActions'
*/
const Wrap = styled.div`
  margin:0; 
  padding: 0;
  font-family: sans-serif;
  width:1200px;
  margin-left:auto;
  margin-right:auto;
  font-size:14px;
  color:#000;
`;

const Header = styled.header`
  height: 100px;
  width:100%;
  background-color: #222;
  color:#fff;
`;

const Content = styled.section`
  min-height:300px;
  background-color:#fff;
  text-align:center;
`;

const Footer = styled.footer`
  height: 30px;
  background-color: #222;
  color:#fff;
  padding:25px;
`;

 /*
const mapStateToProps = (store) => {
  return {
    loggedIn: store.login.loggedIn,
  }
};
*/
/*
const mapDispatchToProps = (dispatch) => {
  return {
    toggleLoggedInOut: "hello",
    //toggleLoggedInOut: (newValue) => dispatch( LoginActions.setLoggedInOrOut(newValue) ),
    setLoggedIn: () => dispatch( LoginActions.setLoggedInOrOut(true) )
  }
}*/

class Wrapper extends Component {
  /*componentWillMount(){
    console.log(this.props);
    this.props.dispatch( LoginActions.setLoggedInOrOut(true) );
    //this.props.setLoggedIn();
  }*/


  render(){
    return(
      <Wrap>
       <Helmet title="Music Shop Api React UI" />
       <Header>
          <HeaderLogo />
          <Menu loggedIn={this.props.loggedIn} />
       </Header>
       <Content>
         { this.props.children }
       </Content>
       <Footer>This is the footer</Footer>
       </Wrap>
    )
  }
}




export default Wrapper
//export default connect(mapStateToProps)(Wrapper)
