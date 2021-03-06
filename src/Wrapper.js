import React, { Component } from 'react'
import Helmet from 'react-helmet'
import HeaderLogo from './components/header/HeaderLogo'
import Menu from './components/menu/Menu'
import styled from 'styled-components'


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
  padding: 0px 20px;
`;

const Footer = styled.footer`
  height: 30px;
  background-color: #222;
  color:#fff;
  padding:25px;
`;

const HeaderTitle = styled.h2`
color:white;
display:inline-block;
vertical-align:middle;
padding-top:10px;
`



class Wrapper extends Component {
  render(){
    return(
      <Wrap>
       <Helmet title="Music Shop Api React UI" />
       <Header>
          <HeaderLogo />
          <HeaderTitle>Music Shop React UI</HeaderTitle>
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
