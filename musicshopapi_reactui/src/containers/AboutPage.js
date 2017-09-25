import React, { Component } from 'react';


class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h4>This is the Music Shop Api React UI front end.</h4>
        <p>Use the Login button to the top left to access your account.</p>
        <p>Admin accounts have special privileges</p>
        <p>Standard accounts can only assemble and place orders</p>
        <h4><a href="https://github.com/projectpwr/MusicShopApi_ReactUI" target="_blank">Visit the React UI repo</a></h4>
        <h4><a href="https://github.com/projectpwr/MusicShopApi" target="_blank">Visit the Music Shop Api repo</a></h4>
      </div>  
    );
  }
}

export default AboutPage;