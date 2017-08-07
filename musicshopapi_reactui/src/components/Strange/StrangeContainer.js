import Menu from '../Menu/Menu';
import React, { Component } from 'react';


class StrangeContainer extends Component {
  render() {
    return (
        <div>
            <Menu />
          <h3>Why would you just redisplay a hidden menu?</h3>
        </div> 
        
    );
  }
}

export default StrangeContainer;