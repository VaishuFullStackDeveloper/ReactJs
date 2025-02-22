
import React from "react";
import "./Header.css"
export default class Header extends React.Component{
  render(){
  
  return(
  <nav className="nav-bar">
    <div className="nav-links">
      <h1> Home</h1>
      <h1> About</h1>
      <h1> Project</h1>
      <h1> Contact</h1>
    </div>
  </nav>
  );
  }
};
