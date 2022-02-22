import React, {useState} from "react";
import "../Styles/App.css";
import "../Styles/Form.css";
import {useNavigate} from "react-router-dom";
import useCollapse from "react-collapsed";

function Login(props) {

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
            <div className="form-bg">
                <section className="page-header">
                    <div className="page-name">
                        <h1 className="h1">{props.experienceData ? 'Editar experiencia' : 'Nueva experiencia'}</h1>
                    </div>
                    <button type="button" className="btn btn-close" onClick={props.onClose}>
                        <i className="far fa-times-circle gray"/>
                    </button>
                </section>
                <form onSubmit={enviarDatos} action="">
                    <section>
                        <div className="input-group">
                            <label htmlFor="">Usuario</label>
                            <input onChange={handleInputChange} type="text" id="" name="user"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Contraseña</label>
                            <input value="" onChange={handleInputChange} type="password" id="" name="password"/>
                        </div>
                    </section>
                    <section className="form-buttons">
                        <button type="submit" className="btn btn-primary btn-modal" data-toggle="" data-target="">
                            {props.experienceData ? 'Guardar cambios' : 'Guardar'}
                        </button>
                    </section>
                </form>
            </div>
        </div>
    );
}

export default Login