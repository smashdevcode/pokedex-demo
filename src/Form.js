import { useState, useEffect } from 'react';

function Form({ pokemon, setPokemon }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [allPokemon, setAllPokemon] = useState([]);

    useEffect(() => {
        if (allPokemon.length === 0) {
            setAllPokemon(pokemon);
        }
    }, [pokemon, allPokemon]);

    function search(event) {
        event.preventDefault();

        const filteredPokemon = allPokemon.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            p.type.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())));

        setPokemon(filteredPokemon);
    }

    function reset() {
        setSearchTerm("");
        setPokemon(allPokemon);
    }

    return (
        <>
            <form onSubmit={search}>
                <label htmlFor="searchTerm">Search by Name or Type:</label>
                <input type="text" name="searchTerm" value={searchTerm} 
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Enter Pokemon Name or Type Here" />
                <button type="submit">Submit</button>
            </form>
            <button onClick={reset}>Clear Filter</button>
        </>
    )
}

export default Form;