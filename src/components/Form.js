import React, {useState} from "react";
import "../Styles/App.css";
import "../Styles/Form.css";
import modernista from "../Assets/Modernista.png";

function Form(props) {

    const [experienceData, setExperienceData] = useState({
        name: '',
        price: ''
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setExperienceData({
            ...experienceData,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        props.onSubmit(experienceData)

    }

    return(
       <div className="hover-layer fixed-position">
           <div className="form-bg">
               <div className="page-title">
                   <h1 className="h1">Edit Experience</h1>
                   <div className="align-right">
                       <button className="btn btn-icon">
                           <i className="far fa-times-circle gray"/>
                       </button>
                   </div>
               </div>
                <form onSubmit={enviarDatos} action="">
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
                                    <input onChange={handleInputChange} type="text" id="" name="name"
                                           className="form-title"/>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="">Experience Description</label>
                                    <textarea name="" id="" cols="30" rows="5" className="form-description"/>
                                </div>
                                <div className="input-group-row">
                                    <div>
                                        <label htmlFor="">Price</label>
                                        <input onChange={handleInputChange} type="text" name="price"
                                               className="form-price"/>
                                    </div>
                                    <div>
                                        <label htmlFor="">Duration</label>
                                        <select id="" className="form-duration"/>
                                    </div>
                                    <div>
                                        <label htmlFor="">Accessibility</label>
                                        <select name="" id="" className="form-acces"/>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label htmlFor="">Accessibility Details</label>
                                    <textarea name="" id="" cols="30" rows="2" className="form-acces-detail"/>
                                </div>
                            </div>
                        </section>
                        <section className="form-buttons">
                            <button type="submit" className="btn btn-primary btn-modal"
                                    data-toggle="" data-target="">Save Changes
                            </button>
                        </section>
                    </form>
                </div>
            </div>
        );

    }


export default Form