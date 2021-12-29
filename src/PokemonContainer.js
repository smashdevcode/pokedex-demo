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
    <div className="pokemon-card-container">
      {renderPokemonCardFactory()}
    </div>
  );
}

export default PokemonContainer;
