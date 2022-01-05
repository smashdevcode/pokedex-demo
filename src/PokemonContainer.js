import Card from "./Card";

function PokemonContainer({ pokemon, myTeam, setMyTeam }) {

  function renderPokemonCardFactory() {
    return pokemon.map((singlePokemon, indexOfSinglePokemon) => (
      <Card
        key={singlePokemon.name + indexOfSinglePokemon}
        singlePokemon={singlePokemon}
        myTeam={myTeam}
        setMyTeam={setMyTeam}
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
