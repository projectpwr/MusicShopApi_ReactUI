import React, { Component } from 'react';


const clickMe = () =>{
  console.log("clicked!")
    //store.dispatch({type: "updateUser", payload: "HELLO"});
}

class HomePage extends Component {

  render() {
    return (
        <div>
          <div>
            <h2>Welcome to Music Shop Api..</h2>
          </div>
          <p onClick={clickMe}>
            THIS IS now in its own home container component!
          </p>
          <p>OUr user state is: {this.props.user}</p>
        </div> 
    );
  }
}


export default HomePage;






