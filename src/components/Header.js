import React from "react";
import "../Styles/HeaderStyle.css";
import logo from "../Assets/econotravel-logo.png";

function Header(){
    return(
      <div className="header">
          <div className="logo-container">
              <img className="logo" src={logo}/>
          </div>

           <ul ClassName="botones-header">
               <li><a>Home</a></li>
               <li><a>About Us</a></li>
               <li><a>Enquire</a></li>
           </ul>
      </div>
    );
}

export default Header