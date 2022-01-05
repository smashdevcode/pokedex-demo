import "./styles.css";
import { useState, useEffect } from "react";
import PokemonContainer from "./PokemonContainer";
import Form from "./Form";
import Team from "./Team";

export default function App() {

  const [pokemon, setPokemon] = useState([]);
  const [myTeam, setMyTeam] = useState([]);

  // fetch function, address we fetch to as its argument
  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
    // then, we need to take the response, and convert it to JSON data
    .then(response => response.json())
    // then, we take the json and set it to our state
    .then(json => setPokemon(json));
  }, [])


    // Create a Dream Team
        // Add Pokemon to the Team
        // Remove Pokemon from the Team

  return (
    <div className="App">
      <Form pokemon={pokemon} setPokemon={setPokemon} />
      <Team myTeam={myTeam} setMyTeam={setMyTeam} />
      <PokemonContainer pokemon={pokemon} myTeam={myTeam} setMyTeam={setMyTeam} />
    </div>
  );
}
