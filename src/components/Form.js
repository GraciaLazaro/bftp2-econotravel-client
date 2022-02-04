import React from "react";
import "../Styles/App.css";
import "../Styles/ModalStyle.css";
import modernista from "../Assets/Modernista.png";

function Form({experience}){

    return(
        <form action="">
            <div className="form-aside">
                <figure className="form-img">
                    <img className="image" src={modernista} alt="photo"/>
                    <div className="hover-layer">
                        <button className="btn btn-icon">
                            <i className="far fa-edit"/>
                            <span>edit</span>
                        </button>
                    </div>
                </figure>
                <div className="form-tags">

                </div>
            </div>
            <div className="form-main">
                <label htmlFor="">Experience Name</label>
                <input type="text" id="" className="form-title"></input>
                <label htmlFor="">Experiecne Description</label>
                <textarea name="" id="" cols="30" rows="10" className="form-description"></textarea>
                <label htmlFor="">Price</label>
                <input type="text" className="form-price"></input>
                <label htmlFor="">Duration</label>
                <select id="" className="form-duration"></select>
                <label htmlFor="">Accesibility</label>
                <select name="" id="" className="form-acces"></select>
                <label htmlFor="">Accesibility Details</label>
                <textarea name="" id="" cols="30" rows="5" className="form-acces-detail"></textarea>
            </div>
            <div className="form-buttons">
                <button type="button" className="btn btn-primary btn-modal" data-toggle="" data-target="">Save Changes</button>
            </div>
        </form>
    );
}

export default Form