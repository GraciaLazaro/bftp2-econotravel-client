import React, {useState} from "react";
import "../Styles/HeaderStyle.css";
import logo from "../Assets/econotravel-logo.png";

import {NavLink as Link} from "react-router-dom"

function Header(props){

    return(
      <header className="header">
          <div className="container">
              <div className="logo-container">
                  <img className="logo" src={logo}/>
              </div>
              <nav>
                   <ul className="main-nav">
                       <li><Link activeclassname="active" className="link" to="/">Inicio</Link></li>
                       <li><Link activeclassname="active" className="link" to="/AboutUs">Quiénes somos</Link></li>
                       <li><Link activeclassname="active" className="link" to="/Enquires">Contacta</Link></li>
                       <li className="link" onClick={props.onButtonClicked}>Añadir Experiencia</li>
                   </ul>
              </nav>
          </div>

      </header>
    );
}

export default Header