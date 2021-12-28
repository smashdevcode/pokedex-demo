import "./styles.css";
import pokedex from "./data";
import PokemonContainer from "./PokemonContainer";

export default function App() {
  console.log("This is inside the App component", pokedex.pokemon);

  return (
    <div className="App">
      <PokemonContainer pokemon={pokedex.pokemon} />
    </div>
  );
}
