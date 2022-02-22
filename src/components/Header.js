import React, {useEffect, useState} from "react";
import "../Styles/HeaderStyle.css";
import logo from "../Assets/econotravel-logo.png";
import SearchBar from "./SearchBar";
import {NavLink as Link} from "react-router-dom"

function Header(props, {experiences}){


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
                       <li><Link activeclassname="active" className="link" to="/Enquires">Contacta y Reserva</Link></li>
                       {props.loggedIn && <li className="link" onClick={props.onButtonClicked}>Añadir Experiencia</li> }
                       {props.loggedIn && <li className="link" onClick={() => props.onLoginChange(false)}>Logout</li>}
                   </ul>
              </nav>
              <SearchBar experiences={experiences} />
          </div>

      </header>
    );
}

export default Header