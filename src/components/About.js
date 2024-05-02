import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {

  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  
  render () {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is about page for our dummy swiggy type app</h2>
        <UserClass />
      </div>
    );
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
}


export default About;