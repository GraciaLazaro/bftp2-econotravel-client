import React, {useState} from "react";
import "../Styles/HeaderStyle.css";
import logo from "../Assets/econotravel-logo.png";
import Form from "./Form";
import {Link} from "react-router-dom";

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
                           <Link to="/">Home</Link>
                       </li>
                       <li className="link"><Link to="/AboutUs">About Us</Link></li>
                       <li className="link"><Link to="/Enquires">Enquires</Link></li>
                       <li className="link" onClick={props.onButtonClicked}>Add Experience</li>
                   </ul>
              </nav>
          </div>

      </header>
    );
}

export default Header