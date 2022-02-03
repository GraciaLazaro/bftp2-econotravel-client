import React from "react";
import "../Styles/App.css";
import "../Styles/CardStyle.css";
import logo from "../Assets/econotravel-logo.png";
import modernista from "../Assets/Modernista.png";
function Card(){
    return(
            <div className="card-container">
                <figure>
                    <img className="image" src={modernista} alt="photo"/>
                    <div className="hover-layer">
                    <button className="btn btn-icon">
                        <i className="far fa-eye"></i>
                        <span>view more</span>
                    </button>
                        <button className="btn btn-icon">
                            <i className="far fa-edit"></i>
                            <span>edit</span>
                        </button>
                        <button className="btn btn-icon">
                            <i className="far fa-trash-alt"></i>
                            <span>delete</span>
                        </button>
                    </div>
                </figure>
                <div className="card-description">
                    <h2 className="card-title">Descubre la Barcelona Modernista de Noche</h2>
                    <p className="card-price">280€</p>
                    <p className="card-price-detail">por persona</p>
                </div>
                <div className="card-buttons">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Book Now</button>
                </div>

            </div>
    );
}

export default Card