import React, { Component } from 'react';
import MenuItem from './styled-components/menu-item';

class Menu extends React.Component{
  constructor(){
    super();
    this.state = {
      hello: 'hello everyone'
    };
  }


  render() {

    var divStyle = {
      height: '100'
    };

    return (
      <div style={divStyle}>
        <MenuItem>{this.state.hello}</MenuItem>
        <MenuItem>item B</MenuItem>
        <MenuItem>item C</MenuItem>
      </div>
    );
  };
}


export default Menu;
