import './Styles/App.css';
import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Enquires from "./components/Enquires";
import Form from "./components/Form";
import ExperienceDetail from "./components/ExperienceDetail";

function App() {

    const [experiences, setExperiences] = useState([]);
    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const deleteExperience = (id) => {
        fetch(`http://localhost:8080/api/experiences/delete/${id}`,
            {
                method: 'GET'
            }
        ).then(_ => setRequiresUpdate(true))

    }

    const addExperience = (experience) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(experience)
            }
        ).then(_ => setRequiresUpdate(true))

    }


    return (
        <BrowserRouter>
            <Header onButtonClicked={() => setShowForm(true)} />
            { showForm && <Form onSubmit={e => addExperience(e)} onClose={()=>setShowForm(false)}/>}
            <Routes>
                <Route path="/" index element={<Home experiences={experiences} deleteExperience={deleteExperience} editExperience={addExperience} />}/>
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Enquires" element={<Enquires />} />
                <Route path="*" element={<Navigate replace to="/"/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
