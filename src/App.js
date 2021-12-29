import "./styles.css";
import { useState, useEffect } from "react";
import PokemonContainer from "./PokemonContainer";

export default function App() {

  const [pokemon, setPokemon] = useState([]);

  // fetch function, address we fetch to as its argument
  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
    // then, we need to take the response, and convert it to JSON data
    .then(response => response.json())
    // then, we take the json and set it to our state
    .then(json => setPokemon(json));
  }, [])


  return (
    <div className="App">
      <PokemonContainer pokemon={pokemon} />
    </div>
  );
}
