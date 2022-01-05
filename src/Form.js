import { useState, useEffect } from 'react';

function Form({ pokemon, setPokemon }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [allPokemon, setAllPokemon] = useState([]);

    function titleCase(string) {
        const firstLetter = string.charAt(0).toUpperCase();
        const restOfTheWord = string.slice(1).toLowerCase();
        return firstLetter + restOfTheWord;
    }

    function getSearchTerm(event) {
        event.preventDefault();
        setSearchTerm(titleCase(event.target[0].value));
    }

    useEffect(() => {
        const filteredPokemon = pokemon.filter(eachPokemon => {
            if (eachPokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || eachPokemon.type.includes(searchTerm)) {
                return eachPokemon;
            }
        })
        setAllPokemon(pokemon);
        setPokemon(filteredPokemon);
    }, [searchTerm]);

    function resetPokemon() {
        document.getElementById('search-pokemon').value = "";
        setPokemon(allPokemon);
    }

    return (
        <>
            <form onSubmit={getSearchTerm}>
                <label htmlFor="search-pokemon">Search by Name or Type:</label>
                <input type="text" id="search-pokemon" placeholder="Enter Pokemon Name or Type Here" />
                <button type="submit" href="/">Submit</button>
            </form>
            <button onClick={resetPokemon}>Clear Filter</button>
        </>
    )
}

export default Form;