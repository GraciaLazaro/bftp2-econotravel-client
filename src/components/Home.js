import PageHeader from "./PagesHeader";
import Filters from "./Filters";
import Card from "./Card";


function Home({experiences, deleteExperience}) {

    return (
    <div>
        <main className="container">
            <section className="page-header">
                <PageHeader />
                <Filters />
            </section>
            <section className="page-content card-grid">
                {experiences.map(experience =>
                    <Card experience={experience} key={experience.id} onExperienceDelete={ () => deleteExperience(experience.id)} />)}
            </section>
        </main>

    </div>


    );
}

export default Home
