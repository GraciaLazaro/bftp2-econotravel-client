import './Styles/App.css';
import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Filters from "./components/Filters";
import PageHeader from "./components/PagesHeader";
import Form from "./components/Form";


function App() {

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [showForm, setShowForm] = useState(false);


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

            <div className="App">

                <Header onButtonClicked={() => setShowForm(true)}/>

                <main className="container">
                    <section className="page-header">
                        <PageHeader/>
                        <Filters/>
                    </section>
                    <section className="page-content card-grid">
                        {experiences.map(experience => <Card experience={experience} key={experience.id}
                                                             onExperienceDelete={() => deleteExperience(experience.id)}/>)}
                    </section>
                </main>
                {showForm && <Form onSubmit={e => addExperience(e)} onClose={() => setShowForm(false)}/>}
                <Footer/>



            </div>

    );
}

export default App;
