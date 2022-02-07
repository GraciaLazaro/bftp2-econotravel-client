import React, {useState} from "react";
import "../Styles/HeaderStyle.css";
import logo from "../Assets/econotravel-logo.png";
import Form from "./Form";

function Header(props){

    return(
      <header className="header">
          <div className="container">
              <div className="logo-container">
                  <img className="logo" src={logo}/>
              </div>
              <nav>
                   <ul className="main-nav">
                       <li className="link link-active">
                           <a>Home</a>
                       </li>
                       <li className="link"><a>About Us</a></li>
                       <li className="link"><a>Enquire</a></li>
                       <li className="link" onClick={props.onButtonClicked}>Add Experience</li>
                   </ul>
              </nav>
          </div>

      </header>
    );
}

export default Header