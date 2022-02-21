import PageHeader from "./PagesHeader";
import Card from "./Card";
import Form from "./Form";
import ExperienceDetail from "./ExperienceDetail";
import {useState} from "react";


function Home({experiences, deleteExperience, editExperience, loggedIn}) {
    const [showForm, setShowForm] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showExperienceDetail, setShowExperienceDetail] = useState(false);
    const [experienceToEdit, setExperienceToEdit] = useState({})


    return (
        <main className="container">
            <PageHeader/>
            <section className="page-content card-grid">
                {experiences.map(experience =>
                    <Card experience={experience} key={experience.id}
                          onExperienceEdit={() => {
                              setExperienceToEdit(experience);
                              setShowForm(true)
                          }}
                          onExperienceDetail={() => {
                              setShowExperienceDetail(experience);
                              setShowExperience(true)
                          }}
                          onExperienceDelete={() => deleteExperience(experience.id)}
                          loggedIn={loggedIn}
                    />)
                }
            </section>
            {showForm && <Form experienceData={experienceToEdit} onSubmit={e => editExperience(e)}
                               onClose={() => setShowForm(false)}/>}
            {showExperience &&
                <ExperienceDetail experienceData={showExperienceDetail} onClose={() => setShowExperience(false)}/>}
        </main>
    );
}

export default Home
