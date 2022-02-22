import React, {useState} from "react";
import "../Styles/App.css";
import "../Styles/Form.css";
import {useNavigate} from "react-router-dom";
import logo from "../Assets/econotravel-logo.png";
import defaultPhoto from "../Assets/econotravel-photo-default.jpg";

function Login(props) {

    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);

    const [adminData, setAdminData] = useState({
        name: '',
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setAdminData({
            ...adminData,
            [event.target.name]: event.target.value
        })
    }

    const enviarLogIn = (event) => {
        event.preventDefault()
        props.onLoginChange(true)
        props.onClose()
        navigate("/")

    }

    return (
        <div className="hover-layer fixed-position">
            <div className="form-bg">
                <section className="page-header">
                    <div className="page-name">
                        <h1 className="h1">Acceso de administrador</h1>
                    </div>
                    <button type="button" className="btn btn-close" onClick={props.onClose}>
                        <i className="far fa-times-circle gray"/>
                    </button>
                </section>
                <form onSubmit={enviarLogIn} action="">
                    <section className="form-aside">
                        <figure className="form-img">
                            <img className="logo" src={logo} alt="logo"/>
                        </figure>
                    </section>
                    <section className="form-main">
                        <div className="input-group">
                            <label htmlFor="">Usuario</label>
                            <input value={adminData.name} onChange={handleInputChange} type="text" id="" name="user"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Contraseña</label>
                            <input value="" onChange={handleInputChange} type="password" id="" name="password"/>
                        </div>
                    </section>
                    <section className="form-buttons">
                        <button type="submit" className="btn btn-primary btn-modal" data-toggle="" data-target="">
                            Accede
                        </button>
                    </section>
                </form>
            </div>
        </div>
    );
}

export default Login