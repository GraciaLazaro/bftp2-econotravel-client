import React from "react";
import "../Styles/App.css";
import "../Styles/Form.css";
import modernista from "../Assets/Modernista.png";

function Form(){

    return(
       <div className="hover-layer fixed-position">
           <div className="form-bg">
               <div className="page-title">
                   <h1 className="h1">Edit Experience</h1>
                   <div className="align-right">
                       <button className="btn btn-icon">
                           <i className="far fa-times-circle gray"></i>
                       </button>
                   </div>
               </div>
                <form action="">
                    <section>
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
                            <div className="input-group">
                                <label htmlFor="">Experience Name</label>
                                <input type="text" id="" className="form-title"></input>
                            </div>

                            <div className="input-group">
                                <label htmlFor="">Experience Description</label>
                                <textarea name="" id="" cols="30" rows="5" className="form-description"></textarea>
                            </div>
                            <div className="input-group-row">
                                <div>
                                    <label htmlFor="">Price</label>
                                    <input type="text" className="form-price"></input>
                                </div>
                                <div>
                                    <label htmlFor="">Duration</label>
                                    <select id="" className="form-duration"></select>
                                </div>
                                <div>
                                    <label htmlFor="">Accesibility</label>
                                    <select name="" id="" className="form-acces"></select>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="">Accesibility Details</label>
                                <textarea name="" id="" cols="30" rows="2" className="form-acces-detail"></textarea>
                            </div>
                         </div>
                    </section>
                    <section className="form-buttons">
                        <button type="button" className="btn btn-primary btn-modal" data-toggle="" data-target="">Save Changes</button>
                    </section>
                </form>
           </div>
       </div>
);
}

export default Form