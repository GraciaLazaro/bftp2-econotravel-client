import React from "react";
import "../Styles/FooterStyle.css";

function Footer(){
    return(
        <footer className="footer">
        <div className="container">
            <div className="copyright">
                <p>EconoTravel 2022 © Todos los derechos resevados</p>
            </div>
            <div className="admin-icons">
                <button><a href="/">ADMINISTRATOR</a></button>
                <div className="follow-us">
                    <p>Follow us on</p>
                    <span class="mx-2"><i class="fab fa-facebook"/></span>
                    <span className="mx-2"><i className="fab fa-youtube"/></span>
                    <span class="mx-2"><i className="fab fa-instagram"/></span>

                </div>
            </div>
        </div>
        </footer>

    );
}

export default Footer