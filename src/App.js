import './Styles/App.css';
import {useEffect, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";


function App() {

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);


    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const addExperience = (experienceName, experiencePrice, experienceDuration ) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {name: experienceName,
                    price: experiencePrice,
                    duration: experienceDuration})
            }
        ).then(_ => setRequiresUpdate(true))

        console.log(experienceName);

    }

    return (
        <div className="App">
            <Header />
            <div className="newExperienceForm">
                <input onChange={e => setNewExperience(e.target.value)} type="text"/>
                <button onClick={() => addExperience(newExperience)}>Add experience</button>
            </div>

            <ul>

            </ul>

            <main className="container">
                <div className="page-title">
                    <h1 className="h1">Experiences</h1>
                    <div className="align-right">
                        <select name="" id="">
                            <option value="">adas</option>
                            <option value="">sdad</option>
                        </select>
                    </div>
                </div>

                <section className="card-grid">
                    {experiences.map(experience => <Card experience={experience}  />)}
                </section>


            </main>
            <Footer />
        </div>
    );
}

export default App;
