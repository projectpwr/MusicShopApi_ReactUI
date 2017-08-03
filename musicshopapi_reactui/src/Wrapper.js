import React, { Component } from 'react';
import Helmet from 'react-helmet';
import HeaderLogo from './components/Header/HeaderLogo';
import Menu from './components/Menu/Menu';
import styled from 'styled-components';


const Wrap = styled.body`
margin:0;
 padding: 0;
 font-family: sans-serif;
 width:1200px;
 margin-left:auto;
 margin-right:auto;
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


class Wrapper extends React.Component {
   render() {
     return (
     <Wrap>
       <Header>
          <HeaderLogo />
          <Menu />
       </Header>
       <Content>
         { this.props.children }
       </Content>
       <Footer>This is the footer</Footer>
     </Wrap>
     )
   }
 }


export default Wrapper;
