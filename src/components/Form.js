import React, {useState} from "react";
import "../Styles/App.css";
import "../Styles/Form.css";
import modernista from "../Assets/Modernista.png";

function Form(props){

    const [experienceData, setExperienceData] = useState({
        name: '',
        price: ''
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setExperienceData({
            ...experienceData,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
         props.onSubmit(experienceData)

    }

    return(
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
                        <input onChange={handleInputChange} name="name" type="text" id="" className="form-title"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Experience Description</label>
                        <textarea name="" id="" cols="30" rows="5" className="form-description"/>
                    </div>
                    <div className="input-group-row">
                        <div>
                            <label htmlFor="">Price</label>
                            <input onChange={handleInputChange} name="price" type="text" className="form-price"/>
                        </div>
                        <div>
                            <label htmlFor="">Duration</label>
                            <select id="" className="form-duration"/>
                        </div>
                        <div>
                            <label htmlFor="">Accesibility</label>
                            <select name="" id="" className="form-acces"/>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Accesibility Details</label>
                        <textarea name="" id="" cols="30" rows="2" className="form-acces-detail"/>
                    </div>
                 </div>
            </section>
            <div className="form-buttons">
                <button type="submit" className="btn btn-primary btn-modal" data-toggle="" data-target="">Save Changes</button>
            </div>
        </form>
    );
}

export default Form