import React, {useState} from "react";
import "../Styles/App.css";
import "../Styles/Form.css";
import "../Styles/ExperienceDetail.css";
import defaultPhoto from "../Assets/econotravel-photo-default.jpg";


function ExperienceDetail(props) {

    const [experienceData, setExperienceData] = useState(props.experienceData || {
        name: '',
        image: '',
        description: '',
        price: '',
        duration: '',
        accessibility: '',
        accessibilityDescription: '',
    })

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
                            {props.experienceData ? 'Reserva Ya' : 'Reserva'}
                        </button>
                        <div>{experienceData.description}</div>
                    </div>
            </section>

            </div>
        </div>
    );
}

export default ExperienceDetail