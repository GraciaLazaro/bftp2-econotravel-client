import React, {useState} from "react";
import "../Styles/App.css";
import "../Styles/Form.css";
import defaultPhoto from "../Assets/econotravel-photo-default.jpg";
import {useNavigate} from "react-router-dom";
import useCollapse from "react-collapsed";

function FormReservation(props) {

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
        <form onSubmit={enviarDatos} action="">
            <fieldset>
                <legend>Datos de la Reserva:</legend>
                <div className="input-group">
                    <label htmlFor="">Nombre de la experiencia</label>
                    <input value={experienceData.name} onChange={handleInputChange} type="text" id="" name="name" className="form-title"/>
                </div>

                <div className="input-group-row-3">
                    <div>
                        <label htmlFor="">Participantes</label>
                        <input value={experienceData.price} onChange={handleInputChange} type="text" name="" className=""/>
                    </div>
                    <div>
                        <label htmlFor="">Fecha</label>
                        <input value={experienceData.duration} onChange={handleInputChange} id="" name="" className=""/>
                    </div>
                    <div>
                        <label htmlFor="">Hora</label>
                        <input onChange={handleInputChange} name="" id="" className=""></input>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Datos del Contacto:</legend>
                <div className="input-group-row-2">
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input value={experienceData.duration} onChange={handleInputChange} id="" name="" className=""/>
                    </div>
                    <div>
                        <label htmlFor="">Apellido</label>
                        <input value={experienceData.duration} onChange={handleInputChange} id="" name="" className=""/>
                    </div>
                </div>
                <div className="input-group-row-2">
                    <div>
                        <label htmlFor="">Email</label>
                        <input value={experienceData.duration} onChange={handleInputChange} id="" name="" className=""/>
                    </div>
                    <div>
                        <label htmlFor="">Teléfono</label>
                        <input value={experienceData.duration} onChange={handleInputChange} id="" name="" className=""/>
                    </div>
                </div>
            </fieldset>
            <section className="form-buttons">
                <button type="submit" className="btn btn-primary btn-modal" data-toggle="" data-target="">
                    Reservar
                </button>
            </section>
        </form>
    );
}

export default FormReservation