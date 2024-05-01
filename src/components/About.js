import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  render () {
    return (
      <div>
        <h1>About</h1>
        <h2>This is about page for our dummy swiggy type app</h2>
        <UserClass name={"Prince (Class)"} location={"Gurugram Class"}></UserClass>
      </div>
    );
  }
}


export default About;