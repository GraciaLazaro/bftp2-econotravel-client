import React, {useState} from "react";
import "../Styles/SearchBarStyle.css";

function SearchBar(props) {

    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        let query = e.target.value.toLowerCase()
        setSearch(query)
    }

    let result = []
    if (search !== "") {
        result = props.experiences.filter(
            (experience) =>
                experience.name.toLowerCase().includes(search)
        )
    } else {
        result = props.experiences
    }

    return (
        <nav className="search-bar">
            <form className="form" onSubmit={handleSubmit}>
                <i className="fa fa-search gray"></i>
                <input type="search" className="form-control form-input" placeholder="Busca tu experiencia" onChange={handleChange}/>

            </form>
        </nav>
    )
}


export default SearchBar