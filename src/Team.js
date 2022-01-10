import Card from "./Card";

function Team({ myTeam, setMyTeam }) {

    function renderTeamCardFactory() {
        return myTeam.map((singlePokemon) => (
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
            {renderTeamCardFactory()}
        </>
    )
}

export default Team;