import Card from "./Card";

function PokemonContainer({ pokemon, myTeam, setMyTeam }) {

  function renderPokemonCardFactory() {
    return pokemon.map((singlePokemon) => (
      <Card
        key={singlePokemon.id}
        singlePokemon={singlePokemon}
        myTeam={myTeam}
        setMyTeam={setMyTeam}
      />
    ));
  }

  return (
    <>
      <p><em>{pokemon.length} pokemon found</em></p>
      <div className="pokemon-card-container">
        {renderPokemonCardFactory()}
      </div>
    </>
  );
}

export default PokemonContainer;
