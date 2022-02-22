import React, {useState} from "react";

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
        <>
        <form className="form" onSubmit={handleSubmit}>
            <i className="fa fa-search"></i>
            <input type="search" className="form-control form-input" placeholder="Busca tu experiencia" onChange={handleChange}/>
            <span className="left-pan"><i className="fa fa-microphone"></i></span>
        </form>
        </>
    )
}


export default SearchBar