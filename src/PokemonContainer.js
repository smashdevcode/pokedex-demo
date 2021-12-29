import Card from "./Card";

function PokemonContainer({ pokemon }) {

  function renderPokemonCardFactory() {
    return pokemon.map((singlePokemon, indexOfSinglePokemon) => (
      <Card
        key={singlePokemon.name + indexOfSinglePokemon}
        singlePokemon={singlePokemon}
      />
    ));
  }

  return (
    <div>
      <p>This is the pokemon container component.</p>
      {renderPokemonCardFactory()}
    </div>
  );
}

export default PokemonContainer;
