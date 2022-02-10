import PageHeader from "./PagesHeader";
import Filters from "./Filters";
import Card from "./Card";
import Form from "./Form";
import {useState} from "react";


function Home({experiences, deleteExperience, editExperience}) {
    const [showForm, setShowForm] = useState(false);
    const [experienceToEdit, setExperienceToEdit] = useState({name: "hola", price: 50})
    return (
    <div>
        <main className="container">
            <section className="page-header">
                <PageHeader />
                <Filters />
            </section>
            <section className="page-content card-grid">
                {experiences.map(experience =>
                    <Card experience={experience} key={experience.id} onExperienceEdit={()=>{setExperienceToEdit(experience); setShowForm (true)}} onExperienceDelete={ () => deleteExperience(experience.id)} />)}
            </section>
            { showForm && <Form experienceData = {experienceToEdit} onSubmit={e => editExperience(e)} onClose={()=>setShowForm(false)}/>}
        </main>

    </div>


    );
}

export default Home
