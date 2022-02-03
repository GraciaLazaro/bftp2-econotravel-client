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
                <button><a href="/">Administrador</a></button>
                <div className="follow-us">
                    <p>Follow us</p>
                    <span class="mx-2"><i class="fab fa-facebook"></i></span>
                    <span className="mx-2"><i className="fab fa-youtube"></i></span>
                    <span class="mx-2"><i className="fab fa-instagram"></i></span>

                </div>
            </div>
        </div>
        </footer>

    );
}

export default Footer