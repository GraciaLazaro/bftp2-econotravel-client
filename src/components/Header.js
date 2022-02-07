import React, {useState} from "react";
import "../Styles/HeaderStyle.css";
import logo from "../Assets/econotravel-logo.png";
import Form from "./Form";

function Header(){
    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const addExperience = (experience) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(experience)
            }
        ).then(_ => setRequiresUpdate(true))

    }
    const [showForm, setShowForm] = useState(false);
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
                       <li className="link" onClick={()=>setShowForm(true)}>Add Experience</li>
                   </ul>
              </nav>
          </div>

          { showForm && <Form onSubmit={e => addExperience(e)} onClose={()=>setShowForm(false)}/>}
      </header>
    );
}

export default Header