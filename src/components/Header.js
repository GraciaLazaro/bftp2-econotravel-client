import React from "react";
import "../Styles/HeaderStyle.css";
import logo from "../Assets/econotravel-logo.png";
import {Route, Routes} from "react-router-dom";

function Header(props){

    return(
      <header className="header">
          <div className="container">
              <div className="logo-container">
                  <img className="logo" src={logo}/>
              </div>
              <nav>
                  <Routes className="main-nav">
                       <Route className="link link-active" path="*">Home</Route>
                       <Route className="link" path="/about-us">About Us</Route>
                       <Route className="link" path="/enquires">Enquires</Route>
                       <Route className="link" onClick={props.onButtonClicked}>Add Experience</Route>
                   </Routes>
              </nav>
          </div>

      </header>
    );
}

export default Header