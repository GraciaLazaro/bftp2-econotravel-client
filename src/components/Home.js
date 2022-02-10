import PageHeader from "./PagesHeader";
import Filters from "./Filters";
import Card from "./Card";


function Home({experiences, deleteExperience}) {

    return (
        <main className="container">
            <PageHeader/>
            <section className="page-content card-grid">
                {experiences.map(experience =>
                    <Card experience={experience} key={experience.id} onExperienceDelete={ () => deleteExperience(experience.id)} />)}
            </section>
        </main>
    );
}

export default Home
