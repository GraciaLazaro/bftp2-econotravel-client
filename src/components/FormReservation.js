import React, {useRef, useState} from "react";
import "../Styles/App.css";
import "../Styles/Form.css";
import {useNavigate} from "react-router-dom";
import emailjs from "@emailjs/browser";




function FormReservation(props) {

    const navigate = useNavigate();
    const form = useRef();
    const [startDate, setStartDate] = useState(new Date());


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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7dih6df', 'template_azna2jj', form.current, 'user_Gn8KZ6kZ8xzsMLYIEhfT7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="no-scroll" action="">
            <fieldset>
                <legend>Datos de la Reserva:</legend>
                <div className="input-group">
                    <label htmlFor="">Nombre de la experiencia</label>
                    <input type="text" id="experience-name" name="experience_name" className="form-title"/>
                </div>

                <div className="input-group-row-3">
                    <div>
                        <label htmlFor="">Participantes</label>
                        <input type="text" id="participants" name="experience_participants" className=""/>
                    </div>
                    <div>
                        <label htmlFor="">Fecha</label>
                        <input  type="date" id="date"  name="experience_date" className=""/>
                    </div>
                    <div>
                        <label htmlFor="">Hora (every 30min)</label>
                        <input type="time" step="1800" name="experience_time" id="experience_time" className=""/>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Datos del Contacto:</legend>
                <div className="input-group-row-2">
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input id="user_name" name="user_name" className=""/>
                    </div>
                    <div>
                        <label htmlFor="">Apellido</label>
                        <input id="user_lastName" name="user-lastName" className=""/>
                    </div>
                </div>
                <div className="input-group-row-2">
                    <div>
                        <label htmlFor="">Email</label>
                        <input id="user_email" name="user_email" className=""/>
                    </div>
                    <div>
                        <label htmlFor="">Teléfono</label>
                        <input id="phone" name="user_phone" className=""/>
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