import PageHeader from "./PagesHeader";
import Filters from "./Filters";
import Card from "./Card";
import Form from "./Form";
import ExperienceDetail from "./ExperienceDetail";
import {useState} from "react";


function Home({experiences, deleteExperience, editExperience}) {
    const [showForm, setShowForm] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [experienceToEdit, setExperienceToEdit] = useState({name: "hola", price: 50, image:"img"})
    return (
        <main className="container">
            <PageHeader/>
            <section className="page-content card-grid">
                {experiences.map(experience =>
                    <Card experience={experience} key={experience.id}
                          onExperienceEdit={()=>{setExperienceToEdit(experience); setShowForm (true)}}
                          onExperienceDetail={()=>{setShowExperience(experience); setShowExperience (true)}}
                              onExperienceDelete={ () => deleteExperience(experience.id)} />)}
            </section>
            { showForm && <Form experienceData = {experienceToEdit} onSubmit={e => editExperience(e)} onClose={()=>setShowForm(false)}/>}
            { showExperience && <ExperienceDetail experienceData = {experienceToEdit} onSubmit={e => editExperience(e)} onClose={()=>setShowExperience(false)}/>}
        </main>
    );
}

export default Home
