import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Menu from './components/menu-component';
//import MenuItem from './components/menu/mi';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Music Shop Api" />
        <div className="App-header">
          <div><Menu /></div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Music Shop Api..</h2>
        </div>
        <p className="App-intro">
          One day we may have some more components...<br />
          and you might even be able to log in
        </p>
      </div>
    );
  }
}

export default App;
