import Card from "./Card";

function Team({ myTeam, setMyTeam }) {

    function renderTeamCardFactory() {
        return myTeam.map((singlePokemon, indexOfSinglePokemon) => (
          <Card
            key={singlePokemon.name + indexOfSinglePokemon}
            singlePokemon={singlePokemon}
            myTeam={myTeam}
            setMyTeam={setMyTeam}
          />
        ));
    }


    return (
        <>
            {renderTeamCardFactory()}
        </>
    )
}

export default Team;