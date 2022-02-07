import React from "react";
import { useState } from 'react';
import "../Styles/App.css";
import "../Styles/CardStyle.css";
import modernista from "../Assets/Modernista.png";
import App from '../App.js';

function Card({experience}){

    const [isShown, setIsShown] = useState(false);

    return(
            <div className="card-container"
                 onMouseEnter={() => setIsShown(true)}
                 onMouseLeave={() => setIsShown(false)}>
                <figure>
                    <img className="image" src={modernista} alt="photo"/>

                    {isShown && (
                    <div className="hover-layer">
                    <button className="btn btn-icon">
                        <i className="far fa-eye"/>
                        <span>view more</span>
                    </button>
                        <button className="btn btn-icon">
                            <i className="far fa-edit"/>
                            <span>Edit</span>
                        </button>
                        <button className="btn btn-icon">
                            <i  className="far fa-trash-alt"/>
                            <span>delete</span>
                        </button>
                    </div>
                    )}

                </figure>
                <div className="card-description">
                   <h2 className="card-title"> {experience.name}</h2>
                    <p className="card-price">{experience.price + '€'}</p>
                    <p className="card-price-detail">por persona</p>
                    <p>{experience.duration}</p>
                </div>
                <div className="card-buttons">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Book Now</button>
                </div>

            </div>
    );
}

export default Card