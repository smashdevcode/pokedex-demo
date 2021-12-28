import Card from "./Card";

function PokemonContainer({ pokemon }) {
  console.log("This is inside the PokemonContainer component", pokemon);

  function renderPokemonCardFactory() {
    return pokemon.map((singlePokemon, indexOfSinglePokemon) => (
      <Card
        key={singlePokemon.name + indexOfSinglePokemon}
        singlePokemon={singlePokemon}
      />
    ));
  }

  console.log("Factory Function", renderPokemonCardFactory())

  return (
    <div>
      <p>This is the pokemon container component.</p>
      {renderPokemonCardFactory()}
    </div>
  );
}

export default PokemonContainer;
