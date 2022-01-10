import { useState, useEffect } from 'react';

function Form({ pokemon, setPokemon }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [allPokemon, setAllPokemon] = useState([]);

    // When the component loads initially,
    // make a copy of the passed in pokemon array
    // if and only if the copy of the array is empty.
    useEffect(() => {
        if (allPokemon.length === 0) {
            setAllPokemon(pokemon);
        }
    }, [pokemon, allPokemon]);

    function search(event) {
        event.preventDefault();

        // By using the Array#some() method we can use the same toLowerCase trick
        // to make our search within an array of values case-insensitive.
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
                {/* Switch to using a controller component so we don't have to access the DOM directly via our JS code. */}
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