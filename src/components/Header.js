import React from "react";
import logo from "../Assets/logo_transparente.png";

function Header(){
    return(
      <div className="header">
          <img className="logo" src={logo}/>
           <ul ClassName="botones-header">
               <li><a>Home</a></li>
               <li><a>About Us</a></li>
               <li><a>Enquire</a></li>
           </ul>
      </div>
    );
}

export default Header