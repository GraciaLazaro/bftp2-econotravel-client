import React, {useState} from "react";
import "../Styles/App.css";
import "../Styles/Form.css";
import "../Styles/ExperienceDetail.css";
import defaultPhoto from "../Assets/econotravel-photo-default.jpg";
import {useNavigate} from "react-router-dom";
import useCollapse from "react-collapsed";

function ExperienceDetail(props) {

    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded, duration: 2 });


    const [experienceData, setExperienceData] = useState(props.experienceData || {
        name: '',
        image: '',
        description: '',
        price: '',
        duration: '',
        accessibility: '',
        accessibilityDescription: '',
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
        props.onClose()
        navigate("/")

    }

    return (
        <div className="hover-layer fixed-position">
            <div className="form-bg experience-detail position-relative">
                <button type="button" className="btn btn-close" onClick={props.onClose}>
                    <i className="far fa-times-circle gray"/>
                </button>
                <section className="detail-section">
                    <div className="detail-aside">
                        <div className="">
                            <figure className="form-img">
                                {props.experienceData ?
                                    <img className="image" src={experienceData.image} alt="photo"/>
                                    : <img className="image" src={defaultPhoto} alt="photo"/>}
                            </figure>
                            <div className="detail-accessibility-description">
                                {experienceData.accessibilityDescription}
                            </div>
                        </div>
                    </div>
                    <div className="detail-main">
                        <div className="page-header">
                                <h1 className="h1">{experienceData.name}</h1>
                        </div>
                        <div className="input-group-row">
                            <div>{experienceData.price}</div>
                            <div>{experienceData.duration}</div>
                            <div>Familiar</div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-modal" data-toggle="" data-target="">
                            {props.experienceData ? 'Guardar cambios' : 'Guardar'}
                        </button>
                        <div>{experienceData.description}</div>
                    </div>
            </section>

            </div>
        </div>
    );
}

export default ExperienceDetail